// Core
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// Schema
import { User, UserDocument } from './user.schema';

// Dto
import { CreateUserDto } from './dto/create-todo.dto';
import { UpdateUserDto } from './dto/update-todo.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(data: CreateUserDto) {
    const newUserDocument = new this.userModel(data);
    const newUser = await newUserDocument.save();
    return newUser.toObject();
  }

  async getUser(id: string) {
    const doc = await this.getUserFromDB(id);
    return doc.toObject();
  }

  async updateUser(id: string, data: UpdateUserDto) {
    const doc = await this.getUserFromDB(id);
    return doc.update(data);
  }

  private async getUserFromDB(id: string) {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException(`User with id "${id}" not found`);
    }
    return user;
  }
}
