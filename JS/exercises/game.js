// Escribe una función que simula el juego piedra, papel y tijera. Recibirá como parámetro una opción (piedra, papel o tijera) en forma de string. La máquina, elegirá automáticamente una opción aleatoria. Imprime por consola ambas elecciones y en caso de ganar el jugador un mensaje de victoria, y en caso de perder uno de derrota.

import pkg from 'enquirer';
const { prompt } = pkg;
const options = ['piedra', 'papel', 'tijera'];

async function gameRockPaperScissors() {
    const systemChoice = options[Math.floor(Math.random() * options.length)];
    const userChoice = await prompt({
        type: 'input',
        name: 'choice',
        message: 'Elija piedra 🪨, papel 🧻 o tijeras ✂️: ',
    });
    if (!options.includes(userChoice.choice.toLowerCase())) {
        console.log('Opción inválida, vuelva a intentarlo');
    }
    if (systemChoice === userChoice) {
        console.log('Máquina: ', systemChoice);
        console.log('Usted:', userChoice.choice);
        console.log('Se declara EMPATE');
    } else if (
        (userChoice.choice === 'piedra' && systemChoice === 'tijera') ||
        (userChoice.choice === 'tijera' && systemChoice === 'papel') ||
        (userChoice.choice === 'papel' && systemChoice === 'piedra')
    ) {
        console.log('Máquina: ', systemChoice);
        console.log('Usted:', userChoice);
        console.log('USTED GANA 🏆');
    } else {
        console.log('Máquina: ', systemChoice);
        console.log('Usted:', userChoice);
        console.log('LA MÁQUINA GANA 🤖');
    }
}

gameRockPaperScissors();
