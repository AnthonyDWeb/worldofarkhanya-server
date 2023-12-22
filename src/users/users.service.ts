import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('Users') private UsersModel: Model<UserDto>,
    private jwtService: JwtService,
  ) {}

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

  async update(id: String, updateUserDto: any) {

    if (updateUserDto?.currentPassword) {
      const user = await this.UsersModel.findById(id);
      const isMatch =
        user &&
        (await bcrypt.compare(updateUserDto.currentPassword, user.password));
      updateUserDto.password =
        isMatch && (await bcrypt.hash(updateUserDto.newPassword, 15));
    }
    console.log("updateUserDto",updateUserDto);
    const user = await this.UsersModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
      password: 0,
    });
    const payload = { username: user.username, sub: user._id };
    return {
      user: user,
      access_token: this.jwtService.sign(payload),
    };
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
