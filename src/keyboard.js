'use strict';

import {eng} from './lang_En';
console.log('key')

export default class KeyboardCreator {
    

    constructor() {
    }

    createContainer() {
        const divContainer = document.createElement('div');
        divContainer.className = 'container';
        divContainer.prepend(this.createTextarea());
        divContainer.append(this.createRowContainer());
        return divContainer;
    }

    createTextarea() {    
        const textarea = document.createElement('textarea');
        textarea.className = 'textarea';                
        return textarea;
    }

    createRowContainer() {    
        const rowContainer = document.createElement('div');
        rowContainer.className = 'row-container';

        for (let i = 0; i < eng.length; i++) {
            const row = document.createElement('div');
            row.className = 'row';
            rowContainer.append(row);

            for (let j = 0; j < eng[i].length; j++) {
                row.append(this.createButton(eng[i][j]));
            } 
        }        
        return rowContainer;
    }

    createButton (btnInfo) {
        const button = document.createElement('button');
        button.className = 'key-usual';
        if (btnInfo.hasOwnProperty('specialClass')) {
            button.className = btnInfo.specialClass;
        
        } else if (btnInfo.hasOwnProperty('keyLength')) {            
            button.classList.add(btnInfo.keyLength);
        }
        button.innerHTML = btnInfo.small;

        return button;
    }

    create(body) {
        body.prepend(this.createContainer());
    }
}