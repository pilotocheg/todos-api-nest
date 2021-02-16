import { IsNotEmpty, IsString } from 'class-validator';

export class DeleteManyDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}
