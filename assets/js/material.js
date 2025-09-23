/* ===== MATERIALS page JS ===== */
(function(){
  // future: filter by chip? Keep placeholder for now.
  // Example: scroll to gallery when clicking "Request samples" in hero.
  const quick = document.querySelector('[data-scroll="#finish-gallery"]');
  if (quick) quick.addEventListener("click", (e)=>{
    e.preventDefault();
    document.querySelector("#finish-gallery")?.scrollIntoView({behavior:"smooth"});
  });
})();