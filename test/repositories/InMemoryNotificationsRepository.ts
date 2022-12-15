import { NotificationDTO } from '@Interfaces/INotificationInterface';
import { NotificationRepository } from '@repositories/NotificationRepository';

export class InMemoryNotificationsRepositoryMock
  implements NotificationRepository
{
  public notifications: NotificationDTO[] = [];
  async create(notification: NotificationDTO) {
    this.notifications.push(notification);
  }
}
