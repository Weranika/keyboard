'use strict';

import KeyboardCreator from './keyboard';

const body = document.getElementById('body');
//body.prepend(123);
const keyboard = new KeyboardCreator();
keyboard.create(body);
console.log('index')
