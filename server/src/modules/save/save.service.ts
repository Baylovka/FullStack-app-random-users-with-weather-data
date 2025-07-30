import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SaveUser, SaveUserDocument } from './model/save-user.schema';
import { CreateSaveUserDto } from './dto/create-save-user.dto';
import { SaveUserResponse } from './response/save-user.response';
import { getWeatherForCoordinates } from 'src/common/utils/weather.util';

@Injectable()
export class SaveService {
    constructor(
        @InjectModel(SaveUser.name) private saveUserModel: Model<SaveUserDocument>,
    ) { }

    async addUser(dto: CreateSaveUserDto): Promise<SaveUserResponse> {
        const exists = await this.saveUserModel.findOne({ id: dto.id });
        if (exists) {
            throw new ConflictException('User already saved');
        }
        const created = await this.saveUserModel.create(dto);
        return this.toResponse(created);
    }

    async removeUser(id: string): Promise<void> {
        const result = await this.saveUserModel.deleteOne({ id });
        if (result.deletedCount === 0) {
            throw new NotFoundException('User not found');
        }
    }

    async getAll(): Promise<SaveUserResponse[]> {
        const users = await this.saveUserModel.find();
        const result: SaveUserResponse[] = [];
        for (const user of users) {
            const lat = user.coordinates.latitude;
            const lon = user.coordinates.longitude;
            const weather = await getWeatherForCoordinates(lat, lon);
            result.push({
                ...this.toResponse(user),
                weather,
            });
        }
        return result;
    }

    private toResponse(user: SaveUser): SaveUserResponse {
        return {
            id: user.id,
            name: user.name,
            gender: user.gender,
            location: user.location,
            email: user.email,
            image: user.image,
            coordinates: user.coordinates,
        };
    }
}
