let player = document.getElementById('character');
let block = document.getElementById('block');
let jumpp = document.querySelector('jump');
let blockk = document.querySelector('start');
let counter = 0
let score = document.querySelector('#score')

    
    let intervalID = setInterval(() => { // maakt interval, checkt de var elke 2 sec //
        counter += 1; // voegt 1 toe aan de counter // 
        score.innerHTML = `score: ${counter}`; // score: op welke waarde de var staat // 
    }, 2000);

    function jump(){ // Maakt de functie aan //
        if(character.classList != "animate"){
            character.classList.add("animate"); // Voegt classlist toe //
        }
        setTimeout(function(){
            character.classList.remove("animate");
        },400); // Removed na 0.75s de classlist, zodat opnieuw toevoegen en opnieuw springen //
    }
    