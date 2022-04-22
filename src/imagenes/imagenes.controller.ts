import { Controller, Get, Post, Body } from '@nestjs/common';
import { ImagenesService } from './imagenes.service';

@Controller('imagenes')
export class ImagenesController {
  constructor(private readonly imagenesService: ImagenesService) {}

  // Marcar como favoritos una imagen
  // /favoritos
  @Post('/favoritos')
  create(@Body('id') id: string) {
    return this.imagenesService.markFavorites(id);
  }

  //Trae 10 gatos aleatorios
  @Get()
  findAll() {
    return this.imagenesService.findAll();
  }

  //Obtener los favoritos con base a la key
  // /favoritos
  @Get('/favoritos')
  findOne() {
    return this.imagenesService.findFavorites();
  }
}
