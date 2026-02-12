setTimeout(() => {
    console.log('Por fin');
}, 3000);

const id = setInterval(() => {
    console.log('Otra vez');
}, 1000);

setTimeout(() => {
    clearInterval(id);
}, 10000);
