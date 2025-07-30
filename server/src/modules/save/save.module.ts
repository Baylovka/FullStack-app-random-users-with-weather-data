import { Module } from '@nestjs/common';
import { SaveController } from './save.controller';
import { SaveService } from './save.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SaveUser, SaveUserSchema } from './model/save-user.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: SaveUser.name, schema: SaveUserSchema }])
    ],
    controllers: [SaveController],
    providers: [SaveService],
})
export class SaveModule { }
