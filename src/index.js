import './style.scss'; // imports global styles

import { createElement } from 'lwc';
import App from 'c/app';

const app = createElement('c-app', { is: App });
const appContainer = document.getElementById('app');

appContainer.appendChild(app);