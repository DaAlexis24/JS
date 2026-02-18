# JS en la Web

## Navegadores Web

Cuenta con las siguientes partes:

- Interfaz de Usuario
- Motor de navegación
- Motor de renderizado
- Persistencia de Datos
- Networking
- Interpretes de Script
- Backend de la interfaz de Usuario

### Motores de navegación y renderizado

El **rendering engine** es el _encargado_ de presentar el contenido enviado por el servidor en respuesta a la solicitud del navegador.

HTML se encarga de:

1. El análisis sintáctico (_parsing_) del código HTML y CSS que le llega, así transforma la entrada en...
2. El árbol **DOM** (_Document Object Model_) que representa la estructura del documento.
3. Se aplica el estilo **CSS** en el **DOM**
4. Se crea el árbol de renderizado (_render tree_) que contiene la información necesaria para la presentación visual del documento.
5. Se disponen los elementos en la pantalla (**Layout o Render**)
6. Se presenta todo el contenido del **DOM** en la pantalla, a este proceso se le conoce como **Painting the render tree**.

El **browser engine** coordina las acciones entre la **UI** y el _*render engine*_. Se encarga también de manejar las URLs que pueda contener el proyecto.

### Motores y Entornos de Ejecución de JS

El **motor de JS** es el responsable de ejecutar el código JS que se este aplicando en la página web, ya que interpreta el código, genera _bytecode_ para luego ejecutarlo.

Los motores de JS implementan a su manera el _core_ de JS, caracterizado por un mínima **API** (conjunto de funciones y objetos) que permiten la interacción con el entorno de ejecución.

## JS PRO

### ¿Para qué sirven las funciones?

Para generar componentes reutilizables, ya que se le puede invocar todas las veces que sea necesario. Las funciones son un conjunto de instrucciones que cuentan con parámetros, no hay que olvidarlo.

> [!IMPORTANT]
>
> Las funciones también son **objetos**.

### Objetos

Es un dato no primitivo (referenciado) que incluye propiedades asociadas a otros datos. Normalmente se escriben utilizando llaves.

```js
{
  userName: 'Pipo';
  age: 33;
}
```

Los datos los usamos para asignarlos a una variable. Así que lo que hemos realizado antes se transforma en;

```js
const dataUser = {
  userName: 'Pipo',
  age: 33,
};
```

Así podemos usar esta variable como lo deseemos. Además, también podemos añadir datos y funciones a una función desde afuera.

### Expresiones funcionales

```js
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
```

### Arrow functions

Normalmente también se pueden escribir de manera abreviada, a esto se le conoce como escritura funcional o _lambda_

```js
const add = (x, y) => x + y;
```

### High Order Function

Reciben como parámetro una **función** o retornan una **función**. JS lo que hace es evaluar las expresiones según los datos que obtengan, en este caso centrará en coger la función y los demás parámetros que le des, para ejecutarlos.

```js
const calculate = function (fn, a = 0, b = 0) {
  const r = fn(a, b);
  console.log(r);
};

const prod = (x, y) => {
  return x * y;
};

calculate(prod, 6, 7); //42
```

Esto es importante porque aparece el concepto de los **callbacks**, esto se usa mucho en JS moderno

Esto se usa mucho a la hora de construir webs, por ejemplo **addEventListener** y otros controladores de eventos (_handles_) son **HOF** que responden de manera **asíncrona** cuando el usuario realiza el proceso que se le está indicando.

### Funciones anónimas

Son útiles solo si no las vas a utilizar en otra parte de tu proyecto, solo como un parámetro más de una HOF.

### Timers

Son funciones especiales, ya que ejecutan otras funciones según el tiempo o intervalo de tiempo que le des.

Para desactivarlos, tienes que asignarlos a una variable, esto nos permite conocer un poco mejor la asincronía.

## Módulos ECMA

Es la manera actual para usar los archivos JS dentro de la web, usando las importaciones. Para ello tenemos que realizar lo siguiente:

```html
<!-- No debe faltar el atributo type -->
<script src="./index.js" type="module" defer></script>
```

```js
// main.js
export function main() {
  console.log('Loaded Main');
}

// index.js
import main from './main.js';
```

Se pueden importar y exportar funciones y constantes.

## Refactorizar

Consiste en mejorar el código que uno ha escrito y que le funciona para obtener mejores prácticas y un código más limpio.

## Manejo de los Objetos

Recuerda que los objetos son un dato que cuenta con propiedades y estas propiedades pueden ser objetos, por ello, son cruciales a la hora de crear proyectos y por ende debemos de saber como usarlos.

