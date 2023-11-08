// =====================================
//             Caeser Chiper
// =====================================

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const encoderBtn = document.body.querySelector('#encoderBtn');
const decoderBtn = document.body.querySelector('#decoderBtn');
const displayText = document.body.querySelector('#displayText');

// create alphabet for crypted text
const createAlphabet = (inputKey) => 
{
    let shiftAlphabet = [];

    for (let i = 0; i < alphabet.length; i++)
    {
        shiftAlphabet.push(alphabet[i + inputKey]);
    }
    const codeAlphabet = shiftAlphabet.filter((elt) => elt);
    return codeAlphabet.concat(alphabet.slice(0, inputKey));
};

// TODO error handling
const checkInput = (text, key) =>
{
    text = document.body.querySelector('#inputText').value;
    key = Number(document.body.querySelector('#inputKey').value);
    let message = [];
};

// create + display crypted text
encoderBtn.addEventListener('click', () => 
{
    event.preventDefault();
    const inputText = document.body.querySelector('#inputText').value;
    const inputKey = Number(document.body.querySelector('#inputKey').value);
    const codeAlphabet = createAlphabet(inputKey);
    
    let cryptedText = '';

    // checkInput(inputText, inputKey);

    for(let char of inputText)
    {
        for(let i = 0; i < alphabet.length; i++)
        {
            if(char === alphabet[i])
            {
                cryptedText += `${codeAlphabet[i]}`;
            }
            else if(char === " ")
            {
                cryptedText += `${" "}`
            }
        }
    }
    displayText.textContent = `${cryptedText.toUpperCase()}`;

});

// create + display decrypted text
decoderBtn.addEventListener('click', () => 
{ 
    event.preventDefault();
    const inputText = document.body.querySelector('#inputText').value;
    let decryptedText = '';
    
    for(let char of inputText)
    {
        for(let i = 0; i < alphabet.length; i++)
        {
            if(char === alphabet[i])
            {
                decryptedText += `${alphabet[i]}`
            }
            else if(char === " ")
            {
                decryptedText += `${" "}`
            }
        }
    }
    displayText.textContent = `${decryptedText.toUpperCase()}`;
});

// =====================================
//             Morsecode
// =====================================

const textInput = document.body.querySelector('#textInput');
const encryptBtn = document.body.querySelector('#encryptBtn');
const displayMorsecode = document.body.querySelector('#displayMorsecode');

let morseAlphabet = [
    { letter: "1", morseCode: ".----" },
    { letter: "2", morseCode: "..---" },
    { letter: "3", morseCode: "...--" },
    { letter: "4", morseCode: "....-" },
    { letter: "5", morseCode: "....." },
    { letter: "6", morseCode: "-...." },
    { letter: "7", morseCode: "--..." },
    { letter: "8", morseCode: "---.." },
    { letter: "9", morseCode: "----." },
    { letter: "0", morseCode: "-----" },
    { letter: " ", morseCode: " / " },
    { letter: "A", morseCode: ".-" },
    { letter: "B", morseCode: "-..." },
    { letter: "C", morseCode: "-.-." },
    { letter: "D", morseCode: "-.." },
    { letter: "E", morseCode: "." },
    { letter: "F", morseCode: "..-." },
    { letter: "G", morseCode: "--." },
    { letter: "H", morseCode: "...." },
    { letter: "I", morseCode: ".." },
    { letter: "J", morseCode: ".---" },
    { letter: "K", morseCode: "-.-" },
    { letter: "L", morseCode: ".-.." },
    { letter: "M", morseCode: "--" },
    { letter: "N", morseCode: "-." },
    { letter: "O", morseCode: "---" },
    { letter: "P", morseCode: ".--." },
    { letter: "Q", morseCode: "--.-" },
    { letter: "R", morseCode: ".-." },
    { letter: "S", morseCode: "..." },
    { letter: "T", morseCode: "-" },
    { letter: "U", morseCode: "..-" },
    { letter: "V", morseCode: "...-" },
    { letter: "W", morseCode: ".--" },
    { letter: "X", morseCode: "-..-" },
    { letter: "Y", morseCode: "-.--" },
    { letter: "Z", morseCode: "--.." }
];

encryptBtn.addEventListener('click', () =>
{
    event.preventDefault();
    let morsecode = ''; 
    for(let char of textInput.value)
    {
        for(let i = 0; i < morseAlphabet.length; i++)
        {
            if(char.toUpperCase() === morseAlphabet[i].letter)
            {
                morsecode += `${morseAlphabet[i].morseCode}`;
            }
        }
    }
    displayMorsecode.textContent = `${morsecode}`;
});