function makeAny() {
    const x = 22;
    console.log(x);
}

makeAny();
makeAny();

console.log(makeAny);

// Objetos
const dataUser = {
    userName: 'Pipo',
    age: 33,
};

dataUser.job = 'Developer';
console.log(dataUser);

// Funciones como Objetos
makeAny.age = 23;
