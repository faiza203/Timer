const time = document.getElementById("time-input");
const play = document.getElementById("play-button");
const pause = document.getElementById("pause-button");
const heading = document.getElementById("program");
class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }
  start = () => {
    this.tick();
    this.interval = setInterval(this.tick, 1000);
    heading.textContent = "I am running";
  };
  pause = () => {
    clearInterval(this.interval);
    heading.textContent = "I am stopped";
  };
  tick = () => {
    const timeRemaining = parseFloat(this.durationInput.value);
    this.durationInput.value = timeRemaining - 1;
    console.log(this.durationInput.value);
    if (this.durationInput.value <= 0) {
      this.pause();
      heading.textContent = "I am completed";
    }
  }  
}
const timer = new Timer(time, play, pause);
