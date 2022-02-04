// console.log('hello')
// const vidWrapper = document.querySelector('div.player');
// const myVid = vidWrapper.querySelector('video.player__video');

// // controls
// const controlPlay = vidWrapper.querySelector('.player__button');

// // events
// let drag;
// let grap;

// myVid.addEventListener('click', toggleVideo);
// controlPlay.addEventListener('click', toggleVideo);

// const playEvent = video.addEventListener('') 
// let progression;

const videoPlayer = document.querySelector('video.player__video')
const play = document.querySelector('.play-pause')
const buttonPlay = document.querySelector('.button-play')
const imgButton = document.querySelector("body > div > div > img")

videoPlayer.autoplay = false;

// imgButton.addEventListener('click', playPause)
play.addEventListener('click', playPause)
// buttonPlay.addEventListener('click', playPause)
videoPlayer.addEventListener('click', playPause)



function playPause() {
  console.log('enter')
  if (videoPlayer.paused) {
    console.log('play')
    buttonPlay.src = 'svg/play.svg'
    document.querySelector('.player').style.opacity = '1'
    videoPlayer.play()
    setTimeout(() => {
      imgButton.style.display = 'none'
      }, 2000);
      return;
  } else {
    console.log('pause')
    imgButton.style.display = ''
    videoPlayer.pause()
    buttonPlay.src = 'svg/pause.svg'
    document.querySelector('.player').style.opacity = '0.7'
      return;
  }
  
  }










// functions
// function toggleVideo() {
//   if (myVid.paused) {
//     myVid.play();
//     controlPlay.innerHTML = "❚ ❚";
//     updateProgress();
//     progression = window.setInterval(updateProgress, 200);
//   } else {
//     myVid.pause();
//     controlPlay.innerHTML = "►";
//     clearInterval(progression);
//   };
// }














// const controlVol = vidWrapper.querySelector('.player__slider[name="volume"]');
// const controlRate = vidWrapper.querySelector('.player__slider[name="playbackRate"]');
// const controlSkip = vidWrapper.querySelectorAll('.player__button[data-skip]');
// const controlFullScreen = vidWrapper.querySelector('.player__fullscreen');
// const controlProgress = vidWrapper.querySelector('.progress');
// const progressBar = vidWrapper.querySelector('.progress__filled');



// controlVol.addEventListener('change', updateVol);
// controlRate.addEventListener('change', updateRate);
// controlFullScreen.addEventListener('click', goFullScreen);
// controlSkip.forEach(control => control.addEventListener('click', forward));
// controlProgress.addEventListener('mouseover', function(){drag = true});
// controlProgress.addEventListener('mouseout', function(){drag = false; grap = false});
// controlProgress.addEventListener('mousedown', function(){grap = drag});
// controlProgress.addEventListener('mouseup', function(){grap = false});
// controlProgress.addEventListener('click', updateCurrentPos);
// controlProgress.addEventListener('mousemove', function(e){ if(drag && grap){updateCurrentPos(e)}});













// function updateVol(){
//   var volume = this.value;
//   myVid.volume = volume;
// }
// function updateRate(){
//   var rate = this.value;
//   myVid.playbackRate = rate;
// }
// function goFullScreen(){
//   console.dir(myVid);
//   if(myVid.webkitSupportsFullscreen) myVid.webkitEnterFullScreen();
// }
// function forward(){
//   var value = Number(this.dataset.skip);
//   myVid.currentTime = myVid.currentTime + value;
// }
// function updateProgress() {
//   var progress = myVid.currentTime / myVid.duration;
//   progressBar.style.flexBasis = Math.floor(progress * 1000) / 10 + '%';
// }
// function updateCurrentPos(e){
//   // offset of the progress bar / video wrapper width
//   var newProgress = (e.clientX - vidWrapper.offsetLeft) / vidWrapper.clientWidth;
//   progressBar.style.flexBasis = Math.floor(newProgress * 1000) / 10 + '%';
//   myVid.currentTime = newProgress * myVid.duration;
// }
