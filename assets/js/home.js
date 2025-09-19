/* ===========================
   Steel Vista - home.js
   =========================== */

// Hero 패럴랙스 효과
document.addEventListener('scroll', ()=>{
  const hero = $('.home-hero');
  if(hero){
    const y = window.scrollY * 0.35;
    hero.style.backgroundPosition = `center calc(50% + ${y}px)`;
  }
},{passive:true});