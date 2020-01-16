export default function checkResults {
    function checkResults(player, cpu) {
        if (cpu === player) return 'draw';
        if (cpu === 'bo' && player === 'ro') return 'win';
        else if (cpu === 'sham' && player === 'bo') return 'win';
        else if (cpu === 'ro' && player === 'sham') return 'win';
        else return 'lose';
    }
    
    