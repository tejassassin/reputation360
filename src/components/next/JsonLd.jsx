/**
 * Server-rendered JSON-LD blocks for Next.js App Router pages.
 * @param {{ id: string; data: Record<string, unknown> | Record<string, unknown>[] | null | undefined }} props
 */
export function JsonLd({ id, data }) {
  if (!data) return null;
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
