const payButton = document.querySelector('.button');
const form = document.querySelector('.form');
const submitButton = document.querySelector('.submit');
const currentForm = document.querySelector('.current');
const error = document.querySelector('.error');

let user_name = document.forms["form"]["user_name"].value;
let postNP = document.forms["form"]["post"].value;
let quantity = document.forms["form"]["quantity"].value;

payButton.addEventListener('click', (event) => {
  payButton.classList.remove('show');
  form.classList.add('show');
})

function validateForm() {


  if (user_name.length === 0 || postNP.length === 0 || quantity.length === 0) {
    error.classList.add('show');
    return false;
  }
}

form.addEventListener('submit', (event) =>{
  event.preventDefault();
  console.log('done')

  const formValues = new FormData(form);
  const formObject = {};

  for( const value of formValues) {
    if(!formObject[value[0]]) {
      formObject[value[0]] = value[1]
    } else {
      formObject[value[0]] = `${formObject[value[0]]}, ${value[1]}`;
    }
  }
  console.log(formObject)
  return formObject;
})



submitButton.addEventListener('click', (event) =>{
  currentForm.classList.add('show');
})  
 
let total = document.createElement('p');
total.innerHTML = `${quantity}`;
list_01.appendChild(total);

let post = document.createElement('p');
post.innerHTML = `${postNP}`;
list_02.appendChild(post);



