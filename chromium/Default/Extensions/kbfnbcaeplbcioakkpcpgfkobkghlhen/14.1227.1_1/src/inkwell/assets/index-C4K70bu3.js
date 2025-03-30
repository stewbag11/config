import{w as fe,b as u,a0 as m,a6 as Re,M as ie,D as Q,c as Y,J as We,U as ve,x as L,K as S,F as j,y as re,af as Le,ag as Pe,W as Ne,E as Me,a7 as Ge,C as ye,L as Oe,s as Ve,e as X,o as He,Q as be}from"./index-D8eA2Snd.js";import{c as ke,R as ae,L as le,A as $e}from"./index-BUrsDwB9.js";import{t as Ye}from"./timeoutWith-lGRlQu-D2GsbXJn.js";import{T as Ke}from"./TextRangeUpdateSemantics-D8MqPO-S_bbHJO0.js";import{f as Je}from"./NonEmptyArrayFns-oGa02u-CLyX5YlY.js";import{c as Qe}from"./TextRevisionFns-DnfI8a-DX1ABpMm.js";import{t as Xe}from"./PointFns-CVDzed-C40BfvWp.js";import{t as Ze,g as qe}from"./RectFns-D2VKzQ-B5TdcvOe.js";import{d as je}from"./defineFactory-En4T0P-BKA6DmWp.js";const de="#2551DA",ce="#FFBF47",ue="#16AC9A",Z="#016A5E",q="#707070",he="#5E47E5",pe="#EB0A00",ge="#027D7D";function we(e){var i,t,s,r,o,l,c;return e.hidden&&((i=e.extra_properties)==null?void 0:i.free_premium)==="uphook"?"premiumUphook":e.group==="WritingExpert"?"writingExpert":((t=e.cardLayout)==null?void 0:t.outcome)==="Correctness"?"correctness":((s=e.cardLayout)==null?void 0:s.outcome)==="Tone"?"delivery":((r=e.cardLayout)==null?void 0:r.outcome)==="Clarity"?"clarity":((o=e.cardLayout)==null?void 0:o.outcome)==="Engagement"?"engagement":((l=e.cardLayout)==null?void 0:l.outcome)==="Originality"?"originality":((c=e.cardLayout)==null?void 0:c.outcome)==="Knowledge Hub"?"knowledgeHub":null}const E=2,F="outside",C=.15,ei={premiumUphook:{underline:{color:ce,style:"solid",thickness:E,align:F},emphasizedBackground:{color:a(ce,C)}},writingExpert:{underline:{color:Z,style:"ellipsis",thickness:E,align:F},emphasizedBackground:{color:a(q,C)}},correctness:{underline:{color:pe,style:"solid",thickness:E,align:F},emphasizedBackground:{color:a(pe,C)}},delivery:{underline:{color:he,style:"solid",thickness:E,align:F},emphasizedBackground:{color:a(he,C)}},clarity:{underline:{color:de,style:"solid",thickness:E,align:F},emphasizedBackground:{color:a(de,C)}},engagement:{underline:{color:Z,style:"solid",thickness:E,align:F},emphasizedBackground:{color:a(Z,C)}},originality:{underline:{color:ge,style:"solid",thickness:E,align:F},emphasizedBackground:{color:a(ge,C)}},knowledgeHub:{background:{color:a(ue,.3)},emphasizedBackground:{color:a(ue,.5)}},other:{underline:{color:q,style:"solid",thickness:E,align:F},emphasizedBackground:{color:a(q,C)}}},d={Red30:"#F27388",Red50:"#EA1537",Blue30:"#79A8F2",Blue50:"#4A6EE0",Green30:"#87E8D1",Green40:"#41D9B5",Green50:"#15C39A",Purple30:"#BD79ED",Purple50:"#8F4CBF",Yellow30:"#FFC940",Yellow50:"#FFA600",Neutral40:"#9FA6BF",Neutral50:"#6D758D",Cyan30:"#75E1EB",Cyan60:"#09A4B2"},p=3,g="outside",z=.2,B=.8,ii={premiumUphook:{underline:{color:a(d.Yellow30,B),style:"solid",thickness:p,align:g},emphasizedUnderline:{color:d.Yellow50,style:"solid",thickness:p,align:g},emphasizedBackground:{color:a(d.Yellow30,z)}},writingExpert:{underline:{color:d.Green50,style:"ellipsis",thickness:p,align:g},emphasizedUnderline:{color:d.Green50,style:"ellipsis",thickness:p,align:g},emphasizedBackground:{color:a(d.Neutral50,z)}},correctness:{underline:{color:a(d.Red30,B),style:"solid",thickness:p,align:g},emphasizedUnderline:{color:d.Red50,style:"solid",thickness:p,align:g},emphasizedBackground:{color:a(d.Red30,z)}},delivery:{underline:{color:a(d.Purple30,B),style:"solid",thickness:p,align:g},emphasizedUnderline:{color:d.Purple50,style:"solid",thickness:p,align:g},emphasizedBackground:{color:a(d.Purple30,z)}},clarity:{underline:{color:a(d.Blue30,B),style:"solid",thickness:p,align:g},emphasizedUnderline:{color:d.Blue50,style:"solid",thickness:p,align:g},emphasizedBackground:{color:a(d.Blue30,z)}},engagement:{underline:{color:a(d.Green30,B),style:"solid",thickness:p,align:g},emphasizedUnderline:{color:d.Green50,style:"solid",thickness:p,align:g},emphasizedBackground:{color:a(d.Green30,z)}},originality:{underline:{color:a(d.Cyan30,B),style:"solid",thickness:p,align:g},emphasizedUnderline:{color:d.Cyan60,style:"solid",thickness:p,align:g},emphasizedBackground:{color:a(d.Cyan30,z)}},knowledgeHub:{background:{color:a(d.Green40,.3)},emphasizedBackground:{color:a(d.Green40,.5)}},other:{underline:{color:a(d.Neutral40,B),style:"solid",thickness:p,align:g},emphasizedUnderline:{color:d.Neutral50,style:"solid",thickness:p,align:g},emphasizedBackground:{color:a(d.Neutral40,z)}}};function ti(e){var i;return ei[(i=we(e))!=null?i:"other"]}function ni(e){var i;return ii[(i=we(e))!=null?i:"other"]}function a(e,i){return e.length===7?e+Math.round(i*255).toString(16).padStart(2,"0"):e}var si=Object.defineProperty,_e=e=>{throw TypeError(e)},oi=(e,i,t)=>i in e?si(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,De=(e,i,t)=>oi(e,i+"",t),te=(e,i,t)=>i.has(e)||_e("Cannot "+t),n=(e,i,t)=>(te(e,i,"read from private field"),t?t.call(e):i.get(e)),f=(e,i,t)=>i.has(e)?_e("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(e):i.set(e,t),b=(e,i,t,s)=>(te(e,i,"write to private field"),i.set(e,t),t),k=(e,i,t)=>(te(e,i,"access private method"),t),h,D,y,N,_,R,M,I,T,W,G,H,O,U,v,Se,Ie,Ae,ee,Ee,Fe,Ce,ze,Be,K;class J{constructor(i,t,s,r){f(this,v),f(this,h),f(this,D,new AsyncDisposableStack),f(this,y),f(this,N),f(this,_),f(this,R,new Set),f(this,M,"windows"),f(this,I,null),f(this,T,null),f(this,W),f(this,G),f(this,H,new Set),f(this,O,new Set),f(this,U,null),b(this,h,fe.createLogger("CAPITextDecorationManager",s.id)),b(this,N,i),b(this,y,t),b(this,G,r),b(this,_,s)}init(){n(this,D).use(u(m.fromSubscribable(n(this,N).onChange),u(Je(n(this,N).getAll()),i=>i?m.startWith({upserted:i}):Re),m.subscribe(i=>k(this,v,Ie).call(this,i)))),k(this,v,Ce).call(this),n(this,D).use(u(m.fromSubscribableState(n(this,_).hasFocus),m.subscribe(i=>k(this,v,Ae).call(this,i)))),n(this,D).use(u(m.fromSubscribableState(n(this,G).status),m.filter(i=>i.kind==="connected"&&i.isNewSession),m.subscribe(()=>n(this,H).clear()))),n(this,D).use(n(this,y).visibleOnscreenDecorations.subscribe(i=>{i.forEach(t=>k(this,v,Se).call(this,t.metadata.capiAlertId)),n(this,h).verbose("Visible onscreen decorations",{documentID:n(this,_).id,visibleOnscreen:u(i,Q(t=>t.id),ie)})}))}addVisibilitySource(i){const t=new Set,s=u(m.fromSubscribable(i),m.map(ri(t)),m.subscribe(r=>{n(this,h).verbose("Update visibility",{documentID:n(this,_).id,changes:r});const{toShow:o,toHide:l,toEmphasize:c}=ai(r);l.forEach(w=>t.delete(w)),o.forEach(w=>t.add(w)),c.forEach(w=>t.add(w)),k(this,v,ee).call(this,{toHide:l,toShow:o,toEmphasize:c})}));return n(this,D).use(s),Y(()=>{k(this,v,ee).call(this,{toHide:t,toShow:new Set,toEmphasize:new Set}),We(s)})}onTextDecorationInteraction(i,t){const s={observer:i,predicate:t};return n(this,O).add(s),Y(()=>n(this,O).delete(s))}onUnhandledTextDecorationInteraction(i){return n(this,U)&&n(this,h).warn("Overwriting unhandledInteractionObserver"),b(this,U,i),Y(()=>b(this,U,null))}async[Symbol.asyncDispose](){await n(this,D).disposeAsync()}}h=new WeakMap;D=new WeakMap;y=new WeakMap;N=new WeakMap;_=new WeakMap;R=new WeakMap;M=new WeakMap;I=new WeakMap;T=new WeakMap;W=new WeakMap;G=new WeakMap;H=new WeakMap;O=new WeakMap;U=new WeakMap;v=new WeakSet;Se=function(e){n(this,H).has(e)||(n(this,H).add(e),u(n(this,G).send({action:"feedback",type:"RENDERED",subtype:"inline",alertId:e}),L(S(i=>n(this,h).error("Failed to send RENDERED feedback for alert ".concat(e),i)))))};Ie=function(e){var i,t;const s=(i=e.removed)!=null?i:[],r=(t=e.upserted)!=null?t:[];j([u(n(this,y).delete(s.map(o=>V(o))),re(S(()=>{s.length>0&&n(this,h).verbose("Removed decorations for alerts",{documentID:n(this,_).id,decorationIds:s.map(o=>V(o)),alertIds:s.map(o=>o.id)})})),L(S(o=>n(this,h).error("Failed to remove decoration on suggestion removal",new di(o,s.map(l=>l.id)))))),u(j(r.map(o=>k(this,v,Ee).call(this,o))),re(S(()=>{r.length>0&&n(this,h).verbose("Upserted decorations for alerts",{documentID:n(this,_).id,decorationIds:r.map(o=>V(o)),alertIds:r.map(o=>o.id)})})),L(S(o=>n(this,h).error("Failed to upsert decoration on suggestion upsert",new li(o,r.map(l=>l.id))))))])};Ae=function(e){e?(n(this,h).verbose("Got focus - show all decorations",{documentID:n(this,_).id}),u(n(this,y).removeHideAllReasons(["documentLostFocus","documentScrolling","windowMoving","windowResizing","geometryUpdateLatencyTooHigh"]),L(S(i=>n(this,h).error("Unexpected error when removing all hideAllReasons",i))))):(n(this,h).verbose("Lost focus - hide all decorations",{documentID:n(this,_).id}),u(n(this,y).addHideAllReasons(["documentLostFocus"]),L(S(i=>n(this,h).error("Unexpected error when adding 'documentLostFocus' hideAllReason",i)))))};ee=async function({toHide:e,toShow:i,toEmphasize:t}){var s,r;const o=[];o.push(n(this,y).setVisibility(e,!1)),o.push(n(this,y).setVisibility(i,!0)),e.forEach(c=>n(this,R).delete(c)),i.forEach(c=>n(this,R).add(c)),t.forEach(c=>n(this,R).add(c));const l=u(t,Le(1),ie).at(0);if(l){if(l===((s=n(this,I))==null?void 0:s.decorationId))return;o.push(n(this,y).focus(l,n(this,W)))}else((r=n(this,I))==null?void 0:r.decorationId)!==void 0&&i.has(n(this,I).decorationId)&&o.push(n(this,y).focus(null));await Ye(u(j(o),L(S(c=>n(this,h).error("Unexpected error when applying visibility changes",c)))),{timeoutMs:5e3,defaultValue:void 0,onTimeout:()=>n(this,h).warn("Timeout out when applying visibility changes")})};Ee=function(e){var i;const t=V(e),s=((i=n(this,I))==null?void 0:i.decorationId)===t;return n(this,y).upsert({id:t,revision:Qe(e.alert.rev),segments:Te(e.alert,k(this,v,Fe).call(this,e.alert),s,e.alert.transformJson),visibility:s?"focused":n(this,R).has(t)?"visible":"hidden",metadata:{capiAlertId:e.alert.id,suggestionId:e.id}})};Fe=function(e){if(n(this,M)==="windows")return ni(e);if(n(this,M)==="regular")return ti(e);throw new ve(n(this,M))};Ce=function(){n(this,D).use(n(this,y).onPointerHoverChange.subscribe(({pointerEnter:e,pointerLeave:i})=>{if(e){if(n(this,T)===e.decoration.id)return;b(this,T,e.decoration.id),b(this,W,e.segment.id),k(this,v,K).call(this,e)}i&&n(this,T)===i.decoration.id&&(e==null?void 0:e.decoration.id)!==n(this,T)&&(b(this,T,null),b(this,W,void 0),k(this,v,K).call(this,i))})),n(this,D).use(n(this,y).onPointerClick.subscribe(e=>{b(this,W,e.segment.id),k(this,v,K).call(this,e)})),n(this,D).use(n(this,y).onFocusChange.subscribe(({decoration:e,segment:i,focused:t})=>{var s;t?(b(this,I,{decorationId:e.id,segmentId:i==null?void 0:i.id}),k(this,v,ze).call(this,e,i)):(((s=n(this,I))==null?void 0:s.decorationId)===e.id&&b(this,I,null),k(this,v,Be).call(this,e))}))};ze=function(e,i){e.segments.forEach(t=>t.patch(ne({segmentMeta:t.metadata,segmentFocused:t.id===(i==null?void 0:i.id),decorationFocused:!0})))};Be=function(e){e.segments.forEach(i=>i.patch(ne({segmentMeta:i.metadata,segmentFocused:!1,decorationFocused:!1})))};K=function({kind:e,rect:i,decorationRects:t,position:s,decoration:r}){var o,l;if(e==="pointerUp"||e==="pointerDown")return;n(this,h).verbose("Sending pointer event",{kind:e,decoration:r.id,documentID:n(this,_).id});const c=n(this,_).geometry.getValue().geometry,w={x:(o=c==null?void 0:c.viewportFrame.x)!=null?o:0,y:(l=c==null?void 0:c.viewportFrame.y)!=null?l:0},$=Ze(w),x={kind:e,decorationId:r.id,suggestionId:r.metadata.suggestionId,position:Xe(w)(s),rect:$(i),decorationRects:t.map(A=>$(A))};let P=!1;u(n(this,O),Me(({predicate:A})=>A(x)),Q(S(()=>P=!0)),Q(({observer:A})=>A(x)),Ne(!P&&n(this,U)?[n(this,U).call(this,x)]:[]),Pe)};function ne({segmentMeta:e,segmentFocused:i,decorationFocused:t}){var s,r,o,l,c,w;return t?{interactive:!0,background:(!e.hasEnclosing||e.kind==="enclosing")&&(r=(s=e.style.emphasizedBackground)!=null?s:e.style.background)!=null?r:null,underline:e.isSuperAlert&&!i?null:e.kind!=="enclosing"&&(l=(o=e.style.emphasizedUnderline)!=null?o:e.style.underline)!=null?l:null}:{interactive:e.kind!=="enclosing",background:(c=e.style.background)!=null?c:null,underline:e.kind==="enclosing"?null:(w=e.style.underline)!=null?w:null}}function ri(e){return i=>{const t=s=>s.kind==="decoration"?s.decorationId:V({id:s.suggestionId});if(i.partial)return i.changes.map(s=>({decorationId:t(s.id),visibility:s.visibility}));{const s=new Set(i.changes.flatMap(o=>o.visibility==="hidden"?[]:[t(o.id)])),r=u(e.difference(s),Q(o=>({decorationId:o,visibility:"hidden"})),ie);return i.changes.map(o=>({decorationId:t(o.id),visibility:o.visibility})).concat(r)}}}function ai(e){const i=new Set,t=new Set,s=new Set;for(const r of e)if(r.visibility==="hidden")t.add(r.decorationId);else if(r.visibility==="visible")i.add(r.decorationId);else if(r.visibility==="emphasized")i.add(r.decorationId),s.add(r.decorationId);else throw new ve(r.visibility);return{toShow:i,toHide:t,toEmphasize:s}}function V(e){return String(e.id)}function Te(e,i,t,s,r){return s?s.highlights.map(({type:o,s:l,e:c},w,$)=>{var x,P;const A={kind:o==="enclosing"?"enclosing":"main",hasEnclosing:$.some(xe=>xe.type==="enclosing"),isSuperAlert:r===!0,style:i},{interactive:Ue,underline:se,background:oe}=ne({segmentFocused:!1,decorationFocused:t,segmentMeta:A});return{range:{start:l+((x=s==null?void 0:s.context.s)!=null?x:0),end:c+((P=s==null?void 0:s.context.s)!=null?P:0)},updateSemantics:Ke.Resize,metadata:A,interactive:Ue,underline:se!=null?se:void 0,background:oe!=null?oe:void 0}}):e.subalerts?e.subalerts.flatMap(o=>Te(e,i,t,o.transformJson,!0)).filter(Ge):[]}class li extends ye{constructor(i,t){super("Failed to upsert decoration",i),De(this,"suggestions"),this.suggestions=Array.from(t)}toJSON(){return{...super.toJSON(),suggestions:this.suggestions}}}class di extends ye{constructor(i,t){super("Failed to remove decoration",i),De(this,"suggestions"),this.suggestions=Array.from(t)}toJSON(){return{...super.toJSON(),suggestions:this.suggestions}}}const ci=ke(Symbol("TextDecorationController")),me=ke(Symbol("CAPITextDecorationStore")),_i=e=>u(be([e.getExecutionScope("document-session"),e.getFeature("document-session"),e.getFeature("capi-suggestion"),e.getFeature("text-decoration"),e.getFeature("capi")]),Oe(([i,t,s,r,o])=>ae.all([...ui(i,r,s,t,o),Ve(i.onStart(async l=>ae.all([hi(l,t),u(l.resolve(J),X(c=>c.init()),X(()=>Y(He)))])))])));function ui(e,i,t,s,r){return[e.register({token:ci,useToken:J}),e.register({token:me,useFactory:o=>u(o.resolve(i.provides.TextDecorationManager),X(l=>l.createStore("capi")))},{lifetime:le.ContainerScoped}),e.register({token:J,useFactory:je(J,[t.provides.CAPISuggestionCollection,me,s.provides.TextDocument,r.provides.CAPIConnection])},{lifetime:le.ContainerScoped})]}function hi(e,i){return u(be([e.resolve(i.provides.DocumentSessionManager),e.resolve($e)]),X(([t,s])=>u(m.fromSubscribableState(t.activeDocumentId),m.distinctUntilChanged(),m.debounceTime(500),m.filter(r=>r===null),m.subscribe(()=>{fe.verbose("No active document focused - hiding current window"),s.setScreenRect(qe())}))))}export{ci as TextDecorationControllerToken,_i as activate};
//# sourceMappingURL=index-C4K70bu3.js.map
