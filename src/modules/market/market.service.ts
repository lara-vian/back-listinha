import { Injectable } from '@nestjs/common';
import { MarketRepository } from './repository/market.repository';

@Injectable()
export class MarketService {
  constructor(private marketRepository: MarketRepository) {}

  async showPlanning(): Promise<MarketItemPlanning[]> {
    return await this.marketRepository.showPlanning();
  }
}
