const $=s=>document.querySelector(s);
const E=(t,c,h)=>{const n=document.createElement(t);if(c)n.className=c;if(h!=null)n.innerHTML=h;return n};
const mk=t=>t.replace(/==(.+?)==/g,'<mark class="hl">$1</mark>').replace(/\*(\w+)\*/g,"<mark>$1</mark>");
const P=document.body.dataset.page,app=$("#app");
const pages=[["index.html","Home","home"],["moon.html","Moon: Part 1","moon"],["moon-2.html","Moon: Part 2","moon2"],["moon-3.html","Moon: Part 3","moon3"],["moon-4.html","Moon: Part 4","moon4"],["mars.html","Mars: Part 1","mars"],["mars-2.html","Mars: Part 2","mars2"],["lessons.html","Lessons","lessons"],["legacy.html","Legacy","legacy"],["sources.html","Sources","sources"]];
const accent=P=="home"||P=="sources"?"#8ab4ff":D.chapters[P].c;document.documentElement.style.setProperty("--c",accent);
$("#top").append(...pages.map(([h,l,k])=>{const a=E("a",k==P?"on":"",l);a.href=h;return a}));
const fig=p=>E("figure","fig",`<div class="ph${p.wide?" wide":""}"><img src="${p.src}" alt="${p.alt}"></div><figcaption>${p.cap||""}<small>${p.id}</small></figcaption>`);
const title=t=>{const w=E("div","tt");w.append(E("h1","",t));
 [[2,3],[88,8],[96,60],[6,85],[50,98],[70,0]].forEach(([x,y],i)=>{const s=E("i","","✦");s.style.cssText=`left:${x}%;top:${y}%;animation-delay:${i*.4}s;font-size:${1+i%3*.5}rem`;w.append(s)});return w};

