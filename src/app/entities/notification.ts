import { Replace } from 'src/helpers/Replace';
import { Content } from './content';
import { NotificationDTO } from './Interfaces/INotificationInterface';
import { randomUUID } from 'node:crypto';

export class Notification {
  private data: NotificationDTO;
  private _id: string;

  constructor(data: Replace<NotificationDTO, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.data = {
      ...data,
      createdAt: data.createdAt || new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  public set content(content: Content) {
    this.content = content;
  }

  public get content(): Content {
    return this.data.content;
  }

  public set category(category: string) {
    this.category = category;
  }

  public get category(): string {
    return this.data.category;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.readAt = readAt;
  }

  public get readAt(): Date | null | undefined {
    return this.data.readAt;
  }

  public set createdAt(createdAt: Date) {
    this.createdAt = createdAt;
  }

  public get createdAt(): Date {
    return this.data.createdAt;
  }

  public set recipientId(recipientId: string) {
    this.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.data.recipientId;
  }
}
