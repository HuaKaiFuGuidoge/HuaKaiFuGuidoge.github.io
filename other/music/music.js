const audio = document.getElementById('music');
const button = document.getElementById('music_button');
let isRotating = false; 

button.addEventListener('click', () => {  
    if (audio.paused) {  
      audio.play();  
    } else {  
      audio.pause();  
    }  
  });

button.addEventListener("click", () => {    
  isRotating = !isRotating;    
  if (isRotating) {    
    button.classList.add("rotate");   
    button.style.backgroundColor = "#4CAF50"; 
  } else {    
    button.classList.remove("rotate");  
    button.style.backgroundColor = "#979797"; 
  }    
});
