export function textTruncate(text, num) {
  return (
    text.slice(0, Math.min(text.length, num)) + '...'

    // a longer version would be:
    // (text.length <= num) ? text : text.slice(0, num) + '...'
  )
}
