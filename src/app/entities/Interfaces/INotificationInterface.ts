import { Content } from '../content';

export interface NotificationDTO {
  id?: any;
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
  recipientId: string;
}
