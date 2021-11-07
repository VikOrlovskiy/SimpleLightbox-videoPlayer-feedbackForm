// ------------------Const---------------------------
const iFrameRef = document.querySelector('#vimeo-player');
const throttle = require('lodash.throttle');
// ------------------ConnectVimeoPlayer--npm-------------------------
const player = new Vimeo.Player(iFrameRef);
// ------------------functionSave---------------------------
function saveCurrentPlayerTime(date) {
  localStorage.setItem('videoplayer-current-time', Math.round(date.seconds));
  console.log(Number(localStorage.getItem('videoplayer-current-time')));
}
player.on('timeupdate', throttle(saveCurrentPlayerTime, 1000));
// ------------------functionsetup---------------------------
function setupCurrentPlayerTime() {
  player.setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')));
}
window.onload = setupCurrentPlayerTime;
