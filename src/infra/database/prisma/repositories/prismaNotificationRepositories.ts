import { Injectable } from '@nestjs/common';
import { NotificationDTO } from 'src/app/entities/Interfaces/INotificationInterface';
import { NotificationRepository } from 'src/app/entities/repositories/NotificationRepository';
import { PrismaService } from '../database';

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: NotificationDTO): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        category: notification.category,
        content: notification.content.value,
        recipientId: notification.recipientId,
        createdAt: notification.createdAt,
        readAt: notification.readAt,
      },
    });
  }
}
