import { IsString, IsNotEmpty, IsEmail, ValidateNested, IsObject } from 'class-validator';
import { Type } from 'class-transformer';

class CoordinatesDto {
    @IsString()
    @IsNotEmpty()
    latitude: string;

    @IsString()
    @IsNotEmpty()
    longitude: string;
}

export class CreateSaveUserDto {
    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    gender: string;

    @IsString()
    @IsNotEmpty()
    location: string;

    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    image: string;

    @IsObject()
    @ValidateNested()
    @Type(() => CoordinatesDto)
    coordinates: CoordinatesDto;
}
