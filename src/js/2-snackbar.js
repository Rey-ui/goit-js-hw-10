import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const formEl = document.querySelector(".form");
const delayEl = document.querySelector("input[name='delay']");
let delay = 0;
formEl.addEventListener("submit", (e) => {
    delay = delayEl.value;
    e.preventDefault()
    setTimeout(() => {
        createPopupMessage()
    }, delay)
})
function createPopupMessage() {
    const selectedState = [...formEl.elements];
    const selectedButton = selectedState.find(radio => radio.checked);
    if (selectedButton) {
        const selectedStateFind = selectedButton.value;
        const promise = new Promise((resolve, reject) => {

            if (selectedStateFind === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        })

        promise.then((value) => {

            iziToast.success({
                title: "Success",
                message: `✅ Fulfilled promise in ${value}ms`,
            })

        }
        ).catch((err) => {

            iziToast.error({
                title: "Error",
                message: `❌ Rejected promise in ${err}ms`,
            })

        })

    }
}