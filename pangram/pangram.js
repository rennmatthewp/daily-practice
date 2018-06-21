class Pangram {
  constructor(sentence) {
    this.sentence = sentence.toLowerCase();
    this.lettersToUse = 'abcdefghijklmnopqrstuvwxyz';
  }
  
  isPangram(){
    [...this.sentence].forEach(letter => {
      if (this.lettersToUse.includes(letter)) {
        this.lettersToUse = this.lettersToUse.replace(letter, '');
      }
    })

    return !this.lettersToUse.length;
  }

}

module.exports = Pangram;