const makeMarkdownCodeBlock = (type: string, str: string) => `\`\`\`${type}
${str}
\`\`\``;

export default makeMarkdownCodeBlock;
