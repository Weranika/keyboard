'use strict';

export default class KeyboardActions {
    constructor() {
        this.addEction();
        this.textarea = document.querySelector('textarea');
        console.log(this.textarea);
    }

    addEction () {
        const keyUsual = document.querySelector('.container');
        console.log(keyUsual);  
        keyUsual.onclick = function(event) {
            console.log(event.target.tagName);
            if (event.target.tagName === 'BUTTON'){
                const currentElem = event.target.innerText;
                document.querySelector('textarea').value += currentElem;
                return;
            }
            event.stopPropagation();
        };
    }
}
