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

//storage

const name = document.querySelector('#user_name');
const email = document.querySelector('#user_email');
const message = document.querySelector('#user-text');

function storage(name, email, message) {
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

  name.addEventListener('input', () => storage(name.value, email.value, message.value));
  email.addEventListener('input', () => storage(name.value, email.value, message.value));
  message.addEventListener('input', () => storage(name.value, email.value, message.value));
}

storeData();

