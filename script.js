//Initilize Variables
let songIndex = 0;
let audioElement = new Audio("assets/songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songItemPlay = Array.from(document.getElementsByClassName("songItemPlay"));

let songs = [
  {
    songName: "Warriyo - Mortals",
    filePath: "assets/songs/1.mp3",
    coverPath: "assets/covers/1.jpg",
  },
  {
    songName: "Cielo - Huma Huma",
    filePath: "assets/songs/2.mp3",
    coverPath: "assets/covers/2.jpg",
  },
  {
    songName: "DEAF KEV - Invincible",
    filePath: "assets/songs/3.mp3",
    coverPath: "assets/covers/3.jpg",
  },
  {
    songName: "Differenent Heaver",
    filePath: "assets/songs/4.mp3",
    coverPath: "assets/covers/4.jpg",
  },
  {
    songName: "Janji - Heroes",
    filePath: "assets/songs/5.mp3",
    coverPath: "assets/covers/5.jpg",
  },
  {
    songName: "Rabba ",
    filePath: "assets/songs/6.mp3",
    coverPath: "assets/covers/6.jpg",
  },
  {
    songName: "Sahiyaan ",
    filePath: "assets/songs/7.mp3",
    coverPath: "assets/covers/7.jpg",
  },
  {
    songName: "Bhula - dena",
    filePath: "assets/songs/8.mp3",
    coverPath: "assets/covers/8.jpg",
  },
  {
    songName: "Tmhari - Kasam",
    filePath: "assets/songs/9.mp3",
    coverPath: "assets/covers/9.jpg",
  },
  {
    songName: "Chamak Challo",
    filePath: "assets/songs/10.mp3",
    coverPath: "assets/covers/10.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//Handle Play/Pause Click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.add("fa-pause-circle");
    masterPlay.classList.remove("fa-play-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.add("fa-play-circle");
    masterPlay.classList.remove("fa-pause-circle");
    gif.style.opacity = 0;
  }
});

//Listen to Events

audioElement.addEventListener("timeupdate", () => {
  // Update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  songItemPlay.forEach((element) => {
    element.classList.remove("fa-pause-circle");
    element.classList.add("fa-play-circle");
  });
};



songItemPlay.forEach((element, i) => {
  element.addEventListener("click", (e) => {
    if (songIndex === i && !audioElement.paused) {
      audioElement.pause();
      e.target.classList.remove("fa-pause-circle");
      e.target.classList.add("fa-play-circle");
      gif.style.opacity = 0;
      masterPlay.classList.remove("fa-pause-circle");
      masterPlay.classList.add("fa-play-circle");
    } else {
      makeAllPlays();
      songIndex = i; 
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `assets/songs/${songIndex + 1}.mp3`;  
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    }
  });
});



document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `assets/songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
    if (songIndex <= 0) {
        songIndex = 9;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `assets/songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    });