const cryptedSymbols = {
    '%!&': 'a',
    '!*(': 'b',
    ')!#': 'c',
    '^^!': 'd',
    '&!(': 'e',
    '$)@': 'f',
    '☺☻◘': 'g',
    '○◘Е': 'h',
    '█↑♣': 'i',
    '↓┼╞': 'j',
    '╜>*': 'k',
    '#√&': 'l',
    '╖╧♥': 'm',
    '♥♦♣': 'n',
    ')/¶': 'o',
    '╜*░': 'p',
    ':::': 'q',
    '↓♥&': 'r',
    '╙╝☺': 's',
    '.!.': 't',
    "'!'": 'u',
    "'''": 'v',
    '}{)': 'w',
    '▼ў♠': 'x',
    '$$$': 'y',
    '^_^': 'z',
    '...': 'undefined'
};
let string = "#√&)/¶#√&".match(/.{0,3}/g).filter(a => a != "");
let decrypted = "";

for(let i = 0; i < string.length; i++)decrypted += cryptedSymbols[string[i]];

console.log(decrypted);