import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('it should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('você recebeu uma solicitação de amizade'),
      category: 'friendship',
      recipientId: 'exemplo',
    });

    expect(notification).toBeTruthy();
  });
});
