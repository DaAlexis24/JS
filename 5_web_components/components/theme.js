const handleChange = (event) => {
    const element = event.target;
    themeColor = element.checked ? 'dark' : 'light';
    console.log(themeColor);

    if (themeColor === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
};

export let themeColor = 'light';

export const theme = () => {
    const selector = 'app-theme';

    const setTemplate = () => `
    <label class="ui-switch">
      <input type="checkbox" id="theme-toggle">
      <div class="slider">
        <div class="circle"></div>
      </div>
    </label>`;

    document.querySelector(selector).outerHTML = setTemplate();

    const toggleElement = document.querySelector('#theme-toggle');
    toggleElement.addEventListener('change', handleChange);
};
