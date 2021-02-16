// Core
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

// DTO
import { CreateTodoDto } from './dto/create-todo.dto';
import { DeleteManyDto } from './dto/delete-many.dto';
import { UpdateManyDto } from './dto/update-many.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

// Service
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
  updateTodo(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.updateTodo(id, updateTodoDto);
  }

  @Delete(':id')
  @HttpCode(204)
  deleteTodo(@Param('id') id: string) {
    return this.todoService.deleteTodo(id);
  }

  @Patch('updateMany')
  updateMany(@Body() updateData: UpdateManyDto) {
    return this.todoService.updateMany(updateData);
  }

  @Delete('deleteMany')
  deleteMany(@Body() ids: DeleteManyDto[]) {
    return this.todoService.deleteMany(ids);
  }
}
