import { Module } from '@nestjs/common';
import { NotificationRepository } from 'src/app/entities/repositories/NotificationRepository';
import { PrismaService } from './prisma/database';
import { PrismaNotificationRepository } from './prisma/repositories/prismaNotificationRepositories';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationRepository,
      useClass: PrismaNotificationRepository,
    },
  ],
  exports: [NotificationRepository],
})
export class DatabaseModule {}
