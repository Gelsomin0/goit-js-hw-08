import Player from '@vimeo/player';

const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const PLAYER_STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(getVideoTime, 1000));
player.on('play', setVideoTime);

function getVideoTime(info) {
    const { seconds } = info;
    localStorage.setItem(PLAYER_STORAGE_KEY, seconds);
}

function setVideoTime() {
    if (!localStorage.getItem(PLAYER_STORAGE_KEY)) {
        return;
    }

    player.setCurrentTime(Number(localStorage.getItem(PLAYER_STORAGE_KEY)));
}