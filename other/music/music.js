const audio = document.getElementById('music');
const button = document.getElementById('music_button');
let isRotating = false;
var musicUrls = [    
  './other/music/雨的印记.mp3',    
  './other/music/天空の城.mp3',   
  './other/music/遠い空へ.mp3'  
];  

//选择音乐    
var randomIndex = Math.floor(Math.random() * musicUrls.length);    
var randomUrl = musicUrls[randomIndex];       
audio.src = randomUrl; 

//音乐播放
button.addEventListener('click', () => {  
    if (audio.paused) {  
      audio.play();  
    } else {  
      audio.pause();  
    }  
  });

//音乐动画
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
