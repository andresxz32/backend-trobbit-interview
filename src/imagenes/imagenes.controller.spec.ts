import { Test, TestingModule } from '@nestjs/testing';
import { ImagenesController } from './imagenes.controller';
import { ImagenesService } from './imagenes.service';

describe('ImagenesController', () => {
  let controller: ImagenesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImagenesController],
      providers: [ImagenesService],
    }).compile();

    controller = module.get<ImagenesController>(ImagenesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
