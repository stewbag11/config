var j=o=>{throw TypeError(o)};var S=(o,e,n)=>e.has(o)||j("Cannot "+n);var s=(o,e,n)=>(S(o,e,"read from private field"),n?n.call(o):e.get(o)),h=(o,e,n)=>e.has(o)?j("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(o):e.set(o,n),V=(o,e,n,i)=>(S(o,e,"write to private field"),i?i.call(o,n):e.set(o,n),n),k=(o,e,n)=>(S(o,e,"access private method"),n);import{$ as F,J as x,w as y,b as a,x as U,K as M,y as T,U as B,q as H,H as v,o as J,C as L,L as N,s as K,e as R,a0 as E,B as Q,Q as z}from"./index-D8eA2Snd.js";import{m as G,c as O,R as W,L as X}from"./index-BUrsDwB9.js";import{E as Y}from"./Emitter-B4Dl_G-CoLDBUlE.js";import{C as Z}from"./CAPIProvider-Bo9ptg-CMo3PDFX.js";var w,r,C,g,f,p,I,m,D,$;class P{constructor(e,n){h(this,m);h(this,w,new Y);h(this,r,new F({kind:"disconnected",sessionId:null}));h(this,C);h(this,g);h(this,f,new DisposableStack);h(this,p,[]);h(this,I,new Map);s(this,f).defer(()=>x(e)),V(this,C,e),V(this,g,n),s(this,f).defer(()=>{const i=s(this,r).getValue();i.kind==="connecting"&&i.controller.abort(),s(this,r).setValue({kind:"disconnected",sessionId:"sessionId"in i?i.sessionId:null})})}[Symbol.dispose](){s(this,f).dispose()}connect(){if(s(this,f).disposed)return y.warn("Cannot connect after the CAPIClient was disposed.");const e=s(this,r).getValue();if(e.kind==="connecting"||e.kind==="connected")return;const n="sessionId"in e?e.sessionId:null,i=new AbortController;a(s(this,C).create({...s(this,g),previous:e.transport}),M(t=>s(this,r).setValue({kind:"connecting",transport:t,controller:i})),T(t=>{if(i.signal.aborted)return x(t);s(this,r).setValue({kind:"connected",transport:t,sessionId:t.sessionId,isNewSession:t.sessionId!==n}),k(this,m,$).call(this);let c=!1;const d=new DisposableStack;s(this,f).use(d),d.use(t),d.use(t.onDidReceive.subscribe(l=>{const u=s(this,I).get(l.id);u&&(s(this,I).delete(l.id),u.resolve(l)),s(this,w).emit(l)})),d.use(t.onDidError.subscribe(l=>{c=!0,s(this,r).update(u=>({kind:"error",error:l,transport:t,sessionId:"sessionId"in u?u.sessionId:null}))})),d.use(t.onDidClose.subscribe(()=>{const l=a(s(this,r).getValue(),b=>"sessionId"in b?b.sessionId:null),u=new _(l);s(this,I).forEach(b=>b.reject(u)),s(this,I).clear(),s(this,p).forEach(({onSend:b,onReceive:A})=>{b.reject(u),A==null||A.reject(u)}),s(this,p).length=0,d.dispose(),c||s(this,r).setValue({kind:"disconnected",transport:t,sessionId:l})}))}),U(M(t=>{i.signal.aborted||s(this,r).update(c=>({kind:"error",error:t,sessionId:"sessionId"in c?c.sessionId:null}))})))}get onEvent(){return s(this,w)}get status(){return a(s(this,r),G(e=>{switch(e.kind){case"connecting":return{kind:"connecting"};case"connected":return{kind:"connected",sessionId:e.sessionId,isNewSession:e.isNewSession};case"disconnected":return{kind:"disconnected",sessionId:e.sessionId};case"error":return{kind:"error",sessionId:e.sessionId};default:throw new B(e)}}))}toString(){const e=s(this,r).getValue();switch(e.kind){case"connecting":return"Client(connecting)";case"connected":return"Client(connected: ".concat(e.transport,")");case"disconnected":return"Client(disconnected)";case"error":return"Client(error: ".concat(e.error.message,")")}}send(e,n){const i=Promise.withResolvers();return k(this,m,D).call(this,e,i,void 0,n)}sendAndAwaitResponse(e,n){const i=Promise.withResolvers(),t=Promise.withResolvers();return a(k(this,m,D).call(this,e,i,t,n),H(()=>v(t.promise)))}}w=new WeakMap,r=new WeakMap,C=new WeakMap,g=new WeakMap,f=new WeakMap,p=new WeakMap,I=new WeakMap,m=new WeakSet,D=function(e,n,i,t){return s(this,p).push({message:e,onSend:n,onReceive:i,signal:t}),k(this,m,$).call(this),a(v(n.promise),T(J))},$=function(){const e=s(this,r).getValue();e.kind==="connected"&&(s(this,p).forEach(({message:n,onSend:i,onReceive:t,signal:c})=>{if(c!=null&&c.aborted){i.reject(new q),t==null||t.reject(new q);return}const d=e.transport.send(n);d===void 0&&t?y.warn("onReceive callbacks are not supported by this transport"):t&&s(this,I).set(d,t),Reflect.set(n,"id",d),i.resolve(n)}),s(this,p).length=0)};class q extends L{constructor(){super("Message aborted")}}class _ extends L{constructor(e){super("CAPI Connection closed (SessionId: ".concat(e,")"))}}const ee=O(Symbol("CAPIConnection")),ce=o=>a(o.getExecutionScope("document-session"),N(e=>W.all([...se(o,e),K(e.onStart(n=>a(n.resolve(P),R(i=>(i.connect(),a(E.fromSubscribable(i.status),E.pairwise(),E.filter(([t,c])=>t.kind==="connected"&&c.kind==="disconnected"),E.subscribe(()=>i.connect())))),Q)))])));function se(o,e){return[a(o.getFeature("document-session"),N(n=>e.register({token:P,useFactory:i=>a(z([i.resolve(Z),i.resolve(n.provides.TextDocument)]),R(([t,c])=>new P(t.create(c.id),{documentId:c.id})))},{lifetime:X.ContainerScoped}))),e.register({token:ee,useToken:P})]}export{ee as CAPIConnectionToken,ce as activate};
//# sourceMappingURL=index--FQS9yJo.js.map
