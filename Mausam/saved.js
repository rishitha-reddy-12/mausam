/* =========================
   SAVED PLACES
   ========================= */

const removeButtons =
    document.querySelectorAll(".remove-place");

const savedPlaceList =
    document.getElementById("savedPlaceList");

const emptyState =
    document.getElementById("savedEmptyState");


removeButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const placeCard =
            this.closest(".saved-place-card");

        placeCard.remove();


        const remainingPlaces =
            document.querySelectorAll(".saved-place-card");


        if (remainingPlaces.length === 0) {

            emptyState.style.display = "block";

        }

    });

});


/* ADD PLACE */

const addPlaceButton =
    document.getElementById("addPlaceButton");


if (addPlaceButton) {
    addPlaceButton.addEventListener("click", function () {
        alert(window.MausamLanguage
            ? window.MausamLanguage.translate("Place selection will be connected to GPS and Maps by the backend.")
            : "Place selection will be connected to GPS and Maps by the backend.");
    });
}