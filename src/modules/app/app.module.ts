import { Module } from '@nestjs/common';
import { MarketModule } from '../market/market.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.env.${process.env.NODE_ENV}` }),
    MarketModule,
  ],
})
export class AppModule {}
