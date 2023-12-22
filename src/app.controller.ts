import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
  Req,
  Res,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './auth/jwt-auth.guard';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import { callbackify } from 'util';
import { Response } from 'express';
import { join } from 'path';

type FileParams = {
  filename: string;
};

@Public()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): {} {
    return this.appService.getHello();
  }

  @Post('getfile')
  getfile(@Res() res: Response, @Body() body: FileParams) {
    res.sendFile(join(process.cwd(), './uploads/' + body.filename));
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename(req, file, callback) {
          callback(null, file.originalname);
        },
      }),
    }),
  )
  upload(@UploadedFile() file: Express.Multer.File, @Res() res: any) {
    return res.status(HttpStatus.OK).json({ success: true, data: file.path });
  }

}
