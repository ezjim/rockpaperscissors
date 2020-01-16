import { getRandomThrow } from './rps.js';
import { checkResults } from './checkResults'

const playButton = document.getElementById('selection');
const resetButton = document.getElementById('reset');
const totalWins = document.getElementById('total-wins');
const totalLosses = document.getElementById('total-losses');
const totalDraws = document.getElementById('total-draws');
const displayPlayer = document.getElementById('you-win');
const resultsContainer = document.getElementById('results-container');
let wins = 0;
let losses = 0;
let draws = 0;
playButton.addEventListener('click', () => {
    const playerChoice = document.querySelector('input:checked').value;
    const computerChoice = getRandomThrow();
    console.log('comp choice', computerChoice);
    console.log('player choice', playerChoice);
    console.log('function', checkResults(computerChoice, playerChoice));
    if (checkResults(computerChoice, playerChoice) === 'lose') {
        losses++;
        resultsContainer.classList.remove('hidden');
        displayPlayer.textContent = 'You lost';
        totalLosses.textContent = losses;
    } else if (checkResults(computerChoice, playerChoice) === 'win') {
        wins++;
        displayPlayer.textContent = 'You win';
        totalWins.textContent = wins;
    } else if (checkResults(computerChoice, playerChoice) === 'draw') {
        draws++;
        displayPlayer.textContent = "It's a Draw!";
        totalDraws.textContent = draws;
    }
});