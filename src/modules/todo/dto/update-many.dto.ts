import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';

import { UpdateTodoDto } from './update-todo.dto';

export class UpdateItem {
  @IsString()
  @IsNotEmpty()
  id: string;

  @ValidateNested()
  @Type(() => UpdateTodoDto)
  payload: UpdateTodoDto;
}

export class UpdateManyDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateItem)
  items: UpdateItem[];
}
