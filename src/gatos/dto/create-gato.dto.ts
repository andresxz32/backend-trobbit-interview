import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateGatoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  raza: string;

  @IsNumber()
  @IsNotEmpty()
  edad: number;

  @IsString()
  @IsNotEmpty()
  foto: string;
}
