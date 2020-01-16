  
function getRandomThrow() {
    const randomNumber = Math.floor(Math.random() * 3);
    return getThrowFromNumber(randomNumber);
}

function getThrowFromNumber(number) {
    if (number === 0) return 'ro';
    if (number === 1) return 'sham';
    if (number === 2) return 'bo';
}

function checkResults(player, cpu) {
    if (cpu === player) return 'draw';
    if (cpu === 'bo' && player === 'ro') return 'win';
    else if (cpu === 'sham' && player === 'bo') return 'win';
    else if (cpu === 'ro' && player === 'sham') return 'win';
    else return 'lose';
}

export {
    getRandomThrow,
    getThrowFromNumber,
    checkResults
};


//  function getRandomThrow() {
//    Math.floor(Math.random() * 3);
//    return choice(randomNumber)
//  }

//  function choice(number) {
//    if (cpuChoice < 0) {
//     cpuChoice = 'ro';
// } else if(cpuChoice <= 1) {
//     cpuChoice ='sham';
// } else {
//     cpuChoice = 'bo';
// }
//  }

// function checkResults(choice1,choice2) {
//   if (choice1 === choice2) {
//     return 'TIE!!';
//   }
//   if (choice1 === 'ro') {
//     if (choice2 === 'sham') {
//     // rock wins 
//       return 'You win!';
//     } else {
//       // paper wins
//       return 'You lose! Go again!';
//     } 
//   }
// }
//   if (choice1 === 'sham') {
//     if (choice2 === 'ro') {
//       // paper wins
//       return 'win!';
//     } else {
//       // scissors wins
//       return 'lose!';
//   }
// }
//   if (choice1 === 'bo') {
//     if (choice2 === 'ro') {
//       //rock wins
//       return 'lose!';
//     } else {
//       // scissors wins
//       return 'win!';

//     };
//   export {
//     getRandomThrow  
//     choice
//     checkResults
//   }
  