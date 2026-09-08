/* =========================
   JOURNEY PAGE
   ========================= */


/* TRANSPORT SELECTION */

const transportOptions =
    document.querySelectorAll(".transport-option");

let selectedTransport = "car";


transportOptions.forEach(function (option) {

    option.addEventListener("click", function () {

        transportOptions.forEach(function (item) {

            item.classList.remove("active");

        });


        this.classList.add("active");

        selectedTransport =
            this.dataset.transport;

    });

});


/* =========================
   START JOURNEY
   ========================= */

const startJourneyButton =
    document.getElementById("startJourneyButton");

const startLocationInput =
    document.getElementById("startLocation");

const destinationInput =
    document.getElementById("destination");

const googleMapsRouteLink =
    document.getElementById("googleMapsRouteLink");

const currentLocationMapsLink =
    document.getElementById("currentLocationMapsLink");

const locationConfirmation =
    document.getElementById("locationConfirmation");

const confirmStartLocation =
    document.getElementById("confirmStartLocation");

const confirmDestination =
    document.getElementById("confirmDestination");

const confirmLocationButton =
    document.getElementById("confirmLocationButton");

const cancelLocationConfirmation =
    document.getElementById("cancelLocationConfirmation");

const editJourneyButton =
    document.getElementById("editJourneyButton");

let gpsWatchId = null;

function googleMapsTravelMode() {
    const travelModes = {
        car: "driving",
        bus: "transit",
        bike: "bicycling",
        bicycle: "bicycling",
        walking: "walking"
    };

    return travelModes[selectedTransport];
}

function updateGoogleMapsRouteLink(start, destination) {
    const params = new URLSearchParams({
        api: "1",
        origin: start,
        destination,
        travelmode: googleMapsTravelMode()
    });

    googleMapsRouteLink.href =
        `https://www.google.com/maps/dir/?${params.toString()}`;
    googleMapsRouteLink.removeAttribute("aria-disabled");
}

startJourneyButton.addEventListener("click", function () {

    const start =
        document.getElementById("startLocation").value.trim();

    const destination =
        document.getElementById("destination").value.trim();


    if (!start || !destination) {

        alert(window.MausamLanguage
            ? window.MausamLanguage.translate("Please enter both your start location and destination.")
            : "Please enter both your start location and destination.");

        return;

    }


    confirmStartLocation.textContent = start;
    confirmDestination.textContent = destination;

    if (typeof locationConfirmation.showModal === "function") {
        locationConfirmation.showModal();
    } else if (window.confirm(`Confirm route: ${start} to ${destination}?`)) {
        confirmJourney(start, destination);
    }

});

function confirmJourney(start, destination) {
    document.getElementById("routeTitle").textContent =
        `${start} → ${destination}`;

    updateGoogleMapsRouteLink(start, destination);

    const transportNames = {
        car: "Car journey",
        bus: "Bus journey",
        bike: "Bike journey",
        bicycle: "Bicycle journey",
        walking: "Walking journey"
    };

    document.getElementById("transportText").textContent =
        transportNames[selectedTransport];

    document
        .getElementById("journeyResult")
        .classList.add("visible");

    startGPS();
    document.getElementById("journeyResult").scrollIntoView({ behavior: "smooth" });
}

confirmLocationButton.addEventListener("click", function (event) {
    event.preventDefault();
    locationConfirmation.close();
    confirmJourney(
        startLocationInput.value.trim(),
        destinationInput.value.trim()
    );
});

cancelLocationConfirmation.addEventListener("click", function () {
    locationConfirmation.close();
    startLocationInput.focus();
});

editJourneyButton.addEventListener("click", function () {
    document.getElementById("journeyResult").classList.remove("visible");
    startLocationInput.focus();
    document.querySelector(".journey-card").scrollIntoView({ behavior: "smooth" });
});


/* =========================
   GPS
   ========================= */

function startGPS() {

    const gpsStatus =
        document.getElementById("gpsStatus");

    const locationStatus =
        document.getElementById("locationStatus");


    if (!navigator.geolocation) {

        gpsStatus.textContent =
            "GPS unavailable";

        locationStatus.textContent =
            "Location is not supported by this browser.";

        return;

    }


    gpsStatus.textContent =
        "GPS tracking";


    locationStatus.textContent =
        "Requesting current location...";


    if (gpsWatchId !== null) {
        navigator.geolocation.clearWatch(gpsWatchId);
    }

    gpsWatchId = navigator.geolocation.watchPosition(

        function (position) {

            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;


            const speed =
                position.coords.speed;


            locationStatus.textContent =
                `GPS active • ${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;

            currentLocationMapsLink.href =
                `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
            currentLocationMapsLink.removeAttribute("aria-disabled");


            if (speed !== null) {

                const speedKmH =
                    Math.round(speed * 3.6);


                document
                    .getElementById("currentSpeed")
                    .textContent =
                    `${speedKmH} km/h`;

            }

        },


        function () {

            gpsStatus.textContent =
                "GPS permission required";

            locationStatus.textContent =
                "Allow location access to track your journey.";

        },


        {
            enableHighAccuracy: true,
            maximumAge: 5000,
            timeout: 10000
        }

    );

}