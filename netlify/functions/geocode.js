exports.handler = async function(){
    /*
    endpoint: https://api.openweathermap.org/geo/1.0/direct?q={city_name},&appid={API_key}&limit={count:1} 
    returns lat, lon and other data for city that most closely matches query
    if limit is not specified, it returns 1 city by default
    q = string of city,state code,country code separated by comma
    state code is only for US locations, ues ISO 3166 country codes
    if no matches with query, response is empty array
    */

    exampleRes = [
        {
            "name": "San Jose",
            "local_names": {
              "ru": "Сан-Хосе",
              "en": "San Jose",
              "zh": "聖荷西",
              "vi": "San Jose",
              "uk": "Сан-Хосе",
              "ar": "سان خوسيه",
              "oc": "San José",
              "es": "San José",
              "pt": "San José",
              "am": "ሳን ሆዜ",
              "gl": "San Xosé",
              "eo": "San-Joseo"
            },
            "lat": 37.3361663,
            "lon": -121.890591,
            "country": "US",
            "state": "California"
        },
        {
            "name": "San José",
            "local_names": {
                "os": "Сан-Хосе",
                "en": "San José",
                "uk": "Сан-Хосе",
                "az": "San-Xose",
                "ja": "サンホセ",
                "am": "ሳን ሆዜ",
                "fr": "San José",
                "lt": "San Chosė",
                "nn": "San José i Costa Rica",
                "gl": "San Xosé, Costa Rica",
                "ur": "سان ہوزے",
                "be": "Сан-Хасэ",
                "nl": "San José",
                "is": "San José",
                "bs": "San Jose, Kostarika",
                "pl": "San José",
                "ka": "სან-ხოსე",
                "zh": "聖荷西",
                "sw": "San Jose",
                "fa": "سان خوزه",
                "eo": "San-Joseo",
                "mk": "Сан Хозе",
                "ht": "San Jozé",
                "de": "San José",
                "el": "Σαν Χοσέ",
                "mr": "सान होजे, कोस्टा रिका",
                "hu": "San José",
                "ru": "Сан-Хосе",
                "hy": "Սան Խոսե",
                "bo": "སན་ཇོ་སེ།",
                "bn": "স্যান হোসে, কোস্টা রিকা",
                "sv": "San José, Costa Rica",
                "ta": "சான் ஹொசே, கோஸ்ட்டா ரிக்கா",
                "es": "San José",
                "ug": "سان خوسې",
                "hi": "सान होज़े",
                "io": "San Jose",
                "lv": "Sanhosē",
                "th": "ซันโฮเซ",
                "ko": "산호세",
                "bg": "Сан Хосе",
                "sr": "Сан Хосе",
                "ar": "سان خوسيه، كوستاريكا",
                "he": "סן חוסה"
           },
           "lat": 9.9325427,
           "lon": -84.0795782,
           "country": "CR"
        },
        {
            "name": "San Jose",
            "lat": 12.0612933,
            "lon": 121.9565754,
            "country": "PH",
            "state": "Romblon"
        },
        {
            "name": "Sant Josep de sa Talaia",
            "local_names": {
                "ca": "Sant Josep de sa Talaia",
                "es": "San José"
            },
            "lat": 38.9043608,
            "lon": 1.3178098,
            "country": "ES",
            "state": "Balearic Islands"
         },
        {
            "name": "San Jose",
            "local_names": {
                "en": "San Jose"
            },
            "lat": 40.305598,
            "lon": -89.6028829,
            "country": "US",
            "state": "Illinois"
        }
    ]

    return {
        statusCode: 200,
        body: JSON.stringify(exampleRes)
    }
}