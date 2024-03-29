import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.category.findMany();
  }

  async getOne(slug: string) {
    return await this.prisma.category.findUnique({
      where: {
        slug,
      },
    });
  }

  async create(dto: CategoryDto) {
    return await this.prisma.category.create({
      data: dto,
    });
  }

  async delete(id: number) {
    await this.prisma.category.delete({
      where: {
        id,
      },
    });
  }
}
