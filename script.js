// Simple animation
const cards=document.querySelectorAll(".card");

cards.forEach(c=>{
c.style.opacity=0;
c.style.transform="translateY(20px)";
setTimeout(()=>{
c.style.transition="0.6s";
c.style.opacity=1;
c.style.transform="translateY(0)";
},200);
});