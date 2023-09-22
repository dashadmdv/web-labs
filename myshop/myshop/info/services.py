import requests


def get_random_joke(request):
    try:
        response = requests.get(
            "https://icanhazdadjoke.com", headers={"Accept": "application/json"}
        ).json()
        return {'joke': response.get("joke")}
    except:
        return []


def get_weather(request):
    try:
        weather = requests.get("https://api.open-meteo.com/v1/forecast?latitude=53.9&longitude=27.56&current_weather=true").json()
        return {'temperature': weather["current_weather"]["temperature"]}
    except:
        return []