Una práctica cuestionable es añadir propiedades de manera externa, al estar VSCode escrito usando los tipos de TS, por ende no reconocerá las propiedades externas que le quieras añadir al objeto.

Una mala práctica es eliminar propiedades del objeto, mediante la palabra reservada _delete_, ya que puede comprometer la estructura del proyecto.

Para poder referenciar las propiedades de un objeto es necesario usar el operador **.**:

`user.age // Quiero acceder a la propiedad age del objeto user`

Contamos con la estructura **For In** para poder recorrer los objetos y así obtener la información de las propiedades que tienen.

```js
for (const key in user) {
  const value = user[key];
  console.log(`Clave ${key} el valor es ${value}`);

  // Clave name el valor es Pepe
  // Clave age el valor es 22
  // Clave job el valor es Developer
}
```

También contamos con la clase **Object** que cuenta con distintos métodos que también nos pueden ayudar a la hora de recopilar la información de los valores y de las claves. La información nos aparece como un array de arrays.

```js
Object.keys(user); // Claves o propiedades
Object.values(user); // Información de las propiedades
Object.entries(user); // Toda la información
```

## Manejo de Arrays

Los arrays tienen la siguiente forma y se realizan mediante corchetes: `const user = ['Pablo', 24, 'UI /UX Designer'];`

Al ser objetos, se le pueden añadir propiedades desde fuera, a esto se le conoce como **excentricidad**

Es importante saber que los arrays se pueden **iterar** para poder obtener sus datos según la posición que queramos referenciar: `console.log(user[0]);`

### Estructuras de Control

- Bucle For
- Bucle For In
- Bucle For Off

### Propiedades de Arrays

Existen las propiedades mutables, las inmutables y las HOF

#### Mutables

Se le llaman así ya que **modifican** el array original.

```js
userContacts.push('Ernestina');
userContacts.pop();
userContacts.unshift('Micaela');
userContacts.shift();
userContacts.sort();
userContacts.reverse();
```

#### Inmutables

Se le llaman así ya que no modifican el array original, por ende se tiene que guardar en otra variable.

```js
const newArray = userContacts.concat(['Raul', 'Fernando']);
```

#### HOF

Se implementaron en el ECMA Script 1.5 y son la manera más actual de como tratar arrays de forma **sincrona**. Suelen usar callbacks que reciben como parámetros el item o el array.

```js
userContacts.forEach((item) => console.log(item)); // No crea un nuevo array o modifica el existente, solo itera.
user.map((item) => console.log(`Hola ${item}`)); // Itera también el array
numbers.filter((item) => item > 10); // Devuelve un array con los datos que cumplan con la condición del callback
numbers.find((item) => item > 10); // Devuelve el primer valor que cumpla con la condición
user.findIndex((item) => item === 'Ernesto'); // Devuelve el índice donde se encuentra el item a ubicar, devuelve un '-1' si es que no existe el valor en ese array
numbers.reduce((prev, current) => prev + current); // Sirve para reducir el array en un único elemento. Sirve para acumular números o para convertir un array en una cadena
arrayOfArrays.flat(); // Sirve para aplanar muchos arrays en uno solo.
```

## Variables y objetos

Un objeto puede ser referenciado por 2 o más variables

Una referencia nos permite guardar la información de un objeto en otras zonas de la memoria, y la variable estará en una parte más "cara", así se organiza mejor la información y el objeto puede mutar las veces que sea necesario.

Para evitar la mutación, debemos de crear un objeto nuevo desestructurando el antiguo: `objeto.propiedad = {...objeto.propiedad,propiedad: nuevo_valor}`

## Enrutamiento

Existe las referencias absolutas y referenciadas a la raíz. Las absolutas se usan para abrir enlaces externos y las referenciales a páginas internas del proyecto y/o documento.

Con esta lógica podremos construir una MultiPage (MP)

### Single-Page Application

Tenemos un ejemplo en la carpeta [SPA-Web](/SPA_Web/index.html). Acá estamos revisando la lógica de los eventos

_Event_ tiene 2 métodos que son **currentTarget** y **Target**. El target es el _emisor del evento_ y el current es el _listener del evento_.

Los elementos hijos suelen delegar los eventos a sus elementos padres.

### Location

Este objeto nos ayuda a la hora de realizar una navegación útil en una SPA, usando el método **pathname** que tiene.

### Errores de path

Con este sistema, existen problemas a la hora de compartir la URL, ya que se suele quedar pillado en el index, para ello inicializamos la navegación primero en nuestro main.

## Manejo de Formularios

