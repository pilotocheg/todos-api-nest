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
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';

// DTO
import { CreateTodoDto } from './dto/create-todo.dto';
import { DeleteManyDto } from './dto/delete-many.dto';
import { TodoDto } from './dto/todo.dto';
import { UpdateManyDto } from './dto/update-many.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

// Service
import { TodoService } from './todo.service';

@ApiTags('todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @ApiCreatedResponse({
    description: 'The todo item was successfully created',
    type: TodoDto,
  })
  @Post()
  addTodo(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.createTodo(createTodoDto);
  }

  @ApiOperation({ description: 'Get all todo items list' })
  @ApiOkResponse({ type: [TodoDto] })
  @Get()
  getAllTodos() {
    return this.todoService.getTodos();
  }

  @ApiOperation({ description: 'Update many todo items at one transaction' })
  @Patch('updateMany')
  updateMany(@Body() updateData: UpdateManyDto) {
    return this.todoService.updateMany(updateData);
  }

  @ApiOperation({ description: 'Delete many todo items at one transaction' })
  @Delete('deleteMany')
  @HttpCode(204)
  deleteMany(@Body() { ids }: DeleteManyDto) {
    return this.todoService.deleteMany(ids);
  }

  @ApiOkResponse({ type: TodoDto })
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
}
