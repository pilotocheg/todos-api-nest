import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';

import { UpdateTodoDto } from './update-todo.dto';

export class UpdateManyTodoItem {
  @IsString()
  @IsNotEmpty()
  id: string;

  @ValidateNested()
  @Type(() => UpdateTodoDto)
  payload: UpdateTodoDto;
}

export class UpdateManyTodoDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateManyTodoItem)
  items: UpdateManyTodoItem[];
}
