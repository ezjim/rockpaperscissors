
export default function getRandomThrow() {  

    const randomNumber = Math.floor(Math.random() * 3);
  

    if (randomNumber === 1) {
        return 'ro';
    } else if (randomNumber === 2) {
        return 'sham';
    } else {
        return 'bo';
    }
}