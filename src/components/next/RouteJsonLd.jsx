import { JsonLd } from "@/components/next/JsonLd.jsx";
import { dedupeJsonLdBlocks, getRouteJsonLdBlocks } from "@/lib/next/routeJsonLd.js";

/**
 * Server-rendered JSON-LD for a canonical route pathname.
 * @param {{ pathname: string; extraBlocks?: { id: string; data: Record<string, unknown> }[] }} props
 */
export function RouteJsonLd({ pathname, extraBlocks = [] }) {
  const blocks = dedupeJsonLdBlocks([...getRouteJsonLdBlocks(pathname), ...extraBlocks]);
  return (
    <>
      {blocks.map((block) => (
        <JsonLd key={block.id} id={block.id} data={block.data} />
      ))}
    </>
  );
}
