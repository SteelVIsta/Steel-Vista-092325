/* ===== SOLUTIONS page JS ===== */
(function(){
  // Stagger for solution cards
  const cards = document.querySelectorAll(".sol-card.reveal");
  cards.forEach((c,i)=> c.style.transitionDelay = (100*i)+"ms");
})();