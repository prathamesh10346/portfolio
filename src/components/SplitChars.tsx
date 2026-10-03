// Splits text into per-character spans so each glyph can be animated / hovered on its own.
export function SplitChars({ text }: { text: string }) {
  return (
    <>
      {text.split('').map((c, i) => (
        <span className="char-mask" key={i} aria-hidden="true">
          <span className="char">{c === ' ' ? ' ' : c}</span>
        </span>
      ))}
      <span className="sr-only">{text}</span>
    </>
  )
}
