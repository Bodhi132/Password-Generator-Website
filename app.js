const amountRange=document.getElementById('AmountRange')
const charRange=document.getElementById('CharRange')
const includeUppercase=document.getElementById('Uppercase')
const includeNumbers=document.getElementById('numbers')
const includeSymbols=document.getElementById('Symbols')
const form=document.getElementById('passwordGeneratorForm')
const passwordDisplay=document.getElementById('passwordDisplay')

const UPPERCASE_CODES=arrayFromLowToHigh(65,90)
const LOWER_CODES=arrayFromLowToHigh(97,122)
const NUMBER_CODES=arrayFromLowToHigh(48,57)
const SYMBOLS_CODES=arrayFromLowToHigh(33,47).concat(arrayFromLowToHigh(58,64)).concat(arrayFromLowToHigh(91,96).concat(arrayFromLowToHigh(123,126)))

amountRange.addEventListener('input',synchValue)
charRange.addEventListener('input',synchValue)
form.addEventListener('submit',e=>
{
    e.preventDefault()
    const characters=amountRange.value
    const upperCase=includeUppercase.checked
    const numbers=includeNumbers.checked
    const symbols = includeSymbols.checked
    const password=generatePassword(characters,upperCase,numbers,symbols)
    passwordDisplay.innerText=password
})
function generatePassword(characters,upperCase,numbers,symbols)
{
    let char_codes=LOWER_CODES
    if(upperCase)char_codes=char_codes.concat(UPPERCASE_CODES)
    if(numbers)char_codes=char_codes.concat(NUMBER_CODES)
    if(upperCase)char_codes=char_codes.concat(UPPERCASE_CODES)

    const passwordCharacters=[]
    for(i=0;i<characters;i++)
    {
        const character_code=char_codes[Math.floor(Math.random()*char_codes.length)]
        passwordCharacters.push(String.fromCharCode(character_code))
    }
    return passwordCharacters.join('')
}
function synchValue(e)
{
    const val=e.target.value
    amountRange.value = val
    charRange.value = val
}

function arrayFromLowToHigh(low,high)
{
    const arr=[]
    for(i=low;i<=high;i++)
    {
        arr.push(i);
    }
    return arr
}