import{f as o,s as m,aj as u,C as b,b as h,e as w,o as d,w as S}from"./index-D8eA2Snd.js";const y=(t,e)=>new Promise(r=>{queueMicrotask(async()=>{var n;if((n=e==null?void 0:e.signal)!=null&&n.aborted)return r(o(new i(e.signal.reason)));try{r(m(await t()))}catch(c){r(u(c))}})});function C(t=0){return(e,r)=>new Promise(n=>{const c=setTimeout(async()=>{var l;if((l=r==null?void 0:r.signal)!=null&&l.aborted)return n(o(new i(r.signal.reason)));try{n(m(await e()))}catch(a){n(u(a))}},t);if(r!=null&&r.signal){const l=()=>{var a,s;clearTimeout(c),n(o(new i((a=r.signal)==null?void 0:a.reason))),(s=r.signal)==null||s.removeEventListener("abort",l)};r.signal.addEventListener("abort",l)}})}class i extends b{constructor(e){super(e instanceof Error?e.message:String(e))}}function P(t,e){let r=null,n=!1;const c=a=>{r==null||r.abortController.abort(a),r==null||r.resolvers.resolve(o(new i(a!=null?a:"signal is aborted without reason"))),r=null},l=({resolvers:a})=>{n=!0,e(async()=>{if(!r)return;const s=r;r=null,await t(...s.args)},{signal:r==null?void 0:r.abortController.signal}).then(s=>{n=!1,a.resolve(h(s,w(d))),r&&l(r)},s=>{S.error("Unexpected error when scheduling task in createSingletonTaskQueue()",s),n=!1,a.resolve(u(s)),r&&l(r)})};return{enqueue:(...a)=>{var f,g;const s=(f=r==null?void 0:r.resolvers)!=null?f:Promise.withResolvers();return r={resolvers:s,args:a,abortController:(g=r==null?void 0:r.abortController)!=null?g:new AbortController},n||l(r),s.promise},get empty(){return!r},cancel:c,[Symbol.dispose]:c}}function v(t){return t}function L(t,e,r=Number.EPSILON){return Math.abs(t-e)<=r}function N(t,e=0){return e===0?.5+t|0:Math.round((t+Number.EPSILON)*10**e)/10**e}function x(t,e){if(t.size!==e.size)return!1;for(const r of t)if(!e.has(r))return!1;return!0}export{x as a,v as b,P as c,C as d,L as e,y as m,N as r};
//# sourceMappingURL=index-DWAslvUv.js.map
