function handleChange() {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}

// Abrir menu móvil
const handleMenu = (event) => {
    event.preventDefault();
    console.log('Click', event.target.localName);
    const menuDialogElement = document.querySelector('#menu-dialog');
    if (event.target.localName === 'button') {
        menuDialogElement.close();
    } else {
        menuDialogElement.showModal();
    }
};

export function main() {
    console.log('Loaded Main');
    const darkModeButton = document.querySelector('#theme-toggle');
    const menuIconElement = document.querySelector('#menu-icon');
    const closeMenuDialog = document.querySelector('#menu-dialog button');

    darkModeButton.addEventListener('change', handleChange);
    menuIconElement.addEventListener('click', handleMenu);
    closeMenuDialog.addEventListener('click', handleMenu);
}
