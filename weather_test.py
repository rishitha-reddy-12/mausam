import openmeteo_requests

import requests_cache
from retry_requests import retry

# Setup API client
cache_session = requests_cache.CachedSession('.cache', expire_after=3600)
retry_session = retry(cache_session, retries=5, backoff_factor=0.2)
openmeteo = openmeteo_requests.Client(session=retry_session)

# Bengaluru coordinates
url = "https://api.open-meteo.com/v1/forecast"

params = {
    "latitude": 12.9716,
    "longitude": 77.5946,
    "hourly": ["temperature_2m", 
               "precipitation", 
               "relative_humidity_2m",
               "wind_speed_10m",
               "uv_index",
               "soil_moisture_0_to_7cm"]
}

responses = openmeteo.weather_api(url, params=params)

response = responses[0]

print("Latitude:", response.Latitude())
print("Longitude:", response.Longitude())
print("Timezone:", response.UtcOffsetSeconds())

hourly = response.Hourly()

temperature = hourly.Variables(0).ValuesAsNumpy()
precipitation = hourly.Variables(1).ValuesAsNumpy()
humidity = hourly.Variables(2).ValuesAsNumpy()
wind_speed =hourly.Variables(3).ValuesAsNumpy()
uv_index = hourly.Variables(4).ValuesAsNumpy()
soil_moisture = hourly.Variables(5).ValuesAsNumpy()
print("Temperature:", temperature[:5])
print("Precipitation:", precipitation[:5])
print("Humidity:", humidity[:5])
print("Wind speed:",wind_speed[:5])
print("UV index:",uv_index[:5])
print("Soil moisture:", soil_moisture[:5])