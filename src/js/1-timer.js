import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const startBtn = document.querySelector("button[data-start]");
const clockFace = document.querySelector(".timer");


class Timer {
    constructor() {
        this.isActive = false;
    }

    start() {
        const startTime = Date.now();
        if (this.isActive) {
            return;
        }

        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            this.isActive = true;
            convertMs(deltaTime);
            
        }, 1000);
    }
}

const timer = new Timer();
startBtn.addEventListener("click", timer.start);


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return result = { days, hours, minutes, seconds };
}


// convertMs(24140000);
// console.log(result);
