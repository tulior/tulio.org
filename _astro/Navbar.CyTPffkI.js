import{e as he,b as ue,h as k,a as ve,E as xe,H as de,r as j,s as F,c as P,d as z,f as K,p as ee,U as ge,g as D,i as ye,j as be,k as g,l as ae,m as we,I as G,n as _e,o as te,q as Ee,t as Ne,u as se,v as ke,w as Ae,x as Ie,y as Te,z as Ce,A as Me,B as Re,C as Le,D as Se,F as Be,G as He,J as Y,K as De,L as re,M as pe,N as ne,O as Oe,P as Pe,Q as Ue,R as qe,S as Ve,T as $e,V as Fe,W as O,X as U,Y as Ye,Z as B,_ as ze,$ as q,a0 as J,a1 as N,a2 as E,a3 as H,a4 as le,a5 as Ke,a6 as oe}from"./render.Dzz1LxwI.js";const We="5";typeof window<"u"&&(window.__svelte||={v:new Set}).v.add(We);he();function Xe(a){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Q(a,e,r=!1){k&&ve();var s=a,t=null,n=null,i=ge,m=r?xe:0,v=!1;const u=(h,o=!0)=>{v=!0,l(o,h)},l=(h,o)=>{if(i===(i=h))return;let f=!1;if(k){const c=s.data===de;!!i===c&&(s=j(),F(s),P(!1),f=!0)}i?(t?z(t):o&&(t=K(()=>o(s))),n&&ee(n,()=>{n=null})):(n?z(n):o&&(n=K(()=>o(s))),t&&ee(t,()=>{t=null})),f&&P(!0)};ue(()=>{v=!1,e(u),v||l(null,null)},m),k&&(s=D)}function Ze(a,e){return e}function Ge(a,e,r,s){for(var t=[],n=e.length,i=0;i<n;i++)Ae(e[i].e,t,!0);var m=n>0&&t.length===0&&r!==null;if(m){var v=r.parentNode;Ie(v),v.append(r),s.clear(),L(a,e[0].prev,e[n-1].next)}Te(t,()=>{for(var u=0;u<n;u++){var l=e[u];m||(s.delete(l.k),L(a,l.prev,l.next)),Ce(l.e,!m)}})}function Je(a,e,r,s,t,n=null){var i=a,m={items:new Map,first:null};{var v=a;i=k?F(be(v)):v.appendChild(ye())}k&&ve();var u=null,l=!1,h=ae(()=>{var o=r();return Se(o)?o:o==null?[]:_e(o)});ue(()=>{var o=g(h),f=o.length;if(l&&f===0)return;l=f===0;let c=!1;if(k){var C=i.data===de;C!==(f===0)&&(i=j(),F(i),P(!1),c=!0)}if(k){for(var T=null,d,x=0;x<f;x++){if(D.nodeType===8&&D.data===we){i=D,c=!0,P(!1);break}var S=o[x],_=s(S,x);d=me(D,m,T,null,S,_,x,t,e,r),m.items.set(_,d),T=d}f>0&&F(j())}k||Qe(o,m,i,t,e,s,r),n!==null&&(f===0?u?z(u):u=K(()=>n(i)):u!==null&&ee(u,()=>{u=null})),c&&P(!0),g(h)}),k&&(i=D)}function Qe(a,e,r,s,t,n,i){var m=a.length,v=e.items,u=e.first,l=u,h,o=null,f=[],c=[],C,T,d,x;for(x=0;x<m;x+=1){if(C=a[x],T=n(C,x),d=v.get(T),d===void 0){var S=l?l.e.nodes_start:r;o=me(S,e,o,o===null?e.first:o.next,C,T,x,s,t,i),v.set(T,o),f=[],c=[],l=o.next;continue}if(je(d,C,x),d.e.f&G&&z(d.e),d!==l){if(h!==void 0&&h.has(d)){if(f.length<c.length){var _=c[0],p;o=_.prev;var b=f[0],y=f[f.length-1];for(p=0;p<f.length;p+=1)ie(f[p],_,r);for(p=0;p<c.length;p+=1)h.delete(c[p]);L(e,b.prev,y.next),L(e,o,b),L(e,y,_),l=_,o=y,x-=1,f=[],c=[]}else h.delete(d),ie(d,l,r),L(e,d.prev,d.next),L(e,d,o===null?e.first:o.next),L(e,o,d),o=d;continue}for(f=[],c=[];l!==null&&l.k!==T;)l.e.f&G||(h??=new Set).add(l),c.push(l),l=l.next;if(l===null)continue;d=l}f.push(d),o=d,l=d.next}if(l!==null||h!==void 0){for(var w=h===void 0?[]:_e(h);l!==null;)l.e.f&G||w.push(l),l=l.next;var R=w.length;if(R>0){var M=m===0?r:null;Ge(e,w,M,v)}}te.first=e.first&&e.first.e,te.last=o&&o.e}function je(a,e,r,s){Ee(a.v,e),a.i=r}function me(a,e,r,s,t,n,i,m,v,u){var l=(v&Me)!==0,h=(v&Re)===0,o=l?h?Ne(t):se(t):t,f=v&ke?se(i):i,c={i:f,v:o,k:n,a:null,e:null,prev:r,next:s};try{return c.e=K(()=>m(a,o,f,u),k),c.e.prev=r&&r.e,c.e.next=s&&s.e,r===null?e.first=c:(r.next=c,r.e.next=c.e),s!==null&&(s.prev=c,s.e.prev=c.e),c}finally{}}function ie(a,e,r){for(var s=a.next?a.next.e.nodes_start:r,t=e?e.e.nodes_start:r,n=a.e.nodes_start;n!==s;){var i=Le(n);t.before(n),n=i}}function L(a,e,r){e===null?a.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function ea(a,e,r,s){var t=a.__attributes??={};k&&(t[e]=a.getAttribute(e),a.nodeName==="LINK")||t[e]!==(t[e]=r)&&(r==null?a.removeAttribute(e):typeof r!="string"&&aa(a).includes(e)?a[e]=r:a.setAttribute(e,r))}var fe=new Map;function aa(a){var e=fe.get(a.nodeName);if(e)return e;fe.set(a.nodeName,e=[]);for(var r,s=a,t=Element.prototype;t!==s;){r=He(s);for(var n in r)r[n].set&&e.push(n);s=Be(s)}return e}function V(a,e,r){var s=a.__className,t=ra(e);k&&a.className===t?a.__className=t:(s!==t||k&&a.className!==t)&&(e==null?a.removeAttribute("class"):a.className=t,a.__className=t)}function ra(a,e){return(a??"")+""}function $(a,e,r){if(r){if(a.classList.contains(e))return;a.classList.add(e)}else{if(!a.classList.contains(e))return;a.classList.remove(e)}}function ta(a=!1){const e=Y,r=e.l.u;if(!r)return;let s=()=>Pe(e.s);if(a){let t=0,n={};const i=Ue(()=>{let m=!1;const v=e.s;for(const u in v)v[u]!==n[u]&&(n[u]=v[u],m=!0);return m&&t++,t});s=()=>g(i)}r.b.length&&De(()=>{ce(e,s),ne(r.b)}),re(()=>{const t=pe(()=>r.m.map(Oe));return()=>{for(const n of t)typeof n=="function"&&n()}}),r.a.length&&re(()=>{ce(e,s),ne(r.a)})}function ce(a,e){if(a.l.s)for(const r of a.l.s)g(r);e()}function sa(a){Y===null&&Xe(),qe&&Y.l!==null?na(Y).m.push(a):re(()=>{const e=pe(a);if(typeof e=="function")return e})}function na(a){var e=a.l;return e.u??={a:[],b:[],m:[]}}var la=O('<span class="text-[var(--color-secondary)] mx-1">/</span>'),oa=O('<span class="text-[var(--color-primary)] truncate max-w-[120px] sm:max-w-none"> </span>'),ia=O('<a class="text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors truncate max-w-[80px] sm:max-w-none"> </a>'),fa=O("<!> <!>",1),ca=O('<div class="absolute top-full left-0 w-full bg-white shadow-lg md:hidden transition-all duration-300 ease-in-out"><ul class="px-4 py-3 space-y-3"><li><a href="/resume">Resume</a></li> <li><a href="/blog">Blog</a></li> <li><a href="mailto:mail@tulio.org" class="block px-4 py-2 border border-[var(--color-primary)] rounded-full text-[var(--color-primary)] font-medium hover:bg-[var(--color-primary)] hover:text-white transition-colors">Contact</a></li></ul></div>'),ua=O('<header class="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-md"><div class="relative"><nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center"><div class="text-base sm:text-lg font-medium text-[var(--color-secondary)] truncate"><div class="flex items-center space-x-1 overflow-x-auto"></div></div> <ul class="hidden md:flex items-center space-x-8"><li><a href="/resume">Resume</a></li> <li><a href="/blog">Blog</a></li> <li><a href="mailto:mail@tulio.org" class="px-4 py-2 border border-[var(--color-primary)] rounded-full text-[var(--color-primary)] font-medium hover:bg-[var(--color-primary)] hover:text-white transition-colors">Contact</a></li></ul> <button class="md:hidden focus:outline-none" aria-label="Toggle mobile menu"><svg class="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button></nav> <!></div></header>');function da(a,e){Ve(e,!1);const r=J();let s=J(!1),t=J("");sa(()=>{typeof window<"u"&&(q(t,window.location.pathname),window.addEventListener("click",_=>{if(g(s)){const p=document.querySelector("nav");p&&!p.contains(_.target)&&q(s,!1)}}))});const n=_=>g(t)===_||g(t).startsWith(_)&&_!=="/";function i(_){const p=_.split("/").filter(w=>w!==""),b=[];b.push({name:"Home",path:"/"});let y="";for(const w of p){y+=`/${w}`;const R=w.split("-").map(M=>M.charAt(0).toUpperCase()+M.slice(1)).join(" ");b.push({name:R,path:y})}return b}$e(()=>g(t),()=>{q(r,i(g(t)))}),Fe(),ta();var m=ua(),v=N(m),u=N(v),l=N(u),h=N(l);Je(h,5,()=>g(r),Ze,(_,p,b)=>{var y=fa(),w=Ke(y);{var R=A=>{var I=la();B(A,I)};Q(w,A=>{b!==0&&A(R)})}var M=H(w,2);{var W=A=>{var I=oa(),Z=N(I,!0);E(I),U(()=>oe(Z,g(p).name)),B(A,I)},X=A=>{var I=ia(),Z=N(I,!0);E(I),U(()=>{ea(I,"href",g(p).path),oe(Z,g(p).name)}),B(A,I)};Q(M,A=>{b===g(r).length-1?A(W):A(X,!1)})}B(_,y)}),E(h),E(l);var o=H(l,2),f=N(o),c=N(f);E(f);var C=H(f,2),T=N(C);E(C),le(2),E(o);var d=H(o,2);E(u);var x=H(u,2);{var S=_=>{var p=ca(),b=N(p),y=N(b),w=N(y);E(y);var R=H(y,2),M=N(R);E(R),le(2),E(b),E(p),U((W,X,A,I)=>{V(w,`block text-base font-medium transition-colors hover:text-[var(--color-primary)] ${W??""}`),$(w,"active",X),V(M,`block text-base font-medium transition-colors hover:text-[var(--color-primary)] ${A??""}`),$(M,"active",I)},[()=>n("/resume")?"text-[var(--color-primary)]":"text-[var(--color-secondary)]",()=>n("/resume"),()=>n("/blog")?"text-[var(--color-primary)]":"text-[var(--color-secondary)]",()=>n("/blog")],ae),B(_,p)};Q(x,_=>{g(s)&&_(S)})}E(v),E(m),U((_,p,b,y)=>{V(c,`text-base font-medium transition-colors hover:text-[var(--color-primary)] ${_??""}`),$(c,"active",p),V(T,`text-base font-medium transition-colors hover:text-[var(--color-primary)] ${b??""}`),$(T,"active",y)},[()=>n("/resume")?"text-[var(--color-primary)]":"text-[var(--color-secondary)]",()=>n("/resume"),()=>n("/blog")?"text-[var(--color-primary)]":"text-[var(--color-secondary)]",()=>n("/blog")],ae),Ye("click",d,()=>q(s,!g(s))),B(a,m),ze()}export{da as default};
