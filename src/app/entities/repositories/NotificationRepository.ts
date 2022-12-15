import { NotificationDTO } from '../../entities/Interfaces/INotificationInterface';

export abstract class NotificationRepository {
  abstract create(notification: NotificationDTO): Promise<void>;
}
