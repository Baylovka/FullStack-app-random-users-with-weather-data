import { Injectable } from '@nestjs/common';
import { getWeatherForCoordinates } from 'src/common/utils/weather.util';
import { GetUsersResponse } from './response/get-users.response';

@Injectable()
export class UsersService {
    async getUsersWithWeather(count: number): Promise<GetUsersResponse[]> {
        const res = await fetch(`https://randomuser.me/api/?results=${count}`);
        const data = await res.json();

        const users = [];
        for (const user of data.results) {
            const lat = user.location.coordinates.latitude;
            const lon = user.location.coordinates.longitude;

            const weather = await getWeatherForCoordinates(lat, lon);

            users.push({
                id: user.login.uuid,
                name: `${user.name.first} ${user.name.last}`,
                gender: user.gender,
                location: `${user.location.country}, ${user.location.city}`,
                email: user.email,
                image: user.picture.large,
                coordinates: {
                    latitude: lat,
                    longitude: lon,
                },
                weather,
            });
        }

        return users;
    }
}