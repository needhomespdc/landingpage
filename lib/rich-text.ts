/**
 * Helpers for admin property description HTML (rich text editor output).
 */

export function getPlainTextFromHtml(html: string): string {
  if (!html) return '';

  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<\/li>/gi, '\n')
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

const ALLOWED_TAGS = new Set([
  'p',
  'br',
  'strong',
  'b',
  'em',
  'i',
  'u',
  'ul',
  'ol',
  'li',
  'div',
  'span',
]);

export function looksLikeHtml(value: string): boolean {
  return /<[a-z][\s\S]*>/i.test(value.trim());
}

/**
 * Sanitize admin rich-text HTML for safe display.
 * Keeps formatting tags used by the property description editor.
 */
export function sanitizeRichTextHtml(html: string): string {
  if (!html) return '';

  if (typeof document === 'undefined') {
    return html
      .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, '')
      .replace(/\son\w+\s*=\s*(['"])[\s\S]*?\1/gi, '')
      .replace(/\sstyle\s*=\s*(['"])[\s\S]*?\1/gi, '')
      .replace(/\sclass\s*=\s*(['"])[\s\S]*?\1/gi, '')
      .trim();
  }

  const container = document.createElement('div');
  container.innerHTML = html;

  container.querySelectorAll('script, style, iframe, object, embed').forEach((node) => {
    node.remove();
  });

  container.querySelectorAll('*').forEach((element) => {
    const tag = element.tagName.toLowerCase();
    if (!ALLOWED_TAGS.has(tag)) {
      const parent = element.parentNode;
      if (!parent) {
        element.remove();
        return;
      }
      while (element.firstChild) {
        parent.insertBefore(element.firstChild, element);
      }
      parent.removeChild(element);
      return;
    }

    [...element.attributes].forEach((attr) => {
      element.removeAttribute(attr.name);
    });
  });

  return container.innerHTML.trim();
}
