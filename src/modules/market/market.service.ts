import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MarketItemPlanning } from '@prisma/client';

@Injectable()
export class MarketService {
  constructor(private readonly prisma: PrismaService) {}

  async showPlanning(id: string): Promise<MarketItemPlanning[]> {
    return await this.prisma.marketItemPlanning.findMany({
      where: { planning_id: id },
    });
  }
}
