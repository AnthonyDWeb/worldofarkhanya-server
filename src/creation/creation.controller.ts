import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CreationService } from './creation.service';

@Controller('creations')
export class CreationController {
  constructor(private readonly creationService: CreationService) {}

  @Post(':collection')
  create(@Param('collection') collection: string, @Query('userID') userID: string, @Body() createCreationDto: any) {
    return this.creationService.create(collection,userID,createCreationDto);
  }

  @Get(':creation')
  findAll(@Param('creation') creation: string) {
    return this.creationService.findAll(creation);
  }

  @Get(':creation/:id')
  findOne(@Param('creation') creation: string, @Param('id') id: string) {
    return this.creationService.findOne(creation,id);
  }

  @Patch(':creation/:id')
  update(@Param('creation') creation: string, @Param('id') id: string, @Body() updateCreationDto: any) {
    return this.creationService.update(creation,id, updateCreationDto);
  }

  @Delete(':creation/:id')
  remove(@Param('creation') creation: string, @Param('id') id: string) {
    return this.creationService.remove(creation,id);
  }
}
