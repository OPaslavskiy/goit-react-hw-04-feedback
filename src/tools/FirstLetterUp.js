export function firstLetterUp(word) {
  const result = word.charAt(0).toUpperCase() + word.slice(1);
  return result;
}
