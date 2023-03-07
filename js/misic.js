const icon = document.querySelector('.icon');
const audio = document.querySelector('#myAudio');

icon.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        this.classList.add('playing');
    } else {
        audio.pause();
        audio.currentTime = 0;
        this.classList.remove('playing');
    }
});