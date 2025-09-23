/* Steel Vista — main.js */

// Helpers
const $ = (sel, root=document)=>root.querySelector(sel);
const $$ = (sel, root=document)=>Array.from(root.querySelectorAll(sel));

// Current page file
function getCurrentPage(){
  const p = location.pathname.split('/').pop();
  return p === '' ? 'index.html' : p.toLowerCase();
}

// 1) Nav active
function setActiveNav(){
  const page = getCurrentPage();
  const map = {
    'index.html':'Home','about.html':'About','solutions.html':'Solutions',
    'materials.html':'Materials','contact.html':'Contact',
    'request-sample.html':'Materials','start-project.html':'Solutions'
  };
  const active = map[page] || 'Home';
  $$('.nav a, header nav a').forEach(a=>{
    a.classList.toggle('active', a.textContent.trim().toLowerCase()===active.toLowerCase());
  });
}

// 2) Fade / Reveal
function bindScrollAnimations(){
  const targets = $$('.fade, .reveal');
  if(!targets.length) return;
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(!e.isIntersecting) return;
      const el=e.target;
      if(el.classList.contains('fade')) el.classList.add('in');
      if(el.classList.contains('reveal')) el.classList.add('is-visible');
      io.unobserve(el);
    });
  }, {threshold:.12});
  targets.forEach(el=>io.observe(el));
}

// 3) Year
function setYear(){ const y=$('#year'); if(y) y.textContent=new Date().getFullYear(); }

// 4) Ensure lazy images
function ensureLazy(){ $$('img').forEach(i=>{ if(!i.loading) i.loading='lazy'; }); }

document.addEventListener('DOMContentLoaded', ()=>{
  setActiveNav();
  bindScrollAnimations();
  setYear();
  ensureLazy();
});