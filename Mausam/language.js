(function () {
    const translations = {
        te: {
            "Home": "హోమ్",
            "Journey": "ప్రయాణం",
            "Forecast": "వాతావరణ అంచనా",
            "Alerts": "హెచ్చరికలు",
            "Nearby": "సమీపంలోని ప్రదేశాలు",
            "Saved Places": "సేవ్ చేసిన ప్రదేశాలు",
            "Settings": "సెట్టింగ్స్",
            "Personalize": "వ్యక్తిగతీకరించండి",
            "Logout": "లాగ్ అవుట్",
            "Back to Dashboard": "డాష్‌బోర్డ్‌కు తిరిగి వెళ్ళండి",
            "Language": "భాష",
            "Temperature Unit": "ఉష్ణోగ్రత యూనిట్",
            "Notifications": "నోటిఫికేషన్లు",
            "Change Password": "పాస్‌వర్డ్ మార్చండి",
            "Save Settings": "సెట్టింగ్స్ సేవ్ చేయండి",
            "English": "ఇంగ్లీష్",
            "Telugu": "తెలుగు",
            "Hindi": "హిందీ",
            "Celsius (°C)": "సెల్సియస్ (°C)",
            "Fahrenheit (°F)": "ఫారెన్‌హీట్ (°F)",
            "MAUSAM": "మౌసం",
            "Welcome.": "స్వాగతం.",
            "Welcome to Mausam": "మౌసంకు స్వాగతం",
            "Weather that understands your needs.": "మీ అవసరాలను అర్థం చేసుకునే వాతావరణ సమాచారం.",
            "Email": "ఈమెయిల్",
            "Password": "పాస్‌వర్డ్",
            "Enter your email": "మీ ఈమెయిల్ నమోదు చేయండి",
            "Enter your password": "మీ పాస్‌వర్డ్ నమోదు చేయండి",
            "Remember me": "నన్ను గుర్తుంచుకోండి",
            "Forgot password?": "పాస్‌వర్డ్ మర్చిపోయారా?",
            "Login": "లాగిన్",
            "Continue with Google": "గూగుల్‌తో కొనసాగించండి",
            "Google sign-in will be available when authentication is connected.": "ప్రామాణీకరణ అనుసంధానించినప్పుడు Google సైన్-ఇన్ అందుబాటులో ఉంటుంది.",
            "Password recovery will be available when authentication is connected.": "ప్రామాణీకరణ అనుసంధానించినప్పుడు పాస్‌వర్డ్ రికవరీ అందుబాటులో ఉంటుంది.",
            "Good afternoon": "శుభ మధ్యాహ్నం",
            "Your weather overview": "మీ వాతావరణ సమీక్ష",
            "CURRENT LOCATION": "ప్రస్తుత ప్రదేశం",
            "CURRENT WEATHER": "ప్రస్తుత వాతావరణం",
            "Partly Cloudy": "పాక్షికంగా మేఘావృతం",
            "Feels like 30°": "అనుభూతి 30°",
            "WEATHER STATUS": "వాతావరణ స్థితి",
            "Good conditions": "మంచి పరిస్థితులు",
            "PERSONALIZED FOR YOU": "మీ కోసం వ్యక్తిగతీకరించబడింది",
            "Change user type": "వినియోగదారు రకం మార్చండి",
            "Use Current Location": "ప్రస్తుత ప్రదేశాన్ని ఉపయోగించండి",
            "Location not detected": "ప్రదేశం గుర్తించబడలేదు",
            "Allow location access to find nearby places.": "సమీప ప్రదేశాలను కనుగొనడానికి ప్రదేశ అనుమతిని ఇవ్వండి.",
            "Current location detected.": "ప్రస్తుత ప్రదేశం గుర్తించబడింది.",
            "Requesting current location...": "ప్రస్తుత ప్రదేశాన్ని కోరుతోంది...",
            "Find a place": "ప్రదేశాన్ని కనుగొనండి",
            "All": "అన్నీ",
            "Hospitals": "ఆసుపత్రులు",
            "Shelters": "ఆశ్రయాలు",
            "Fuel": "ఇంధనం",
            "Pharmacies": "ఫార్మసీలు",
            "Nearby results": "సమీప ఫలితాలు",
            "Useful places near you": "మీ సమీపంలోని ఉపయోగకరమైన ప్రదేశాలు",
            "Settings saved successfully.": "సెట్టింగ్స్ విజయవంతంగా సేవ్ చేయబడ్డాయి.",
            "Are you sure you want to logout?": "మీరు నిజంగా లాగ్ అవుట్ చేయాలనుకుంటున్నారా?",
            "Please enter both your start location and destination.": "మీ ప్రారంభ ప్రదేశం మరియు గమ్యం రెండింటినీ నమోదు చేయండి.",
            "Place selection will be connected to GPS and Maps by the backend.": "ప్రదేశ ఎంపికను బ్యాక్‌ఎండ్ GPS మరియు మ్యాప్స్‌కు అనుసంధానిస్తుంది.",
            "Password details are ready for backend integration.": "పాస్‌వర్డ్ వివరాలు బ్యాక్‌ఎండ్ అనుసంధానానికి సిద్ధంగా ఉన్నాయి.",
            "Preferences": "ప్రాధాన్యతలు",
            "Manage your Mausam language and application preferences.": "మీ మౌసం భాష మరియు యాప్ ప్రాధాన్యతలను నిర్వహించండి.",
            "Choose the language used throughout Mausam.": "మౌసం అంతటా ఉపయోగించే భాషను ఎంచుకోండి.",
            "Choose how temperature is displayed.": "ఉష్ణోగ్రత ఎలా చూపించాలో ఎంచుకోండి.",
            "Receive weather, journey and risk updates.": "వాతావరణం, ప్రయాణం మరియు ప్రమాద నవీకరణలను పొందండి.",
            "Create a new password for your Mausam account.": "మీ మౌసం ఖాతా కోసం కొత్త పాస్‌వర్డ్‌ను సృష్టించండి.",
            "Enter New Password": "కొత్త పాస్‌వర్డ్ నమోదు చేయండి",
            "Re-enter New Password": "కొత్త పాస్‌వర్డ్‌ను మళ్లీ నమోదు చేయండి",
            "Enter new password": "కొత్త పాస్‌వర్డ్ నమోదు చేయండి",
            "Re-enter new password": "కొత్త పాస్‌వర్డ్‌ను మళ్లీ నమోదు చేయండి",
            "Your weather. Your journey. Your way.": "మీ వాతావరణం. మీ ప్రయాణం. మీ మార్గం.",
            "Today, Saturday, September 5": "ఈరోజు, శనివారం, సెప్టెంబర్ 5",
            "Journey conditions look good": "ప్రయాణ పరిస్థితులు బాగున్నాయి",
            "Your route is currently suitable. Mausam will continue tracking weather and your journey.": "మీ మార్గం ప్రస్తుతం అనుకూలంగా ఉంది. మౌసం వాతావరణం మరియు మీ ప్రయాణాన్ని గమనిస్తుంది.",
            "Weather alerts": "వాతావరణ హెచ్చరికలు",
            "Heavy rain expected": "భారీ వర్షం వచ్చే అవకాశం ఉంది",
            "High humidity": "అధిక తేమ",
            "View Journey": "ప్రయాణాన్ని చూడండి",
            "Manage Notifications": "నోటిఫికేషన్లను నిర్వహించండి",
            "No saved places": "సేవ్ చేసిన ప్రదేశాలు లేవు",
            "Add your first place": "మీ మొదటి ప్రదేశాన్ని జోడించండి",
            "Save Changes": "మార్పులను సేవ్ చేయండి",
            "Choose Photo": "ఫోటో ఎంచుకోండి",
            "Profile photo": "ప్రొఫైల్ ఫోటో",
            "Full name": "పూర్తి పేరు",
            "Email address": "ఈమెయిల్ చిరునామా",
            "Phone number": "ఫోన్ నంబర్",
            "Enter your full name": "మీ పూర్తి పేరు నమోదు చేయండి",
            "Enter your email address": "మీ ఈమెయిల్ చిరునామా నమోదు చేయండి",
            "Enter your phone number": "మీ ఫోన్ నంబర్ నమోదు చేయండి",
            "Start Journey": "ప్రయాణం ప్రారంభించండి",
            "Start location": "ప్రారంభ ప్రదేశం",
            "Destination": "గమ్యం",
            "Enter starting place": "ప్రారంభ ప్రదేశాన్ని నమోదు చేయండి",
            "Enter destination": "గమ్యాన్ని నమోదు చేయండి",
            "Mode of transport": "ప్రయాణ సాధనం",
            "Car": "కారు",
            "Bus": "బస్సు",
            "Bike": "బైక్",
            "Bicycle": "సైకిల్",
            "On foot": "నడక",
            "Next few hours": "తదుపరి కొన్ని గంటలు",
            "This week": "ఈ వారం",
            "Humidity": "తేమ",
            "Wind": "గాలి",
            "Rain": "వర్షం",
            "Cloudy": "మేఘావృతం",
            "Clear": "స్పష్టంగా",
            "Passwords do not match.": "పాస్‌వర్డ్‌లు సరిపోలడం లేదు.",
            "Password must contain at least 8 characters.": "పాస్‌వర్డ్‌లో కనీసం 8 అక్షరాలు ఉండాలి.",
            "Passwords match.": "పాస్‌వర్డ్‌లు సరిపోలాయి.",
            "Your places": "మీ ప్రదేశాలు",
            "Add a location": "ప్రదేశాన్ని జోడించండి",
            "Add Place": "ప్రదేశం జోడించండి",
            "No saved places": "సేవ్ చేసిన ప్రదేశాలు లేవు",
            "Plan ahead with confidence": "నమ్మకంగా ముందస్తు ప్రణాళిక చేయండి",
            "Stay informed": "సమాచారంతో ఉండండి",
            "Places around you": "మీ చుట్టూ ఉన్న ప్రదేశాలు",
            "Weather-aware travel": "వాతావరణాన్ని గమనించిన ప్రయాణం",
            "Personalize your weather": "మీ వాతావరణాన్ని వ్యక్తిగతీకరించండి",
            "Voice assistant": "వాయిస్ అసిస్టెంట్",
            "Profile": "ప్రొఫైల్",
            "Listening...": "వింటోంది...",
            "Processing...": "ప్రాసెస్ చేస్తోంది...",
            "Voice assistant is not supported in this browser.": "ఈ బ్రౌజర్‌లో వాయిస్ అసిస్టెంట్‌కు మద్దతు లేదు.",
            "Voice assistant could not access the microphone.": "వాయిస్ అసిస్టెంట్ మైక్రోఫోన్‌ను యాక్సెస్ చేయలేకపోయింది.",
            "Password changed successfully.": "పాస్‌వర్డ్ విజయవంతంగా మార్చబడింది.",
            "Profile updated successfully.": "ప్రొఫైల్ విజయవంతంగా నవీకరించబడింది.",
            "Profile photo upload will be available here.": "ప్రొఫైల్ ఫోటో అప్‌లోడ్ ఇక్కడ అందుబాటులో ఉంటుంది.",
            "I heard you. Live weather data will be connected by the backend.": "మీ మాట వినిపించింది. ప్రత్యక్ష వాతావరణ డేటాను బ్యాక్‌ఎండ్‌తో అనుసంధానిస్తారు."
            ,"Health-conscious user": "ఆరోగ్యంపై శ్రద్ధ ఉన్న వినియోగదారు"
            ,"Health & environment conditions": "ఆరోగ్యం మరియు పర్యావరణ పరిస్థితులు"
            ,"Outdoor fitness enthusiast": "బయటి వ్యాయామ అభిమాని"
            ,"Outdoor activity conditions": "బయటి కార్యకలాపాల పరిస్థితులు"
            ,"Beachgoer / Surfer": "బీచ్ సందర్శకుడు / సర్ఫర్"
            ,"Beach & sea conditions": "బీచ్ మరియు సముద్ర పరిస్థితులు"
            ,"Traveler": "ప్రయాణికుడు"
            ,"Travel weather & destination insights": "ప్రయాణ వాతావరణం మరియు గమ్యస్థాన సమాచారం"
            ,"Parent / Family": "తల్లిదండ్రులు / కుటుంబం"
            ,"Family & school commute conditions": "కుటుంబం మరియు పాఠశాల ప్రయాణ పరిస్థితులు"
            ,"Farmer / Gardener": "రైతు / తోటమాలి"
            ,"Agriculture & gardening conditions": "వ్యవసాయం మరియు తోటపని పరిస్థితులు"
            ,"Commuter": "ప్రయాణికుడు"
            ,"Journey, route & traffic conditions": "ప్రయాణం, మార్గం మరియు ట్రాఫిక్ పరిస్థితులు"
            ,"Event Planner": "కార్యక్రమ ప్రణాళికకర్త"
            ,"Outdoor event planning conditions": "బయటి కార్యక్రమ ప్రణాళిక పరిస్థితులు"
            ,"AQI": "AQI"
            ,"POLLEN": "పుప్పొడి"
            ,"UV INDEX": "UV సూచిక"
            ,"HUMIDITY": "తేమ"
            ,"YOUR SPEED": "మీ వేగం"
            ,"VISIBILITY": "దృశ్యమానత"
            ,"Automatically updated": "స్వయంచాలకంగా నవీకరించబడింది"
            ,"Current speed": "ప్రస్తుత వేగం"
            ,"Expected on route": "మార్గంలో అంచనా"
            ,"Good visibility": "మంచి దృశ్యమానత"
            ,"Low": "తక్కువ"
            ,"Moderate": "మధ్యస్థం"
            ,"Good air quality": "మంచి గాలి నాణ్యత"
            ,"Low allergy risk": "తక్కువ అలెర్జీ ప్రమాదం"
            ,"Moderate exposure": "మధ్యస్థ ప్రభావం"
            ,"Moderately humid": "మధ్యస్థ తేమ"
            ,"Good for outdoor activity": "బయటి కార్యకలాపాలకు అనుకూలం"
            ,"Cooler conditions": "చల్లని పరిస్థితులు"
            ,"Use sun protection": "సూర్య రక్షణ ఉపయోగించండి"
            ,"Light breeze": "తేలికపాటి గాలి"
            ,"Comfortable activity": "సౌకర్యవంతమైన కార్యకలాపం"
            ,"Check sea conditions": "సముద్ర పరిస్థితులను పరిశీలించండి"
            ,"Review wave height, tide timing and water conditions before entering the sea.": "సముద్రంలోకి వెళ్లే ముందు అలల ఎత్తు, ఆటుపోట్ల సమయం మరియు నీటి పరిస్థితులను పరిశీలించండి."
            ,"WAVE HEIGHT": "అలల ఎత్తు"
            ,"TIDE": "ఆటుపోట్లు"
            ,"WATER TEMP": "నీటి ఉష్ణోగ్రత"
            ,"SEA CONDITION": "సముద్ర పరిస్థితి"
            ,"Travel conditions look good": "ప్రయాణ పరిస్థితులు బాగున్నాయి"
            ,"Saved destination": "సేవ్ చేసిన గమ్యం"
            ,"Carry a light raincoat": "తేలికపాటి రెయిన్‌కోట్ తీసుకెళ్లండి"
            ,"No severe warning": "తీవ్ర హెచ్చరిక లేదు"
            ,"School commute looks good": "పాఠశాల ప్రయాణం బాగుంది"
            ,"Normal conditions": "సాధారణ పరిస్థితులు"
            ,"Low probability": "తక్కువ అవకాశం"
            ,"Monitor rainfall": "వర్షపాతాన్ని గమనించండి"
            ,"Expected today": "ఈరోజు అంచనా"
            ,"Moderate moisture": "మధ్యస్థ తేమ"
            ,"No frost expected": "మంచు అంచనా లేదు"
            ,"Suitable conditions": "అనుకూల పరిస్థితులు"
            ,"ETA": "చేరుకునే అంచనా సమయం"
            ,"Journey conditions look good": "ప్రయాణ పరిస్థితులు బాగున్నాయి"
            ,"Event conditions need monitoring": "కార్యక్రమ పరిస్థితులను గమనించాలి"
            ,"RAIN PROBABILITY": "వర్షం అవకాశం"
            ,"Monitor forecast": "వాతావరణ అంచనాను గమనించండి"
            ,"COMFORT INDEX": "సౌకర్య సూచిక"
            ,"Generally comfortable": "సాధారణంగా సౌకర్యవంతం"
            ,"Extended outlook": "విస్తృత అంచనా"
            ,"Moderate breeze": "మధ్యస్థ గాలి"
            ,"PLAN YOUR JOURNEY": "మీ ప్రయాణాన్ని ప్లాన్ చేయండి"
            ,"Check weather conditions along your route before you start travelling.": "ప్రయాణం ప్రారంభించే ముందు మీ మార్గంలోని వాతావరణ పరిస్థితులను తనిఖీ చేయండి."
            ,"FORECAST LOCATION": "అంచనా ప్రదేశం"
            ,"Saturday, September 5, 2026": "శనివారం, సెప్టెంబర్ 5, 2026"
            ,"CURRENT CONDITIONS": "ప్రస్తుత పరిస్థితులు"
            ,"HOURLY FORECAST": "గంటల వారీ అంచనా"
            ,"7-DAY FORECAST": "7 రోజుల అంచనా"
            ,"WEATHER FACTORS": "వాతావరణ అంశాలు"
            ,"What to keep in mind": "గుర్తుంచుకోవాల్సిన విషయాలు"
            ,"Moderately humid conditions.": "మధ్యస్థ తేమ పరిస్థితులు."
            ,"WEATHER ALERTS": "వాతావరణ హెచ్చరికలు"
            ,"Important weather conditions and changes that may affect your plans.": "మీ ప్రణాళికలను ప్రభావితం చేసే ముఖ్యమైన వాతావరణ పరిస్థితులు మరియు మార్పులు."
            ,"Active alerts": "క్రియాశీల హెచ్చరికలు"
            ,"High priority": "అధిక ప్రాధాన్యత"
            ,"Advisory": "సలహా"
            ,"ACTIVE ALERTS": "క్రియాశీల హెచ్చరికలు"
            ,"Current weather warnings": "ప్రస్తుత వాతావరణ హెచ్చరికలు"
            ,"HIGH PRIORITY": "అధిక ప్రాధాన్యత"
            ,"Updated 10 min ago": "10 నిమిషాల క్రితం నవీకరించబడింది"
            ,"Rain may become intense in your area during the evening. Travel carefully and avoid waterlogged roads.": "సాయంత్రం మీ ప్రాంతంలో వర్షం తీవ్రంగా ఉండవచ్చు. జాగ్రత్తగా ప్రయాణించండి మరియు నీటితో నిండిన రహదారులను నివారించండి."
            ,"Rain probability: 70%": "వర్షం అవకాశం: 70%"
            ,"Expected: 6 PM – 8 PM": "అంచనా: 6 PM – 8 PM"
            ,"Updated 25 min ago": "25 నిమిషాల క్రితం నవీకరించబడింది"
            ,"Humidity is expected to remain high. Outdoor activities may feel more uncomfortable than usual.": "తేమ ఎక్కువగా ఉండే అవకాశం ఉంది. బయట కార్యకలాపాలు సాధారణం కంటే అసౌకర్యంగా అనిపించవచ్చు."
            ,"Humidity: 78%": "తేమ: 78%"
            ,"Valid: Today": "చెల్లుబాటు: ఈరోజు"
            ,"PERSONALIZED ALERTS": "వ్యక్తిగత హెచ్చరికలు"
            ,"Relevant to your selected user type": "మీరు ఎంచుకున్న వినియోగదారు రకానికి సంబంధించినది"
            ,"Rain may affect your evening journey": "వర్షం మీ సాయంత్రపు ప్రయాణాన్ని ప్రభావితం చేయవచ్చు"
            ,"Consider starting earlier or keeping an alternate route available.": "ముందుగా ప్రారంభించండి లేదా ప్రత్యామ్నాయ మార్గాన్ని సిద్ధంగా ఉంచండి."
            ,"NOTIFICATION HISTORY": "నోటిఫికేషన్ చరిత్ర"
            ,"Recent updates": "ఇటీవలి నవీకరణలు"
            ,"Rain probability increased": "వర్షం అవకాశం పెరిగింది"
            ,"Rain probability changed from 40% to 70%.": "వర్షం అవకాశం 40% నుండి 70%కి మారింది."
            ,"Weather conditions updated": "వాతావరణ పరిస్థితులు నవీకరించబడ్డాయి"
            ,"Find useful and weather-relevant places near your current location.": "మీ ప్రస్తుత ప్రదేశానికి సమీపంలోని ఉపయోగకరమైన మరియు వాతావరణ సంబంధిత ప్రదేశాలను కనుగొనండి."
            ,"YOUR LOCATION": "మీ ప్రదేశం"
            ,"Detecting location...": "ప్రదేశాన్ని గుర్తిస్తోంది..."
            ,"FIND A PLACE": "ప్రదేశాన్ని కనుగొనండి"
            ,"You": "మీరు"
            ,"NEARBY RESULTS": "సమీప ఫలితాలు"
            ,"Nearby General Hospital": "సమీప సాధారణ ఆసుపత్రి"
            ,"Medical assistance available.": "వైద్య సహాయం అందుబాటులో ఉంది."
            ,"Covered Waiting Area": "కప్పబడిన వేచి ఉండే ప్రదేశం"
            ,"Useful during rain or extreme weather.": "వర్షం లేదా తీవ్రమైన వాతావరణంలో ఉపయోగకరం."
            ,"Nearby Fuel Station": "సమీప ఇంధన కేంద్రం"
            ,"Fuel and basic travel facilities.": "ఇంధనం మరియు ప్రాథమిక ప్రయాణ సదుపాయాలు."
            ,"Nearby Pharmacy": "సమీప ఫార్మసీ"
            ,"Medicines and basic healthcare items.": "మందులు మరియు ప్రాథమిక ఆరోగ్య వస్తువులు."
            ,"WEATHER SAFETY": "వాతావరణ భద్రత"
            ,"Need somewhere safe to wait?": "వేచి ఉండటానికి సురక్షితమైన ప్రదేశం కావాలా?"
            ,"During heavy rain or severe weather, Mausam can help identify nearby suitable places to stop.": "భారీ వర్షం లేదా తీవ్రమైన వాతావరణంలో ఆగడానికి సమీపంలోని అనుకూల ప్రదేశాలను మౌసం గుర్తించడంలో సహాయపడుతుంది."
            ,"SAVED PLACES": "సేవ్ చేసిన ప్రదేశాలు"
            ,"Save locations you frequently visit for quick access to weather information.": "వాతావరణ సమాచారాన్ని త్వరగా పొందడానికి మీరు తరచుగా సందర్శించే ప్రదేశాలను సేవ్ చేయండి."
            ,"NEW SAVED PLACE": "కొత్త సేవ్ చేసిన ప్రదేశం"
            ,"Save a place to quickly check its weather and conditions later.": "తర్వాత దాని వాతావరణం మరియు పరిస్థితులను త్వరగా తనిఖీ చేయడానికి ఒక ప్రదేశాన్ని సేవ్ చేయండి."
            ,"YOUR LOCATIONS": "మీ ప్రదేశాలు"
            ,"Saved places": "సేవ్ చేసిన ప్రదేశాలు"
            ,"Saved location": "సేవ్ చేసిన ప్రదేశం"
            ,"Remove": "తొలగించండి"
            ,"SAVED LOCATION BENEFIT": "సేవ్ చేసిన ప్రదేశం ప్రయోజనం"
            ,"Get weather information faster": "వాతావరణ సమాచారాన్ని వేగంగా పొందండి"
            ,"Saved places can later be connected to live weather data, maps and personalized alerts.": "సేవ్ చేసిన ప్రదేశాలను తర్వాత ప్రత్యక్ష వాతావరణ డేటా, మ్యాప్స్ మరియు వ్యక్తిగత హెచ్చరికలకు అనుసంధానించవచ్చు."
            ,"← Back": "← వెనుకకు"
            ,"Choose what matters most to you.": "మీకు ముఖ్యమైనదాన్ని ఎంచుకోండి."
            ,"Mausam will customize your homepage accordingly.": "మౌసం మీ హోమ్‌పేజీని దానికి అనుగుణంగా మార్చుతుంది."
            ,"Edit Profile": "ప్రొఫైల్ సవరించండి"
            ,"Manage your Mausam profile information.": "మీ మౌసం ప్రొఫైల్ సమాచారాన్ని నిర్వహించండి."
            ,"Add a photo to personalize your profile.": "మీ ప్రొఫైల్‌ను వ్యక్తిగతీకరించడానికి ఫోటోను జోడించండి."
            ,"Create a new password to keep your Mausam account secure.": "మీ మౌసం ఖాతాను సురక్షితంగా ఉంచడానికి కొత్త పాస్‌వర్డ్‌ను సృష్టించండి."
            ,"New Password": "కొత్త పాస్‌వర్డ్"
            ,"Show": "చూపించు"
            ,"Use at least 8 characters.": "కనీసం 8 అక్షరాలను ఉపయోగించండి."
            ,"OR": "లేదా"
            ,"HOME": "ఇల్లు"
            ,"WORK": "పని"
            ,"COLLEGE": "కళాశాల"
            ,"SECURITY": "భద్రత"
            ,"ACCOUNT": "ఖాతా"
            ,"Event planner": "కార్యక్రమ ప్రణాళికకర్త"
            ,"FREQUENT": "తరచుగా"
            ,"Moderate": "మధ్యస్థం"
            ,"ADVISORY": "సలహా"
            ,"NOTIFICATION PREFERENCES": "నోటిఫికేషన్ ప్రాధాన్యతలు"
            ,"Keep receiving important updates": "ముఖ్యమైన నవీకరణలను పొందుతూ ఉండండి"
            ,"Weather changes, journey risks and important alerts will be shown here.": "వాతావరణ మార్పులు, ప్రయాణ ప్రమాదాలు మరియు ముఖ్యమైన హెచ్చరికలు ఇక్కడ చూపబడతాయి."
            ,"Evening forecast has been updated.": "సాయంత్రపు అంచనా నవీకరించబడింది."
            ,"Humidity increased": "తేమ పెరిగింది"
            ,"Humidity increased to 78%.": "తేమ 78%కి పెరిగింది."
            ,"10 minutes ago": "10 నిమిషాల క్రితం"
            ,"25 minutes ago": "25 నిమిషాల క్రితం"
            ,"1 hour ago": "1 గంట క్రితం"
            ,"Choose what matters most to you. Mausam will customize your homepage accordingly.": "మీకు ముఖ్యమైనదాన్ని ఎంచుకోండి. మౌసం మీ హోమ్‌పేజీని దానికి అనుగుణంగా మార్చుతుంది."
            ,"AQI, pollen, UV index, humidity, allergy and skin-sensitivity information.": "AQI, పుప్పొడి, UV సూచిక, తేమ, అలెర్జీ మరియు చర్మ సున్నితత్వ సమాచారం."
            ,"Running hours, sunrise, sunset, wind, UV and heat alerts.": "పరుగెత్తే సమయాలు, సూర్యోదయం, సూర్యాస్తమయం, గాలి, UV మరియు వేడి హెచ్చరికలు."
            ,"Tide timings, waves, sea conditions and water temperature.": "ఆటుపోట్ల సమయాలు, అలలు, సముద్ర పరిస్థితులు మరియు నీటి ఉష్ణోగ్రత."
            ,"Destination weather, severe alerts, saved places and packing suggestions.": "గమ్యస్థాన వాతావరణం, తీవ్రమైన హెచ్చరికలు, సేవ్ చేసిన ప్రదేశాలు మరియు ప్యాకింగ్ సూచనలు."
            ,"School commute conditions, rain alerts and severe weather warnings.": "పాఠశాల ప్రయాణ పరిస్థితులు, వర్ష హెచ్చరికలు మరియు తీవ్రమైన వాతావరణ హెచ్చరికలు."
            ,"Rainfall, soil moisture, frost alerts and planting guidance.": "వర్షపాతం, నేల తేమ, మంచు హెచ్చరికలు మరియు నాటడం మార్గదర్శకత్వం."
            ,"Route weather, GPS, ETA, speed, traffic, visibility and storm alerts.": "మార్గ వాతావరణం, GPS, ETA, వేగం, ట్రాఫిక్, దృశ్యమానత మరియు తుఫాను హెచ్చరికలు."
            ,"Extended forecasts, rain probability and outdoor comfort conditions.": "విస్తృత అంచనాలు, వర్షం అవకాశం మరియు బయట సౌకర్య పరిస్థితులు."
            ,"WORK": "పని"
            ,"COLLEGE": "కళాశాల"
            ,"RAIN": "వర్షం"
            ,"HOSPITAL": "ఆసుపత్రి"
            ,"SHELTER": "ఆశ్రయం"
            ,"FUEL": "ఇంధనం"
            ,"PHARMACY": "ఫార్మసీ"
            ,"away": "దూరంలో"
            ,"Sat": "శని"
            ,"Today": "ఈరోజు"
            ,"Sun": "ఆది"
            ,"Mon": "సోమ"
            ,"Tue": "మంగళ"
            ,"Wed": "బుధ"
            ,"Thu": "గురు"
            ,"Fri": "శుక్ర"
            ,"Sep": "సెప్టెంబర్"
            ,"GPS active": "GPS सक्रियంగా ఉంది"
            ,"GPS unavailable": "GPS అందుబాటులో లేదు"
            ,"GPS permission required": "GPS అనుమతి అవసరం"
            ,"Location unavailable": "ప్రదేశం అందుబాటులో లేదు"
            ,"Geolocation is not supported by this browser.": "ఈ బ్రౌజర్‌లో జియోలొకేషన్‌కు మద్దతు లేదు."
            ,"WEATHER FORECAST": "వాతావరణ అంచనా"
            ,"View upcoming weather conditions and understand how they may affect your plans.": "రాబోయే వాతావరణ పరిస్థితులను చూడండి మరియు అవి మీ ప్రణాళికలను ఎలా ప్రభావితం చేయవచ్చో అర్థం చేసుకోండి."
            ,"Feels like 30°C": "అనుభూతి 30°C"
            ,"Light breeze expected.": "తేలికపాటి గాలి అంచనా."
            ,"Protection recommended during prolonged outdoor activity.": "ఎక్కువసేపు బయట కార్యకలాపాల సమయంలో రక్షణ సిఫార్సు చేయబడింది."
            ,"AIR QUALITY": "గాలి నాణ్యత"
            ,"Sensitive individuals may want to reduce prolonged exposure.": "సున్నితమైన వ్యక్తులు ఎక్కువసేపు బయట ఉండడాన్ని తగ్గించుకోవచ్చు."
            ,"MAUSAM INSIGHT": "మౌసం సమాచారం"
            ,"Rain is more likely during the evening.": "సాయంత్రం వర్షం వచ్చే అవకాశం ఎక్కువగా ఉంది."
            ,"Consider planning outdoor activities earlier and keep rain protection available.": "బయటి కార్యకలాపాలను ముందుగా ప్లాన్ చేసి వర్ష రక్షణను సిద్ధంగా ఉంచుకోండి."
            ,"WIND": "గాలి"
        },
        hi: {
            "Home": "होम",
            "Journey": "यात्रा",
            "Forecast": "मौसम पूर्वानुमान",
            "Alerts": "चेतावनियाँ",
            "Nearby": "आस-पास",
            "Saved Places": "सहेजे गए स्थान",
            "Settings": "सेटिंग्स",
            "Personalize": "व्यक्तिगत बनाएं",
            "Logout": "लॉग आउट",
            "Back to Dashboard": "डैशबोर्ड पर वापस जाएं",
            "Language": "भाषा",
            "Temperature Unit": "तापमान इकाई",
            "Notifications": "सूचनाएं",
            "Change Password": "पासवर्ड बदलें",
            "Save Settings": "सेटिंग्स सहेजें",
            "English": "अंग्रेज़ी",
            "Telugu": "तेलुगु",
            "Hindi": "हिंदी",
            "Celsius (°C)": "सेल्सियस (°C)",
            "Fahrenheit (°F)": "फ़ारेनहाइट (°F)",
            "MAUSAM": "मौसम",
            "Welcome.": "स्वागत है।",
            "Welcome to Mausam": "मौसम में आपका स्वागत है",
            "Weather that understands your needs.": "आपकी ज़रूरतों को समझने वाला मौसम।",
            "Email": "ईमेल",
            "Password": "पासवर्ड",
            "Enter your email": "अपना ईमेल दर्ज करें",
            "Enter your password": "अपना पासवर्ड दर्ज करें",
            "Remember me": "मुझे याद रखें",
            "Forgot password?": "पासवर्ड भूल गए?",
            "Login": "लॉगिन",
            "Continue with Google": "Google के साथ जारी रखें",
            "Google sign-in will be available when authentication is connected.": "प्रमाणीकरण जुड़ने पर Google साइन-इन उपलब्ध होगा।",
            "Password recovery will be available when authentication is connected.": "प्रमाणीकरण जुड़ने पर पासवर्ड रिकवरी उपलब्ध होगी।",
            "Good afternoon": "शुभ दोपहर",
            "Your weather overview": "आपका मौसम अवलोकन",
            "CURRENT LOCATION": "वर्तमान स्थान",
            "CURRENT WEATHER": "वर्तमान मौसम",
            "Partly Cloudy": "आंशिक रूप से बादल",
            "Feels like 30°": "महसूस 30°",
            "WEATHER STATUS": "मौसम स्थिति",
            "Good conditions": "अच्छी स्थिति",
            "PERSONALIZED FOR YOU": "आपके लिए व्यक्तिगत",
            "Change user type": "उपयोगकर्ता प्रकार बदलें",
            "Use Current Location": "वर्तमान स्थान उपयोग करें",
            "Location not detected": "स्थान नहीं मिला",
            "Allow location access to find nearby places.": "आस-पास के स्थान खोजने के लिए स्थान की अनुमति दें।",
            "Current location detected.": "वर्तमान स्थान मिल गया।",
            "Requesting current location...": "वर्तमान स्थान मांगा जा रहा है...",
            "Find a place": "स्थान खोजें",
            "All": "सभी",
            "Hospitals": "अस्पताल",
            "Shelters": "आश्रय",
            "Fuel": "ईंधन",
            "Pharmacies": "फार्मेसी",
            "Nearby results": "आस-पास के परिणाम",
            "Useful places near you": "आपके आस-पास उपयोगी स्थान",
            "Settings saved successfully.": "सेटिंग्स सफलतापूर्वक सहेजी गईं।",
            "Are you sure you want to logout?": "क्या आप लॉग आउट करना चाहते हैं?",
            "Please enter both your start location and destination.": "कृपया अपना प्रारंभिक स्थान और गंतव्य दोनों दर्ज करें।",
            "Place selection will be connected to GPS and Maps by the backend.": "स्थान चयन को बैकएंड GPS और मैप्स से जोड़ेगा।",
            "Password details are ready for backend integration.": "पासवर्ड विवरण बैकएंड एकीकरण के लिए तैयार हैं।",
            "Preferences": "प्राथमिकताएं",
            "Manage your Mausam language and application preferences.": "अपनी मौसम भाषा और ऐप प्राथमिकताओं को प्रबंधित करें।",
            "Choose the language used throughout Mausam.": "मौसम में उपयोग की जाने वाली भाषा चुनें।",
            "Choose how temperature is displayed.": "तापमान कैसे दिखाया जाए चुनें।",
            "Receive weather, journey and risk updates.": "मौसम, यात्रा और जोखिम अपडेट प्राप्त करें।",
            "Create a new password for your Mausam account.": "अपने मौसम खाते के लिए नया पासवर्ड बनाएं।",
            "Enter New Password": "नया पासवर्ड दर्ज करें",
            "Re-enter New Password": "नया पासवर्ड फिर से दर्ज करें",
            "Enter new password": "नया पासवर्ड दर्ज करें",
            "Re-enter new password": "नया पासवर्ड फिर से दर्ज करें",
            "Your weather. Your journey. Your way.": "आपका मौसम। आपकी यात्रा। आपका तरीका।",
            "Today, Saturday, September 5": "आज, शनिवार, 5 सितंबर",
            "Journey conditions look good": "यात्रा की स्थिति अच्छी है",
            "Your route is currently suitable. Mausam will continue tracking weather and your journey.": "आपका मार्ग अभी उपयुक्त है। मौसम मौसम और आपकी यात्रा को ट्रैक करता रहेगा।",
            "Weather alerts": "मौसम चेतावनियां",
            "Heavy rain expected": "भारी बारिश की संभावना",
            "High humidity": "अधिक नमी",
            "View Journey": "यात्रा देखें",
            "Manage Notifications": "सूचनाएं प्रबंधित करें",
            "No saved places": "कोई सहेजे गए स्थान नहीं",
            "Add your first place": "अपना पहला स्थान जोड़ें",
            "Save Changes": "परिवर्तन सहेजें",
            "Choose Photo": "फोटो चुनें",
            "Profile photo": "प्रोफ़ाइल फोटो",
            "Full name": "पूरा नाम",
            "Email address": "ईमेल पता",
            "Phone number": "फोन नंबर",
            "Enter your full name": "अपना पूरा नाम दर्ज करें",
            "Enter your email address": "अपना ईमेल पता दर्ज करें",
            "Enter your phone number": "अपना फोन नंबर दर्ज करें",
            "Start Journey": "यात्रा शुरू करें",
            "Start location": "प्रारंभिक स्थान",
            "Destination": "गंतव्य",
            "Enter starting place": "प्रारंभिक स्थान दर्ज करें",
            "Enter destination": "गंतव्य दर्ज करें",
            "Mode of transport": "यात्रा का साधन",
            "Car": "कार",
            "Bus": "बस",
            "Bike": "बाइक",
            "Bicycle": "साइकिल",
            "On foot": "पैदल",
            "Next few hours": "अगले कुछ घंटे",
            "This week": "इस सप्ताह",
            "Humidity": "नमी",
            "Wind": "हवा",
            "Rain": "बारिश",
            "Cloudy": "बादल",
            "Clear": "साफ",
            "Passwords do not match.": "पासवर्ड मेल नहीं खाते।",
            "Password must contain at least 8 characters.": "पासवर्ड में कम से कम 8 अक्षर होने चाहिए।",
            "Passwords match.": "पासवर्ड मेल खाते हैं।",
            "Your places": "आपके स्थान",
            "Add a location": "स्थान जोड़ें",
            "Add Place": "स्थान जोड़ें",
            "No saved places": "कोई सहेजे गए स्थान नहीं",
            "Plan ahead with confidence": "विश्वास के साथ योजना बनाएं",
            "Stay informed": "जानकारी रखें",
            "Places around you": "आपके आस-पास के स्थान",
            "Weather-aware travel": "मौसम की जानकारी के साथ यात्रा",
            "Personalize your weather": "अपने मौसम को व्यक्तिगत बनाएं",
            "Voice assistant": "वॉइस असिस्टेंट",
            "Profile": "प्रोफ़ाइल",
            "Listening...": "सुन रहा है...",
            "Processing...": "प्रोसेस हो रहा है...",
            "Voice assistant is not supported in this browser.": "इस ब्राउज़र में वॉइस असिस्टेंट समर्थित नहीं है।",
            "Voice assistant could not access the microphone.": "वॉइस असिस्टेंट माइक्रोफ़ोन तक पहुंच नहीं सका।",
            "Password changed successfully.": "पासवर्ड सफलतापूर्वक बदल दिया गया।",
            "Profile updated successfully.": "प्रोफ़ाइल सफलतापूर्वक अपडेट की गई।",
            "Profile photo upload will be available here.": "प्रोफ़ाइल फोटो अपलोड यहां उपलब्ध होगा।",
            "I heard you. Live weather data will be connected by the backend.": "मैंने आपकी बात सुनी। लाइव मौसम डेटा बैकएंड से जोड़ा जाएगा।"
            ,"Health-conscious user": "स्वास्थ्य के प्रति जागरूक उपयोगकर्ता"
            ,"Health & environment conditions": "स्वास्थ्य और पर्यावरण की स्थितियां"
            ,"Outdoor fitness enthusiast": "आउटडोर फिटनेस उत्साही"
            ,"Outdoor activity conditions": "बाहरी गतिविधियों की स्थितियां"
            ,"Beachgoer / Surfer": "समुद्र तट आगंतुक / सर्फर"
            ,"Beach & sea conditions": "समुद्र तट और समुद्र की स्थितियां"
            ,"Traveler": "यात्री"
            ,"Travel weather & destination insights": "यात्रा मौसम और गंतव्य जानकारी"
            ,"Parent / Family": "माता-पिता / परिवार"
            ,"Family & school commute conditions": "परिवार और स्कूल यात्रा की स्थितियां"
            ,"Farmer / Gardener": "किसान / माली"
            ,"Agriculture & gardening conditions": "कृषि और बागवानी की स्थितियां"
            ,"Commuter": "यात्री"
            ,"Journey, route & traffic conditions": "यात्रा, मार्ग और ट्रैफिक की स्थितियां"
            ,"Event Planner": "कार्यक्रम योजनाकार"
            ,"Outdoor event planning conditions": "बाहरी कार्यक्रम योजना की स्थितियां"
            ,"POLLEN": "पराग",
            "UV INDEX": "UV सूचकांक",
            "YOUR SPEED": "आपकी गति",
            "VISIBILITY": "दृश्यता",
            "Automatically updated": "स्वचालित रूप से अपडेट",
            "Current speed": "वर्तमान गति",
            "Expected on route": "मार्ग पर अपेक्षित",
            "Good visibility": "अच्छी दृश्यता",
            "Good air quality": "अच्छी वायु गुणवत्ता",
            "Low allergy risk": "कम एलर्जी जोखिम",
            "Moderate exposure": "मध्यम जोखिम",
            "Moderately humid": "मध्यम नमी",
            "Good for outdoor activity": "बाहरी गतिविधि के लिए अच्छा",
            "Cooler conditions": "ठंडी स्थितियां",
            "Use sun protection": "धूप से बचाव करें",
            "Light breeze": "हल्की हवा",
            "Comfortable activity": "आरामदायक गतिविधि",
            "Check sea conditions": "समुद्र की स्थितियां जांचें",
            "WAVE HEIGHT": "लहरों की ऊंचाई",
            "TIDE": "ज्वार",
            "WATER TEMP": "पानी का तापमान",
            "SEA CONDITION": "समुद्र की स्थिति",
            "Travel conditions look good": "यात्रा की स्थितियां अच्छी हैं",
            "Saved destination": "सहेजा गया गंतव्य",
            "Carry a light raincoat": "हल्का रेनकोट रखें",
            "No severe warning": "कोई गंभीर चेतावनी नहीं",
            "School commute looks good": "स्कूल यात्रा अच्छी है",
            "Normal conditions": "सामान्य स्थितियां",
            "Low probability": "कम संभावना",
            "Monitor rainfall": "वर्षा पर नज़र रखें",
            "Expected today": "आज अपेक्षित",
            "Moderate moisture": "मध्यम नमी",
            "No frost expected": "पाला अपेक्षित नहीं",
            "Suitable conditions": "उपयुक्त स्थितियां",
            "ETA": "अनुमानित आगमन समय",
            "Event conditions need monitoring": "कार्यक्रम की स्थितियों पर नज़र रखें",
            "RAIN PROBABILITY": "बारिश की संभावना",
            "Monitor forecast": "पूर्वानुमान पर नज़र रखें",
            "COMFORT INDEX": "आराम सूचकांक",
            "Generally comfortable": "आम तौर पर आरामदायक",
            "Extended outlook": "विस्तृत पूर्वानुमान",
            "Moderate breeze": "मध्यम हवा",
            "PLAN YOUR JOURNEY": "अपनी यात्रा की योजना बनाएं",
            "Check weather conditions along your route before you start travelling.": "यात्रा शुरू करने से पहले अपने मार्ग की मौसम स्थितियां जांचें।",
            "FORECAST LOCATION": "पूर्वानुमान स्थान",
            "Saturday, September 5, 2026": "शनिवार, 5 सितंबर, 2026",
            "CURRENT CONDITIONS": "वर्तमान स्थितियां",
            "HOURLY FORECAST": "प्रति घंटा पूर्वानुमान",
            "7-DAY FORECAST": "7 दिन का पूर्वानुमान",
            "WEATHER FACTORS": "मौसम कारक",
            "What to keep in mind": "ध्यान रखने योग्य बातें",
            "Moderately humid conditions.": "मध्यम नमी की स्थितियां।",
            "WEATHER ALERTS": "मौसम चेतावनियां",
            "Important weather conditions and changes that may affect your plans.": "महत्वपूर्ण मौसम स्थितियां और बदलाव जो आपकी योजनाओं को प्रभावित कर सकते हैं।",
            "Active alerts": "सक्रिय चेतावनियां",
            "High priority": "उच्च प्राथमिकता",
            "Advisory": "सलाह",
            "ACTIVE ALERTS": "सक्रिय चेतावनियां",
            "Current weather warnings": "वर्तमान मौसम चेतावनियां",
            "HIGH PRIORITY": "उच्च प्राथमिकता",
            "Updated 10 min ago": "10 मिनट पहले अपडेट",
            "Rain may become intense in your area during the evening. Travel carefully and avoid waterlogged roads.": "शाम के समय आपके क्षेत्र में बारिश तेज हो सकती है। सावधानी से यात्रा करें और जलभराव वाली सड़कों से बचें।",
            "Rain probability: 70%": "बारिश की संभावना: 70%",
            "Expected: 6 PM – 8 PM": "अपेक्षित: 6 PM – 8 PM",
            "Updated 25 min ago": "25 मिनट पहले अपडेट",
            "Humidity is expected to remain high. Outdoor activities may feel more uncomfortable than usual.": "नमी अधिक रहने की संभावना है। बाहरी गतिविधियां सामान्य से अधिक असहज लग सकती हैं।",
            "Humidity: 78%": "नमी: 78%",
            "Valid: Today": "मान्य: आज",
            "PERSONALIZED ALERTS": "व्यक्तिगत चेतावनियां",
            "Relevant to your selected user type": "आपके चुने हुए उपयोगकर्ता प्रकार के लिए प्रासंगिक",
            "Rain may affect your evening journey": "बारिश आपकी शाम की यात्रा को प्रभावित कर सकती है",
            "Consider starting earlier or keeping an alternate route available.": "जल्दी शुरू करने या वैकल्पिक मार्ग तैयार रखने पर विचार करें।",
            "NOTIFICATION HISTORY": "सूचना इतिहास",
            "Recent updates": "हाल के अपडेट",
            "Rain probability increased": "बारिश की संभावना बढ़ी",
            "Rain probability changed from 40% to 70%.": "बारिश की संभावना 40% से 70% हो गई।",
            "Weather conditions updated": "मौसम स्थितियां अपडेट हुईं",
            "Find useful and weather-relevant places near your current location.": "अपने वर्तमान स्थान के पास उपयोगी और मौसम संबंधी स्थान खोजें।",
            "YOUR LOCATION": "आपका स्थान",
            "Detecting location...": "स्थान खोजा जा रहा है...",
            "FIND A PLACE": "स्थान खोजें",
            "You": "आप",
            "NEARBY RESULTS": "आस-पास के परिणाम",
            "Nearby General Hospital": "आस-पास का सामान्य अस्पताल",
            "Medical assistance available.": "चिकित्सा सहायता उपलब्ध है।",
            "Covered Waiting Area": "ढका हुआ प्रतीक्षा क्षेत्र",
            "Useful during rain or extreme weather.": "बारिश या खराब मौसम में उपयोगी।",
            "Nearby Fuel Station": "आस-पास का ईंधन स्टेशन",
            "Fuel and basic travel facilities.": "ईंधन और बुनियादी यात्रा सुविधाएं।",
            "Nearby Pharmacy": "आस-पास की फार्मेसी",
            "Medicines and basic healthcare items.": "दवाएं और बुनियादी स्वास्थ्य सामग्री।",
            "WEATHER SAFETY": "मौसम सुरक्षा",
            "Need somewhere safe to wait?": "रुकने के लिए सुरक्षित जगह चाहिए?",
            "During heavy rain or severe weather, Mausam can help identify nearby suitable places to stop.": "भारी बारिश या खराब मौसम में मौसम रुकने के लिए आस-पास उपयुक्त स्थान खोजने में मदद कर सकता है।",
            "SAVED PLACES": "सहेजे गए स्थान",
            "Save locations you frequently visit for quick access to weather information.": "मौसम की जानकारी जल्दी पाने के लिए अक्सर देखे जाने वाले स्थान सहेजें।",
            "NEW SAVED PLACE": "नया सहेजा गया स्थान",
            "Save a place to quickly check its weather and conditions later.": "बाद में उसका मौसम और स्थिति जल्दी देखने के लिए स्थान सहेजें।",
            "YOUR LOCATIONS": "आपके स्थान",
            "Saved places": "सहेजे गए स्थान",
            "Saved location": "सहेजा गया स्थान",
            "Remove": "हटाएं",
            "SAVED LOCATION BENEFIT": "सहेजे गए स्थान का लाभ",
            "Get weather information faster": "मौसम की जानकारी तेजी से पाएं",
            "Saved places can later be connected to live weather data, maps and personalized alerts.": "सहेजे गए स्थानों को बाद में लाइव मौसम डेटा, मैप्स और व्यक्तिगत चेतावनियों से जोड़ा जा सकता है।",
            "← Back": "← वापस",
            "Choose what matters most to you.": "अपने लिए सबसे महत्वपूर्ण चीज़ चुनें।",
            "Mausam will customize your homepage accordingly.": "मौसम आपके होमपेज को उसी के अनुसार बनाएगा।",
            "Edit Profile": "प्रोफ़ाइल संपादित करें",
            "Manage your Mausam profile information.": "अपनी मौसम प्रोफ़ाइल जानकारी प्रबंधित करें।",
            "Add a photo to personalize your profile.": "अपनी प्रोफ़ाइल को व्यक्तिगत बनाने के लिए फोटो जोड़ें।",
            "Create a new password to keep your Mausam account secure.": "अपने मौसम खाते को सुरक्षित रखने के लिए नया पासवर्ड बनाएं।",
            "New Password": "नया पासवर्ड",
            "Show": "दिखाएं",
            "Use at least 8 characters.": "कम से कम 8 अक्षरों का उपयोग करें।",
            "OR": "या",
            "HOME": "घर",
            "WORK": "काम",
            "COLLEGE": "कॉलेज",
            "FREQUENT": "अक्सर"
            ,"Moderate": "मध्यम"
            ,"ADVISORY": "सलाह"
            ,"NOTIFICATION PREFERENCES": "सूचना प्राथमिकताएं"
            ,"Keep receiving important updates": "महत्वपूर्ण अपडेट प्राप्त करते रहें"
            ,"Weather changes, journey risks and important alerts will be shown here.": "मौसम बदलाव, यात्रा जोखिम और महत्वपूर्ण चेतावनियां यहां दिखाई जाएंगी।"
            ,"Evening forecast has been updated.": "शाम का पूर्वानुमान अपडेट किया गया।"
            ,"Humidity increased": "नमी बढ़ गई"
            ,"Humidity increased to 78%.": "नमी 78% हो गई।"
            ,"10 minutes ago": "10 मिनट पहले"
            ,"25 minutes ago": "25 मिनट पहले"
            ,"1 hour ago": "1 घंटे पहले"
            ,"Choose what matters most to you. Mausam will customize your homepage accordingly.": "अपने लिए सबसे महत्वपूर्ण चीज़ चुनें। मौसम आपके होमपेज को उसी के अनुसार बनाएगा।"
            ,"AQI, pollen, UV index, humidity, allergy and skin-sensitivity information.": "AQI, पराग, UV सूचकांक, नमी, एलर्जी और त्वचा संवेदनशीलता की जानकारी।"
            ,"Running hours, sunrise, sunset, wind, UV and heat alerts.": "दौड़ने के समय, सूर्योदय, सूर्यास्त, हवा, UV और गर्मी की चेतावनियां।"
            ,"Tide timings, waves, sea conditions and water temperature.": "ज्वार का समय, लहरें, समुद्र की स्थितियां और पानी का तापमान।"
            ,"Destination weather, severe alerts, saved places and packing suggestions.": "गंतव्य का मौसम, गंभीर चेतावनियां, सहेजे गए स्थान और पैकिंग सुझाव।"
            ,"School commute conditions, rain alerts and severe weather warnings.": "स्कूल यात्रा की स्थितियां, बारिश की चेतावनियां और खराब मौसम की चेतावनियां।"
            ,"Rainfall, soil moisture, frost alerts and planting guidance.": "वर्षा, मिट्टी की नमी, पाले की चेतावनियां और रोपण मार्गदर्शन।"
            ,"Route weather, GPS, ETA, speed, traffic, visibility and storm alerts.": "मार्ग मौसम, GPS, ETA, गति, ट्रैफिक, दृश्यता और तूफान चेतावनियां।"
            ,"Extended forecasts, rain probability and outdoor comfort conditions.": "विस्तृत पूर्वानुमान, बारिश की संभावना और बाहरी आराम की स्थितियां।"
            ,"WORK": "काम"
            ,"COLLEGE": "कॉलेज"
            ,"SECURITY": "सुरक्षा"
            ,"ACCOUNT": "खाता"
            ,"Event planner": "कार्यक्रम योजनाकार"
            ,"RAIN": "बारिश"
            ,"HOSPITAL": "अस्पताल"
            ,"SHELTER": "आश्रय"
            ,"FUEL": "ईंधन"
            ,"PHARMACY": "फार्मेसी"
            ,"away": "दूर"
            ,"Sat": "शनि"
            ,"Today": "आज"
            ,"Sun": "रवि"
            ,"Mon": "सोम"
            ,"Tue": "मंगल"
            ,"Wed": "बुध"
            ,"Thu": "गुरु"
            ,"Fri": "शुक्र"
            ,"Sep": "सितंबर"
            ,"GPS active": "GPS सक्रिय है"
            ,"GPS unavailable": "GPS उपलब्ध नहीं है"
            ,"GPS permission required": "GPS अनुमति आवश्यक है"
            ,"Location unavailable": "स्थान उपलब्ध नहीं है"
            ,"Geolocation is not supported by this browser.": "इस ब्राउज़र में जियोलोकेशन समर्थित नहीं है।"
            ,"WEATHER FORECAST": "मौसम पूर्वानुमान"
            ,"View upcoming weather conditions and understand how they may affect your plans.": "आने वाली मौसम स्थितियां देखें और समझें कि वे आपकी योजनाओं को कैसे प्रभावित कर सकती हैं।"
            ,"Feels like 30°C": "महसूस 30°C"
            ,"Light breeze expected.": "हल्की हवा की संभावना।"
            ,"Protection recommended during prolonged outdoor activity.": "लंबे समय तक बाहरी गतिविधि के दौरान सुरक्षा की सलाह दी जाती है।"
            ,"AIR QUALITY": "वायु गुणवत्ता"
            ,"Sensitive individuals may want to reduce prolonged exposure.": "संवेदनशील लोग लंबे समय तक संपर्क कम कर सकते हैं।"
            ,"MAUSAM INSIGHT": "मौसम जानकारी"
            ,"Rain is more likely during the evening.": "शाम के समय बारिश की संभावना अधिक है।"
            ,"Consider planning outdoor activities earlier and keep rain protection available.": "बाहरी गतिविधियों की योजना पहले बनाएं और बारिश से बचाव तैयार रखें।"
            ,"WIND": "हवा"
        }
    };

    const languageNames = { en: "English", te: "Telugu", hi: "Hindi" };
    let currentLanguage = localStorage.getItem("mausamLanguage") || "en";
    const originalText = new WeakMap();

    function translate(value) {
        const dictionary = translations[currentLanguage] || {};
        if (dictionary[value]) {
            return dictionary[value];
        }

        return value
            .replace(/^(\d+(?:\.\d+)?\s*km) away$/, "$1 " + (dictionary.away || "away"))
            .replace(/^(\d+%) rain$/, "$1 " + (dictionary.Rain || "rain"))
            .replace(/^Sep (\d+)$/, (dictionary.Sep || "Sep") + " $1")
            .replace(/^GPS active • /, (dictionary["GPS active"] || "GPS active") + " • ");
    }

    function normalize(value) {
        return value.replace(/\s+/g, " ").trim();
    }

    function translateDocument(root) {
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        const textNodes = [];
        let node;

        while ((node = walker.nextNode())) {
            if (!node.parentElement || ["SCRIPT", "STYLE", "TEXTAREA"].includes(node.parentElement.tagName)) {
                continue;
            }
            textNodes.push(node);
        }

        textNodes.forEach(function (textNode) {
            if (!originalText.has(textNode)) {
                originalText.set(textNode, normalize(textNode.nodeValue));
            }
            const original = originalText.get(textNode);
            const translated = translate(original);
            if (original && translated !== original) {
                textNode.nodeValue = translated;
            } else if (original) {
                textNode.nodeValue = original;
            }
        });

        root.querySelectorAll("input[placeholder], button[title], [aria-label]").forEach(function (element) {
            ["placeholder", "title", "aria-label"].forEach(function (attribute) {
                if (element.hasAttribute(attribute)) {
                    const key = `data-language-${attribute}`;
                    if (!element.hasAttribute(key)) {
                        element.setAttribute(key, element.getAttribute(attribute));
                    }
                    element.setAttribute(attribute, translate(element.getAttribute(key)));
                }
            });
        });
    }

    function setActiveNavigation() {
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        const page = ["edit-profile.html", "change-password.html"].includes(currentPage)
            ? "settings.html"
            : currentPage;
        document.querySelectorAll(".sidebar .nav-item").forEach(function (item) {
            const target = item.getAttribute("href");
            const isCurrent = target === page || (page === "dashboard.html" && target === "dashboard.html");
            item.classList.toggle("active", isCurrent);
        });
    }

    function iconSvg(name) {
        const paths = {
            home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10Z"/>',
            journey: '<path d="M5 19 19 5M8 5h11v11"/>',
            forecast: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>',
            alerts: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
            nearby: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
            saved: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/>',
            settings: '<path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.7 1.7-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.1h-2.4v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L8 17l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H6v-2.4h.8a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L8 8.6l1.7-1.7.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6v-.1h2.4v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.7 1.7-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.1V14h-.1a1.7 1.7 0 0 0-1.6 1Z"/>',
            personalize: '<circle cx="12" cy="8" r="3"/><path d="M5 20a7 7 0 0 1 14 0M19 5v6M16 8h6"/>',
            logout: '<path d="M10 17l5-5-5-5M15 12H3M21 19V5a2 2 0 0 0-2-2h-5"/>',
            microphone: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8"/>',
            bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
            user: '<circle cx="12" cy="8" r="3"/><path d="M5 21a7 7 0 0 1 14 0"/>'
        };
        return `<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${paths[name] || paths.user}</svg>`;
    }

    function applyProfessionalIcons() {
        const navigationIcons = ["home", "journey", "forecast", "alerts", "nearby", "saved", "settings", "personalize", "logout"];
        document.querySelectorAll(".sidebar .nav-item .nav-icon, .sidebar .logout-button .nav-icon").forEach(function (element, index) {
            element.innerHTML = iconSvg(navigationIcons[index] || "user");
        });
        document.querySelectorAll(".notification-button").forEach(function (button) {
            button.innerHTML = iconSvg("bell");
            button.setAttribute("aria-label", "Notifications");
        });
        document.querySelectorAll(".voice-assistant-button").forEach(function (button) {
            button.innerHTML = iconSvg("microphone");
            button.setAttribute("aria-label", "Voice assistant");
        });
        document.querySelectorAll(".profile-button span").forEach(function (element) {
            element.innerHTML = iconSvg("user");
        });
        document.querySelectorAll(".notification-button").forEach(function (button) {
            const hasUnreadAlerts = localStorage.getItem("mausamUnreadAlerts") === "true";
            let badge = button.querySelector(".notification-badge");
            if (hasUnreadAlerts && !badge) {
                badge = document.createElement("span");
                badge.className = "notification-badge";
                badge.setAttribute("aria-label", "Unread alerts");
                button.appendChild(badge);
            } else if (!hasUnreadAlerts && badge) {
                badge.remove();
            }
        });
    }

    function bindAlertActions() {
        document.querySelectorAll(".notification-button").forEach(function (button) {
            if (button.dataset.bound === "true") {
                return;
            }
            button.dataset.bound = "true";
            button.addEventListener("click", function () {
                window.location.href = "alerts.html";
            });
        });
    }

    function ensureVoiceScript() {
        if (!document.querySelector("script[src='voice.js']")) {
            const script = document.createElement("script");
            script.src = "voice.js";
            document.body.appendChild(script);
        } else if (window.initVoiceAssistant) {
            window.initVoiceAssistant();
        }
    }

    function addSharedTopbar() {
        const main = document.querySelector("main");
        if (!main || !document.querySelector(".sidebar") || main.classList.contains("main-content") || main.querySelector(".topbar")) {
            return;
        }

        const topbar = document.createElement("header");
        topbar.className = "topbar shared-topbar";
        topbar.innerHTML = `
            <div class="topbar-actions">
                <button class="voice-assistant-button" id="voiceAssistantButton" type="button" title="Voice assistant" aria-label="Voice assistant"><span class="voice-icon-placeholder"></span></button>
                <span class="voice-assistant-status" aria-live="polite"></span>
                <button class="notification-button" type="button" title="Notifications" aria-label="Notifications"><span class="notification-icon-placeholder"></span></button>
                <button class="profile-button" type="button" title="Profile" aria-label="Profile"><span>U</span></button>
            </div>
        `;

        main.prepend(topbar);
        applyProfessionalIcons();
        bindAlertActions();
        topbar.querySelector(".profile-button").addEventListener("click", function () {
            window.location.href = "edit-profile.html";
        });
    }

    function applyLanguage() {
        document.documentElement.dataset.theme =
            localStorage.getItem("mausamTheme") || "dark";
        document.documentElement.lang = currentLanguage;
        translateDocument(document.body);
        setActiveNavigation();
        addSharedTopbar();
        applyProfessionalIcons();
        bindAlertActions();
        ensureVoiceScript();
        translateDocument(document.querySelector(".shared-topbar") || document.body);
        document.querySelectorAll("select#language, select#languageSelect").forEach(function (select) {
            select.value = currentLanguage;
        });
    }

    function selectLanguage(language) {
        if (!languageNames[language]) {
            return;
        }
        currentLanguage = language;
        localStorage.setItem("mausamLanguage", language);
        applyLanguage();
        document.dispatchEvent(new CustomEvent("mausam-language-changed", { detail: { language: language } }));
    }

    window.MausamLanguage = {
        get: function () { return currentLanguage; },
        translate: translate,
        select: selectLanguage,
        apply: applyLanguage
    };

    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll("select#language, select#languageSelect").forEach(function (select) {
            select.value = currentLanguage;
            select.addEventListener("change", function () {
                selectLanguage(this.value);
            });
        });

        const sidebar = document.querySelector(".sidebar");
        if (sidebar) {
            sidebar.addEventListener("wheel", function (event) {
                event.preventDefault();
                event.stopPropagation();
            }, { passive: false });
        }

        applyLanguage();
    });

    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            mutation.addedNodes.forEach(function (node) {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    translateDocument(node);
                }
            });
        });
    });

    observer.observe(document.documentElement, { childList: true, subtree: true });
})();
