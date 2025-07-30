import { Controller, Get, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { GetUsersResponse } from './response/get-users.response';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    async getUsers(@Query('count') count = 8): Promise<GetUsersResponse[]> {
        return this.usersService.getUsersWithWeather(Number(count));
    }
}
