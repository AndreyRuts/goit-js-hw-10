import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);


function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const delayInputValue = form.elements.delay.value;  
    const radioChecked = form.elements.state.value;

    delayPromise(delayInputValue, radioChecked)
        .then((delayValue) => {
            iziToast.success({
                title: 'OK',
                message: `✅ Fulfilled promise in ${delayValue} ms`,
                backgroundColor: "#4caf50",
            });
        })
        .catch((delayValue) => {
            iziToast.error({
                title: `Error`,
                message: `❌ Rejected promise in ${delayValue} ms`,
                backgroundColor: "#ef4040",
            });
        });
    form.reset();
}

function delayPromise(delayValue, radioChecked) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (radioChecked === "fulfilled") {
                resolve(delayValue);
            } else {
                reject(delayValue);
            }
        }, delayValue);
    });
}