// "Next" button at the very bottom of each page (with a quieter "back" link)
let fsv=1;try{fsv=parseFloat(localStorage.fs)||1}catch(e){}
document.documentElement.style.setProperty("--fs",fsv);
const setFs=d=>{fsv=Math.min(1.6,Math.max(.85,Math.round((fsv+d)*100)/100));document.documentElement.style.setProperty("--fs",fsv);try{localStorage.fs=fsv}catch(e){}};
let reading=false;
function readAloud(btn){const ss=speechSynthesis,stop=()=>{reading=false;btn.textContent="🔊 Read aloud";document.querySelectorAll(".speaking").forEach(n=>n.classList.remove("speaking"))};
 if(reading){ss.cancel();stop();return}
 const v=ss.getVoices(),vo=v.find(x=>/en-GB/i.test(x.lang))||v.find(x=>/^en/i.test(x.lang)),q=[];
 document.querySelectorAll(".page .sum,.page .dyk,.page .narr h2,.page .voice h3,.page .txt p,.page .beat p,.page .cs").forEach(el=>{
  (el.textContent.match(/[^.!?]+[.!?]+["”']?|[^.!?]+$/g)||[]).forEach(t=>{if(t.trim())q.push([el,t.trim()])})});
 reading=true;btn.textContent="■ Stop reading";let lastEl=null;
 q.forEach(([el,t],i)=>{const u=new SpeechSynthesisUtterance(t);if(vo)u.voice=vo;u.lang=vo?vo.lang:"en-GB";u.rate=.95;
  u.onstart=()=>{if(el!==lastEl){document.querySelectorAll(".speaking").forEach(n=>n.classList.remove("speaking"));el.classList.add("speaking");el.scrollIntoView({block:"center",behavior:"smooth"});lastEl=el}};
  if(i==q.length-1)u.onend=stop;ss.speak(u)})}
addEventListener("pagehide",()=>{try{speechSynthesis.cancel()}catch(e){}});
function tools(c){const t=E("div","tools"),b=(l,f)=>{const x=E("button","tb",l);x.onclick=f;t.append(x);return x};
 b("A−",()=>setFs(-.1)).setAttribute("aria-label","Smaller text");b("A+",()=>setFs(.1)).setAttribute("aria-label","Larger text");
 if("speechSynthesis" in window){const r=b("🔊 Read aloud",()=>readAloud(r))}
 let sy=null;if(c.sound)sy=b(c.sound=="launch"?"▶ Launch sound":"▶ Radio signal",()=>{});if(sy)sy.dataset.s=c.sound;
 if(c.audio){const a=new Audio(),ab=b(c.audio.label,()=>{a.currentTime=0;a.play()});ab.hidden=true;
  a.preload="metadata";a.addEventListener("loadedmetadata",()=>{ab.hidden=false;if(sy)sy.hidden=true});a.src=c.audio.src}
 return t}
function concl(text){const w=E("div","concl");w.append(E("span","tag","In one sentence"));
 const p=E("p","cs");p.setAttribute("aria-label",text);
 text.split(" ").forEach((word,i,a)=>{const sp=E("span","w");[...word].forEach(ch=>sp.append(E("span","cl",ch)));p.append(sp);if(i<a.length-1)p.append(document.createTextNode(" "))});
 w.append(p);const rb=E("button","tb","↻ Replay");rb.onclick=()=>playC(p);w.append(rb);return w}
function playC(p){const L=[...p.querySelectorAll(".cl")],pool=[...document.querySelectorAll("mark.hl .L")],used=new Set(),vh=innerHeight;
 L.forEach(l=>l.getAnimations().forEach(a=>a.cancel()));
 L.forEach((l,i)=>{const ch=l.textContent.toLowerCase(),cand=pool.filter(x=>x.textContent.toLowerCase()==ch&&!used.has(x)),
   src=cand.length?cand[Math.random()*cand.length|0]:pool[Math.random()*pool.length|0];if(src)used.add(src);
  const r=src?src.getBoundingClientRect():{left:innerWidth/2,top:-60},t=l.getBoundingClientRect(),
   sx=Math.min(Math.max(r.left,10),innerWidth-30),vis=r.top>=-40&&r.top<=vh,sy=vis?r.top:-60-Math.random()*90,dx=sx-t.left,dy=sy-t.top,rot=(Math.random()-.5)*540;
  if(vis){src.classList.add("gone");setTimeout(()=>src.classList.remove("gone"),2600+i*12)}
  l.animate([{opacity:0,transform:`translate(${dx}px,${dy}px) rotate(${rot}deg) scale(1.9)`},{opacity:1,offset:.2},
   {opacity:1,transform:`translate(${dx*.35+(Math.random()-.5)*70}px,${dy*.35}px) rotate(${rot*.4}deg) scale(1.3)`,offset:.55},{opacity:1,transform:"none"}],
   {duration:1500+Math.random()*500,delay:i*38,easing:"cubic-bezier(.2,.8,.2,1)",fill:"both"})})}
function next(j){const n=E("nav","next");n.setAttribute("aria-label","Page navigation");
 if(j>1){const b=E("a","back","← "+pages[j-2][1]);b.href=pages[j-2][0];n.append(b)}else n.append(E("span"));
 if(j<pages.length){const a=E("a","go",`<small>Next</small>${pages[j][1]} →`);a.href=pages[j][0];n.append(a)}
 else{const a=E("a","go","<small>Finished</small>Back to Home ↺");a.href=pages[0][0];n.append(a)}
 return n}
if(P=="home"){
 const h=E("section","hero"),starBtns=[];h.append(E("span","tag","NASA Space Apps Challenge 2026"),title("Abandoned but Not Forgotten"),
  E("p","","Since the 1960s, NASA has left robots and hardware on the Moon, on Mars and in deep space. Scroll down to meet them."),E("p","","↓"));
 const o=E("section","orbit");o.id="orbit";o.append(E("h2","","Click a star to meet a machine we left behind"));
 const sky=E("div","sky2");
 const info=E("div","","");info.id="info";info.setAttribute("role","dialog");info.hidden=true;
 const hint=E("p","hint","Tap a glowing star. Each one is a machine that no longer works.");
 let cur=null;
 // place the card beside the clicked star (right of it, or left if there is no room), clamped inside the section
 const place=()=>{if(!cur)return;const R=o.getBoundingClientRect(),r=cur.getBoundingClientRect(),g=18,pad=12;
  const w=info.offsetWidth,h=info.offsetHeight,cx=r.left+r.width/2-R.left,cy=r.top+r.height/2-R.top;
  let side=cx+g+w+pad<=R.width?"r":cx-g-w-pad>=0?"l":null,L,T;
  if(side){L=side=="r"?cx+g:cx-g-w;T=Math.min(Math.max(cy-h/2,pad),R.height-h-pad)}
  else{L=Math.min(Math.max(cx-w/2,pad),R.width-w-pad);side=cy+g+h+pad<=R.height?"b":"t";T=side=="b"?cy+g:cy-g-h}
  info.style.left=L+"px";info.style.top=T+"px";info.dataset.side=side;
  info.style.setProperty("--ax",Math.min(Math.max(cx-L,16),w-16)+"px");info.style.setProperty("--ay",Math.min(Math.max(cy-T,16),h-16)+"px")};
 const show=(m,b)=>{document.querySelectorAll(".st").forEach(s=>s.classList.remove("on"));
  if(!m||cur==b){cur=null;info.hidden=true;hint.hidden=false;return}
  cur=b;b.classList.add("on");hint.hidden=true;info.hidden=false;
  info.innerHTML=`<button class="x" aria-label="Close">×</button><b>${m[0]}</b><p>${m[1]} · Launched ${m[2]}</p><p>${m[4]}</p><p class="off">Not operational · ended ${m[3]}</p>`;
  info.querySelector(".x").onclick=()=>show(null);place()};
 addEventListener("resize",place);
 document.addEventListener("keydown",e=>{if(e.key=="Escape")show(null)});
 D.missions.forEach(m=>{const b=E("button","st","<span></span>");b.style.left=m[5]+"%";b.style.top=m[6]+"%";b.style.setProperty("--d",(m[5]*37%26)/10+"s");b.style.setProperty("--s",.8+(m[6]*13%5)/10);b.setAttribute("aria-label",m[0]);b.onclick=()=>show(m,b);sky.append(b);starBtns.push(b)});
 const earth=E("div","earth",`<img src="earth.webp" alt="Earth seen from orbit at dusk">`);
 o.querySelector("h2").after(hint);
 o.append(sky,earth,info);app.append(h,o,next(1));

 // pictures of the machines around the title; clicking one jumps to its star
 const POS=[[10,15],[28,12],[50,9],[72,12],[90,15],[5,36],[95,36],[5,58],[95,58],[18,76],[38,79],[62,79],[82,76]];
 const pics=E("div","pics");
 D.missions.forEach((m,i)=>{const f=E("button","pi",`<svg viewBox="0 0 48 48" aria-hidden="true">${m[7]}</svg><span>${m[0]}</span>`);
  f.style.cssText=`--x:${POS[i][0]};--y:${POS[i][1]};--d:${i*.45}s`;f.setAttribute("aria-label","Show "+m[0]);
  f.onclick=()=>{o.scrollIntoView({behavior:"smooth"});setTimeout(()=>{if(cur!=starBtns[i])starBtns[i].click()},900)};pics.append(f)});
 h.append(pics);
 new IntersectionObserver(([e])=>{if(e.isIntersecting)o.classList.add("in")},{threshold:.25}).observe(o);
}else if(P=="sources"){
 const c=D.sources,pg=E("div","page"),head=E("header","head"),hl=E("div","hl");
 hl.append(E("span","tag","Sources"),title(c.title),E("p","sum",c.summary));head.append(hl);pg.append(head);
 c.sections.forEach(x=>{const sec=E("section","srcsec");sec.append(E("h2","",x.h));const ul=E("ul","src");x.li.forEach(t=>ul.append(E("li","",t)));sec.append(ul);pg.append(sec)});
 pg.append(next(pages.findIndex(p=>p[2]==P)+1));app.append(pg);
}else{
 const c=D.chapters[P],pg=E("div","page"),head=E("header","head"),hl=E("div","hl");
 hl.append(E("span","tag",c.tag),title(c.title));
 const sum=c.intro||c.summary;if(sum)hl.append(E("p","sum",sum));head.append(hl);
 if(c.facts){const f=E("dl","facts");c.facts.forEach(([k,v])=>f.append(E("div","fa",`<dt>${k}</dt><dd>${v}</dd>`)));head.append(f)}
 pg.append(head);pg.append(tools(c));
 if(c.svg){const m=E("div","media-row"),w=E("div","",`<svg class="art" viewBox="0 0 300 200" role="img" aria-label="Animated illustration of ${c.title}">${c.svg}</svg>`);
  m.append(w);if(c.photo)m.append(E("p","slot",c.photo));pg.append(m)}
 if(c.pics){const m=E("div","media-row");c.pics.forEach(p=>m.append(fig(p)));pg.append(m)}
 if(c.gallery){const g=E("div",c.gsm?"gal sm":"gal");c.gallery.forEach(p=>g.append(fig(p)));pg.append(g)}
 if(c.slot)pg.append(E("p","slot",c.slot));
 if(c.fact)pg.append(E("p","dyk",`<b>Did you know?</b> ${c.fact}`));
 if(c.story)c.story.forEach(o=>{const sec=E("div",o.t=="voice"?"voice":"narr");
  sec.append(E(o.t=="voice"?"h3":"h2","",o.h));if(o.m)sec.append(E("span","tag",o.m));if(o.pic)sec.append(fig(o.pic));
  const tx=E("div","txt");o.p.forEach(t=>tx.append(E("p","",mk(t))));sec.append(tx);pg.append(sec)});
 if(c.beats){const b=E("div","beats");c.beats.forEach(([k,v])=>b.append(E("div","beat",`<b>${k}</b><p>${mk(v)}</p>`)));pg.append(b)}
 if(c.chain){const ch=E("div","chain");c.chain.forEach((t,i)=>{const s=E("span","",mk(t));s.style.animationDelay=i*.9+"s";ch.append(s)});pg.append(ch)}
 if(c.cards){const r=E("div","beats");c.cards.forEach(([a,b])=>r.append(E("div","beat",`<b>${a}</b><p>${mk(b)}</p>`)));pg.append(r)}
 if(c.conclude)pg.append(concl(c.conclude));
 if(c.quiz){const q=E("div","row");
  c.quiz.forEach(([t,o,a])=>{const d=E("div","q",`<b>${t}</b>`);o.forEach((x,i)=>{const b=E("button","",x);b.onclick=()=>b.className=i==a?"ok":"no";d.append(b)});q.append(d)});pg.append(q)}
 pg.append(next(pages.findIndex(p=>p[2]==P)+1));app.append(pg);
}
// word help: first mention of a hard word on each page gets a tap/hover explanation
const tip=E("div","");tip.id="tip";tip.hidden=true;document.body.append(tip);
(function(){const G=D.glossary||{},done=new Set(),roots=[...document.querySelectorAll(".page .sum,.page .txt p,.page .beat p")];
 Object.entries(G).forEach(([term,def])=>{const re=new RegExp("\\b"+term+"s?\\b","i");
  for(const root of roots){if(done.has(term))break;
   const tw=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:n=>n.parentElement.closest("mark,abbr")?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});
   let n;while(n=tw.nextNode()){const m=re.exec(n.nodeValue);if(m){const a=n.splitText(m.index);a.splitText(m[0].length);const ab=E("abbr","gl",m[0]);ab.tabIndex=0;ab.dataset.d=def;a.replaceWith(ab);done.add(term);break}}}})})();
const showTip=el=>{tip.textContent=el.dataset.d;tip.hidden=false;const r=el.getBoundingClientRect(),w=tip.offsetWidth,top=r.top-tip.offsetHeight-8;
 tip.style.left=Math.min(Math.max(r.left+r.width/2-w/2,8),innerWidth-w-8)+"px";tip.style.top=(top<8?r.bottom+8:top)+"px"};
document.addEventListener("mouseover",e=>{const a=e.target.closest&&e.target.closest(".gl");if(a)showTip(a)});
document.addEventListener("mouseout",e=>{if(e.target.closest&&e.target.closest(".gl"))tip.hidden=true});
document.addEventListener("focusin",e=>{if(e.target.matches&&e.target.matches(".gl"))showTip(e.target)});
document.addEventListener("focusout",()=>tip.hidden=true);
document.addEventListener("click",e=>{const a=e.target.closest&&e.target.closest(".gl");if(a)showTip(a);else tip.hidden=true});
addEventListener("scroll",()=>{tip.hidden=true},{passive:true});
// highlights: split into letters, sweep left to right when scrolled into view; the conclusion sentence is built from those letters
document.querySelectorAll("mark.hl").forEach(m=>{const t=m.textContent;m.textContent="";for(const ch of t){if(ch==" ")m.append(" ");else m.append(E("span","L",ch))}});
const rm=matchMedia("(prefers-reduced-motion: reduce)").matches;
const hio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("on");hio.unobserve(e.target)}}),{threshold:.6,rootMargin:"0px 0px -12% 0px"});
document.querySelectorAll("mark.hl").forEach(m=>rm?m.classList.add("on"):hio.observe(m));
document.querySelectorAll(".cs").forEach(p=>{if(rm){p.querySelectorAll(".cl").forEach(l=>l.style.opacity=1)}else{
 const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){playC(p);o.disconnect()}},{threshold:.9});o.observe(p)}});
