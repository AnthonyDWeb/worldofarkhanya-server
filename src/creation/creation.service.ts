import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ClassDto } from './dto/class.dto';
import { Model } from 'mongoose';
import { RaceDto } from './dto/race.dto';
import { StatsDto } from './dto/stats.dto';
import { CharacterDto } from './dto/character.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class CreationService {
  constructor(
    private usersService: UsersService,
    @InjectModel('Characters') private charactersModel: Model<CharacterDto>,
    @InjectModel('Classes') private classesModel: Model<ClassDto>,
    @InjectModel('Races') private racesModel: Model<RaceDto>,
    @InjectModel('Stats') private statsModel: Model<StatsDto>,
  ) {}
  async create(collection: string, userID: string, CreationDto: any) {
    const collectionModel = this[`${collection}Model`];
    const creationData = new collectionModel(CreationDto);

    const user = await this.usersService.findOne(userID);

    user.creations[collection] = user.creations[collection].length
      ? [...user.creations[collection], creationData]
      : [creationData];

    const updatedUser = await this.usersService.update(userID, {
      creations: user.creations,
    });

    if (updatedUser) {
      creationData.save();
      console.log('user updated');
    } else {
      console.log('error to user uodate');
    }
    return {
      userToUpdate: updatedUser,
      creation: creationData,
    };
  }

  async findAll(creation: string) {
    const collectionModel = this[`${creation}Model`];
    const creationData = await collectionModel.find();
    return {
      creations: creationData,
      message: `This action returns all ${creation} creations`,
    };
  }

  async findOne(creation: string, id: string) {
    const collectionModel = this[`${creation}Model`];
    const creationData = await collectionModel.findById(id);
    return {
      creations: creationData,
      message: `This action returns all ${creation} creations`,
    };
  }

  async update(creation: string, id: string, updateCreationDto: any) {
    return `This action updates a #${id} creation`;
  }

  async updateField(category: String, data: any) {
    // find a way to get collection
    // return await this.CreationsModel.updateMany(
    //   {},
    //   { ['$' + category]: { [data.field]: data.newValue } },
    // );
  }

  async remove(creation: string, id: string) {
    return `This action removes a #${id} creation`;
  }
}
