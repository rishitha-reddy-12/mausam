/* =========================
   FORECAST PAGE
   ========================= */

const savedLanguage =
    localStorage.getItem("mausamLanguage") || "en";


const savedTemperatureUnit =
    localStorage.getItem("mausamTemperatureUnit") || "celsius";


console.log(
    "Selected language:",
    savedLanguage
);


console.log(
    "Temperature unit:",
    savedTemperatureUnit
);