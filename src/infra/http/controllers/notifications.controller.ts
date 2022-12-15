import { Body, Controller, Post } from '@nestjs/common';

import { CreateNotificationBody } from '../dto/create-notification-body';
import { SendNotification } from 'src/app/useCases/SendNotificationUseCase';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}
  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body;
    const { notification } = await this.sendNotification.execute({
      content,
      category,
      recipientId,
    });

    return { notification };
  }
}
