//text instance
class TextProcessor {
  constructor(text, color) {
    this.text = text;
}

//convert text to upper case
transformText() {
  return this.text.toUpperCase();
}
}

module.exports = TextProcessor;