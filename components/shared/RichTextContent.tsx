'use client';

import { cn } from '@/lib/utils';
import {
  looksLikeHtml,
  sanitizeRichTextHtml,
} from '@/lib/rich-text';

const richTextClassName = cn(
  'break-words text-sm leading-relaxed text-[#555555] md:text-[15px]',
  '[&_p]:my-2 [&_p:first-child]:mt-0 [&_p:last-child]:mb-0',
  '[&_strong]:font-semibold [&_b]:font-semibold',
  '[&_em]:italic [&_i]:italic',
  '[&_u]:underline',
  '[&_ol]:my-2 [&_ol]:list-decimal [&_ol]:pl-5',
  '[&_ul]:my-2 [&_ul]:list-disc [&_ul]:pl-5'
);

type RichTextContentProps = {
  html: string;
  className?: string;
  emptyFallback?: string;
};

export function RichTextContent({
  html,
  className,
  emptyFallback,
}: RichTextContentProps) {
  const cleaned = sanitizeRichTextHtml(html);

  if (!cleaned) {
    if (!emptyFallback) return null;
    return <p className={cn(richTextClassName, className)}>{emptyFallback}</p>;
  }

  if (!looksLikeHtml(cleaned)) {
    return (
      <p className={cn(richTextClassName, 'whitespace-pre-wrap', className)}>
        {cleaned}
      </p>
    );
  }

  return (
    <div
      className={cn(richTextClassName, className)}
      dangerouslySetInnerHTML={{ __html: cleaned }}
    />
  );
}