// synthesised audio cues: swap for real NASA audio (images.nasa.gov) when you have it
let ac;const tone=(f,t,d,ty="sine",v=.15)=>{const o=ac.createOscillator(),g=ac.createGain();o.type=ty;o.frequency.value=f;g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g).connect(ac.destination);o.start(t);o.stop(t+d)};
document.addEventListener("click",e=>{const k=e.target.dataset.s;if(!k)return;ac=ac||new AudioContext();const t=ac.currentTime;
 if(k=="launch"){for(let i=0;i<5;i++)tone(600,t+i,.25);const n=ac.createBufferSource(),b=ac.createBuffer(1,ac.sampleRate*3,ac.sampleRate),d=b.getChannelData(0);
  for(let i=0;i<d.length;i++)d[i]=(Math.random()*2-1)*(1-i/d.length);n.buffer=b;const g=ac.createGain();g.gain.value=.3;n.connect(g).connect(ac.destination);n.start(t+5)}
 else for(let i=0;i<6;i++)tone(900-i*60,t+i*.35,.15,"square",.06)});
// background: stars and planets are built once; only a gentle twinkle is redrawn (about 15 times a second).
// Height-only resizes (the mobile address bar) are ignored so the sky never jumps or flickers.
const cv=$("#sky"),x=cv.getContext("2d"),reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
let W=0,H=0,st=[],pl=null;
const planets=[[.85,.35,.09,"#c1532b"],[.1,.72,.07,"#3566c9"],[.5,.9,.13,"#d8b27a",1]];
function build(){W=innerWidth;H=Math.max(innerHeight,screen.height||0);cv.width=W;cv.height=H;cv.style.width=W+"px";cv.style.height=H+"px";
 let seed=7;const r=()=>(seed=seed*16807%2147483647)/2147483647;
 st=Array.from({length:W*H/4500|0},()=>({x:r()*W,y:r()*H,r:r()*1.2+.25,p:r()*6,a:.45+r()*.5}));
 pl=document.createElement("canvas");pl.width=W;pl.height=H;const q=pl.getContext("2d"),m=Math.min(W,H);
 planets.forEach(([a,b,rr,c,ring])=>{const g=q.createRadialGradient(a*W-rr*m*.3,b*H-rr*m*.3,0,a*W,b*H,rr*m);g.addColorStop(0,c);g.addColorStop(1,"rgba(5,6,15,0)");
  q.globalAlpha=.35;q.fillStyle=g;q.beginPath();q.arc(a*W,b*H,rr*m,0,7);q.fill();
  if(ring){q.strokeStyle=c;q.lineWidth=2;q.beginPath();q.ellipse(a*W,b*H,rr*m*1.7,rr*m*.4,-.3,0,7);q.stroke()}})}
let last=-99;
function draw(t){if(t-last>66){last=t;x.clearRect(0,0,W,H);x.drawImage(pl,0,0);x.fillStyle="#e8ecff";
  for(const s of st){x.globalAlpha=s.a*(reduce?1:.65+.35*Math.sin(t/1200+s.p));x.beginPath();x.arc(s.x,s.y,s.r,0,7);x.fill()}x.globalAlpha=1}
 if(!reduce)requestAnimationFrame(draw)}
addEventListener("resize",()=>{if(innerWidth!==W||innerHeight>H){build();last=-99;if(reduce)draw(0)}});
build();draw(0);
