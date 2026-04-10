import { useEffect } from "react";

/**
 * Empty shell for Resources sub-routes until content is added.
 */
function ResourcePlaceholderPage({ title }) {
  useEffect(() => {
    const previous = document.title;
    document.title = `${title} | Reputation360`;
    return () => {
      document.title = previous;
    };
  }, [title]);

  return (
    <main
      className="min-h-[50vh] flex-1 bg-offwhite pt-28 md:pt-32"
      aria-label={title}
    />
  );
}

export default ResourcePlaceholderPage;
