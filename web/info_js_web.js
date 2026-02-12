console.log('Loaded Main');
console.dir(document);
console.log('ChildNodes', document.childNodes);
console.log('Children', document.children);

const htmlElement = document.children[0];
console.dir(htmlElement);
console.log('ChildNodes', htmlElement.childNodes);
console.log('Children', htmlElement.children);

console.log('Children', document.body.children);

// const link1 = document.body.children[2].children[0].children[0].children[0];
// console.log(link1);
// link1.href = 'https://google.com';

// Accesos DIRECTOS al DOM - API Antiguo
// document.getElementById();
// document.getElementsByClassName('footer');
// document.getElementsByTagName('li');
// document.getElementsByName();

// API Moderno - querySelection
const home = document.querySelector('#home'); // id
document.querySelector('.home'); // clases
document.querySelector('[aria-label=home]'); // aria-label
const p = home.querySelectorAll('p');
const today = new Date();
p[0].textContent = 'Aprendiendo a manipular el DOM ' + today;

// Nuevos elementos
const newParagraph = document.createElement('p');
newParagraph.textContent = 'Hola Amigos';
console.dir(newParagraph);

// Añadir un elemento al DOM
home.appendChild(newParagraph);

// Añadir usando Inner
home.innerHTML += '<p>Dolor</p>';

const me = 'Daniel';

home.innerHTML += `<ul>
    <li>Hola ${me}</li>
    <li>Cómo estas?</li>
</ul>`;

const handleChange = function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
};

// Creamos un botón para el modo oscuro

const darkModeButton = document.querySelector('#theme-toggle');
darkModeButton.addEventListener('change', handleChange);

function makeAny() {
    console.log('Click Dark Mode');
}
