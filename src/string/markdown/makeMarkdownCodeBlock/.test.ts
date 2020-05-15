import makeMarkdownCodeBlock from './';

describe('makeMarkdownCodeBlock', () => {
  it('should wrap given code as markdown format', () => {
    expect(makeMarkdownCodeBlock('js', 'my code')).toBe(
      `\`\`\`js
my code
\`\`\``
    );
  });
});
