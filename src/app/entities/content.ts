export class Content {
  private readonly content: string;

  private validateContentLength(content: string): boolean {
    if (content.length < 5 || content.length > 250) {
      throw new Error('Content length must be between 5 and 250 characters');
    }
    return true;
  }

  constructor(content: string) {
    if (!this.validateContentLength(content)) {
      throw new Error('Content length must be between 5 and 250 characters');
    }
    this.content = content;
  }

  get value(): string {
    return this.content;
  }
}
