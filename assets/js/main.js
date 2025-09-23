/* ===================================
   MAIN JS (9/19 full restore flavor)
   - sticky header blur (CSS handles)
   - active nav highlighting
   - current year in footer
   - smooth anchor scroll
   - intersection-based reveal
   =================================== */

(function(){
  // Active nav by pathname
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(a=>{
    const href = a.getAttribute("href");
    if ((path === "" && href.endsWith("index.html")) || href.endsWith(path)) {
      a.classList.add("active");
    }
  });

  // Footer year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Smooth scroll for same-page anchors
  document.addEventListener("click", (e)=>{
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute("href");
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({behavior:"smooth", block:"start"});
  });

  // Scroll reveal
  const revealEls = [...document.querySelectorAll(".reveal")];
  if (revealEls.length){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if (entry.isIntersecting){
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, {threshold:.16});
    revealEls.forEach(el=>io.observe(el));
  }
})();