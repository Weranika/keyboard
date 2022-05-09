'use strict';

import KeyboardCreator from './keyboard';
//import KeyboardActions from './buttons';

const body = document.getElementById('body');

const keyboard = new KeyboardCreator();
keyboard.create(body);

//const buttons = new KeyboardActions();

console.log('index')
