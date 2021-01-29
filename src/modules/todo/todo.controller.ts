import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  addTodo(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.createTodo(createTodoDto);
  }

  @Get()
  getAllTodos() {
    return this.todoService.getTodos();
  }

  @Get(':id')
  getTodo(@Param('id') id: string) {
    return this.todoService.getTodo(id);
  }

  @Patch(':id')
  updateTodo(@Param('id') id: string, @Body('text') text: string) {
    return this.todoService.updateTodo(id, text);
  }

  @Delete(':id')
  @HttpCode(204)
  deleteTodo(@Param('id') id: string) {
    return this.todoService.deleteTodo(id);
  }
}
