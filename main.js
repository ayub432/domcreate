let item = document.createElement('h1'); 

let userName = prompt('Ismingizni kiriting'); 

let text = document.createTextNode(userName); 
item.appendChild(text); 

let main = document.querySelector('body'); 
main.appendChild(item); 

console.log(item); 
console.log(main);

