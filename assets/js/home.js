/* ===== HOME page JS ===== */
(function(){
  // Subtle stagger on feature cards
  const cards = document.querySelectorAll(".feature.reveal");
  cards.forEach((c,i)=> c.style.transitionDelay = (120*i)+"ms");
})();