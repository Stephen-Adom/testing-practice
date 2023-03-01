function capitalize(string) {
  if (string.length < 1) {
    throw new Error('String must have a length greater than 1');
  }

  if (typeof string !== 'string') {
    throw new Error('Invalid Input');
  }

  const [firstLetter, ...nextLetters] = string;
  return `${firstLetter.toUpperCase()}${nextLetters.join('')}`;
}

module.exports = capitalize;
