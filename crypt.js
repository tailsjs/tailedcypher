const symbols = {
    "a": "%!&",
    "b": "!*(",
    "c": ")!#",
    "d": "^^!",
    "e": "&!(",
    "f": "$)@",
    "g": "☺☻◘",
    "h": "○◘Е",
    "i": "█↑♣",
    "j": "↓┼╞",
    "k": "╜>*",
    "l": "#√&",
    "m": "╖╧♥",
    "n": "♥♦♣",
    "o": ")/¶",
    "p": "╜*░",
    "q": ":::",
    "r": "↓♥&",
    "s": "╙╝☺",
    "t": ".!.",
    "u": "'!'",
    "v": "'''",
    "w": "}{)",
    "x": "▼ў♠",
    "y": "$$$",
    "z": "^_^"
};
let toCypher = "lol";
let cyphered = "";

for(let i = 0; i < toCypher.length; i++)cyphered += symbols[toCypher[i]] != undefined ? symbols[toCypher[i]] : "...";

console.log(cyphered);