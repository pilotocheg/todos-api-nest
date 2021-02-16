import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { UpdateTodoDto } from './update-todo.dto';

export class UpdateItem {
  @IsString()
  @IsNotEmpty()
  id: string;

  @ValidateNested()
  payload: UpdateTodoDto;
}

export class UpdateManyDto {
  @IsArray()
  @ValidateNested()
  items: UpdateItem[];
}
