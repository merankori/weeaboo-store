import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartItemDto } from './dto/createCartItem.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get(':cartId')
  getAllItems(@Param('cartId') cartId: string) {
    return this.cartService.getAllItems(cartId);
  }

  @Post(':cartId')
  createItem(@Param('cartId') cartId: string, @Body() dto: CreateCartItemDto) {
    return this.cartService.createItem(cartId, dto);
  }

  @Delete(':id')
  deleteItem(@Param('id') id: string) {
    try {
      return this.cartService.deleteItem(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}