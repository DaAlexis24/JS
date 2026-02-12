import pkg from 'enquirer';
const { prompt } = pkg;

const validOptions = ['piedra', 'papel', 'tijera'];

function gameRPS(userChoice = '') {
    const result = {
        machineChoice: '',
        userChoice,
        winner: '',
    };
    result.machineChoice =
        validOptions[Math.floor(Math.random() * validOptions.length)];

    const allResults = [
        ['empate', 'user', 'machine'],
        ['user', 'empate', 'machine'],
        ['user', 'machine', 'empate'],
    ];

    const user = validOptions.findIndex((option) => option === userChoice);
    result.winner = allResults[i][user];
    return result;
}

async function getUserChoice() {
    const userChoice = await prompt({
        type: 'input',
        name: 'choice',
        message: 'Elija piedra 🪨, papel 🧻 o tijeras ✂️: ',
    });
    if (!validOptions.includes(userChoice.choice.toLowerCase())) {
        console.log('Opción inválida, vuelva a intentarlo');
    }
    return userChoice;
}

gameRPS(getUserChoice());
