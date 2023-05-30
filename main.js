const pianoKeys = document.querySelectorAll('.piano-keys .key'),
    volumeSlider = document.querySelector('.volume-slider input'),
    keyCheckbox = document.querySelector('.keys-checkbox input');

let allKeys = [],   
    audio = new Audio("tunes/a.wav"); //by default, audio src is 'a' tune
    
const playTune = function(key){
    audio.src = `tunes/${key}.wav`; // passing all audio sounds
    audio.play(); //playing audio

    const clickedKey = document.querySelector(`[data-key="${key}"]`); //getting clicked key elements
    clickedKey.classList.add('active'); //adding active class to the clicked key
    setTimeout(() => { //removing active class after 150 ms from the clicked key
        clickedKey.classList.remove('active');
    }, 150);
}

pianoKeys.forEach(function (key) {
    allKeys.push(key.dataset.key);
    //calling playtune function with passing data-key value as an argument
    key.addEventListener('click', () => playTune(key.dataset.key));
});


//handling checkboxes to show letters or not
const handleCheckbBox = () =>{
    pianoKeys.forEach(key => key.classList.toggle('hide'));
}

//handling volume change
const handleVolumeChange = (e) => {
    //the target value is coming from the input type range in html
    audio.volume = e.target.value; //passing the range slider value as an audio volume
}

// using keyboard to play
const pressedKey = (e) => {
    if(allKeys.includes(e.key)) playTune(e.key);
}

keyCheckbox.addEventListener('click', handleCheckbBox);
volumeSlider.addEventListener('input', handleVolumeChange);
document.addEventListener('keydown', pressedKey);