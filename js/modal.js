// modal pop up
const buttons = document.querySelectorAll('.img-btn');
const closeModal = document.querySelector('.close');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    document.getElementById('my-modal').style.display = 'block';
  });
});
closeModal.addEventListener('click', () => {
  document.getElementById('my-modal').style.display = 'none';
});
