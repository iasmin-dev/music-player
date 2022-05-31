import { loudBar } from './modules/loud.js'
import { secondsToMinutes } from './modules/secondsToMinute.js'

let musics = [
  {
    title: 'Get Free', 
    artist: 'Lana del Rey', 
    src: 'music/get-Free.mp3', 
    img: 'images/birds.jpg',
  },
  {
    title: 'Jealous Girl', 
    artist: 'Lana del Rey', 
    src: 'music/jealous-girl.mp3', 
    img: 'images/waves.jpg',
  }
];

let music = document.querySelector('audio');
let play = document.querySelector('.play-button');
let pause = document.querySelector('#pause-button');

let musicIndex = 0;

let musicDuration = document.querySelector('.end-music');

let image = document.querySelector('img');

let musicName = document.querySelector('.music-name');
let artistName = document.querySelector('.artist-name');

let container = document.querySelector('container');

changeMusic(musicIndex);

musicDuration.innerHTML = secondsToMinutes(Math.floor(music.duration));

play.addEventListener('click', startMusic);

pause.addEventListener('click', stopMusic);

music.addEventListener('timeupdate', loudBar);

function changeMusic(index) {
  stopMusic()
  music.setAttribute('src', musics[index].src);
  music.addEventListener('loadeddata', () => {
    musicName.innerHTML = musics[index].title;
    artistName.innerHTML = musics[index].artist;
    image.src = musics[index].img;
    musicDuration.innerHTML = secondsToMinutes(Math.floor(music.duration));
  });
}

document.querySelector('.previous').addEventListener('click', () => {
  musicIndex--;
  if(musicIndex < 0) {
    musicIndex = 1
  }
  changeMusic(musicIndex);
});

document.querySelector('.next').addEventListener('click', () => {
  musicIndex++;
  if(musicIndex > 1) {
    musicIndex = 0
  }
  changeMusic(musicIndex);
});

function startMusic() {
  music.play();
  pause.style.display = 'block';
  play.style.display = 'none';
}

function stopMusic() {
  music.pause();
  pause.style.display = 'none';
  play.style.display = 'block';
}
