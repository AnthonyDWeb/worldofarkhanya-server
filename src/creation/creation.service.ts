import { Injectable } from '@nestjs/common';

@Injectable()
export class CreationService {
  async create(createCreationDto: any) {
    return 'This action adds a new creation';
  }

  async findAll() {
    return `This action returns all creation`;
  }

  async findOne(id: string) {
    return `This action returns a #${id} creation`;
  }

  async update(id: string, updateCreationDto: any) {
    return `This action updates a #${id} creation`;
  }

  async remove(id: string) {
    return `This action removes a #${id} creation`;
  }
}
