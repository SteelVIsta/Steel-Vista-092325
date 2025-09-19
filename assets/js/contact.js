/* ===========================
   Steel Vista - contact.js
   =========================== */

// Contact form 검증 (main.js의 기본 guard보다 단순 alert 버전)
const form = $('.contact-form');
if(form){
  form.addEventListener('submit', e=>{
    e.preventDefault();
    const name = $('#name', form).value.trim();
    const email = $('#email', form).value.trim();
    const message = $('#message', form).value.trim();
    if(!name || !email || !message){
      alert("⚠️ Please fill out all fields.");
      return;
    }
    alert("✅ Message sent (demo). Backend integration pending.");
    form.reset();
  });
}

// 지도 placeholder 클릭 이벤트
const mapEmbed = $('.map-embed img');
if(mapEmbed){
  mapEmbed.addEventListener('click', ()=>{
    alert("🗺️ Load Google Maps iframe here.");
  });
}