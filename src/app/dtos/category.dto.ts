// * Los decoradores inician con una mayuscula
// * Mientras que las funciones tiennen el mismo nombre
// *Pero utilizan minuscula
import {
  IsNotEmpty,
  IsEnum,
  Length,
  IsUrl,
  IsOptional,
  validateOrReject,
} from 'class-validator';
import { AccessType, Category } from '../models/category.model';

export interface ICreateCategoryDto extends Omit<Category, 'id'> {}
export class CreateCategoryDto implements ICreateCategoryDto {
  // * Recordar que el operador (!) se utiliza para posponer la inicialización
  @IsNotEmpty()
  @Length(4, 140)
  name!: string;
  @IsUrl()
  @IsNotEmpty()
  image!: string;
  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}
(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.image = 'https://api.escuelajs.co/api/v1/products';
    dto.name = 'pulentamente';
    await validateOrReject(dto);
    console.log('validated')
  } catch (error) {
    console.log(error);
  }
})();
