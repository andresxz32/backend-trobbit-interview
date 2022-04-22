import { Test, TestingModule } from '@nestjs/testing';
import { ImagenesService } from './imagenes.service';

describe('ImagenesService', () => {
  let service: ImagenesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImagenesService],
    }).compile();

    service = module.get<ImagenesService>(ImagenesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
