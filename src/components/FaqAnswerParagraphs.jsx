/** Renders FAQ answer copy; use `\n\n` in the string for a second paragraph. */
export function FaqAnswerParagraphs({
  answer,
  className = "text-[15px] leading-relaxed",
}) {
  const paragraphs = answer.split(/\n\n+/).filter((part) => part.length > 0);

  if (paragraphs.length <= 1) {
    return <p className={className}>{answer}</p>;
  }

  return (
    <div className="space-y-4">
      {paragraphs.map((text, index) => (
        <p key={index} className={className}>
          {text}
        </p>
      ))}
    </div>
  );
}
