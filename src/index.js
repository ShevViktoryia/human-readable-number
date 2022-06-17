module.exports = function toReadable (number) {
  let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  let tens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let w_tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let res ='';

  if(number <= 10) {
    return ones[number];
  }
  if(number < 20 && number > 10) {
    return tens[number - 11];
  }
  if(number >= 20 && number < 100) {
    if(number % 10 == 0) {
      res = w_tens[Math.trunc(number / 10)-1];
    }
    else {
      res = w_tens[Math.trunc(number / 10)-1] + ' ' + ones[(number - Math.trunc(number / 10) * 10)];
    }
    return res;
  }

  if(number >= 100) {
    if(number % 100 == 0) {
      res = ones[Math.trunc(number / 100)] + ' hundred';
    }
    if(number % 10 == 0 && number % 100 != 0) {
      res = ones[Math.trunc(number / 100)] + ' hundred ' + w_tens[(number - (Math.trunc(number / 100) * 100)) / 10 - 1];
    }
    if(number - (Math.trunc(number / 100) * 100) < 20 && number - (Math.trunc(number / 100) * 100) > 10) {
      res = ones[Math.trunc(number / 100)] + ' hundred ' + tens[(number - (Math.trunc(number / 100) * 100)) - 11];
    }
    if (number - (Math.trunc(number / 100) * 100) > 20 && number % 10 != 0) {
      res = ones[Math.trunc(number / 100)] + ' hundred ' + w_tens[Math.trunc((number - (Math.trunc(number / 100) * 100)) / 10) - 1] + ' ' + ones[(number - (Math.trunc(number / 10) * 10))];
    }
    if(number - (Math.trunc(number / 100) * 100) <= 10 && number % 100 != 0) {
      res = ones[Math.trunc(number / 100)] + ' hundred ' + ones[number - (Math.trunc(number / 100) * 100)];
    }
    return res;
  }
}
