document.addEventListener('DOMContentLoaded', function(){
    const idbutton= document.getElementById('generate');
    const numberElement = document.getElementById('random-number');

    idbutton.addEventListener('click',function(){
        const randomNumber = Math.floor(Math.random() * 100);
        numberElement.innerHTML = randomNumber;
    });
});

alert("hello world");