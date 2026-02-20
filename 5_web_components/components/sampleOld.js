export const sampleOld = () => {
    const selector = 'app-sample';

    const setTemplate = () => {
        const text = 'Sample';
        return `
            <div class="container" title="sample">
                <p lang="es">
                ${text}
                </p>
            </div>
        `;
    };

    if (document.querySelector(selector)) {
        document.querySelector(selector).HTML = setTemplate();
    }
};

// Otra manera de crear componentes, usando elementos del DOM

export const sample = () => {
    const selector = 'app-sample';
    const text = 'Sample Component';

    const template =
        /*html*/
        `<div class="sample-component">
            <p lang="es">
                ${text}
            </p>
            <button>Borrar</button>
            <button>Actualizar</button>
        </div>
        `;

    const createElement = () => {
        const parentElement = document.createElement('parent');
        // Simular outerHTML
        parentElement.innerHTML = template;
        const element = parentElement.firstElementChild;
        console.dir(element);
        return element;
    };

    const element = createElement();

    element.querySelectorAll('button').forEach((button) => {
        button.addEventListener('click', () => {
            if (button.textContent === 'Borrar') {
                console.log('Delete Component');
                element.remove();
            } else if (button.textContent === 'Actualizar') {
                element.querySelector('p').textContent =
                    'Se actualizó el componente';
            }
        });
    });

    if (document.querySelector(selector)) {
        // document.querySelector(selector).appendChild(element);
        document.querySelector(selector).replaceWith(element);
    }
};
