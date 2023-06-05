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

let quantity = formObject.quantity;
let postNP = formObject.post;


submitButton.addEventListener('click', (event) =>{
  currentForm.classList.add('show');
})  
 
let total = document.createElement('p');
total.innerHTML = quantity;
list_01.appendChild(total);

let post = document.createElement('p');
post.innerHTML = postNP;
list_02.appendChild(post);



