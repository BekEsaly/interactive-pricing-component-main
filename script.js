const range=document.querySelector('#range');

const thumb=document.querySelector('#thumb');
const pageviews=document.querySelector('.pageviews span');
const pricing=document.querySelectorAll('.pricing span')

      range.addEventListener('input',()=>{
          let current=range.value;
        
           switch (current) {
          case '0':
          case '4':
          case '8':
              range.value='8';
             thumb.style.left='10%';
             pageviews.innerHTML='10K';
             for (var i = 0; i < pricing.length; i++) {
                 pricing[i].innerHTML='$8'
             }
             break;
          case '12':
             thumb.style.left='20%';
             pageviews.innerHTML='50K';
               for (var i = 0; i < pricing.length; i++) {
                 pricing[i].innerHTML='$12'
             }
             break;
          case '16':
             thumb.style.left='40%'
             pageviews.innerHTML='100K'
               for (var i = 0; i < pricing.length; i++) {
                 pricing[i].innerHTML='$16'
             }
              break;
          case '20':
          case '24':
              range.value='24';
             thumb.style.left='60%';
             pageviews.innerHTML='500k';
               for (var i = 0; i < pricing.length; i++) {
                 pricing[i].innerHTML='$24'
             }
             break;
          case '28':
          case '32':
          case '36':
              range.value='36';
             thumb.style.left='90%';
             pageviews.innerHTML='1M';
               for (var i = 0; i < pricing.length; i++) {
                 pricing[i].innerHTML='$36'
             }
             break;
         default:
             // code
     }
    /* 
     cardCheck.addEventListener('click',()=>{
    checkBtn.classList.toggle('checked');
    cardCheck.classList.toggle('cardChecked');
  /*  if (cardCheck.classList.hasOwnProperty('cardChecked')){
    for (var i = 0; i < pricing.length; i++) {
        pricing[i].innerHTML= current*0.25;
             }
    }else{
          for (var i = 0; i < pricing.length; i++) {
                 pricing[i].innerHTML=current;
             }
    }
})*/
     
      });     
      
 //pricing
const checkBtn=document.querySelector('#btn');
const cardCheck=document.querySelector('.card--billing-check');
/*
cardCheck.addEventListener('click',()=>{
    checkBtn.classList.toggle('checked');
    cardCheck.classList.toggle('cardChecked');
 
        for (var i = 0; i < pricing.length; i++) {
          pricing[i].innerHTML=range.value-range.value*0.25;
             }

});*/

checkBtn.addEventListener('click',()=>{
    checkBtn.classList.toggle('toggleBtn');
    cardCheck.classList.toggle('cardChecked');

     if (checkBtn.classList.contains('toggleBtn')){
       for (var i = 0; i < pricing.length; i++) {
       pricing[i].innerHTML='$'+(range.value-range.value*0.25);
             };
      
      
    }else{
        for (var i = 0; i < pricing.length; i++) {
          pricing[i].innerHTML='$'+range.value;
             }
            checkBtn.classList.remove('toggleBtn');
      cardCheck.classList.remove('cardChecked');
  
    }
      
     
  
})
 