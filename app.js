    // Fisher-Yates algorythm to shuffle the password (eliminating predictabality)
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
}

const passwordStrength = (pw, chbox1, chbox2, chbox3, chbox4) => {
    const ratingWord = document.querySelector('#rating-word');
    const weak = document.querySelector('.weak');
    const mediumOne = document.querySelector('.medium-one');
    const mediumTwo = document.querySelector('.medium-two');
    const strong = document.querySelector('.strong');
    const chboxArr = [chbox1, chbox2, chbox3, chbox4];
    const checked = chboxArr.filter(chbox => chbox === true);
    
    // Resetting the styles of the rating visualization divs
        weak.style.backgroundColor = "#100f15";
        weak.classList.add('strength-scale-div-border');
        mediumOne.style.backgroundColor = "#100f15";
        mediumOne.classList.add('strength-scale-div-border');
        mediumTwo.style.backgroundColor = "#100f15";
        mediumTwo.classList.add('strength-scale-div-border');
        strong.style.backgroundColor = "#100f15";
        strong.classList.add('strength-scale-div-border');

    // Logic to color the visualization divs and display password strength as weak/medium/strong
    if (pw.length < 8 || checked.length < 2) {
        ratingWord.textContent = "WEAK";
        weak.style.backgroundColor = "red";
        weak.classList.remove('strength-scale-div-border');
    } else if (checked.length < 3) {
        ratingWord.textContent = "MEDIUM";
        weak.style.backgroundColor = "orange";
        weak.classList.remove('strength-scale-div-border');
        mediumOne.style.backgroundColor = "orange";
        mediumOne.classList.remove('strength-scale-div-border');
    } else if (checked.length < 4) {
        ratingWord.textContent = "MEDIUM";
        weak.style.backgroundColor = "orange";
        weak.classList.remove('strength-scale-div-border');
        mediumOne.style.backgroundColor = "orange";
        mediumOne.classList.remove('strength-scale-div-border');
        mediumTwo.style.backgroundColor = "orange";
        mediumTwo.classList.remove('strength-scale-div-border');
    } else if (checked.length === 4) {
        ratingWord.textContent = "STRONG";
        weak.style.backgroundColor = "green";
        weak.classList.remove('strength-scale-div-border');
        mediumOne.style.backgroundColor = "green";
        mediumOne.classList.remove('strength-scale-div-border');
        mediumTwo.style.backgroundColor = "green";
        mediumTwo.classList.remove('strength-scale-div-border');
        strong.style.backgroundColor = "green";
        strong.classList.remove('strength-scale-div-border');
    }
}



  // Generating the password based on user input
const generatePassord = (upperCase, lowerCase, number, symbol, length) => {
    
    const nums = '0123456789'
    const lCase = 'abcdefghijklmnopqrstuvwxyz'
    const uCase = lCase.toUpperCase();
    const symbols = '~!@#$%^&*()_-+={[}]|\:;<,>.?/';

    let password = '';
    let leftover = '';
    
    if (upperCase) {
        password += uCase[Math.floor(Math.random() * uCase.length)];
        leftover += uCase;
    } 
    if (lowerCase) {
        password += lCase[Math.floor(Math.random() * lCase.length)];
        leftover += lCase;
    }
    if (number) {
        password += nums[Math.floor(Math.random() * nums.length)];
        leftover += nums;
    }
    if (symbol) {
        password += symbols[Math.floor(Math.random() * symbols.length)];
        leftover += symbols;
    }
    
    const currentLength = password.length;

    for (let i = 0; i < length - currentLength; i++){
        password += leftover[Math.floor(Math.random() * leftover.length)]
    }

    let passArray = [...password]; // Converting the password into an array to be able to use the shuffling algorythm
    const finalPassword = shuffleArray(passArray); // Calling the shuffling algorythm
    
    passwordStrength(finalPassword, upperCase, lowerCase, number, symbol); // Calling the password strength checker function

    passwordDisplay.textContent = finalPassword.join().replaceAll(',',''); 
    passwordDisplay.style.color = "#FFFFFF";
}

    // Selecting the required DOM elements
const form = document.querySelector('#password-form');
const lowerCase = document.querySelector('#lowercase');
const upperCase = document.querySelector('#uppercase');
const number = document.querySelector('#numbers');
const symbol = document.querySelector('#special-characters');
const length = document.querySelector('#length');
const passwordDisplay = document.querySelector('.password-display')
const lengthDisplay = document.querySelector('.password-length-number');
const copyButton = document.querySelector('#copy-button');

    // Displaying the current value of the slider and changing background color 
lengthDisplay.textContent = length.value;

const rangeValueUpdater = (value) => {
    lengthDisplay.textContent = value;
    length.style.backgroundSize = (length.value - length.min) * 100 / (length.max - length.min) + '% 100%';
};

    // Changing slider background based on progress
    length.style.backgroundSize = (length.value - length.min) * 100 / (length.max - length.min) + '% 100%';



    // Preventing default form behavior, 
    // checking if at least one of the checkboxes are checked,
    // calling the generatePassword function with true or false values, based on which checkboxes are checked 
    // and checking the value of the length selector
form.addEventListener('submit', (e) => { 
    e.preventDefault();
    if (!upperCase.checked && !lowerCase.checked && !number.checked && !symbol.checked) {
         alert('Please select at least one type of character to include!');
    } else {
         generatePassord(upperCase.checked, lowerCase.checked, number.checked, symbol.checked, length.value);
    }
    
});

    // Click event to copy the generated passord to the clipboard
copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(passwordDisplay.innerHTML);
});




