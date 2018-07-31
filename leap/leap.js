var Year = function(year) {
  this.year = year;
};

Year.prototype.isLeap = function() {
  if (this.year % 100 === 0) {
    return this.isCenturyLeap(this.year);
  }

  if (this.year % 4 === 0) {
    return true;
  } else {
    return false;
  }
};

Year.prototype.isCenturyLeap = function() {
  if (this.year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = Year;
