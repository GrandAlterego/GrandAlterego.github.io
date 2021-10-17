let showOne = document.querySelector('#showOne')
let showTwo = document.querySelector('#showTwo')
let showThree = document.querySelector('#showThree')
let imgOne = document.querySelector('#imgOne')
let imgTwo = document.querySelector('#imgTwo')
let imgThree = document.querySelector('#imgThree')

function delactive(pam){
    pam.classList.remove('active');
}
function addHide(pam){
    pam.className = "hide";
}
function addActive(pam){
    pam.classList.add('active');
}
function delhide(pam){
    pam.className = "";
}
function removeShow(){
    delactive(showOne);
    delactive(showTwo);
    delactive(showThree);
    addHide(imgOne)
    addHide(imgTwo)
    addHide(imgThree)
}

showOne.addEventListener('click',function(){
    removeShow();
    delhide(imgOne);
    addActive(showOne);
})
showTwo.addEventListener('click',function(){
    removeShow()
    delhide(imgTwo);
    addActive(showTwo);
})
showThree.addEventListener('click',function(){
    removeShow()
    delhide(imgThree);
    addActive(showThree);
})