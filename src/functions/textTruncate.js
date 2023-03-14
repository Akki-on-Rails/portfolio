export function textTruncate(text, num) {
  return (
    (text.length <= num) ? text : text.slice(0, num) + '...'
  )
}
