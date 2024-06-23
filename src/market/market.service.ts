import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Item, Prisma } from '@prisma/client';

@Injectable()
export class MarketService {
  constructor(private prisma: PrismaService) {}
  async showPlanning(): Promise<Item[]> {
    return await this.prisma.item.findMany();
  }

  async addItem(data: Prisma.ItemCreateInput): Promise<Item> {
    return await this.prisma.item.create({ data });
  }
}
