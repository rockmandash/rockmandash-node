import makeMarkdownCustomContaineBlock from './';

describe('makeMarkdownCustomContaineBlock', () => {
  it('should wrap given code as markdown custom container format', () => {
    expect(
      makeMarkdownCustomContaineBlock('js', 'Example Code', 'my code')
    ).toBe(
      `::: js Example Code
my code
:::`
    );
  });
});
