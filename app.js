import { getRandomThrow } from './rps.js';
import { checkResults } from './checkResults.js'

const playButton = document.getElementById('play');
const resetButton = document.getElementById('reset');
const totalWins = document.getElementById('total-wins');
const totalLosses = document.getElementById('total-losses');
const totalDraws = document.getElementById('total-draws');
const displayPlayer = document.getElementById('you-win');

//const resultsContainer = document.getElementById('results-container');

let wins = 0;
let losses = 0;
let draws = 0;

playButton.addEventListener('click', () => {

    const player = document.querySelector('input:checked').value;

    const cpu = getRandomThrow();
    console.log('cpu', player, cpu);
    console.log('player', player, cpu);
    console.log('function', checkResults(player, cpu));
    if (checkResults(player, cpu) === 'lose') {
        losses++;
        resultsContainer.classList.remove('hidden');
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