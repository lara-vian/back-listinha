import { Controller, Get, Param } from '@nestjs/common';
import { MarketService } from './market.service';

@Controller('market')
export class MarketController {
  constructor(private readonly marketService: MarketService) {}

  @Get('planning/:id')
  async showPlanning(@Param() params) {
    const { id } = params;
    return await this.marketService.showPlanning(id);
  }
}
