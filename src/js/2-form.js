const localStorageKey = "feedback-form-state";
const saved = localStorage.getItem(localStorageKey);
let formData = saved ? JSON.parse(saved) : { email: '', message: '' };


const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;

email.value = formData.email;
message.value = formData.message;

const handleFormInput = (event) => {
  const { elements } = event.currentTarget;
  formData.email = elements.email.value;
  formData.message = elements.message.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData))
};

form.addEventListener("input", handleFormInput);

const handleFormSubmit = event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert("Fill please all fields");
  } else {
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    formData.email = '';
    formData.message = '';
    form.reset();
  }
};

form.addEventListener("submit", handleFormSubmit);