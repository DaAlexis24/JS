export const sample = () => {
    const selector = "app-sample";

    const setTemplate = () => {
        const text = "Sample";
        return `
            <div class="container" title="sample">
                <p lang="es">
                ${text}
                </p>
            </div>
        `;
    };

    if ( document.querySelector(selector)) {
        document.querySelector(selector).HTML = setTemplate();
    }

};
