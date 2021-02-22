import { CreateTodoDto } from './create-todo.dto';

export class TodoDto extends CreateTodoDto {
  id: number;
  createdAt: string;
  updatedAt: string;
}
