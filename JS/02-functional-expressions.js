// Declaración de una función
function make() {
    const x = 22;
    console.log(x);
}

// Asignación de una función (esto es por el operador =). También llamado expresión funcional
const foo = function () {
    const x = 22;
    console.log(x);
};

// Arrow functions

const baz = () => {
    const x = 22;
    console.log(x);
};

make();
foo();
baz();
