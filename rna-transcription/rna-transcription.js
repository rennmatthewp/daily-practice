var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(DnaString) {
  var DnaToRnaObj = {
    C: 'G',
    G: 'C',
    T: 'A',
    A: 'U'
  };
  
  return DnaString.split('').map(function(nucleotide) {
    if(!DnaToRnaObj[nucleotide]) {
      throw Error('Invalid input')
    }
    
    return DnaToRnaObj[nucleotide];
  }).join('');
};

module.exports = DnaTranscriber;
