import { Test, TestingModule } from '@nestjs/testing';
import { CreationController } from './creation.controller';
import { CreationService } from './creation.service';

describe('CreationController', () => {
  let controller: CreationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreationController],
      providers: [CreationService],
    }).compile();

    controller = module.get<CreationController>(CreationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
