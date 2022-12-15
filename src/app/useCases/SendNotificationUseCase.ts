import { Injectable } from '@nestjs/common';
import { Content } from '@entities/content';
import { SendNotificationRequest } from '@Interfaces/ISendNotificationRequest';
import { SendNotificationResponse } from '@Interfaces/ISendNotificationResponse';
import { Notification } from '@entities/notification';
import { NotificationRepository } from '@repositories/NotificationRepository';

@Injectable()
export class SendNotification {
  constructor(
    private readonly notificationRepository: NotificationRepository
  ) {}

  async execute(
    request: SendNotificationRequest
  ): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    await this.notificationRepository.create(notification);

    return {
      notification,
    };
  }
}
