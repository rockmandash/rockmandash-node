const makeMarkdownCustomContaineBlock = (
  type: string,
  title: string,
  str: string
) => `::: ${type} ${title}
${str}
:::`;

export default makeMarkdownCustomContaineBlock;
