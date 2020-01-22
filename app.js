import getRandomThrow from './rps.js';
import checkResults from './checkResults.js';
// ^above is the random number generator and how it compares
const playButton = document.getElementById('play');
const totalWins = document.getElementById('winsTotal');
const totalLosses = document.getElementById('lossesTotal');
const totalDraws = document.getElementById('drawsTotal');
const displayPlayer = document.getElementById('you-win');
// const results = document.getElementById('results');

let wins = 0;
let losses = 0;
let draws = 0;
// Button and event listener
playButton.addEventListener('click', () => {
    console.log('click');
    const player = document.querySelector('input:checked').value;
    const cpu = getRandomThrow();
    if (checkResults(player, cpu) === 'lose') {
        losses++;
        displayPlayer.textContent = 'You lost';
        totalLosses.textContent = losses;

    } else if (checkResults(player, cpu) === 'win') {
        wins++;
        displayPlayer.textContent = 'You win';
        totalWins.textContent = wins;

    } else if (checkResults(player, cpu) === 'draw') {
        draws++;
        displayPlayer.textContent = "It's a Draw!";
        totalDraws.textContent = draws;
    }
});