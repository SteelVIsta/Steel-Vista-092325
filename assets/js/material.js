/* ===========================
   Steel Vista - materials.js
   =========================== */

// Finish gallery 필터링 (chip 클릭)
const chips = $$('.chip');
const cards = $$('.finish-card');
if(chips.length && cards.length){
  chips.forEach(chip=>{
    chip.addEventListener('click', ()=>{
      const keyword = chip.textContent.toLowerCase();
      cards.forEach(card=>{
        if(card.textContent.toLowerCase().includes(keyword)){
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}