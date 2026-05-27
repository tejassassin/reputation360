/** Renders structured FAQ answer blocks (paragraphs and bullet lists) for Resources FAQs. */
function FaqListItem({ item }) {
  if (typeof item === "string") {
    return item;
  }
  return (
    <>
      {item.s ? <strong>{item.s}</strong> : null}
      {item.r ?? ""}
    </>
  );
}

export function FaqRichAnswer({ blocks }) {
  return (
    <div className="space-y-4">
      {blocks.map((block, index) => {
        if (block.t === "p") {
          return <p key={index}>{block.text}</p>;
        }
        if (block.t === "p-strong") {
          return (
            <p key={index}>
              <strong>{block.text}</strong>
            </p>
          );
        }
        if (block.t === "ul") {
          return (
            <ul key={index} className="ml-5 list-disc space-y-2">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <FaqListItem item={item} />
                </li>
              ))}
            </ul>
          );
        }
        return null;
      })}
    </div>
  );
}
