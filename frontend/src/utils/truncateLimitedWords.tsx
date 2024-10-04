export const truncateLimitedWord = (description: string, maxLength = 100) => {
  if (description.length > maxLength) {
    return description.slice(0, maxLength) + `...`;
  }
  return description;
};
