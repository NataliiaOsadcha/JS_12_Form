const payButton = document.querySelector('.button');
const form = document.querySelector('.form');
const submitButton = document.querySelector('.submit');
const currentForm = document.querySelector('.current');
const error = document.querySelector('.error');

payButton.addEventListener('click', (event) => {
  payButton.classList.remove('show');
  form.classList.add('show');
})

function validateForm() {
  let x = document.forms["form"]["user_name"].value;
  let y = document.forms["form"]["post"].value;
  let z = document.forms["form"]["quantity"].value;

  if (x.length === 0 || y.length === 0 || z.length === 0) {
    error.classList.add('show');
  } if (x.length > 0 && y.length > 0 && z.length > 0) {
    error.classList.remove('show');
  }
}

submitButton.addEventListener('click', (event) =>{
  currentForm.classList.add('show');
})  

form.addEventListener('submit', (event) =>{
  event.preventDefault();

  const quantity = document.querySelector('#quantity');
  const quantityValue = quantity.value;
  const postNP = document.querySelector('#post');
  const postNPValue = postNP.value;

  let total = document.createElement('p');
  total.innerHTML = quantityValue;
  list_01.appendChild(total);

  let post = document.createElement('p');
  post.innerHTML = postNPValue;
  list_02.appendChild(post);
});
