const personaData = {

    health: {
        name: "Health-conscious user",
        subtitle: "Health & environment conditions",
        status: "Good conditions",
        statusType: "good",
        message: "Current conditions are suitable. Keep an eye on UV, humidity and air quality.",
        cards: [
            ["AQI", "42", "Good air quality"],
            ["POLLEN", "Low", "Low allergy risk"],
            ["UV INDEX", "5", "Moderate exposure"],
            ["HUMIDITY", "72%", "Moderately humid"]
        ]
    },

    fitness: {
        name: "Outdoor fitness enthusiast",
        subtitle: "Outdoor activity conditions",
        status: "Good for outdoor activity",
        statusType: "good",
        message: "Current conditions are suitable for outdoor exercise.",
        cards: [
            ["BEST RUNNING", "5:30–7:00 AM", "Cooler conditions"],
            ["UV INDEX", "5", "Use sun protection"],
            ["WIND", "14 km/h", "Light breeze"],
            ["HEAT ALERT", "Low", "Comfortable activity"]
        ]
    },

    outdoor: {
        name: "Outdoor explorer",
        subtitle: "Outdoor comfort and safety conditions",
        status: "Outdoor conditions look good",
        statusType: "good",
        message: "Conditions are suitable for outdoor plans. Check wind and heat before leaving.",
        cards: [
            ["SUNRISE", "5:58 AM", "Plan an early start"],
            ["SUNSET", "6:22 PM", "Daylight remaining"],
            ["WIND", "14 km/h", "Light breeze"],
            ["HEAT ALERT", "Low", "Comfortable conditions"]
        ]
    },

    beach: {
        name: "Beachgoer / Surfer",
        subtitle: "Beach & sea conditions",
        status: "Check sea conditions",
        statusType: "risk",
        message: "Review wave height, tide timing and water conditions before entering the sea.",
        cards: [
            ["WAVE HEIGHT", "1.2 m", "Moderate waves"],
            ["TIDE", "3:40 PM", "Next high tide"],
            ["WATER TEMP", "27°", "Comfortable"],
            ["SEA CONDITION", "Moderate", "Check before activity"]
        ]
    },

    traveler: {
        name: "Traveler",
        subtitle: "Travel weather & destination insights",
        status: "Travel conditions look good",
        statusType: "good",
        message: "No major weather concern currently detected for your selected destination.",
        cards: [
            ["DESTINATION", "London", "Saved destination"],
            ["FORECAST", "18°", "Partly cloudy"],
            ["RAIN", "35%", "Carry a light raincoat"],
            ["ALERT", "None", "No severe warning"]
        ]
    },

    family: {
        name: "Parent / Family",
        subtitle: "Family & school commute conditions",
        status: "School commute looks good",
        statusType: "good",
        message: "No immediate severe weather warning. Monitor rain conditions during commute hours.",
        cards: [
            ["SCHOOL COMMUTE", "Good", "Normal conditions"],
            ["RAIN", "20%", "Low probability"],
            ["VISIBILITY", "8 km", "Good visibility"],
            ["SEVERE ALERT", "None", "No warning"]
        ]
    },

    farmer: {
        name: "Farmer / Gardener",
        subtitle: "Agriculture & gardening conditions",
        status: "Monitor rainfall",
        statusType: "risk",
        message: "Rainfall conditions should be monitored before irrigation or outdoor agricultural work.",
        cards: [
            ["RAINFALL", "12 mm", "Expected today"],
            ["SOIL MOISTURE", "68%", "Moderate moisture"],
            ["FROST ALERT", "None", "No frost expected"],
            ["TEMPERATURE", "28°", "Suitable conditions"]
        ]
    },

    commuter: {
        name: "Commuter",
        subtitle: "Journey, route & traffic conditions",
        status: "Journey conditions look good",
        statusType: "good",
        message: "Your route is currently suitable. Mausam will continue tracking weather and your journey.",
        cards: [
            ["ETA", "5:45 PM", "Automatically updated"],
            ["YOUR SPEED", "40 km/h", "Current speed"],
            ["RAIN", "6:00 PM", "Expected on route"],
            ["VISIBILITY", "8 km", "Good visibility"]
        ]
    },

    event: {
        name: "Event Planner",
        subtitle: "Outdoor event planning conditions",
        status: "Event conditions need monitoring",
        statusType: "risk",
        message: "There is a possibility of changing weather. Keep a backup arrangement ready.",
        cards: [
            ["RAIN PROBABILITY", "35%", "Monitor forecast"],
            ["COMFORT INDEX", "Good", "Generally comfortable"],
            ["FORECAST", "7 Days", "Extended outlook"],
            ["WIND", "14 km/h", "Moderate breeze"]
        ]
    }

};


