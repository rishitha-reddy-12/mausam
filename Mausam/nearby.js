const filterButtons = document.querySelectorAll(".nearby-filter");
const placeCards = document.querySelectorAll(".nearby-place-card");
const detectLocationButton = document.getElementById("detectLocationButton");
const currentLocation = document.getElementById("currentLocation");
const locationStatus = document.getElementById("locationStatus");

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedCategory = button.dataset.category;

        filterButtons.forEach(function (item) {
            item.classList.toggle("active", item === button);
        });

        placeCards.forEach(function (card) {
            card.hidden = selectedCategory !== "all" && card.dataset.category !== selectedCategory;
        });
    });
});

function showCurrentLocation() {
    if (!navigator.geolocation) {
        currentLocation.textContent = "Location unavailable";
        locationStatus.textContent = "Geolocation is not supported by this browser.";
        return;
    }

    locationStatus.textContent = "Requesting current location...";

    navigator.geolocation.getCurrentPosition(
        function (position) {
            const latitude = position.coords.latitude.toFixed(5);
            const longitude = position.coords.longitude.toFixed(5);
            currentLocation.textContent = `${latitude}, ${longitude}`;
            locationStatus.textContent = "Current location detected.";
        },
        function () {
            currentLocation.textContent = "Location not detected";
            locationStatus.textContent = "Allow location access to find nearby places.";
        },
        { enableHighAccuracy: true, maximumAge: 30000, timeout: 10000 }
    );
}

if (detectLocationButton) {
    detectLocationButton.addEventListener("click", showCurrentLocation);
}
