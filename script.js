const carousel = document.querySelector(".content");
const carouselImages = document.querySelectorAll(".images");
const numberCarousel = carouselImages.length;
const btnClick = document.querySelectorAll(".btn-click");
const carouselTitle = document.querySelectorAll(".carousel-title");
const carouselBtn = document.querySelectorAll(".carousel-btn");

// button
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

var positionClick = 0;

var size = carouselImages[0].clientWidth;
var count = 1;
var time = 3000;
var stateContent = true;
var v_interval = "";

var hidden;

carousel.style.transform =` translate3d(${-size*(count)}px,0px,0px)`;



function run_setInterval(){
  v_interval = setInterval( () =>{
    btnClick[count - 1].classList.remove("active");
    carouselTitle[count].classList.remove("transUp");
    carouselBtn[count].classList.remove("transDown");
    carousel.style.transition ="transform 0.5s ease-in-out";
    carousel.style.transform =` translate3d(${-size*(++count)}px,0px,0px)`;
    positionClick = count - 1;
    if(count === carouselImages.length - 1){
      btnClick[0].classList.add('active');
    }else{
      btnClick[count-1].classList.add('active');
    }
  }, time);
}

function run_clearInterval(){
  clearInterval(v_interval);
}

leftBtn.addEventListener("click", function(e){
  if(stateContent){
    run_clearInterval();
    commonFuncBothArrows(true,false,e); 
    run_setInterval();
  }
});

rightBtn.addEventListener("click", function(e){
  if(stateContent){
    run_clearInterval();
    commonFuncBothArrows(false,true,e);
    run_setInterval();
  }
});

function commonFuncBothArrows(arrowL,arrowR,e){
  e.preventDefault();
  stateContent = false;
  if(arrowL){
    if(count <= 0 ){ return; }
  }else{
      if(arrowR){
          if(count >= carouselImages.length - 1){ return;}
      }
  }
  btnClick[count-1].classList.remove('active');
  carouselTitle[count].classList.remove("transUp");
  carouselBtn[count].classList.remove("transDown");
  carousel.style.transition = "transform 0.5s ease-in-out";
  count = arrowL ? --count : ++count;
  carousel.style.transform = `translate3d(${-size*count}px,0px,0px)`;
  positionClick = count-1; 

  switch (count) {
    case 0: 
    btnClick[btnClick.length-1].classList.add('active');
    break;
    case carouselImages.length-1: 
    btnClick[0].classList.add('active');
    break;
    default:
    btnClick[count-1].classList.add('active');
    break;
}
}

carousel.addEventListener('transitionend', ()=>{
  stateContent = true; 
  let nameClassSlickSlide = carouselImages[count].id;
  if(nameClassSlickSlide === 'last-images' || nameClassSlickSlide === 'first-images'){ 
    carousel.style.transition = `none`;
    count = (nameClassSlickSlide === 'last-images')?carouselImages.length - 2:(nameClassSlickSlide === 'first-images')?1:count;
    positionClick = count - 1;
    carousel.style.transform = `translateX(-${size*count}px)`;
  }
  carouselTitle[count].classList.add("transUp");
  carouselBtn[count].classList.add("transDown");
})


const psSlider = document.querySelector(".ps-slider");
const psItem = document.querySelectorAll(".ps-item");

const nextPs = document.querySelector(".ps-right");
const prevPs = document.querySelector(".ps-left");

const psSize = psItem[0].clientWidth;
var psCount = 0;

// psSlider.style.transform = "translateX(" + (-psSize * psCount) + "px)";

nextPs.addEventListener("click", () => {
  psCount++;
  if(psCount > psItem.length - 1){
    psCount = 0 ;
    psSlider.style.transform = "translateX(" + (psSize * psCount) + "px)";
  }
  psSlider.style.transition = "transform 0.5s ease-in-out";
  psSlider.style.transform = "translateX(" + (-psSize * psCount) + "px)";
  // psCount++;
})

