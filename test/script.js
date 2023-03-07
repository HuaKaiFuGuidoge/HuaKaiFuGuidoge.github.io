const icon = document.querySelector('#icon');
const audio = document.querySelector('#audio');

let isDragging = false;

icon.addEventListener('mousedown', () => {
    isDragging = false;

    setTimeout(() => {
        if (!isDragging) {
            icon.style.transform = 'rotate(360deg)';
            audio.play();
        }
    }, 1000);
});

icon.addEventListener('mouseup', () => {
    icon.style.transform = 'rotate(0deg)';
    audio.pause();
    audio.currentTime = 0;
});

icon.addEventListener('mouseleave', () => {
    icon.style.transform = 'rotate(0deg)';
    audio.pause();
    audio.currentTime = 0;
});

icon.addEventListener('mousemove', () => {
    isDragging = true;
});