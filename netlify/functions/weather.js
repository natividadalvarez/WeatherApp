exports.handler = async function() {
    let currentWeather = {
    "coord": {
      "lon": 81.64,
      "lat": 35.07
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 1.42,
      "feels_like": -7.83,
      "temp_min": 1.42,
      "temp_max": 1.42,
      "pressure": 1035,
      "humidity": 22,
      "sea_level": 1035,
      "grnd_level": 539
    },
    "visibility": 10000,
    "wind": {
      "speed": 4.34,
      "deg": 327,
      "gust": 3.83
    },
    "clouds": {
      "all": 0
    },
    "dt": 1763244204,
    "sys": {
      "country": "CN",
      "sunrise": 1763255337,
      "sunset": 1763292459
    },
    "timezone": 28800,
    "id": 1279873,
    "name": "Togatax",
    "cod": 200
  }

  let hourlyWeather = {
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
    {
      "dt": 1763251200,
      "main": {
        "temp": 0.39,
        "feels_like": -8.79,
        "temp_min": 0.39,
        "temp_max": 0.39,
        "pressure": 1036,
        "sea_level": 1036,
        "grnd_level": 539,
        "humidity": 22,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.21,
        "deg": 342,
        "gust": 3.38
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-11-16 00:00:00"
    },
    {
      "dt": 1763262000,
      "main": {
        "temp": 3.74,
        "feels_like": 3.74,
        "temp_min": 3.74,
        "temp_max": 10.45,
        "pressure": 1036,
        "sea_level": 1036,
        "grnd_level": 541,
        "humidity": 20,
        "temp_kf": -3.73
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 2.24,
        "deg": 305,
        "gust": 2.44
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-11-16 03:00:00"
    },
    {
      "dt": 1763272800,
      "main": {
        "temp": 12.15,
        "feels_like": 1.36,
        "temp_min": 12.15,
        "temp_max": 18.01,
        "pressure": 1033,
        "sea_level": 1033,
        "grnd_level": 541,
        "humidity": 17,
        "temp_kf": -3.26
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.23,
        "deg": 249,
        "gust": 11.32
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-11-16 06:00:00"
    },
    {
      "dt": 1763283600,
      "main": {
        "temp": 21.56,
        "feels_like": 8.96,
        "temp_min": 21.56,
        "temp_max": 21.56,
        "pressure": 1028,
        "sea_level": 1028,
        "grnd_level": 540,
        "humidity": 13,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 14.81,
        "deg": 274,
        "gust": 17.34
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-11-16 09:00:00"
    },
    {
      "dt": 1763294400,
      "main": {
        "temp": 14.7,
        "feels_like": 4.41,
        "temp_min": 14.7,
        "temp_max": 14.7,
        "pressure": 1031,
        "sea_level": 1031,
        "grnd_level": 540,
        "humidity": 18,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.27,
        "deg": 294,
        "gust": 8.79
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-11-16 12:00:00"
    },
    {
      "dt": 1763305200,
      "main": {
        "temp": 9.73,
        "feels_like": 2.93,
        "temp_min": 9.73,
        "temp_max": 9.73,
        "pressure": 1033,
        "sea_level": 1033,
        "grnd_level": 541,
        "humidity": 19,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 32
      },
      "wind": {
        "speed": 3.65,
        "deg": 306,
        "gust": 3.49
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-11-16 15:00:00"
    },
    {
      "dt": 1763316000,
      "main": {
        "temp": 7.92,
        "feels_like": 7.92,
        "temp_min": 7.92,
        "temp_max": 7.92,
        "pressure": 1033,
        "sea_level": 1033,
        "grnd_level": 541,
        "humidity": 19,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 40
      },
      "wind": {
        "speed": 2.91,
        "deg": 309,
        "gust": 2.46
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-11-16 18:00:00"
    },
    {
      "dt": 1763326800,
      "main": {
        "temp": 5.79,
        "feels_like": -0.47,
        "temp_min": 5.79,
        "temp_max": 5.79,
        "pressure": 1033,
        "sea_level": 1033,
        "grnd_level": 540,
        "humidity": 19,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 44
      },
      "wind": {
        "speed": 3.06,
        "deg": 305,
        "gust": 2.66
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-11-16 21:00:00"
    },
    {
      "dt": 1763337600,
      "main": {
        "temp": 4.64,
        "feels_like": 4.64,
        "temp_min": 4.64,
        "temp_max": 4.64,
        "pressure": 1033,
        "sea_level": 1033,
        "grnd_level": 540,
        "humidity": 19,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 30
      },
      "wind": {
        "speed": 2.8,
        "deg": 306,
        "gust": 2.66
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-11-17 00:00:00"
    },
    {
      "dt": 1763348400,
      "main": {
        "temp": 9.97,
        "feels_like": 9.97,
        "temp_min": 9.97,
        "temp_max": 9.97,
        "pressure": 1033,
        "sea_level": 1033,
        "grnd_level": 541,
        "humidity": 17,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 37
      },
      "wind": {
        "speed": 2.95,
        "deg": 266,
        "gust": 3.91
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-11-17 03:00:00"
    },
    {
      "dt": 1763359200,
      "main": {
        "temp": 17.02,
        "feels_like": 8.82,
        "temp_min": 17.02,
        "temp_max": 17.02,
        "pressure": 1027,
        "sea_level": 1027,
        "grnd_level": 540,
        "humidity": 14,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 68
      },
      "wind": {
        "speed": 5.59,
        "deg": 230,
        "gust": 7.4
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-11-17 06:00:00"
    },
    {
      "dt": 1763370000,
      "main": {
        "temp": 22.1,
        "feels_like": 14.36,
        "temp_min": 22.1,
        "temp_max": 22.1,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 538,
        "humidity": 16,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 89
      },
      "wind": {
        "speed": 6.08,
        "deg": 235,
        "gust": 10.51
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-11-17 09:00:00"
    },
    {
      "dt": 1763380800,
      "main": {
        "temp": 16.34,
        "feels_like": 8.74,
        "temp_min": 16.34,
        "temp_max": 16.34,
        "pressure": 1024,
        "sea_level": 1024,
        "grnd_level": 539,
        "humidity": 23,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 58
      },
      "wind": {
        "speed": 4.94,
        "deg": 299,
        "gust": 4.88
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-11-17 12:00:00"
    },
    {
      "dt": 1763391600,
      "main": {
        "temp": 12.43,
        "feels_like": 3.49,
        "temp_min": 12.43,
        "temp_max": 12.43,
        "pressure": 1027,
        "sea_level": 1027,
        "grnd_level": 539,
        "humidity": 31,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.5,
        "deg": 3,
        "gust": 4.23
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-11-17 15:00:00"
    },
    {
      "dt": 1763402400,
      "main": {
        "temp": 10.29,
        "feels_like": 0.72,
        "temp_min": 10.29,
        "temp_max": 10.29,
        "pressure": 1029,
        "sea_level": 1029,
        "grnd_level": 539,
        "humidity": 47,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 29
      },
      "wind": {
        "speed": 5.7,
        "deg": 12,
        "gust": 5.06
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-11-17 18:00:00"
    },
    {
      "dt": 1763413200,
      "main": {
        "temp": 8.92,
        "feels_like": 0.19,
        "temp_min": 8.92,
        "temp_max": 8.92,
        "pressure": 1028,
        "sea_level": 1028,
        "grnd_level": 538,
        "humidity": 56,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 4.83,
        "deg": 13,
        "gust": 4.25
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-11-17 21:00:00"
    },
    {
      "dt": 1763424000,
      "main": {
        "temp": 6.66,
        "feels_like": -2.24,
        "temp_min": 6.66,
        "temp_max": 6.66,
        "pressure": 1030,
        "sea_level": 1030,
        "grnd_level": 539,
        "humidity": 62,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 93
      },
      "wind": {
        "speed": 4.68,
        "deg": 2,
        "gust": 3.91
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-11-18 00:00:00"
    },
    {
      "dt": 1763434800,
      "main": {
        "temp": 10.4,
        "feels_like": 4.71,
        "temp_min": 10.4,
        "temp_max": 10.4,
        "pressure": 1030,
        "sea_level": 1030,
        "grnd_level": 539,
        "humidity": 54,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 59
      },
      "wind": {
        "speed": 3.09,
        "deg": 359,
        "gust": 2.62
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-11-18 03:00:00"
    },
    {
      "dt": 1763445600,
      "main": {
        "temp": 16.59,
        "feels_like": 10.06,
        "temp_min": 16.59,
        "temp_max": 16.59,
        "pressure": 1025,
        "sea_level": 1025,
        "grnd_level": 539,
        "humidity": 39,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 30
      },
      "wind": {
        "speed": 4.16,
        "deg": 226,
        "gust": 5.75
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-11-18 06:00:00"
    },
    {
      "dt": 1763456400,
      "main": {
        "temp": 21.34,
        "feels_like": 11.82,
        "temp_min": 21.34,
        "temp_max": 21.34,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 537,
        "humidity": 17,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 8.05,
        "deg": 272,
        "gust": 16.67
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-11-18 09:00:00"
    },
    {
      "dt": 1763467200,
      "main": {
        "temp": 14.76,
        "feels_like": 4.3,
        "temp_min": 14.76,
        "temp_max": 14.76,
        "pressure": 1024,
        "sea_level": 1024,
        "grnd_level": 537,
        "humidity": 26,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.47,
        "deg": 327,
        "gust": 8.39
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-11-18 12:00:00"
    },
    {
      "dt": 1763478000,
      "main": {
        "temp": 11.19,
        "feels_like": 2.37,
        "temp_min": 11.19,
        "temp_max": 11.19,
        "pressure": 1027,
        "sea_level": 1027,
        "grnd_level": 538,
        "humidity": 32,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.21,
        "deg": 344,
        "gust": 3.98
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-11-18 15:00:00"
    },
    {
      "dt": 1763488800,
      "main": {
        "temp": 8.62,
        "feels_like": 0.84,
        "temp_min": 8.62,
        "temp_max": 8.62,
        "pressure": 1027,
        "sea_level": 1027,
        "grnd_level": 537,
        "humidity": 33,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.14,
        "deg": 332,
        "gust": 3.49
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-11-18 18:00:00"
    },
    {
      "dt": 1763499600,
      "main": {
        "temp": 6.64,
        "feels_like": -0.92,
        "temp_min": 6.64,
        "temp_max": 6.64,
        "pressure": 1027,
        "sea_level": 1027,
        "grnd_level": 537,
        "humidity": 31,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 1
      },
      "wind": {
        "speed": 3.83,
        "deg": 336,
        "gust": 2.89
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-11-18 21:00:00"
    },
    {
      "dt": 1763510400,
      "main": {
        "temp": 5.32,
        "feels_like": -0.85,
        "temp_min": 5.32,
        "temp_max": 5.32,
        "pressure": 1026,
        "sea_level": 1026,
        "grnd_level": 537,
        "humidity": 26,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 1
      },
      "wind": {
        "speed": 3,
        "deg": 315,
        "gust": 2.64
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-11-19 00:00:00"
    },
    {
      "dt": 1763521200,
      "main": {
        "temp": 10.22,
        "feels_like": 10.22,
        "temp_min": 10.22,
        "temp_max": 10.22,
        "pressure": 1026,
        "sea_level": 1026,
        "grnd_level": 537,
        "humidity": 21,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.83,
        "deg": 280,
        "gust": 2.19
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-11-19 03:00:00"
    },
    {
      "dt": 1763532000,
      "main": {
        "temp": 17.73,
        "feels_like": 8.29,
        "temp_min": 17.73,
        "temp_max": 17.73,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 537,
        "humidity": 20,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7,
        "deg": 233,
        "gust": 10.02
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-11-19 06:00:00"
    },
    {
      "dt": 1763542800,
      "main": {
        "temp": 21.45,
        "feels_like": 10.36,
        "temp_min": 21.45,
        "temp_max": 21.45,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 536,
        "humidity": 18,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 10.49,
        "deg": 261,
        "gust": 13.04
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-11-19 09:00:00"
    },
    {
      "dt": 1763553600,
      "main": {
        "temp": 15.31,
        "feels_like": 4.77,
        "temp_min": 15.31,
        "temp_max": 15.31,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 536,
        "humidity": 26,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.72,
        "deg": 288,
        "gust": 8.97
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-11-19 12:00:00"
    },
    {
      "dt": 1763564400,
      "main": {
        "temp": 12.29,
        "feels_like": 4.75,
        "temp_min": 12.29,
        "temp_max": 12.29,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 536,
        "humidity": 29,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.38,
        "deg": 318,
        "gust": 3.38
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-11-19 15:00:00"
    },
    {
      "dt": 1763575200,
      "main": {
        "temp": 9.46,
        "feels_like": 1.98,
        "temp_min": 9.46,
        "temp_max": 9.46,
        "pressure": 1024,
        "sea_level": 1024,
        "grnd_level": 536,
        "humidity": 33,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.05,
        "deg": 305,
        "gust": 3.65
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-11-19 18:00:00"
    },
    {
      "dt": 1763586000,
      "main": {
        "temp": 7.14,
        "feels_like": -1.64,
        "temp_min": 7.14,
        "temp_max": 7.14,
        "pressure": 1024,
        "sea_level": 1024,
        "grnd_level": 536,
        "humidity": 35,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.65,
        "deg": 297,
        "gust": 4.21
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-11-19 21:00:00"
    },
    {
      "dt": 1763596800,
      "main": {
        "temp": 5.14,
        "feels_like": -2.65,
        "temp_min": 5.14,
        "temp_max": 5.14,
        "pressure": 1025,
        "sea_level": 1025,
        "grnd_level": 535,
        "humidity": 34,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 3.83,
        "deg": 288,
        "gust": 3.62
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-11-20 00:00:00"
    },
    {
      "dt": 1763607600,
      "main": {
        "temp": 9.45,
        "feels_like": 1.94,
        "temp_min": 9.45,
        "temp_max": 9.45,
        "pressure": 1025,
        "sea_level": 1025,
        "grnd_level": 536,
        "humidity": 28,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 4.05,
        "deg": 264,
        "gust": 6.02
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-11-20 03:00:00"
    },
    {
      "dt": 1763618400,
      "main": {
        "temp": 17.33,
        "feels_like": 5.38,
        "temp_min": 17.33,
        "temp_max": 17.33,
        "pressure": 1019,
        "sea_level": 1019,
        "grnd_level": 536,
        "humidity": 23,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 10.25,
        "deg": 239,
        "gust": 16.02
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-11-20 06:00:00"
    },
    {
      "dt": 1763629200,
      "main": {
        "temp": 20.98,
        "feels_like": 8.38,
        "temp_min": 20.98,
        "temp_max": 20.98,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 534,
        "humidity": 16,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 16.49,
        "deg": 276,
        "gust": 26.91
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2025-11-20 09:00:00"
    },
    {
      "dt": 1763640000,
      "main": {
        "temp": 14.81,
        "feels_like": 4.15,
        "temp_min": 14.81,
        "temp_max": 14.81,
        "pressure": 1017,
        "sea_level": 1017,
        "grnd_level": 534,
        "humidity": 22,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.72,
        "deg": 290,
        "gust": 9.51
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-11-20 12:00:00"
    },
    {
      "dt": 1763650800,
      "main": {
        "temp": 11.16,
        "feels_like": -0.47,
        "temp_min": 11.16,
        "temp_max": 11.16,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 535,
        "humidity": 20,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 7.92,
        "deg": 312,
        "gust": 9.15
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-11-20 15:00:00"
    },
    {
      "dt": 1763661600,
      "main": {
        "temp": 7.16,
        "feels_like": -2.97,
        "temp_min": 7.16,
        "temp_max": 7.16,
        "pressure": 1023,
        "sea_level": 1023,
        "grnd_level": 535,
        "humidity": 24,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.68,
        "deg": 352,
        "gust": 3.11
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-11-20 18:00:00"
    },
    {
      "dt": 1763672400,
      "main": {
        "temp": 4.3,
        "feels_like": -6,
        "temp_min": 4.3,
        "temp_max": 4.3,
        "pressure": 1025,
        "sea_level": 1025,
        "grnd_level": 535,
        "humidity": 28,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 5.39,
        "deg": 346,
        "gust": 4.25
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2025-11-20 21:00:00"
    }
  ],
  "city": {
    "id": 1279873,
    "name": "Togatax",
    "coord": {
      "lat": 35.07,
      "lon": 81.64
    },
    "country": "CN",
    "population": 0,
    "timezone": 28800,
    "sunrise": 1763255337,
    "sunset": 1763292459
  }
}

    // NOTE: There can technically be many weather events in the weather array,
    // but for the purposes of this challenge, we'll just display the first 
    let currentWeatherFormatted = {
      dt: currentWeather.dt,
      weatherEvent: currentWeather.weather.length > 0? currentWeather.weather[0].main: "N/A",
      icon: currentWeather.weather.length > 0? currentWeather.weather[0].icon: "",
      temp: currentWeather.main.temp, 
      feelslike: currentWeather.main.feels_like,
      humidity: currentWeather.main.humidity,
      windSpeed: currentWeather.wind? currentWeather.wind.speed: 0,
      visibility: currentWeather.visibility,
      city: currentWeather.name,
      country: currentWeather.sys.country
    }

    let hourlyWeatherFormatted = hourlyWeather.list.map(datum=>{
     return {
      dt: datum.dt,
      weatherEvent: datum.weather.length > 0? datum.weather[0].main: "N/A",
      temp: datum.main.temp
     } 
    });
    return {
        statusCode: 200,
        body: JSON.stringify({
            currentWeather: currentWeatherFormatted,
            hourlyWeather: hourlyWeatherFormatted
        })
    }
} 