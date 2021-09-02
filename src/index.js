import './sass/main.scss';
import { alert, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
import debounce from 'lodash.debounce';

import templatesCountry from './templates/templatesCountry.hbs';

alert({
  text: 'Notice me, senpai!',
});
