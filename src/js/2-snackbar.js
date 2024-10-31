const storage_key = "feedback-form-state";
const defaultFormState = { email: "", message: "" };
let formData = {...defaultFormState};

const form = document.querySelector(".feedback-form");
const input = document.querySelector(".form-input");
const textarea = document.querySelector(".form-textarea");

form.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);
populateUserData();

function handleInput(event) {
    if (event.target === input) {
        formData.email = event.target.value;
    } else if (event.target === textarea) { 
        formData.message = event.target.value;
    } 
    localStorage.setItem(storage_key, JSON.stringify(formData));
}

function handleSubmit(event) {
    event.preventDefault();    
    if (input.value === "" ||  textarea.value === "") {
        alert("«Fill please all fields»");
        return;
    }
    
    event.currentTarget.reset();
    console.log(formData);
    formData = {...defaultFormState};
    
    localStorage.removeItem(storage_key);
}

function populateUserData() {
    const savedMessage = localStorage.getItem(storage_key);
    
    if (savedMessage) {
        const storagedData = JSON.parse(savedMessage);
        input.value = storagedData.email;
        textarea.value = storagedData.message;
        formData = storagedData;
    }
}