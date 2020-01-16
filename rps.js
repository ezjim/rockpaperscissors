 function getRandomThrow() {
   Math.floor(Math.random() * 3);
if (cpuChoice < 0) {
    cpuChoice = 'ro';
} else if(cpuChoice <= 1) {
    cpuChoice ='sham';
} else {
    cpuChoice = 'bo';
}

}

function compare(choice1,choice2) {
  if (choice1 === choice2) {
    return 'TIE!!'
  }
}