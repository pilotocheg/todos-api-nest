import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class DeleteManyTodoDto {
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  ids: string[];
}
