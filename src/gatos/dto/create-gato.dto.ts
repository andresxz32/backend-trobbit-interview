import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateGatoDto {
  @IsString({ message: 'El nombre debe ser una string' })
  @IsNotEmpty({ message: 'El nombre del gato es  obligatorio' })
  nombre: string;

  @IsString({ message: 'La raza debe ser una string' })
  @IsNotEmpty({ message: 'La raza del gato es obligatoria' })
  raza: string;

  @IsNumber({}, { message: 'La edad debe ser un número' })
  @IsNotEmpty({ message: 'La edad del gato es obligatoria' })
  edad: number;

  @IsString({ message: 'La foto debe ser una URL' })
  @IsNotEmpty({ message: 'La foto es obligatoria para poder crear un gato.' })
  foto: string;
}
