import { ApiProperty } from '@nestjs/swagger';
//import { Type } from 'class-transformer';
import {  IsDateString, IsDefined, IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
//import { Pais } from 'src/paises/entities/pais.entity';

export class CreateSerieDto {
  // @ApiProperty()
  // @Type(() => Number)
  // @IsDefined({ message: 'El campo idPais debe estar definido' })
  // @IsInt({ message: 'El campo idPais debe ser de tipo numérico' })
  // readonly idPais: Pais['id'];

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo titulo es obligatorio' })
  @IsString({ message: 'El campo titulo debe ser de tipo cadena' })
  @MaxLength(250, { message: 'El campo titulo no debe ser mayor a 250 caracteres' })
  readonly titulo: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo sinopsis es obligatorio' })
  @IsString({ message: 'El campo sinopsis debe ser de tipo cadena' })
  @MaxLength(5000, { message: 'El campo sinopsis no debe ser mayor a 5000 caracteres' })
  readonly sinopsis: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo director es obligatorio' })
  @IsString({ message: 'El campo director debe ser de tipo cadena' })
  @MaxLength(100, { message: 'El campo director no debe ser mayor a 100 caracteres' })
  readonly director: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo teporadas es obligatorio' })
  @IsNumber({}, { message: 'El campo temporadas debe ser tipo entero' })
  readonly temporadas: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo fechaEstreno debe estar definido' })
  @IsDateString({}, { message: 'El campo fechaEstreno debe ser de tipo fecha'},)
  readonly fechaEstreno: Date;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo tipoClasificacion es obligatorio' })
  @IsString({ message: 'El campo tipoClasificacion debe ser de tipo cadena' })
  @MaxLength(30, { message: 'El campo tipoClasificacion no debe ser mayor a 30 caracteres' })
  readonly tipoClasificacion: string;
}
