import { ObjectId } from "mongoose";

export class UserDto {
    _id?: ObjectId;
    username: string;
    password: string;
    description?: string;
}