import HomePage from "@/pages/HomePage.jsx";
import { JsonLd } from "@/components/next/JsonLd.jsx";
import { buildHomeMetadata, getHomeJsonLdBlocks } from "@/lib/next/homePageSeo.js";

export const metadata = buildHomeMetadata();

export default function Home() {
  const jsonLdBlocks = getHomeJsonLdBlocks();
  return (
    <>
      {jsonLdBlocks.map((block) => (
        <JsonLd key={block.id} id={block.id} data={block.data} />
      ))}
      <HomePage renderSeo={false} />
    </>
  );
}
