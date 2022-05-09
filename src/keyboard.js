'use strict';

import {eng} from './lang_En';
console.log('key')

export default class KeyboardCreator {
    constructor() {        
        this.textarea = document.querySelector('textarea');        
        console.log(this.textarea);
        this.addClassActionOnPhisicalKeyboard();
    }

    createContainer() {
        const divContainer = document.createElement('div');
        divContainer.className = 'container';
        divContainer.prepend(this.createTextarea());
        divContainer.append(this.createRowContainer());
        divContainer.onclick = this.buttonHandler.bind(this);
        return divContainer;
    }

    createTextarea() {    
        const textarea = document.createElement('textarea');
        textarea.className = 'textarea';
        textarea.focus();
        textarea.placeholder = 'Press Ctrl + Alt for change language';
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
        button.id = btnInfo.keyCode;
        if (btnInfo.hasOwnProperty('specialClass')) {
            button.setAttribute(btnInfo.keyCode, 'disabled');
            button.className = btnInfo.specialClass;
        } else if (btnInfo.hasOwnProperty('keyLength')) {
            button.classList.add(btnInfo.keyLength);
        }
        button.innerHTML = btnInfo.small;
        return button;
    }

    buttonHandler (event) {
            console.log(event.target.tagName);
            if (event.target.tagName === 'BUTTON'){
                console.log(event.target.classList)
                const currentElemText = event.target.innerText;
                const currentElem = event.target;                
                if (event.target.classList.contains('key-usual') || 
                    event.target.classList.contains('arrow') || 
                    event.target.classList.contains('numbers')) {
                    document.querySelector('textarea').value += currentElemText;
                    document.querySelector('.textarea').focus();
                } else if (event.target.classList.contains('key-special') || event.target.classList.contains('space')) {
                    this.buttonSpecialHandler(currentElem);
                    document.querySelector('.textarea').focus();
                }                
                return;
            }
            event.stopPropagation();
    }

    buttonSpecialHandler (currentElem) {        
        if (currentElem.hasAttribute('enter')) {
            document.querySelector('textarea').value += '\n';
        } else if (currentElem.hasAttribute('backspace')) {
            document.querySelector('textarea').value = document.querySelector('textarea').value.slice(0, -1); 
        } else if (currentElem.hasAttribute('space')) {
            document.querySelector('textarea').value += ' ';
        } else if (currentElem.hasAttribute('tab')) {
            document.querySelector('textarea').value += '\t';
        }
    }

    addClassActionOnPhisicalKeyboard () {
        document.addEventListener('keydown', (event) => {
            console.log(event.code);
            if (document.getElementById(event.code).hasAttribute('tab')) {
                event.preventDefault();
                document.getElementById(event.code).classList.add('onFocus');
                document.querySelector('.textarea').focus();                
                document.querySelector('.textarea').value += '\t';
            }
            document.getElementById(event.code).classList.add('onFocus');
            //document.querySelector('.textarea').value += event.code;
            
        });
        document.addEventListener('keyup', (event) => {
            console.log(event.code);
            document.getElementById(event.code).classList.remove('onFocus');
            document.querySelector('.textarea').focus();
        })
    }

    create(body) {
        body.prepend(this.createContainer());
    }
}