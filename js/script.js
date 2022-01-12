
// search button function
var x = document.getElementById("navDropSearch");
var y = document.getElementById("searchImg");
y.style.transition = "all 0.5s ease-out";
x.style.display = "none";

function toggleSearch(){
    if(x.style.display === "none"){
        x.style.display = "flex";
        y.src = "imgs/SVG/Search Icons/X - Close.svg";
        y.style.transform = "rotate(-180deg)";
    } 
    else{
        x.style.display = "none";
        y.style.transform = "rotate(0deg)";
        y.src = "imgs/SVG/Search Icons/Magnifying Glass.svg";
    }
}

// slideshow functions
let slideImgs = ['imgs/main/main.png','imgs/main/soccer.png','imgs/main/library.jpg','imgs/main/students.jpg'];
let headings = ['Welcome to Our School','Soccer Tryouts','Library Appreciation Month','SAT Prep'];

var slide1 = document.getElementsByClassName('slideImg')[0];
var slide2 = document.getElementsByClassName('slideImg')[1];
var title = document.getElementById('title');
var title2 = document.getElementById('titleMob');

slide1.src = slideImgs[0];
slide2.src = slideImgs[1];
title.innerHTML = headings[0];
title2.innerHTML = headings[0];

var i = 0;
var j = 1;

function nextSlide(){ 
    if(i == slideImgs.length - 1){
        i = 0;
    }else{
        i++;
    }
    
    if(j == slideImgs.length - 1){
        j = 0;
    }else{
        j++;
    }

    slide1.src = slideImgs[i];
    slide2.src = slideImgs[j];
    title.innerHTML = headings[i];   
    title2.innerHTML = headings[i];
}

function prevSlide(){
    if(i <= 0){
        i = 3;
    }else{
        i--;
        console.log(i);
    }
    
    if(j <= 0){
        j = 3;
    }else{
        j--;
    }

    slide1.src = slideImgs[i];
    slide2.src = slideImgs[j];
    title.innerHTML = headings[i]; 
    title2.innerHTML = headings[i];  
}

var autoPlay = setInterval(nextSlide, 4000);
var playing = true;

function pause(){
    if(playing){
        playing = false;
        clearInterval(autoPlay);
    }else{
        playing = true;
        autoPlay = setInterval(nextSlide, 4000);
    }
}