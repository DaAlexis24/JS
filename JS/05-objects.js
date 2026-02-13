// Objetos

const user = {
    name: 'Pepe',
    age: 22,
    job: 'Developer',
};

// Práctica cuestionable
// user.job = 'Developer';

// Mala práctica -- Eliminar propiedades de un objeto con la palabra reservada delete
// delete o.age;

// console.log(user);

// const prop = 'name';
// console.log(prop);
// console.log(user[prop]);

// Bucles For In, nos permiten recorrer objetos

for (const key in user) {
    const value = user[key];
    console.log(`Clave ${key} el valor es ${value}`);
}

Object.keys(user);
Object.values(user);

console.log(Object.entries(user));
