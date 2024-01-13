import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const formEl = document.querySelector(".form");
const delayEl = document.querySelector("input[name='delay']");
formEl.addEventListener("submit", (e) => {
    e.preventDefault()
    createPopupMessage()
})
function createPopupMessage() {
    const delay = delayEl.value;
    const selectedState = [...formEl.elements];
    const selectedStateFind = selectedState.find(radio => radio.checked).value;
    const promise = new Promise((resolve, reject) => {
        if (selectedStateFind === 'fulfilled') {
            resolve(delay);
        } else {
            reject(delay);
        }
    })
    promise.then((value) => {
        setTimeout(() => {
            iziToast.success({
                title: "Success",
                message: `✅ Fulfilled promise in ${value}ms`,
            })
        }, delay)
    }
    ).catch((err) => {
        setTimeout(() => {
            iziToast.error({
                title: "Error",
                message: `❌ Rejected promise in ${err}ms`,
            })
        }, delay)
    })
    console.log(selectedStateFind);
}