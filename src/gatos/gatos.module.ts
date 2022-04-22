import { Module } from '@nestjs/common';
import { GatosService } from './gatos.service';
import { GatosController } from './gatos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Gato, GatoSchema } from './entities/gato.entity';

@Module({
  controllers: [GatosController],
  providers: [GatosService],
  imports: [
    MongooseModule.forFeature([{ name: Gato.name, schema: GatoSchema }]),
  ],
})
export class GatosModule {}
