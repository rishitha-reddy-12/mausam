from fastapi import FastAPI
from weather_service import get_weather, get_weather_alerts, get_recommendation

app = FastAPI()


@app.get("/")
def home():
    return {"message": "Mausam backend is working!"}


@app.get("/weather")
def weather(latitude: float, longitude: float, profile: str = "traveler"):

    weather_data = get_weather(latitude, longitude)

    temperature = weather_data["temperature"][0]
    precipitation = weather_data["precipitation"][0]
    humidity = weather_data["humidity"][0]
    wind_speed = weather_data["wind_speed"][0]
    uv_index = weather_data["uv_index"][0]
    soil_moisture = weather_data["soil_moisture"][0]

    alerts = get_weather_alerts(
        temperature,
        precipitation,
        wind_speed,
        uv_index
    )

    recommendation = get_recommendation(
        profile,
        temperature,
        precipitation,
        wind_speed,
        uv_index
    )

    return {
        "temperature": temperature,
        "precipitation": precipitation,
        "humidity": humidity,
        "wind_speed": wind_speed,
        "uv_index": uv_index,
        "soil_moisture": soil_moisture,
        "alerts": alerts,
        "recommendation": recommendation
    }