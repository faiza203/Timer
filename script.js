const time = document.getElementById("time-input");
const play = document.getElementById("play-button");
const pause = document.getElementById("pause-button");
class Timer {
  constructor(time, play, pause) {
    this.time = time;
    this.play = play;
    this.pause = pause;
    this.play.addEventListener("click", this.start);
  }
  start() {
    alert("I am running");
  }
}
const timer = new Timer(time, play, pause);
