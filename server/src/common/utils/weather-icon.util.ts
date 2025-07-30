export function getWeatherIconPath(code: number) {
    const apiUrl = process.env.API_URL;
    const baseUrl = `${apiUrl}/static/weather-icons`;

    switch (code) {
        case 0:
            return `${baseUrl}/sun.png`;
        case 1:
        case 2:
            return `${baseUrl}/mainly-clear.png`;
        case 3:
            return `${baseUrl}/overcast.png`;
        case 45:
        case 48:
            return `${baseUrl}/fog.png`;
        case 51:
        case 53:
        case 55:
        case 56:
        case 57:
            return `${baseUrl}/drizzle.png`;
        case 61:
        case 63:
        case 65:
            return `${baseUrl}/rain.png`;
        case 71:
        case 73:
        case 75:
        case 77:
            return `${baseUrl}/snow.png`;
        case 80:
        case 81:
        case 82:
        case 85:
        case 86:
        case 66:
        case 67:
            return `${baseUrl}/rain-showers.png`;
        case 95:
        case 96:
        case 99:
            return `${baseUrl}/thunderstorm.png`;
    }
}