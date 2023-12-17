let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;
const slider = document.getElementById('text-slider');
let text=document.querySelectorAll('#text');
let btn=document.querySelectorAll('#btn');
let ans=0,project=document.getElementById('project'),sum=0;
let customer=document.getElementById('customer');
let mainNav=document.getElementById('mainNav');
let btn_source=document.getElementById('btn_source');
let hide=0;
let language=document.getElementById('language');

let links=document.querySelector('.links');
let bar=document.getElementById('bar');
let value=document.querySelector('.value');


function nextSlide() {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  for(let i=0;i<text.length;i++){
    if(i==currentIndex){
      text[currentIndex].style.transform="translateY(0px)";
      text[currentIndex].style.transitionDuration=2+'s';  
      btn[currentIndex].style.transform="translateY(0px)";
      btn[currentIndex].style.transitionDuration=2.5+'s'; 
    }
    else{
      text[i].style.transform="translateY(400px)";
      btn[i].style.transform="translateY(400px)";
    }
  }
    updateSlider();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1;
    }
    for(let i=0;i<text.length;i++){
    if(i==currentIndex){
      text[currentIndex].style.transform="translateY(0px)";
      text[currentIndex].style.transitionDuration=2+'s';
      btn[currentIndex].style.transform="translateY(0px)";
      btn[currentIndex].style.transitionDuration=2.5+'s'; 
      
    }
    else{
      text[i].style.transform="translateY(400px)";
      btn[i].style.transform="translateY(400px)";
    }
  }
    updateSlider();
}
function updateSlider() {
    const newTransformValue = -currentIndex * 100;
    slider.style.transform = `translateX(${newTransformValue}%)`;
    slider.style.transitionDuration=2+'s';
}
window.onload=function(){
  text[0].style.transform="translateY(0px)";
  text[0].style.transitionDuration=2+'s';
  btn[0].style.transform="translateY(0px)";
      btn[0].style.transitionDuration=2.5+'s'
}
// setInterval(function(){
//   nextSlide();
// },10000)
// onscroll=function(){
//   // console.log(this.scrollY);
  
//   if(window.location.host==='/index.html#project'){
//   setInterval(function(){
//     if(sum<=20){
//       project.innerHTML=`<h1 style="font-size:50px"><sup>+</sup>${sum}</h1><p>Project</p>`;
//       sum++;
//       project.style.fontSize=30+'px';
//     }
 
//     },185)
//     setInterval(function(){
//       if(ans<=100){
//         customer.innerHTML=`<h1><sup>+</sup>${ans}</h1> <p>Customer</p>`;
//         ans++;
//       }
//     },120)
//   }
// }
function checkTranslateX() {

  // Get the computed style of the element
  var computedStyle = window.getComputedStyle(project);
  
  // Extract the translateX value from the transform property
  var transformValue = computedStyle.getPropertyValue("transform");
  var matrix = new DOMMatrix(transformValue);
  var translateX = matrix.m41;
  
  // Your condition
  if (translateX === 0) { // Replace with your actual condition

    setInterval(function(){
      if(sum<=20){
        project.innerHTML=`<h1 style="font-size:50px"><sup>+</sup>${sum}</h1><p>Project</p>`;
        sum++;
        project.style.fontSize=30+'px';
      }
   
      },185)
      setInterval(function(){
        if(ans<=100){
          customer.innerHTML=`<h1><sup>+</sup>${ans}</h1> <p>Customer</p>`;
          ans++;
        }
      },30)
  }
}

























language.onclick=function(){
  hide++;
  if(hide===1){
    btn_source.style.top=11.3+'%';
    btn_source.style.position="fixed";
    btn_source.style.transitionDuration=1+'s';
    btn_source.style.left=88+'%';
    btn_source.style.border="2px solid green"
  }
  else{
    hide=0;
    btn_source.style.top=0;
    btn_source.style.transitionDuration=1+'s';

  }
}













let scape=document.querySelectorAll('.hide');

let observ=new IntersectionObserver((ele)=>{
  ele.forEach(e=>{
    if(e.isIntersecting==true){
      e.target.classList.add('show');
    }
    else{
      e.target.classList.remove('show');
    }
  })
})

scape.forEach((ele=>{
  observ.observe(ele);
})
)


let scape2=document.querySelectorAll('.hide2');

let observ2=new IntersectionObserver((ele)=>{
  ele.forEach(e=>{
    if(e.isIntersecting==true){
      e.target.classList.add('show2');
    }
    else{
      e.target.classList.remove('show2');
    }
  })
})

scape2.forEach((ele=>{
  observ2.observe(ele);
})
)

bar.onclick=function(){
  links.classList.toggle('active')
  links.style.transition=1+'s';
  value.style.opacity=0;
}
let apper=0;
language.onclick=function(){
  apper++;
  if(apper==1){
    value.style.transition=1+'s';
    value.style.opacity=1;
    value.firstElementChild.style.border='2px solid green'
    value.firstElementChild.style.borderRadius=10+'px';
    value.firstElementChild.style.top=40+'px';
    value.firstElementChild.style.background='#fff';
  }

  else{
    value.style.transition=1+'s';
    value.style.opacity=0;
    apper=0;
  }
}


let one=document.querySelector('.one');
let two=document.querySelector('.two');
let three=document.querySelector('.three');
let four=document.querySelector('.four');
let five=document.querySelector('.five');
let six=document.querySelector('.six');
let seven=document.querySelector('.seven');
let eight=document.querySelector('.eight');
one.onclick=function(){
  window.open("/project4/reseption.html", "_blank");
}
two.onclick=function(){
  window.open("/project6/elsokhna.html", "_blank");
}
three.onclick=function(){
  window.open("/project_two/home.html", "_blank");

}
four.onclick=function(){
  window.open("/project8/brown.html", "_blank");
}
five.onclick=function(){
  window.open("/project7/child.html", "_blank");
}
six.onclick=function(){
  window.open("/project5/shop.html", "_blank");
}
seven.onclick=function(){
  window.open("/pro1_img/index2.html", "_blank");
}

eight.onclick=function(){
  window.open("/project3/room.html", "_blank");
}
// document.addEventListener('contextmenu', (e) => e.preventDefault());

// function ctrlShiftKey(e, keyCode) {
//   return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
// }

// document.onkeydown = (e) => {
//   // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
//   if (
//     event.keyCode === 123 ||
//     ctrlShiftKey(e, 'I') ||
//     ctrlShiftKey(e, 'J') ||
//     ctrlShiftKey(e, 'C') ||
//     (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
//   )
//     return false;
// };
function scrollToSection(sectionId) {
  // Get the section element
  var section = document.getElementById(sectionId);

  // Scroll to the section
  section.scrollIntoView({ behavior: 'smooth' });
}

  checkTranslateX();
  value.onclick=function(){
    window.open('/Arapic/index.html')
  }