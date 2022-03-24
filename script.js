let player = document.getElementById('character');
let block = document.getElementById('block');
let jumpp = document.querySelector('jump');
let blockk = document.querySelector('start');

// Poppetje moet springen als er geklikt word met de muis //
// Animatie moet worden opgeroepen met muis klik //
    function jump(){
        if(character.classList != "animate"){
            character.classList.add("animate");
        }
        setTimeout(function(){
            character.classList.remove("animate");
        },1000);
    }
// Animatie moet stoppen als de speler geland is, dat is na 1 seconde //
// Animatie stopt dus na 1 seconde stoppen //
      

      
