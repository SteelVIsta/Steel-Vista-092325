/* Steel Vista — main.js */
const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>Array.from(r.querySelectorAll(s));

function currentPage(){
  const f = location.pathname.split('/').pop();
  return (f===""?"index.html":f).toLowerCase();
}
function setActiveNav(){
  const map={
    "index.html":"Home","about.html":"About","solutions.html":"Solutions",
    "materials.html":"Materials","contact.html":"Contact",
    "request-sample.html":"Materials","start-project.html":"Solutions"
  };
  const active = map[currentPage()]||"Home";
  $$(".nav a").forEach(a=>{
    a.classList.toggle("active", a.textContent.trim().toLowerCase()===active.toLowerCase());
  });
}
function bindReveals(){
  const t=$$(".fade,.reveal");
  if(!t.length) return;
  const io=new IntersectionObserver(es=>{
    es.forEach(e=>{
      if(!e.isIntersecting) return;
      const el=e.target;
      if(el.classList.contains("fade")) el.classList.add("in");
      if(el.classList.contains("reveal")) el.classList.add("is-visible");
      io.unobserve(el);
    });
  },{threshold:.12});
  t.forEach(el=>io.observe(el));
}
function setYear(){const y=$("#year"); if(y) y.textContent=new Date().getFullYear();}
function ensureLazy(){ $$("img").forEach(i=>{ if(!i.loading) i.loading="lazy"; }); }

document.addEventListener("DOMContentLoaded", ()=>{
  setActiveNav(); bindReveals(); setYear(); ensureLazy();
});