export class GetUsersResponse {
    id: string;
    name: string;
    gender: string;
    location: string;
    email: string;
    image: string;
    coordinates: {
        latitude: string;
        longitude: string;
    };
    weather: {
        temp: number;
        min: number;
        max: number;
        icon: string;
    };
}
