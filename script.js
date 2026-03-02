// Intersection Observer for fade-in
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }
    });
});
document.querySelectorAll(".card, .article-card, .service-card, .testimonial-card").forEach(el=>{
    el.style.opacity="0";
    el.style.transform="translateY(40px)";
    el.style.transition="all 0.6s ease";
    observer.observe(el);
});

// Hero particles
const canvas = document.getElementById('hero-canvas');
if(canvas){
    const ctx = canvas.getContext('2d');
    let w = canvas.width = canvas.offsetWidth;
    let h = canvas.height = canvas.offsetHeight;
    window.addEventListener('resize',()=>{ w = canvas.width = canvas.offsetWidth; h = canvas.height = canvas.offsetHeight; });
    const particles = [];
    for(let i=0;i<120;i++){particles.push({x:Math.random()*w,y:Math.random()*h,r:Math.random()*2+1,dx:(Math.random()-0.5)*0.6,dy:(Math.random()-0.5)*0.6});}
    function animate(){
        ctx.clearRect(0,0,w,h);
        particles.forEach(p=>{
            p.x+=p.dx;p.y+=p.dy;
            if(p.x<0||p.x>w)p.dx*=-1;if(p.y<0||p.y>h)p.dy*=-1;
            ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle='rgba(255,255,255,0.1)';ctx.fill();
        });
        requestAnimationFrame(animate);
    }
    animate();
}

// Testimonials slider scroll
const slider = document.querySelector('.testimonial-slider');
let isDown = false, startX, scrollLeft;
slider?.addEventListener('mousedown', e => {isDown=true;slider.classList.add('active');startX=e.pageX-slider.offsetLeft;scrollLeft=slider.scrollLeft;});
slider?.addEventListener('mouseleave',()=>{isDown=false;slider.classList.remove('active');});
slider?.addEventListener('mouseup',()=>{isDown=false;slider.classList.remove('active');});
slider?.addEventListener('mousemove',e=>{if(!isDown) return;e.preventDefault;const x=e.pageX-slider.offsetLeft;const walk=(x-startX)*2;slider.scrollLeft=scrollLeft-walk;});

// Ripple effect handled by CSS :active