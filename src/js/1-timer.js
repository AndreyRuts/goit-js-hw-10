import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const startBtn = document.querySelector("button[data-start]");
const day = document.querySelector("span[data-days]");
const hour = document.querySelector("span[data-hours]");
const minute = document.querySelector("span[data-minutes]");
const second = document.querySelector("span[data-seconds]");
const input = document.querySelector(".timer-input")
let userSelectedDate = null;
let timerId = null;
startBtn.disabled = true;


class Timer {
  constructor({onTick}) {
    this.isActive = false;
    this.onTick = onTick;
  }
  

  start() {      
    input.disabled = true;
    startBtn.disabled = true;

    // if (this.isActive) {
    //   return;   
    // }

    // const startTime = Date.now();
    // this.isActive = true;
    
    setInterval(() => {        
      const currentTime = Date.now();
      const deltaTime = userSelectedDate - currentTime;
      
      
      // const time = this.convertMs(deltaTime);
      if (deltaTime <= 0) {
        clearInterval(timerId);
        alert("Countdown finished");
      } else {
        updateClockface(this.convertMs(deltaTime));
        
      }

      this.onTick(time);
    }, 1000);   

  }

  convertMs(ms) {   
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = this.pad(Math.floor(ms / day));
    const hours = this.pad(Math.floor((ms % day) / hour));
    const minutes = this.pad(Math.floor(((ms % day) % hour) / minute));
    const seconds = this.pad(Math.floor((((ms % day) % hour) % minute) / second));
    return { days, hours, minutes, seconds };
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

const timer = new Timer({
  onTick: updateClockface
});
startBtn.addEventListener("click", timer.start.bind(timer)); //timer.start.bind(timer)

function updateClockface({ days, hours, minutes, seconds }) {
  day.textContent = `${days}`;
  hour.textContent = `${hours}`;
  minute.textContent = `${minutes}`;
  second.textContent = `${seconds}`;
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) { //не поянял почему < канает в сравнении обьектов
      window.alert("Please choose a date in the future");
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
      userSelectedDate = selectedDates;
    }
    console.log(selectedDates[0]);
  },
  
};

flatpickr("#datetime-picker", options);






