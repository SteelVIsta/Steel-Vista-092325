/* ===========================
   Steel Vista - solutions.js
   =========================== */

// 프로세스 카드 강조 (스크롤 시)
const steps = $$('.process .card');
if(steps.length){
  const stepIo = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add("highlight");
      }
    });
  }, {threshold:.3});
  steps.forEach(s=>stepIo.observe(s));
}