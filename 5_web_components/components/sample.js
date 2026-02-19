export const sample = () => {
    const selector = 'app-sample';

    const setTemplate = () => {
        const text = 'Sample';
        return `
            <div>
                <p lang="es">${text}</p>
            </div>
        `;
    };

    // Nos pide el tipo de elemento
    // const element = document.createElement('div');
    // element.outerHTML = setTemplate();
    // console.log(element);
    document.querySelector(selector).outerHTML = setTemplate();
};
