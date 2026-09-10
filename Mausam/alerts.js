/* =========================
   ALERTS PAGE
   ========================= */

const savedLanguage =
    localStorage.getItem("mausamLanguage") || "en";


const notificationsEnabled =
    localStorage.getItem("mausamNotifications");


console.log(
    "Selected language:",
    savedLanguage
);


if (notificationsEnabled === "false") {

    console.log(
        "Notifications are disabled by the user."
    );

}
async function loadWeatherAlerts() {
    try {
        const response = await fetch(
            "http://127.0.0.1:8001/weather?latitude=12.9716&longitude=77.5946&profile=outdoor"
        );

        if (!response.ok) {
            throw new Error("Backend request failed");
        }

        const weather = await response.json();

        console.log("Weather alerts from backend:", weather.alerts);

        const alertCount =
            document.getElementById("activeAlertCount");

        alertCount.textContent = weather.alerts.length;
        const highPriorityCount =
    document.getElementById("highPriorityCount");

const advisoryCount =
    document.getElementById("advisoryCount");

highPriorityCount.textContent = 0;
advisoryCount.textContent = weather.alerts.length;
        const alertsContainer =
    document.getElementById("alertsContainer");

if (weather.alerts.length === 0) {

    alertsContainer.innerHTML =
        "<p>No active weather alerts.</p>";

} else {

    alertsContainer.innerHTML = "";

    weather.alerts.forEach(alert => {

        const alertElement =
            document.createElement("article");

        alertElement.className =
            "alert-card high-alert";

        alertElement.innerHTML = `
            <div class="alert-card-icon">!</div>

            <div class="alert-card-content">

                <span class="alert-priority">
                    WEATHER ALERT
                </span>

                <h3>${alert}</h3>

                <p>
                    Weather conditions require your attention.
                </p>

            </div>
        `;

        alertsContainer.appendChild(alertElement);
    });
}

    } catch (error) {
        console.error("Alerts API error:", error);
    }
}
function loadPersonalizedAlert() {

    const selectedPersona =
        localStorage.getItem("mausamPersona") || "commuter";
        console.log("Selected persona:", selectedPersona);

    const personaNames = {
        outdoor: "OUTDOOR",
        traveler: "TRAVELER",
        farmer: "FARMER",
        commuter: "COMMUTER",
        health: "HEALTH",
        fitness: "FITNESS",
        beach: "BEACHGOER",
        family: "FAMILY",
        event: "EVENT PLANNER"
    };
    const personaMessages = {
    outdoor: "Weather conditions look suitable for outdoor activities.",
    traveler: "Weather conditions are suitable for travel.",
    farmer: "Monitor rainfall and soil moisture before agricultural work.",
    commuter: "Weather conditions look suitable for your journey.",
    health: "Current weather conditions are generally comfortable.",
    fitness: "Weather conditions are suitable for outdoor exercise.",
    beach: "Check sea and beach conditions before outdoor activities.",
    family: "Weather conditions look suitable for family activities.",
    event: "Monitor weather conditions for your event plans."
};

    const personaElement =
        document.querySelector(".personalized-alert-card span");

    if (personaElement) {
        personaElement.textContent =
            personaNames[selectedPersona] || "COMMUTER";
    }
    const messageElement =
    document.querySelector(".personalized-alert-card p");

if (messageElement) {
    messageElement.textContent =
        personaMessages[selectedPersona] ||
        personaMessages.commuter;
}
}
loadPersonalizedAlert();
loadWeatherAlerts();