import MarkdownIt from 'markdown-it';
import markdownitEmoji from 'markdown-it-emoji';

const markdownIt = new MarkdownIt().use(markdownitEmoji, {
  shortcuts: {},
});

export const parseMarkdown = (md: string): string =>
  markdownIt.renderInline(md);
