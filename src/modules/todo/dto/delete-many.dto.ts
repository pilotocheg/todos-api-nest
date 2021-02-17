import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class DeleteManyDto {
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  ids: string[];
}
