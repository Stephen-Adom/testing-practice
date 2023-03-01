const stringLength = (str) => {
  if (str.length < 1) {
    throw new Error('String must be at least 1 character long');
  }

  if (str.length > 10) {
    throw new Error('String must be less than 10 characters long');
  }

  return str.length;
};

// console.log(stringLength(''));

module.exports = stringLength;
