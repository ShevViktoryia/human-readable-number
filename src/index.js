module.exports = function toReadable (number) {
  let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  let tens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let w_tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  number = number.toString().split('');
  if(number.length == 1) {
    return ones[number[0]];
  }
  else if(number.length == 2) {
    if(number[1] == '0') {
      return w_tens[number[0]-1];
    }
    else if(number[1] != '0' && number[0] < 2) {
      return tens[number[1]-1];
    }
    else {
      return w_tens[number[0]-1] + ' ' + ones[number[1]];
    }
  }
  else {
    if(number[2] == '0' && number[1] == '0') {
      return ones[number[0]] + ' hundred';
    }
    else if(number[2] == '0' && number[1] != '0') {
      return ones[number[0]] + ' hundred ' + w_tens[number[1]-1];
    }
    else if (number[2] != '0' && number[1] < 2 && number[1] != '0') {
      return ones[number[0]] + ' hundred ' + tens[number[2]-1];
    }
    else if(number[2] != '0' && number[1] == '0') {
      return ones[number[0]] + ' hundred ' + ones[number[2]];
    }
    else {
      return ones[number[0]] + ' hundred ' + w_tens[number[1]-1] + ' ' + ones[number[2]];
    }
  }
}
