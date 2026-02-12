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
