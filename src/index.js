const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};
let dots_dashes = {
    "00": '',
    "10": '.',
    "11": '-',
    "**": ' ',
}
function decode(expr) {
    // write your solution here
    //console.log(MORSE_TABLE['-----']);

    function devideByTen(str) {
        let index = 0;
        let newStr = '';
        let newMas = [];
        for (let i = 0; i < (str.length / 10); i++) {
            while (index < 10) {
                newStr += str[index + 10 * i];
                index++;
            }
            newMas.push(newStr);
            newStr = '';
            index = 0;
        }
        return newMas;
    }


    function bit_pairs(mas) {
        let newArray = [];
        for (let i = 0; i < mas.length; i += 2) {
            if (mas[i] + mas[i + 1] == '**') {
                return ' ';
                //console.log(dots_dashes['**']);
                break;
            } else if (mas[i] + mas[i + 1] == '00') {
                continue;
            } else {
                newArray.push(dots_dashes[mas[i] + mas[i + 1]]);
            }
        }
        return MORSE_TABLE[newArray.join('')];
    }

    let res = '';
    for (let i = 0; i < (expr.length / 10); i++) {
        res += bit_pairs(devideByTen(expr)[i]);
    }
    return res;
}


module.exports = {
    decode
}