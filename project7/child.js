let one=document.getElementById('one');
let two=document.getElementById('two');
let three=document.getElementById('three');
let four=document.getElementById('four');
let one1=document.getElementById('one1');
let two2=document.getElementById('two2');
let three3=document.getElementById('three3');
change=document.getElementById('change');
one1.onclick=function(){
    one.style.transform="translateX(0)"
    two.style.transform="translateX(0)"
    three.style.transform="translateX(0)"
    one.style.transition=2+'s';
    two.style.transition=2+'s';
    three.style.transition=2+'s';
    one1.style.border="2px solid #000";
    two2.style.border="none";
    three3.style.border="none";
    change.innerHTML='1';

}
two2.onclick=function(){
    
    one.style.transform="translateX(-102%)"
    two.style.transform="translateX(-102%)"
    three.style.transform="translateX(-100%)"
    one.style.transition=2+'s';
    two.style.transition=2+'s';
    three.style.transition=2+'s';
    two2.style.border="2px solid #000";
    one1.style.border="none";
    three3.style.border="none";
change.innerHTML='2';

}
three3.onclick=function(){
    
    three.style.transform="translateX(-202%)"
    one.style.transform="translateX(-202%)"
    two.style.transform="translateX(-202%)"
    one.style.transition=2+'s';
    two.style.transition=2+'s';
    three.style.transition=2+'s';
    three3.style.border="2px solid #000";
    two2.style.border="none";
    one1.style.border="none";
    change.innerHTML='3';

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
      window.open('/Arapic/project7/child.html')
    }