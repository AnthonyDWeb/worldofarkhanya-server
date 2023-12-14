import { Injectable, UseGuards } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('Users') private UsersModel: Model<UserDto>) {}

  create(createUserDto: UserDto) {
    const createdUsers = new this.UsersModel(createUserDto);
    return createdUsers.save();
  }

  async findAll() {
    return await this.UsersModel.find({}, { password: 0 });
  }

  async findOne(id: String) {
    return await this.UsersModel.findById(id, { password: 0 });
  }
  async findOneByUsername(username: string) {
    return await this.UsersModel.findOne({ username: username });
  }

  async update(id: String, updateUserDto: UpdateUserDto) {
    return await this.UsersModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
      password: 0
    });
  }
  async updateField(category: String, data: any) {
    return await this.UsersModel.updateMany(
      {},
      { ['$' + category]: { [data.field]: data.newValue } },
    );
  }

  async remove(id: String) {
    return await this.UsersModel.findByIdAndDelete(id);
  }
}
