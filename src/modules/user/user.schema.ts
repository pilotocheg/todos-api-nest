import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Todo } from '../todo/todo.schema';

export type UserDocument = User & Document;

@Schema({ timestamps: true, id: true, versionKey: false })
export class User {
  @Prop({ required: true })
  email: string;

  @Prop()
  name: string;

  @Prop({ type: [Types.ObjectId], ref: Todo.name })
  todos: Todo[];
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.set('toObject', {
  versionKey: false,
  transform(_, item) {
    item.id = String(item._id);
    delete item._id;
    return item;
  },
});
