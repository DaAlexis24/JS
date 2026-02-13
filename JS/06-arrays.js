const user = ['Pablo', 24, 'UI /UX Designer'];
console.log(user);
console.log(user[0]);

// Excentricidad
user.id = 1;
console.log(user);
console.log(typeof user);

// Iterar un array

const userContacts = ['Pepe', 'María', 'Juana', 'Roberto'];

console.log(userContacts[0]); // Itero la lista para obtener el valor en el campo 0

for (let i = 0; i < userContacts.length; i++) {
    const item = userContacts[i];
    console.log(item);
}

// Propiedades

// Mutables -> Modifican el array original
userContacts.push('Ernestina');
userContacts.pop();
userContacts.unshift('Micaela');
userContacts.shift();
userContacts.sort();
userContacts.reverse();

// Inmutables -> No modifican el array original

const newArray = userContacts.concat(['Raul', 'Fernando']);

// HOF (ECMAScript 2015)
userContacts.forEach((item) => console.log(item));

let total = 0;

[
    [1, 3],
    [1, 6, 7],
].forEach((item) => item.forEach((item) => (total += item)));

console.log('---------TOTAL--------------');
console.log(total);

const stringContacts = userContacts.reduce((pr, cr) => pr + ', ' + cr);

console.log('---------String Contacts--------------');
console.log(stringContacts);

const numbers = [
    [1, 2],
    [4, 7, 10],
    [12, 14],
];
const flatNumbers = numbers.flat().reduce((a, b) => a + b);
console.log('---------Flat Numbers--------------');
console.log(flatNumbers);
