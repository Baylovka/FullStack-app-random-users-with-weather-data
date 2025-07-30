import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SaveUserDocument = SaveUser & Document;

@Schema({ timestamps: true })
export class SaveUser {
    @Prop({ required: true, unique: true })
    id: string;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    gender: string;

    @Prop({ required: true })
    location: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    image: string;

    @Prop({
        type: {
            latitude: { type: String, required: true },
            longitude: { type: String, required: true },
        },
        required: true,
        _id: false,
    })
    coordinates: {
        latitude: string;
        longitude: string;
    };
}

export const SaveUserSchema = SchemaFactory.createForClass(SaveUser);
