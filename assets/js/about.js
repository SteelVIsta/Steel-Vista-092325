/* ===== ABOUT page JS ===== */
(function(){
  // Example metric count-up placeholder (simple)
  const nums = document.querySelectorAll("[data-count]");
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if (!entry.isIntersecting) return;
      const el = entry.target; io.unobserve(el);
      const target = +el.getAttribute("data-count");
      let cur = 0; const step = Math.max(1, Math.floor(target/60));
      const tick = ()=>{ cur += step; if (cur>target) cur=target; el.textContent = cur.toLocaleString();
        if (cur<target) requestAnimationFrame(tick);
      };
      tick();
    });
  }, {threshold:.3});
  nums.forEach(n=>io.observe(n));
})();