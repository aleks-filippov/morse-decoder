const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let str = '';
  let slc = '';

  while (expr.length > 0) {
    if (expr.length === 10) {
      slc = expr;
      expr = '';
    } else {
      slc = expr.slice(0, 10);
      expr = expr.slice(10);
    }

    if (slc === '**********') str += ' ';
    else {
      let arr = [];
      for (let i = 0; i <= 8; i += 2) {
        let temp = '';
        temp += slc[i] + slc[i + 1];
        arr.push(temp);
      }

      let ex = '';
      for (let i = 0; i < 5; i++) {
        if (arr[i] === '00') continue;
        else if (arr[i] === '10') ex += '.';
        else ex += '-';
      }

      str += MORSE_TABLE[ex];
    }
  }
  return str;
}

module.exports = {
    decode
}
