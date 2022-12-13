import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/database';
import { HttpModule } from './http.module';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
