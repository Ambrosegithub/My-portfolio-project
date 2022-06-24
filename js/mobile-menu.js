const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// storage

const name = document.querySelector('#user_name');
const email = document.querySelector('#user_email');
const message = document.querySelector('#user-text');

function preserve(name, email, message) {
  const saver = JSON.stringify({ name, email, message });
  localStorage.setItem('data', saver);
}

function storeData() {
  const data = JSON.parse(localStorage.getItem('data'));

  if (data) {
    name.value = data.name;
    email.value = data.email;
    message.value = data.message;
  }

  name.addEventListener('input', () => preserve(name.value, email.value, message.value));
  email.addEventListener('input', () => preserve(name.value, email.value, message.value));
  message.addEventListener('input', () => preserve(name.value, email.value, message.value));
}

storeData();

// validating form for user's experience
const email1 = document.getElementById('user_email');
const form1 = document.getElementById('userContactForm');
const errorElement1 = document.getElementById('Error-messages');
errorElement1.style.color = 'red';
function checkForm() {
  if (email1.value.match(/^[a-z@.0-9-_]*$/)) {
    return true;
  }
  errorElement1.textContent = 'please enter the email correctly in lower case';
  return false;
}
form1.addEventListener('submit', (e) => {
  e.preventDefault();

  if (checkForm()) {
    form1.submit();
  }
  checkForm();
});
