let form = document.querySelector('form')
form.addEventListener('submit', addTodo)
function addTodo(e){
    e.preventDefault()
    let element= document.createElement('li');
    element.addEventListener('click', completeTodo)
    let input= document.querySelector('#item').value;
        element.innerText= input;
        let button= document.createElement('button')
        button.innerText = 'X'
        button.addEventListener('click', removeTodo)
        element.appendChild(button)
    let ul= document.querySelector('ul');
    ul.appendChild(element)
    }

function removeTodo(e){
    e.target.parentNode.remove();
}
function completeTodo(e){
   let checked= e.target.getAttribute('aria-checked')
   if(checked !== 'true'){
        e.target.setAttribute('aria-checked', 'true')
   }
   else e.target.setAttribute('aria-checked', 'false')
}