function loadPersona() {

    const selectedPersona =
        localStorage.getItem("mausamPersona") || "commuter";

    const persona = personaData[selectedPersona];

    if (!persona) {
        return;
    }


    // Persona heading

    document.getElementById("personaName").textContent =
        persona.name;

    document.getElementById("personaSubtitle").textContent =
        persona.subtitle;


    // Risk / Good section

    const riskCard = document.getElementById("riskCard");

    riskCard.className =
        "risk-card " + persona.statusType;

    document.getElementById("riskTitle").textContent =
        persona.status;

    document.getElementById("riskMessage").textContent =
        persona.message;


    // Information cards

    const cardsContainer =
        document.getElementById("informationGrid");

    cardsContainer.innerHTML = "";

    persona.cards.forEach(card => {

        const cardElement = document.createElement("div");

        cardElement.className = "info-card";

        cardElement.innerHTML = `
            <span class="info-label">${card[0]}</span>
            <strong>${card[1]}</strong>
            <p>${card[2]}</p>
        `;

        cardsContainer.appendChild(cardElement);

    });

}


;

document.querySelectorAll(".dashboard-tab").forEach(function (tab) {
    tab.addEventListener("click", function () {
        document.querySelectorAll(".dashboard-tab").forEach(function (item) {
            item.classList.remove("active");
            item.setAttribute("aria-selected", "false");
        });

        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");
    });
});

document.querySelectorAll(".forecast-mode-button").forEach(function (mode) {
    mode.addEventListener("click", function () {
        document.querySelectorAll(".forecast-mode-button").forEach(function (item) {
            item.classList.remove("active");
        });

        mode.classList.add("active");
    });
});

document.querySelectorAll(".map-zoom-button").forEach(function (button) {
    button.addEventListener("click", function () {
        const map = document.querySelector(".weather-world-map");
        if (!map) {
            return;
        }

        if (button.classList.contains("zoom-in")) {
            map.classList.add("map-zoomed");
        } else {
            map.classList.remove("map-zoomed");
        }
    });
});

/* =========================
   LOGOUT
   ========================= */

function logoutUser() {

    const confirmLogout =
        confirm(window.MausamLanguage
            ? window.MausamLanguage.translate("Are you sure you want to logout?")
            : "Are you sure you want to logout?");

    if (!confirmLogout) {
        return;
    }

    /*
       Backend authentication will later
       handle the real logout/session.
    */

   window.location.href = "index.html";
}
async function loadWeatherFromBackend() {

    if (!navigator.geolocation) {
        console.log("Geolocation is not supported.");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        async function (position) {

            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            const selectedPersona =
                localStorage.getItem("mausamPersona") || "outdoor";

            console.log("Latitude:", latitude);
            console.log("Longitude:", longitude);
            console.log("Persona:", selectedPersona);
            const locationElement = document.getElementById("currentLocation");

try {
    const locationResponse = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
    );

    console.log("Location API responded");

    const locationData = await locationResponse.json();

    console.log("Location data:", locationData);

    const address = locationData.address;

    const city =
        address.city ||
        address.town ||
        address.village ||
        address.suburb ||
        "Unknown location";

    locationElement.textContent = city;

} catch (error) {
    console.error("Location name error:", error);
}

            const url =
    `https://mausam-sy54.onrender.com/weather?latitude=${latitude}&longitude=${longitude}&profile=${selectedPersona}`;

            try {

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("Backend request failed");
                }

                const weather = await response.json();
                document.getElementById("riskMessage").textContent =
    weather.recommendation;
    
   

                document.getElementById("currentTemperature").textContent =
    `${Math.round(weather.temperature)}°`;
                document.getElementById("rainProbability").textContent =
    `${Math.round(weather.precipitation_probability)}%`;

   let condition = "Unknown";

if (weather.weather_code === 0) {
    condition = "Clear";
} else if ([1, 2, 3].includes(weather.weather_code)) {
    condition = "Partly Cloudy";
} else if ([51, 53, 55, 61, 63, 65].includes(weather.weather_code)) {
    condition = "Rain";
} else if ([71, 73, 75, 77].includes(weather.weather_code)) {
    condition = "Snow";
} else if ([95, 96, 99].includes(weather.weather_code)) {
    condition = "Thunderstorm";
}

document.getElementById("weatherCondition").textContent = condition;

            } catch (error) {

                console.error("Weather API error:", error);

            }
        },

        function (error) {

            console.error("Location error:", error);

        },

        {
            enableHighAccuracy: true,
            maximumAge: 30000,
            timeout: 10000
        }
    );
}

loadPersona();
loadWeatherFromBackend();