function getRandomThrow() {
const randomNumber = Math.floor(Math.random() * 3);
return pullThrow(randomNumber);
}

function pullThrow(number) {
  if(number === 0) return 'Ro';
  if(number === 1) return 'Sham';
  if(number === 2) return 'Bo';
}

function checkTotal(human, cpu) {
  if(cpu === human) return 'Tie!';
  if(cpu === 'bo' && human === 'ro') return 'win';
  else if(cpu === 'sham' && human === 'bo') return 'win';
  else if(cpu === 'ro' && human === 'sham') return 'win';
  else return 'lose';
} 
export {
  getRandomThrow,
  pullThrow
  checkTotal
}

