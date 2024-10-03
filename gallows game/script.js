let words = [              
    "javascript",  // Array of words for the game
    "monkey",
    "amazing",
    "pancake",            
    "lemon",
    "watermelon",
    "cat",
    "mustache",
];

// Selecting a random word from the array
let word = words[Math.floor(Math.random() * words.length)];   // Math.random()returns a number between 0 and 1, multiply by the length of the array and round to an integer to select a random word

let answerArray = [];                                  
for (let i = 0; i < word.length; i++) {    // Fill the array of answers "_" by the number of letters in the word                      
    answerArray[i] = "_";                 
}

let remainingLetters = word.length;   // Number of letters that still need to be guessed                    
while (remainingLetters > 0) {     
    alert(answerArray.join(" "));  // Show the current progress (display the array separated by spaces)         
    let guess = prompt("Guess a letter, or click Cancel to stop playing.");  // We ask the user to enter a letter or end the game        
    
    if (guess === null) {  // If the user clicks "Cancel", the game ends                                            
        break;                             
    } else if (guess.length !== 1) {  // If more than one letter is entered, we display a warning                         
        alert("Please enter a single letter.");                
    } else {  // If one letter is entered, continue checking
        for (let j = 0; j < word.length; j++) {  // Go through each letter of a random word              
            if (word[j] === guess) {  // If the letter matches the letter in the word
                answerArray[j] = guess;  // Replace "_" with the guessed letter
                remainingLetters--;  // Reducing the number of remaining letters to guess
            }
        }
    }
}

alert(answerArray.join(" "));  // Showing whole word
alert("Good job! The answer was " + word);  // Telling the correct answer to the user
