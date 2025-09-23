/* ===========================
   Steel Vista - main.js
   =========================== */

// 헬퍼
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

// 현재 페이지 얻기
function getCurrentPage() {
  const path = location.pathname.split('/').pop();
  return path === '' ? 'index.html' : path;
}

// 1) 네비게이션 활성화
function setActiveNav() {
  const page = getCurrentPage().toLowerCase();
  const map = {
    'index.html': 'Home',
    'about.html': 'About',
    'solutions.html': 'Solutions',
    'materials.html': 'Materials',
    'contact.html': 'Contact'
  };
  const activeText = map[page] || 'Home';
  $$('.nav a, header nav a').forEach(a=>{
    if(a.textContent.trim().toLowerCase() === activeText.toLowerCase()){
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });
}

// 2) 헤더 그림자
function bindHeaderShadow() {
  const header = $('header');
  if (!header) return;
  const toggle = () => {
    if (window.scrollY > 4) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  };
  toggle();
  window.addEventListener('scroll', toggle, { passive: true });
}

// 3) 스크롤 애니메이션 (fade/reveal)
function bindScrollAnimations() {
  const targets = $$('.fade, .reveal');
  if (!targets.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e=>{
      if(!e.isIntersecting) return;
      const el = e.target;
      if(el.classList.contains('fade')) el.classList.add('in');
      if(el.classList.contains('reveal')) el.classList.add('is-visible');
      io.unobserve(el);
    });
  }, { threshold: 0.12 });
  targets.forEach(el=>io.observe(el));
}

// 4) 푸터 연도 자동
function setYear() {
  const y = $('#year');
  if (y) y.textContent = new Date().getFullYear();
}

// 5) 앵커 스무스 스크롤
function bindSmoothAnchors() {
  document.addEventListener('click', (e)=>{
    const a = e.target.closest('a[href^="#"]');
    if(!a) return;
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if(!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.pushState(null, '', `#${id}`);
  });
}

// 6) Contact 폼 검증 (Contact.js에서 override 가능)
function bindContactFormGuard() {
  const form = $('form[data-contact]');
  if (!form) return;
  form.addEventListener('submit', (e)=>{
    const name = $('[name="name"]', form);
    const email = $('[name="email"]', form);
    const message = $('[name="message"]', form);
    let ok = true;
    const mark = (el, good) => {
      if(!el) return;
      el.style.borderColor = good ? 'var(--border)' : '#e11d48';
    };
    if(!name.value.trim()){ ok=false; mark(name,false);} else mark(name,true);
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
    if(!emailOk){ ok=false; mark(email,false);} else mark(email,true);
    if(!message.value.trim() || message.value.trim().length<5){ ok=false; mark(message,false);} else mark(message,true);
    if(!ok){ e.preventDefault(); alert('Please fill in your name, a valid email, and a short message.'); }
  });
}

// 7) 이미지 lazy 속성 강제
function ensureLazyImages() {
  $$('img').forEach(img=>{ if(!img.loading) img.loading='lazy'; });
}

// 8) 모바일 메뉴 토글
function bindMobileNavToggle() {
  const btn = $('[data-nav-toggle]');
  const nav = $('header nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', ()=>{
    const open = nav.classList.toggle('nav--open');
    btn.setAttribute('aria-expanded', open?'true':'false');
  });
}

// 초기화
document.addEventListener('DOMContentLoaded', ()=>{
  setActiveNav();
  bindHeaderShadow();
  bindScrollAnimations();
  setYear();
  bindSmoothAnchors();
  bindContactFormGuard();
  ensureLazyImages();
  bindMobileNavToggle();
});