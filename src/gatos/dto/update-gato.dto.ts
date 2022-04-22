import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { CreateGatoDto } from './create-gato.dto';

export class UpdateGatoDto extends PartialType(CreateGatoDto) {
  @IsString()
  nombre: string;

  @IsString()
  raza: string;

  @IsNumber()
  edad: number;

  @IsString()
  foto: string;
}
