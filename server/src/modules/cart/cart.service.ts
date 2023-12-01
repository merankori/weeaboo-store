import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCartItemDto } from './dto/createCartItem.dto';

@Injectable()
export class CartService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: number) {
    return await this.prisma.cart.create({
      data: {
        userId,
      },
    });
  }

  async getAllItems(cartId: string) {
    return await this.prisma.cartItem.findMany({
      where: {
        cartId: +cartId,
      },
    });
  }

  async createItem(cartId: string, dto: CreateCartItemDto) {
    return await this.prisma.cartItem.create({
      data: {
        cartId: +cartId,
        productId: +dto.productId,
      },
    });
  }

  async deleteItem(id: string) {
    return await this.prisma.cartItem.delete({
      where: {
        id: +id,
      },
    });
  }
}