prevPs.addEventListener("click", () => {
  psCount--;
  if(psCount < 0){
    psCount = psItem.length - 1;
    psSlider.style.transition = "transform 0.5s ease-in-out";
    psSlider.style.transform = "translateX(" + (psSize * psCount) + "px)";
  } 
  psSlider.style.transition = "transform 0.5s ease-in-out";
  psSlider.style.transform = "translateX(" + (-psSize * (psCount)) + "px)";
  
})

// image gallery

const menuItem = document.querySelectorAll(".menu-item");
const itemGallery = document.querySelectorAll(".itemGallery");

for(let i = 0 ; i<menuItem.length; i++){
  menuItem[i].addEventListener("click", function(){
    for(let j = 0 ; j<menuItem.length; j++){
      menuItem[j].classList.remove("active");
    }
    this.classList.add("active");

    let dataTarget = this.getAttribute("data-target");

    for(let k = 0 ; k<itemGallery.length; k++){
      itemGallery[k].classList.remove("active");
      itemGallery[k].classList.add("hide");

      if(itemGallery[k].getAttribute("data-item") === dataTarget || dataTarget == "all"){
        itemGallery[k].classList.remove("hide");
        itemGallery[k].classList.add("active");
      
      }
    }
  })
}


const counters = document.querySelectorAll('.ft-nbNumber');

// this could work for multiple counters
counters.forEach(counter => {
	// start with 0 by default
	counter.innerText = '0';
	
	const updateCounter = () => {
		const target = +counter.getAttribute('data-target');
		const c = +counter.innerText;
		
		// get the 0.1% to speed up things
		const increment = target / 800;
    // console.log(increment);
		
		if(c < target) {
			counter.innerText = `${Math.ceil(c + increment)}`;
			setTimeout(updateCounter, 1)
		} else {
			counter.innerText = target;
		}
	};

  $(window).scroll(function(){
    let topPosition = $(window).scrollTop();
  
    if(topPosition >= 2700){
      updateCounter();
    }
    
  })
});

// pricing

const pricingTable = document.querySelectorAll(".pricing-table");

pricingTable.forEach(e => {
  e.addEventListener("click",function(){
    pricingTable.forEach(table => table.classList.remove("premium"));
    this.classList.add("premium");
    })
  })

// navbar

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(e => {
  e.addEventListener("click",function(){
    navItems.forEach(table => table.classList.remove("active"));
    this.classList.add("active");
    })
  })


// loading page
window.addEventListener("load", function(){
  const loaded = document.querySelector(".load-screen");
  loaded.classList.add("showed");
  setTimeout(() => {
    loaded.classList.remove("showed");
  },1000)
})

// animate navbar






const btn = document.getElementById('btn');
const ctName = document.getElementById('name');
const mail = document.getElementById('mail');
const subject = document.getElementById('subject');

btn.addEventListener('click', (e) =>{
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  //get the values from the checkInputs
  const nameValue = ctName.value.trim();
  const mailValue = mail.value.trim();
  const subjectValue = subject.value.trim();

  if(nameValue === ''){
    setErrorFor(ctName, 'Please enter your name' );
  } else {
    setSuccessFor(ctName);
  }

  if(mailValue === ''){
    setErrorFor(mail, 'Please enter your mail' );
  } else {
    setSuccessFor(mail);
    
  }

  if(subjectValue === ''){
    setErrorFor(subject, 'Please enter your subject' );
  } else {
    setSuccessFor(subject);
    
  }
};

function setErrorFor(input,message){
    const Contact1 = input.parentElement;
    const small = Contact1.querySelector('small');

    //add error message inside small
    small.innerText = message;

    // add error class
    Contact1.className = 'contact-1 ct-error';

};

function setSuccessFor(input){
  const Contact1 = input.parentElement;

    // add error class
    Contact1.className = 'contact-1';

}


// scroll top
function scrollTop(){
  const scrollTop = document.getElementById('scroll-top');
  //When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 560) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top');
}

window.addEventListener('scroll',scrollTop)