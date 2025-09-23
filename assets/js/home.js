/* =========================================================
   Home (index 전용) — Parallax scroll effect
   - hero 배경/전경에 미묘한 패럴랙스
   - 성능을 위해 rAF + 상태 캐시 + reduce-motion 존중
   ========================================================= */

(function(){
  const hero = document.querySelector('.hero');
  const bg   = hero?.querySelector('.hero-bg');
  const fg   = hero?.querySelector('.hero-content');

  if (!hero || !bg || !fg) return;

  // 접근성: 사용자 모션 최소화 설정 시 비활성화
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduceMotion.matches) return;

  let ticking = false;
  let heroTop = 0;
  let heroH   = 0;
  let viewportH = window.innerHeight;

  function measure(){
    const rect = hero.getBoundingClientRect();
    // 페이지 기준 위치로 변환
    heroTop = window.scrollY + rect.top;
    heroH   = rect.height;
    viewportH = window.innerHeight;
  }

  function onScroll(){
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }

  function onResize(){
    measure();
    onScroll();
  }

  function update(){
    const scrollY = window.scrollY || window.pageYOffset || 0;

    // 히어로가 화면에 보이는 구간에서만 계산
    const start = heroTop - viewportH;     // 히어로가 보이기 직전
    const end   = heroTop + heroH;         // 히어로가 지나간 후
    const inView = scrollY > start && scrollY < end;

    if (inView){
      // 진행도(0~1 주변) 계산
      const progress = (scrollY - heroTop) / heroH; // 대략 -something ~ 1
      // 배경은 위로 살짝(더 크게), 전경은 아래로 소폭
      const bgOffset = clamp(-progress * 36, -40, 40); // px
      const fgOffset = clamp(progress * 16,  -20, 20); // px

      hero.style.setProperty('--parallax-bg', `${bgOffset}px`);
      hero.style.setProperty('--parallax-fg', `${fgOffset}px`);
    }

    ticking = false;
  }

  function clamp(v, min, max){ return Math.min(max, Math.max(min, v)); }

  // 초기화
  measure();
  update();

  // 이벤트 바인딩 (passive로 스크롤 성능 확보)
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize, { passive: true });
})();