import { Controller, Get, Post, Delete, Body, Param, UsePipes, ValidationPipe, HttpCode } from '@nestjs/common';
import { SaveService } from './save.service';
import { CreateSaveUserDto } from './dto/create-save-user.dto';
import { SaveUserResponse } from './response/save-user.response';

@Controller('save')
export class SaveController {
    constructor(private readonly saveService: SaveService) { }

    @Get()
    async getAll(): Promise<SaveUserResponse[]> {
        return this.saveService.getAll();
    }

    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true }))
    async addUser(@Body() dto: CreateSaveUserDto): Promise<SaveUserResponse> {
        return this.saveService.addUser(dto);
    }

    @Delete(':id')
    @HttpCode(204)
    async removeUser(@Param('id') id: string): Promise<void> {
        return this.saveService.removeUser(id);
    }
}
