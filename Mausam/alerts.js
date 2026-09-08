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