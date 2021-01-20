import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo, TodoDocument } from './todo.schema';
import { Model } from 'mongoose';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  createTodo(text: string) {
    const newTodo = new this.todoModel({ text });
    return newTodo.save();
  }

  getTodos() {
    return this.todoModel.find().exec();
  }

  getTodo(id: string) {
    return this.getTodoFromDB(id);
  }

  async updateTodo(id: string, text: string) {
    await this.getTodoFromDB(id);
    return this.todoModel.updateOne({ id }, { text }).exec();
  }

  deleteTodo(id: string) {
    return id;
  }

  private async getTodoFromDB(id: string) {
    const todo = await this.todoModel.findById(id).exec();
    if (!todo) {
      throw new NotFoundException(`Todo with id "${id}" not found`);
    }
    return todo;
  }
}
