import { ObjectId } from "mongoose";

export class UserDto {
    _id?: ObjectId;
    profilImage?: string;
    username: string;
    password: string;
    description?: string;
}