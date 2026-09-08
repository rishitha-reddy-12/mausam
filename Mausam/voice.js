function initVoiceAssistant() {
    const button = document.querySelector(".voice-assistant-button");
    const status = button
        ? button.closest(".topbar-actions").querySelector(".voice-assistant-status")
        : null;

    if (!button || !status || button.dataset.voiceReady === "true") {
        return;
    }
    button.dataset.voiceReady = "true";
    button.setAttribute("aria-pressed", "false");

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const speechLanguage = { en: "en-US", te: "te-IN", hi: "hi-IN" };
    let recognition;
    let isListening = false;

    function currentLanguage() {
        return window.MausamLanguage ? window.MausamLanguage.get() : "en";
    }

    function message(text) {
        return window.MausamLanguage
            ? window.MausamLanguage.translate(text)
            : text;
    }

    function speak(response) {
        if (!window.speechSynthesis) {
            status.textContent = message("Voice assistant is not supported in this browser.");
            return;
        }
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(response);
        utterance.lang = speechLanguage[currentLanguage()];
        window.speechSynthesis.speak(utterance);
    }

    function unsupported() {
        status.textContent = message("Voice assistant is not supported in this browser.");
        button.setAttribute("aria-disabled", "true");
    }

    if (!SpeechRecognition || !window.speechSynthesis) {
        button.addEventListener("click", unsupported);
        return;
    }

    recognition = new SpeechRecognition();
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = function () {
        isListening = true;
        button.classList.add("listening");
        button.setAttribute("aria-pressed", "true");
        button.setAttribute("title", "Stop listening");
        status.textContent = message("Listening...");
    };

    recognition.onresult = function () {
        button.classList.remove("listening");
        button.classList.add("processing");
        status.textContent = message("Processing...");
        window.setTimeout(function () {
            const response = message("I heard you. Live weather data will be connected by the backend.");
            button.classList.remove("processing");
            button.classList.add("responding");
            status.textContent = response;
            speak(response);
            window.setTimeout(function () {
                button.classList.remove("responding");
            }, 1200);
        }, 350);
    };

    recognition.onerror = function () {
        isListening = false;
        button.classList.remove("listening");
        button.setAttribute("aria-pressed", "false");
        button.setAttribute("title", "Voice assistant");
        status.textContent = message("Voice assistant could not access the microphone.");
    };

    recognition.onend = function () {
        isListening = false;
        button.classList.remove("listening");
        button.setAttribute("aria-pressed", "false");
        button.setAttribute("title", "Voice assistant");
    };

    button.addEventListener("click", function () {
        if (isListening) {
            recognition.stop();
            status.textContent = message("Stopping listening...");
            return;
        }

        recognition.lang = speechLanguage[currentLanguage()];
        try {
            recognition.start();
        } catch (error) {
            status.textContent = message("Voice assistant could not access the microphone.");
        }
    });

    document.addEventListener("mausam-language-changed", function () {
        status.textContent = "";
    });
}

window.initVoiceAssistant = initVoiceAssistant;

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initVoiceAssistant);
} else {
    initVoiceAssistant();
}
