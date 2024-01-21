import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const formEl = document.querySelector(".form");
const delayEl = document.querySelector("input[name='delay']");
formEl.addEventListener("submit", (e) => {
    e.preventDefault()
    createPopupMessage()

})
function createPopupMessage() {
    const selectedState = [...formEl.elements];
    const selectedButton = selectedState.find(radio => radio.checked);
    const delay = Number(delayEl.value);
    if (selectedButton) {
        const selectedStateFind = selectedButton.value;
        setTimeout(() => {
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
        }, delay)
    }

}