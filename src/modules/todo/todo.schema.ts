import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from '../user/user.schema';

export type TodoDocument = Todo & Document;

@Schema({ timestamps: true, id: true, versionKey: false })
export class Todo {
  @Prop({ required: true, minlength: 1, maxlength: 200 })
  text: string;

  @Prop({ default: false })
  completed: boolean;

  @Prop({ type: Types.ObjectId, ref: Todo.name })
  owner: User;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);

TodoSchema.set('toObject', {
  versionKey: false,
  transform(_, item) {
    item.id = String(item._id);
    delete item._id;
    return item;
  },
});
