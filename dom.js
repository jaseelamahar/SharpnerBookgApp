
// Single Element Selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
// Multiple Element Selectors
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('item'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
 btn.style.background = 'red';
 // Mouse Event
// btn.addEventListener('click', e => {
  // e.preventDefault();
  // console.log('click')
  // });
   //btn.addEventListener('mouseover',(e)=>{

   //})
   //btn.addEventListener('mouseout',(e)=>{
    
  // })

    //var myForm = document.querySelector('#my-form')
   //const nameInput = document.querySelector('#name')
   //myForm.addEventListener('submit',onsubmit);
   // function onsubmit(e){
    //e.preventDefault()
    //console.log(nameInput.value)
   //}
   let form = document.getElementById('my-form');

    form.addEventListener('submit', function(event) {
    event.preventDefault(); 
   
   let name=document.getElementById('name').value;
   let email=document.getElementById('email').value;
   localStorage.setItem('username',name);
   localStorage.setItem('useremail',email);
   console.log(name,email)
    })
