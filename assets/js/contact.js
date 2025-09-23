/* ===== CONTACT page JS ===== */
(function(){
  // Mailto fallback button adds subject automatically
  const mailBtn = document.querySelector('[data-mailto]');
  if (mailBtn){
    mailBtn.addEventListener("click", ()=>{
      const subj = encodeURIComponent("Steel Vista — Project / Sample Request");
      location.href = "mailto:we.solve@steel-vista.com?subject="+subj;
    });
  }

  // (Optional) client-side validation hint
  const form = document.querySelector("form");
  if (form){
    form.addEventListener("submit", (e)=>{
      const required = form.querySelectorAll("[required]");
      for (const f of required){
        if (!f.value.trim()){
          e.preventDefault();
          f.focus();
          f.closest(".contact-card")?.scrollIntoView({behavior:"smooth", block:"center"});
          break;
        }
      }
    });
  }
})();