import { Content } from './content';

describe('Notification Content', () => {
  it('it should be able to create a notification content', () => {
    const content = new Content('você recebeu uma solicitação de amizade');

    expect(content).toBeTruthy();
  });

  it('it should not be able to create a notification content with a empty string', () => {
    expect(() => {
      new Content('');
    }).toThrow();
  });

  it('it should not be able to create a notification content with more then 250 characters', () => {
    expect(() => {
      new Content('a'.repeat(251));
    }).toThrow();
  });
});
