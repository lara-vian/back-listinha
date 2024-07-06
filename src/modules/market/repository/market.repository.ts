import { PrismaService } from '../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import {
  MarketItem,
  MarketItemPlanning,
  MarketCategory,
  Prisma,
} from '@prisma/client';

@Injectable()
export class MarketRepository {
  constructor(private prisma: PrismaService) {}

  async showCategories(): Promise<MarketCategory[]> {
    return await this.prisma.marketCategory.findMany();
  }

  async addItem(data: Prisma.MarketItemCreateInput): Promise<MarketItem> {
    return await this.prisma.marketItem.create({ data });
  }

  async showItems(): Promise<MarketItem[]> {
    return await this.prisma.marketItem.findMany();
  }

  async showPlanning(): Promise<MarketItemPlanning[]> {
    return await this.prisma.marketItemPlanning.findMany();
  }

  async addItemToPlanning(data: Prisma.MarketItemPlanningCreateInput) {
    return await this.prisma.marketItemPlanning.create({ data });
  }
}
