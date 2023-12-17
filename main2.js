let pro1=document.getElementById('pro1');
let pro2=document.getElementById('pro2');
let pro3=document.getElementById('pro3');
let pro4=document.getElementById('pro4');
let pro5=document.getElementById('pro5');
let pro6=document.getElementById('pro6');
let pro7=document.getElementById('pro7');
let pro8=document.getElementById('pro8');
if(innerWidth>=1300){

hover=(ele)=>{
    ele.style.width=62+'%';
    ele.nextElementSibling.style.width=38+'%';
    ele.style.transition=1+'s'
    ele.nextElementSibling.style.transition=1+'s';
    console.log("YES");
}
leave=()=>{
    pro1.style.width=62+'%';
    pro1.style.transition=1+'s'
    pro2.style.width=38+'%';
    pro2.style.transition=1+'s';
}

leave2=()=>{
    pro4.style.width=62+'%';
    pro4.style.transition=1+'s'
    pro3.style.width=38+'%';
    pro3.style.transition=1+'s';
}
leave3=()=>{
    pro5.style.width=62+'%';
    pro5.style.transition=1+'s'
    pro6.style.width=38+'%';
    pro6.style.transition=1+'s';
}
leave4=()=>{
    pro8.style.width=62+'%';
    pro8.style.transition=1+'s'
    pro7.style.width=38+'%';
    pro7.style.transition=1+'s';
}
hover2=(ele)=>{
    ele.style.width=60+'%';
    ele.previousElementSibling.style.width=40+'%';
    ele.style.transition=1+'s'
    ele.previousElementSibling.style.transition=1+'s';
}
}

pro1.onclick=function(){
    window.open("/project4/reseption.html", "_blank");
}
pro2.onclick=function(){
    window.open("/project6/elsokhna.html", "_blank");
}
pro3.onclick=function(){
    window.open("/project_two/home.html", "_blank");

}
pro4.onclick=function(){
    window.open("/project8/brown.html", "_blank");
}
pro5.onclick=function(){
    window.open("/project7/child.html", "_blank");
}
pro6.onclick=function(){
    window.open("/project5/shop.html", "_blank");
}
pro7.onclick=function(){
    window.open("/pro1_img/index2.html", "_blank");
}

pro8.onclick=function(){
    window.open("/project3/room.html", "_blank");
}

let links=document.querySelector('.links');
let bar=document.getElementById('bar');
let value=document.querySelector('.value');

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


bar.onclick=function(){
    links.classList.toggle('active')
    links.style.transition=1+'s';
    value.style.opacity=0;
}
let apper=0;
language.onclick=function(){
    apper++;
    if(apper==1){
        console.log('Yes');

    value.style.transition=1+'s';
    value.style.textAlign="center";
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
    let about= document.getElementById('Apout');
    let Packeges=document.getElementById('Packeges');
    let contact_us=document.getElementById('contact_us');
    about.onclick=function(){
      window.open('/index.html#Apout');
      window.scrollIntoView({behavior:"smooth"});
    }
    Packeges.onclick=function(){
      window.open('/index.html#Packeges');
      window.scrollIntoView({behavior:"smooth"})
    }
    contact_us.onclick=function(){
      window.open('/index.html#contact_us');
      window.scrollIntoView({behavior:"smooth"})
    }
    value.onclick=function(){
        window.open('/Arapic/Project..html')
      }