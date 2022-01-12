
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

//mobile menu drop
var b = document.getElementById("mobileDropLinks");
b.style.display = "none"; 

function openMenu(){
    if(b.style.display === "none"){
        b.style.display = "block"
    }else{
        b.style.display = "none"
    }
}

//mobile search
var a = document.getElementById("mobileSearch");
a.style.display = "none";

function toggleSearchMobile(){
    if(a.style.display === "none"){
        a.style.display = "flex"
    }else{
        a.style.display = "none"
    }
}

// slideshow functions
let slideImgs = ['imgs/main/main.png','imgs/main/soccer.png','imgs/main/library.jpg','imgs/main/students.jpg'];
let headings = ['Welcome to Our Site!','Soccer Tryouts','Library Appreciation Month','Early SAT Prep'];

var slide1 = document.getElementsByClassName('slideImg')[0];
var slide2 = document.getElementsByClassName('slideImg')[1];
var title = document.getElementById('title');
var title2 = document.getElementById('titleMob');

var autoPlay = setInterval(nextSlide, 5000);
var playing = true;

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
    clearInterval(autoPlay);
    autoPlay = setInterval(nextSlide, 5000);
}

function prevSlide(){
    if(i <= 0){
        i = 3;
    }else{
        i--;
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
    clearInterval(autoPlay);
    autoPlay = setInterval(nextSlide, 5000);
}

function pause(){
    if(playing){
        playing = false;
        clearInterval(autoPlay);
    }else{
        playing = true;
        autoPlay = setInterval(nextSlide, 5000);
    }
}