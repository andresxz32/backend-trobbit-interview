import { Test, TestingModule } from '@nestjs/testing';
import { GatosController } from './gatos.controller';
import { GatosService } from './gatos.service';

describe('GatosController', () => {
  let controller: GatosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GatosController],
      providers: [GatosService],
    }).compile();

    controller = module.get<GatosController>(GatosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
