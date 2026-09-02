import openmeteo_requests
import requests_cache
from retry_requests import retry


cache_session = requests_cache.CachedSession('.cache', expire_after=3600)
retry_session = retry(cache_session, retries=5, backoff_factor=0.2)

openmeteo = openmeteo_requests.Client(session=retry_session)


def get_weather(latitude, longitude):

    url = "https://api.open-meteo.com/v1/forecast"

    params = {
        "latitude": latitude,
        "longitude": longitude,
        "hourly": [
            "temperature_2m",
            "precipitation",
            "relative_humidity_2m",
            "wind_speed_10m",
            "uv_index"
        ],
        "forecast_days": 1
    }

    responses = openmeteo.weather_api(url, params=params)

    response = responses[0]

    hourly = response.Hourly()

    temperature = hourly.Variables(0).ValuesAsNumpy()
    precipitation = hourly.Variables(1).ValuesAsNumpy()
    humidity = hourly.Variables(2).ValuesAsNumpy()
    wind_speed = hourly.Variables(3).ValuesAsNumpy()
    uv_index = hourly.Variables(4).ValuesAsNumpy()

    return {
        "temperature": temperature.tolist(),
        "precipitation": precipitation.tolist(),
        "humidity": humidity.tolist(),
        "wind_speed": wind_speed.tolist(),
        "uv_index": uv_index.tolist()
    }
def get_weather_alerts(temperature, precipitation, wind_speed, uv_index):

    alerts = []

    if precipitation >= 60:
        alerts.append("Heavy rain expected")

    if temperature >= 35:
        alerts.append("High temperature")

    if wind_speed >= 40:
        alerts.append("Strong winds")

    if uv_index >= 8:
        alerts.append("High UV level")

    return alerts
def get_recommendation(profile, temperature, precipitation, wind_speed, uv_index):

    if profile == "farmer":
        if precipitation >= 60:
            return "Rain expected. Avoid irrigation."
        return "Weather looks suitable for farming."

    elif profile == "traveler":
        if precipitation >= 60:
            return "Rain expected. Carry an umbrella."
        return "Weather looks suitable for travel."

    elif profile == "outdoor":
        if uv_index >= 8 or temperature >= 35:
            return "High heat or UV. Avoid long outdoor activities."
        if wind_speed >= 40:
            return "Strong winds. Outdoor activities may be risky."
        return "Weather looks suitable for outdoor activities."

    return "No specific recommendation."