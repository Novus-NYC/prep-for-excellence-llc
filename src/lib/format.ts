const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

// Spells out small counts so headings stay in step with the data they describe.
export function countWord(count: number): string {
  return words[count] ?? String(count);
}

export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
