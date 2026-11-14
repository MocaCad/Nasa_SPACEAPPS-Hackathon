const $=s=>document.querySelector(s);
const E=(t,c,h)=>{const n=document.createElement(t);if(c)n.className=c;if(h!=null)n.innerHTML=h;return n};
const mk=t=>t.replace(/\*(\w+)\*/g,'<mark data-w="$1">$1</mark>');
const P=document.body.dataset.page,app=$("#app");
const pages=[["index.html","Home","home"],["moon.html","Moon 1","moon"],["moon-2.html","Moon 2","moon2"],["mars.html","Mars 1","mars"],["mars-2.html","Mars 2","mars2"],["deep-space.html","Deep space","deep"],["lessons.html","Lessons","lessons"],["legacy.html","Legacy","legacy"]];
const accent=P=="home"?"#8ab4ff":D.chapters[P].c;document.documentElement.style.setProperty("--c",accent);
$("#top").append(...pages.map(([h,l,k])=>{const a=E("a",k==P?"on":"",l);a.href=h;return a}));
const title=t=>{const w=E("div","tt");w.append(E("h1","",t));
 [[2,3],[88,8],[96,60],[6,85],[50,98],[70,0]].forEach(([x,y],i)=>{const s=E("i","","✦");s.style.cssText=`left:${x}%;top:${y}%;animation-delay:${i*.4}s;font-size:${1+i%3*.5}rem`;w.append(s)});return w};

// "Next" button at the very bottom of each page (with a quieter "back" link)
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
 const earth=E("div","earth",`<img src="earth.jpg" alt="Earth seen from orbit at dusk" loading="lazy">`);
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
}else{
 const c=D.chapters[P],pg=E("div","page");
 pg.append(E("span","tag",c.tag),title(c.title));
 if(c.svg){const art=E("div","",`<svg class="art" viewBox="0 0 300 200" role="img" aria-label="Illustration of ${c.title}">${c.svg}</svg>`);
  if(c.photo)art.append(E("div","media",c.photo));
  if(c.sound){const sb=E("button","btn",c.sound=="launch"?"▶ 5-4-3-2-1 Launch":"▶ Radio signal");sb.dataset.s=c.sound;art.append(sb)}
  const st=E("div","stage");st.append(art,E("div","fact",`<b>Did you know?</b>${c.fact}`));pg.append(st)}
 else if(c.fact)pg.append(E("div","fact",`<b>Did you know?</b>${c.fact}`));
 if(c.beats){const b=E("div","beats");c.beats.forEach(([k,v])=>b.append(E("div","beat",`<b>${k}</b><p>${mk(v)}</p>`)));pg.append(b)}
 if(c.chain){const ch=E("div","chain");c.chain.forEach((t,i)=>{const s=E("span","",mk(t));s.style.animationDelay=i*.9+"s";ch.append(s)});pg.append(ch)}
 if(c.cards){const r=E("div","row");c.cards.forEach(([a,b])=>r.append(E("div","beat",`<b>${a}</b><p>${mk(b)}</p>`)));pg.append(r)}
 if(c.final){pg.append(E("p","final",c.final));const q=E("div","row");
  c.quiz.forEach(([t,o,a])=>{const d=E("div","q",`<b>${t}</b>`);o.forEach((x,i)=>{const b=E("button","",x);b.onclick=()=>b.className=i==a?"ok":"no";d.append(b)});q.append(d)});pg.append(q)}
 pg.append(next(pages.findIndex(p=>p[2]==P)+1));app.append(pg);
}
// highlighted words collect in a tray and carry across pages
const tray=E("div","");tray.id="tray";tray.innerHTML="<b>Story words:</b>";document.body.append(tray);
let got=[];try{got=JSON.parse(sessionStorage.w||"[]")}catch(e){}
const add=w=>tray.append(E("span","chip",w));got.forEach(add);
const io=new IntersectionObserver(es=>es.forEach(e=>{const w=e.target.dataset.w;if(e.isIntersecting&&!got.includes(w)){got.push(w);add(w);try{sessionStorage.w=JSON.stringify(got)}catch(x){}}}),{threshold:.6});
document.querySelectorAll("mark[data-w]").forEach(m=>io.observe(m));
// synthesised audio cues: swap for real NASA audio (images.nasa.gov) when you have it
let ac;const tone=(f,t,d,ty="sine",v=.15)=>{const o=ac.createOscillator(),g=ac.createGain();o.type=ty;o.frequency.value=f;g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g).connect(ac.destination);o.start(t);o.stop(t+d)};
document.addEventListener("click",e=>{const k=e.target.dataset.s;if(!k)return;ac=ac||new AudioContext();const t=ac.currentTime;
 if(k=="launch"){for(let i=0;i<5;i++)tone(600,t+i,.25);const n=ac.createBufferSource(),b=ac.createBuffer(1,ac.sampleRate*3,ac.sampleRate),d=b.getChannelData(0);
  for(let i=0;i<d.length;i++)d[i]=(Math.random()*2-1)*(1-i/d.length);n.buffer=b;const g=ac.createGain();g.gain.value=.3;n.connect(g).connect(ac.destination);n.start(t+5)}
 else for(let i=0;i<6;i++)tone(900-i*60,t+i*.35,.15,"square",.06)});
// background: twinkling stars and blended planets
const cv=$("#sky"),x=cv.getContext("2d");let st=[];
const planets=[[.85,.35,.09,"#c1532b"],[.1,.72,.07,"#3566c9"],[.5,.9,.13,"#d8b27a",1]];
const rs=()=>{cv.width=innerWidth;cv.height=innerHeight;st=Array.from({length:innerWidth*innerHeight/3500|0},()=>({x:Math.random()*cv.width,y:Math.random()*cv.height,r:Math.random()*1.3+.2,p:Math.random()*6}))};
const dr=(t=0)=>{const W=cv.width,H=cv.height,m=Math.min(W,H);x.clearRect(0,0,W,H);
 planets.forEach(([a,b,r,c,ring])=>{const g=x.createRadialGradient(a*W-r*m*.3,b*H-r*m*.3,0,a*W,b*H,r*m);g.addColorStop(0,c);g.addColorStop(1,"rgba(5,6,15,0)");x.globalAlpha=.35;x.fillStyle=g;x.beginPath();x.arc(a*W,b*H,r*m,0,7);x.fill();
  if(ring){x.strokeStyle=c;x.lineWidth=2;x.beginPath();x.ellipse(a*W,b*H,r*m*1.7,r*m*.4,-.3,0,7);x.stroke()}});
 x.fillStyle="#e8ecff";st.forEach(s=>{x.globalAlpha=.5+.5*Math.sin(t/1000+s.p);x.beginPath();x.arc(s.x,s.y,s.r,0,7);x.fill()});
 x.globalAlpha=1;
 if(!matchMedia("(prefers-reduced-motion: reduce)").matches)requestAnimationFrame(dr)};
addEventListener("resize",()=>{rs();dr()});rs();dr();
