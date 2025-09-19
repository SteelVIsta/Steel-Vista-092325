/* ===========================
   Steel Vista - about.js
   =========================== */

// Values & Mission 이미지 순차 리빌
const aboutEls = $$('.about-values .card, .about-mission-image');
if(aboutEls.length){
  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, {threshold:.2});
  aboutEls.forEach(el=>io.observe(el));
}

// 지도 플레이스홀더 클릭 이벤트
const map = $('.map-placeholder');
if(map){
  map.addEventListener('click',()=>{
    alert("🔍 Interactive map would load here.");
  });
}