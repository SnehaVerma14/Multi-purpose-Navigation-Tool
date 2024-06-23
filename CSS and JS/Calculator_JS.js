/* NAVIGATION */

let List = document.querySelectorAll('.navigation li');
function activeLink(){
    List.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active')
}
List.forEach((item) =>
item.addEventListener('click', activeLink));

/* CALCULATOR */
let buttons = document.querySelector('.buttons');
let btn = document.querySelectorAll('span');
let value = document.getElementById('value');

for(let i=0; i<btn.length; i++){
    btn[i].addEventListener("click", function(){

        if(this.innerHTML=="="){
            value.innerHTML = eval(value.innerHTML);
        }
        else{
            if(this.innerHTML=="Clr"){
                value.innerHTML = "";
            }
            else{
                value.innerHTML += this.innerHTML;
            }
        }
    })
}
