import { InMemoryNotificationsRepositoryMock } from '@test/repositories/InMemoryNotificationsRepository';
import { SendNotification } from './SendNotificationUseCase';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepositoryMock();

    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      recipientId: 'exemplo',
      content: 'você recebeu uma solicitação de amizade',
      category: 'friendship',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
