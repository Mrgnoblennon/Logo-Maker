//function to validate input length
function validateInputLength(input) {
  return input.length <= 3 ? true : 'Please enter up to 3 characters.';
}

//function to validate text color
function validateTextColor(input) {
  const isColorKeyword = /^[a-zA-Z]+$/.test(input);
  const isHexNumber = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/i.test(input);
  return isColorKeyword || isHexNumber ? true : 'Please enter a valid color keyword or hexadecimal number.';
}

module.exports = {
  validateInputLength,
  validateTextColor,
};
