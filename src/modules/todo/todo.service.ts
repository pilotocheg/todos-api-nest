import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  createTodo(text: string) {
    return text;
  }

  getTodos() {
    return [];
  }

  getTodo(id: string) {
    return { id };
  }

  updateTodo(id: string, text: string) {
    return { id, text };
  }

  deleteTodo(id: string) {
    return id;
  }

  // private findProduct(id: string) {
  //   const productIndex = this.products.findIndex((p) => p.id === id);
  //   const product = this.products[productIndex];
  //   if (!product) {
  //     throw new NotFoundException('Could not find the product');
  //   }
  //   return [product, productIndex] as [Product, number];
  // }
}
