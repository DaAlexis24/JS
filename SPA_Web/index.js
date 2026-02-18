import { main, navigate } from './main.js';

document.addEventListener('DOMContentLoaded', () => {
    navigate(location.pathname);
    main();
});
