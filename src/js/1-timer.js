import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const inputEl = document.querySelector("input#datetime-picker");
const buttonEl = document.querySelector("button[data-start]");
const spanDays = document.querySelector("span[data-days]");
const spanHours = document.querySelector("span[data-hours]");
const spanMinutes = document.querySelector("span[data-minutes]");
const spanSeconds = document.querySelector("span[data-seconds]");
let intervalId;
let hasError = false;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates, dateStr, instance) {
        clearInterval(intervalId);
        intervalId = null;
        updateTimerDisplay("");
        const selectedDate = selectedDates[0];
        const currentDate = new Date();

        if (selectedDate < currentDate) {
            if (!hasError) {
                iziToast.show({
                    title: 'Hey',
                    message: 'Ви ввели невірну дату'
                });
                hasError = true;
            }
            buttonEl.disabled = true;
            updateTimerDisplay("");
        } else {
            hasError = false;
            buttonEl.disabled = false;
        }
    },
};
flatpickr(inputEl, options)
buttonEl.addEventListener("click", () => {
    if (!buttonEl.disabled) {
        clearInterval(intervalId);
        intervalId = setInterval(() => {
            checkDates();
        }, 1000);
    }
});
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}
function updateTimerDisplay(ms) {
    const time = convertMs(ms);
    spanDays.textContent = String(time.days).padStart(2, '0');
    spanHours.textContent = String(time.hours).padStart(2, '0');
    spanMinutes.textContent = String(time.minutes).padStart(2, '0');
    spanSeconds.textContent = String(time.seconds).padStart(2, '0');
}
function checkDates() {
    const selectedDate = flatpickr.parseDate(inputEl.value);
    const currentDate = new Date();
    if (selectedDate < currentDate) {
        if (!hasError) {
            iziToast.show({
                title: 'Hey',
                message: 'Ви ввели невірну дату'
            });
            hasError = true;
        }
        intervalId = null;
        clearInterval(intervalId);
        buttonEl.disabled = true;
        updateTimerDisplay("")
        return;
    } else {
        hasError = false;
        const difference = selectedDate - currentDate;
        updateTimerDisplay(difference);
    }
}