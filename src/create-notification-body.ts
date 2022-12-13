import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  @Length(5, 250)
  content: string;

  @IsNotEmpty()
  @Length(5, 250)
  category: string;

  @IsNotEmpty()
  @IsUUID()
  recipientId: string;
}
