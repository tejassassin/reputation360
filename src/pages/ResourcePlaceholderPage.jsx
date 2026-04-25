import { SeoHead } from "../components/SeoHead.jsx";

/**
 * Empty shell for Resources sub-routes until content is added.
 * @param {object} props
 * @param {string} props.title
 * @param {string} [props.description]
 * @param {string} [props.canonicalPath]
 */
function ResourcePlaceholderPage({ title, description, canonicalPath = "/" }) {
  return (
    <>
      <SeoHead
        title={`${title} | Reputation360`}
        description={description || `${title} on Reputation360.`}
        canonicalPath={canonicalPath}
      />
    <main
      className="min-h-[50vh] flex-1 bg-offwhite pt-28 md:pt-32"
      aria-label={title}
    />
    </>
  );
}

export default ResourcePlaceholderPage;
