import { Content } from '../content';

export interface NotificationDTO {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}
