import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GatosService } from './gatos.service';
import { CreateGatoDto } from './dto/create-gato.dto';
import { UpdateGatoDto } from './dto/update-gato.dto';

@Controller('gatos')
export class GatosController {
  constructor(private readonly gatosService: GatosService) {}

  //Debe permitir crear un nuevo gato con la información
  //enviada en el body
  @Post()
  create(@Body() createGatoDto: CreateGatoDto) {
    return this.gatosService.create(createGatoDto);
  }

  //Debe retornar una lista de todos los gatos existentes
  @Get()
  findAll() {
    return this.gatosService.find({});
  }

  //Debe retornar el gato con el id enviado en la URL
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gatosService.findOne({ _id: id });
  }

  //Debe permitir actualizar el gato con el id enviado
  //en la URL usando la información enviada en el body
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGatoDto: UpdateGatoDto) {
    return this.gatosService.findOneAndUpdate({ _id: id }, updateGatoDto);
  }

  //Debe permitir eliminar el gato con el id enviado
  //en la URL
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gatosService.remove(id);
  }
}
