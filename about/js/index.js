let showOne = document.querySelector('#showOne');
let showTwo = document.querySelector('#showTwo');
let showThree = document.querySelector('#showThree');
let wrap = document.querySelector('#wrap');
let contentList = document.querySelector('#content-list');

function removeshow(){
    showOne.className = "";
    showTwo.className = "";
    showThree.className = "";
    wrap.className = "hide";
    contentList.className = "hide";
}

showOne.addEventListener('click',function (params) {
    removeshow();
    showOne.className = "active";
    wrap.className = "";
});
showThree.addEventListener('click',function (params) {
    removeshow();
    showThree.className = "active";
    contentList.className = "";
});

/* 
无缝轮播
*/
let seamlessItems = document.querySelectorAll('.seamlessItem');
let pointlist = document.getElementById('pointlist');
let seamlessItemlist = document.getElementById('seamlessItemlist');
let btnLeft = document.getElementById('btnLeft');
let btnRight = document.getElementById('btnRight');
let index = 0;
let lock = true;
function addpoint() {
    for (let i = 0; i < seamlessItems.length - 1; i++) {
        let li = document.createElement("li");
        li.className = "point";
        li.setAttribute('data-num', `${i}`);
        pointlist.appendChild(li);
    }
}
addpoint();
let points = document.querySelectorAll('.point');

for (let i = 0; i < points.length; i++) {
    points[i].addEventListener('click', function () {
        index = points[i].getAttribute('data-num');
        addseamlessactive();
        seamlessItemlist.style.transition = "0.5s ease"
        seamlessItemlist.style.marginLeft = `${index * -1000}px`;
    })
}


function addseamlessactive() {
    for (let i = 0; i < points.length; i++) {
        points[i].className = ('point');
    }
    if (index === 3) {
        points[0].className = ('point seamlessactive');
    } else {
        points[index].className = ('point seamlessactive');
    }
};
addseamlessactive();

btnRight.addEventListener('click', moveRight);
function moveRight() {
    if (!lock) return;
    seamlessItemlist.style.transition = "0.5s ease"
    index++;
    if (index == 3) {
        addseamlessactive();
        seamlessItemlist.style.marginLeft = `${index * -1000}px`;
        setTimeout(() => {
            index = 0;
            seamlessItemlist.style.transition = "none";
            seamlessItemlist.style.marginLeft = `${index * -1000}px`;
        }, 500);
    }
    addseamlessactive();
    seamlessItemlist.style.marginLeft = `${index * -1000}px`;
    lock = false;
    setTimeout(function () {
        lock = true;
    }, 500);
}

btnLeft.addEventListener('click', moveLeft);
function moveLeft() {
    if (!lock) return;
    seamlessItemlist.style.transition = "0.5s ease"
    if (index == 0) {
        index = 3;
        seamlessItemlist.style.transition = "none";
        seamlessItemlist.style.marginLeft = `${index * -1000}px`;
        setTimeout(function () {
            index = 2;
            addseamlessactive();
            seamlessItemlist.style.transition = "0.5s ease"
            seamlessItemlist.style.marginLeft = `${index * -1000}px`;
        }, 0)

    } else {
        index--;
        addseamlessactive();
        seamlessItemlist.style.marginLeft = `${index * -1000}px`;
    }
    lock = false;
    setTimeout(function () {
        lock = true;
    }, 500);
}

let timeid = setInterval(() => {
    moveRight();
}, 2000);



