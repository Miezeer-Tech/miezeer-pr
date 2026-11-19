(function(){
  document.documentElement.classList.add('js');
  var t=document.querySelector('.nav-toggle'), l=document.getElementById('nav-list');
  if(t&&l){
    t.addEventListener('click',function(){var o=l.classList.toggle('open');t.setAttribute('aria-expanded',o?'true':'false');});
    l.addEventListener('click',function(e){if(e.target.tagName==='A'){l.classList.remove('open');t.setAttribute('aria-expanded','false');}});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&l.classList.contains('open')){l.classList.remove('open');t.setAttribute('aria-expanded','false');t.focus();}});
  }
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els=document.querySelectorAll('.section-head,.outlets li,.tier,.addon,.quote-card,.proof-card,.steps li,.faq-list details,.final-cta h2');
  if(reduce||!('IntersectionObserver' in window))return;
  els.forEach(function(el,i){el.classList.add('reveal');el.style.transitionDelay=((i%4)*60)+'ms';});
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{rootMargin:'0px 0px -8% 0px',threshold:.08});
  els.forEach(function(el){io.observe(el);});
})();
