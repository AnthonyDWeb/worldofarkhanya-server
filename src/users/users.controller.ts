import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Post('getfile')
  getfile(@Body() data: any) {
    console.log("data2",data);
    // console.log("req",req);
    // res.sendFile(join(process.cwd(),'./uploads/'+filename))
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: any) {
    return this.usersService.update(id, updateUserDto);
  }
  
  @Patch('field/:category')
  updateField(@Param('category') category: string, @Body() data: any) {
    return this.usersService.updateField(category, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
