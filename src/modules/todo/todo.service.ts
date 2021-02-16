// Core
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

// Schema
import { Todo, TodoDocument } from './todo.schema';

// Dto
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateManyDto } from './dto/update-many.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  async createTodo(data: CreateTodoDto) {
    const newTodoDocument = new this.todoModel(data);
    const newTodo = await newTodoDocument.save();
    return newTodo.toObject();
  }

  async getTodos() {
    const docsList = await this.todoModel.find().exec();
    return docsList.map((doc) => doc.toObject());
  }

  async getTodo(id: string) {
    const doc = await this.getTodoFromDB(id);
    return doc.toObject();
  }

  async updateTodo(id: string, data: UpdateTodoDto) {
    const doc = await this.getTodoFromDB(id);
    return doc.update(data);
  }

  async updateMany({ items }: UpdateManyDto) {
    return this.todoModel.bulkWrite(
      items.map(({ id, payload }) => ({
        updateOne: {
          filter: { _id: Types.ObjectId(id) },
          update: payload,
        },
      })),
    );
  }

  async deleteMany(ids: string[]) {
    return this.todoModel.deleteMany({ _id: { $in: ids } });
  }

  async deleteTodo(id: string) {
    const doc = await this.getTodoFromDB(id);
    return doc.delete();
  }

  private async getTodoFromDB(id: string) {
    const todoDoc = await this.todoModel.findById(id).exec();
    if (!todoDoc) {
      throw new NotFoundException(`Todo with id "${id}" not found`);
    }
    return todoDoc;
  }
}
