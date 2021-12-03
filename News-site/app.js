'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Tumma teema";
    }
    else {
        this.textContent = "Vaalea teema";
    }

    console.log('current class name: ' + className);
}); 
