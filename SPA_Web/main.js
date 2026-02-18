export let theme = 'light';

export const navigate = (url = '') => {
    let path = url.split('/').pop();
    if (!path) path = 'home';
    history.pushState({}, null, path);
    // console.log("navegando a " + path);
    const sectionElements = document.querySelectorAll('main>section');
    // console.log(sectionElements)
    sectionElements.forEach((section) => {
        if (section.id === path) {
            section.hidden = false;
        } else {
            section.hidden = true;
        }
    });
};

const handleContact = (event) => {
    event.preventDefault();
    console.log(event);

    const { target } = event;
    const { elements } = target;
    console.log('Target');
    console.dir(elements);

    console.log('Enviando...');
    // let userName = elements[0].value;
    // console.log(userName);
    // userName = elements['userName'].value;
    // console.log(userName);
    // userName = elements.namedItem('userName').value;
    // console.log(userName);
    // userName = elements.item(0).value;
    // console.log(userName);

    const contact = {
        userName: '',
        phone: '',
        age: 0,
        password: '',
    };

    for (const key in contact) {
        contact[key] = elements[key].value;
    }

    console.log(contact);
};

const handleChange = (event) => {
    const element = event.target;
    theme = element.checked ? 'dark' : 'light';
    console.log(theme);
};

const handleDialogMenu = (event) => {
    console.log('Click', event);
    const current = event.currentTarget;
    // const target = event.target;
    event.stopPropagation();
    // console.log('Current');
    // console.dir(current);
    // console.log('Target');
    // console.dir(target);
    const menuDialogElement = document.querySelector('#menu-dialog');
    if (current.localName === 'a') {
        event.preventDefault();
        menuDialogElement.showModal();
    } else if (current.localName === 'menu') {
        event.preventDefault();
        navigate(event.target.href);
        menuDialogElement.close();
    } else {
        menuDialogElement.close();
    }
};

export function main() {
    console.log('Loaded main');

    window.addEventListener('popstate', (event) => {
        console.log(location.pathname);
        navigate(location.pathname);
    });

    // Theme
    const toggleElement = document.querySelector('#theme-toggle');
    toggleElement.addEventListener('change', handleChange);

    // Menu (Navegación)

    const menuIconElement = document.querySelector('#menu-icon');
    const menuDialogElement = document.querySelector('#menu-dialog menu');

    menuIconElement.addEventListener('click', handleDialogMenu);
    menuDialogElement.addEventListener('click', handleDialogMenu);

    document.body.addEventListener('click', handleDialogMenu);

    document
        .querySelector('#contact form')
        .addEventListener('submit', handleContact);
}
