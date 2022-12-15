import { NotificationDTO } from '../../src/app/entities/Interfaces/INotificationInterface';
import { NotificationRepository } from '../../src/app/entities/repositories/NotificationRepository';

export class InMemoryNotificationsRepositoryMock
  implements NotificationRepository
{
  public notifications: NotificationDTO[] = [];
  async create(notification: NotificationDTO) {
    this.notifications.push(notification);
  }
}
