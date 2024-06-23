import { Body, Controller, Get, Post } from '@nestjs/common';
import { MarketService } from './market.service';
import { Prisma } from '@prisma/client';

@Controller('market')
export class MarketController {
  constructor(private readonly marketService: MarketService) {}
  @Get()
  async showPlanning() {
    return await this.marketService.showPlanning();
  }

  @Post()
  async addItem(@Body() data: Prisma.ItemCreateInput) {
    return await this.marketService.addItem(data);
  }
}
