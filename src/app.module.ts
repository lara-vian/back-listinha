import { Module } from '@nestjs/common';
import { MarketModule } from './modules/market/market.module';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: `$./config/env/.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    MarketModule,
  ],
})
export class AppModule {}
