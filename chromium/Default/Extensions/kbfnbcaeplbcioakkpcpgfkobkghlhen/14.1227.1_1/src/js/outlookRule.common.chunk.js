(self.webpackChunk=self.webpackChunk||[]).push([[8105],{37514:(t,e,i)=>{i.r(e),i.d(e,{Outlook:()=>O,getInjectionLayoutForGButtonInSendContainer:()=>I,getInjectionLayoutForStickyGButtonOnTheBottom:()=>A});var o=i(65647),n=i(14765),r=i(70874),s=i(81546),l=i(16703),a=i(87234),u=i(99710),c=i(38684),d=i(72779),g=i(75629),p=i(20588),h=i(60841),m=i(65882),y=i(57188),f=i(18615),_=i(21885),S=i(5794),b=i(55446),E=i(60165),v=i(82823),x=i(91795),B=i(70932);class C{constructor(){this._logger=B.Y.create("NativeSuggestionsToggler"),this._elementsSubs=null,this._squigglers=[]}set ctx(t){this._ctx=t}static getInstance(t){return this._instance||(this._instance=new C),this._instance.ctx=t,this._instance}static _isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}_waitForSquigglers(){return this._ctx.field.parentElement?x.x.create(this._ctx.field.parentElement,{childList:!0}).pipe(n.O([{target:this._ctx.field.parentElement,type:"childList"}]),h.w((t=>{for(const e of t)if("childList"===e.type&&C._isElementNode(e.target)){const t=Array.from(e.target.querySelectorAll("div.ms-editor-squiggler"));return m.aj(t.map((t=>y.F(100).pipe(o.U((()=>t.shadowRoot)),f.P((t=>Boolean(t)))))))}return _.C})),h.w((t=>m.aj(t.map((t=>{const e=t.querySelector("div");return e?x.x.create(e,{childList:!0}).pipe(n.O([{target:e,type:"childList"}])):_.C}))).pipe(S.J()))),o.U((t=>{for(const e of t)if("childList"===e.type&&C._isElementNode(e.target)){const t=e.target.querySelectorAll('span[role="status"]');return t?Array.from(t):null}return null})),b.h((t=>Boolean(t))),o.U((t=>t.filter((t=>"none"!==t.style.display)))),b.h((t=>t.length>0)),E.x(((t,e)=>t.reduce(((t,e)=>t+e.style.display),"")===e.reduce(((t,e)=>t+e.style.display),"")))):_.C}_waitForEditorCard(){return x.x.create(this._ctx.field.ownerDocument.documentElement,{childList:!0}).pipe(o.U((t=>{var e;for(const i of t)if("childList"===i.type&&C._isElementNode(i.target))return null!==(e=i.target.querySelector("editor-card"))&&void 0!==e?e:null;return null})),f.P((t=>Boolean(t))))}_waitForPremiumBadge(){return this._ctx.field.parentElement?x.x.create(this._ctx.field.parentElement,{childList:!0}).pipe(o.U((t=>{var e,i,o,n;for(const r of t)if("childList"===r.type&&C._isElementNode(r.target)){const t=r.target.querySelector('button[type="button"] > span > i[data-icon-name="Diamond"]');return null!==(n=null===(o=null===(i=null===(e=null==t?void 0:t.parentElement)||void 0===e?void 0:e.parentElement)||void 0===i?void 0:i.parentElement)||void 0===o?void 0:o.parentElement)&&void 0!==n?n:null}return null})),b.h((t=>Boolean(t))),b.h((t=>"none"!==t.style.display)),E.x(((t,e)=>t.style.display===e.style.display))):_.C}hideSuggestions(){this._elementsSubs=new v.w,this._elementsSubs.add(this._waitForSquigglers().subscribe((t=>{t&&(this._logger.trace("Hiding Outlook's native suggestions underlines.",t),this._squigglers=this._squigglers.concat(t),this._originalSquigglerDisplayStyle||(this._originalSquigglerDisplayStyle=t[0].style.display),this._squigglers.forEach((t=>{t.style.display="none"})))}))),this._elementsSubs.add(this._waitForEditorCard().subscribe((t=>{t&&(this._logger.trace("Hiding Outlook's native suggestions cards."),this._editorCard=t,this._originalEditorCardDisplayStyle=this._editorCard.style.display,this._editorCard.style.display="none")}))),this._elementsSubs.add(this._waitForPremiumBadge().subscribe((t=>{t&&(this._logger.trace("Hiding Outlook's native suggestions premium badge."),this._premiumBadge=t,this._originalPremiumBadgeDisplayStyle=this._premiumBadge.style.display,this._premiumBadge.style.display="none")})))}showSuggestions(){var t;this._squigglers.length>0&&(this._logger.trace("Restoring Outlook's native suggestions underlines."),this._squigglers.forEach((t=>{t.style.display=this._originalSquigglerDisplayStyle}))),this._editorCard&&(this._logger.trace("Restoring Outlook's native suggestions cards."),this._editorCard.style.display=this._originalEditorCardDisplayStyle),this._premiumBadge&&(this._logger.trace("Restoring Outlook's native suggestions premium badge."),this._premiumBadge.style.display=this._originalPremiumBadgeDisplayStyle),null===(t=this._elementsSubs)||void 0===t||t.unsubscribe(),this._elementsSubs=null}}var k,q=i(6088),w=i(65258);!function(t){const e=t=>"BLOCKQUOTE"===t.tagName&&(0,w.Re)(t)&&""!==t.style.borderLeft;t.createEditorTextMap=t=>q.Z.create(t,{andNodeFormatting:(t,i)=>"BLOCKQUOTE"===t.tagName?e(t)?{...i,blockquote:!0}:{...i}:"Signature"===t.id?{...i,signature:!0}:q.Z.defaultNodeFormatting(t,i),overrideFilterNode:(t,i)=>q.Z.defaultFilterNodeAllowingBlockquote(t,i)&&!e(t)})}(k||(k={}));var F,L=i(52546);!function(t){t.getAuthorDomain=function(){const t=document.querySelector('[href*="https://outlook.com?login_hint"]');if(t){const e=L.X.getDomainFromEmail(decodeURIComponent(t.href));if(e)return e}const e=document.querySelector("[id*=primaryMailboxRoot_]");if(e){const t=L.X.getDomainFromEmail(e.id);if(t)return t}return null}}(F||(F={}));var O,D=i(55793),N=i(73104),T=i(37094);!function(t){t.page=(0,T.$W)({name:"outlook",domain:D.ph},[g.T.contentEditable("Outlook",(t=>({createLayout:t=>{var e;const i=(0,N.Cq)((0,d.wr)(t,(t=>t.classList.contains("customScrollBar")))),o=i.querySelector("[data-testid=ComposeSendButton]")||i.querySelector("div[aria-label='Send'][role='button']")||(null===(e=i.querySelector('button[type="button"].ms-Button.ms-Button--primary.ms-Button--hasMenu'))||void 0===e?void 0:e.closest('div[role="button"]')),n=(0,d.bp)((0,N.Cq)(o)),r=M(n),s=U(r,n);return new c.A7(t,{scroller:(0,u.z)(i)||t,...s,transformElement:{getValue:(t,e)=>(0,d.f0)(i,e),getIndicator:()=>i}})},customizations:{richText:s.kn.isAvailable(t),applyFormatting:!0},textMap:{createFieldTextMap:k.createEditorTextMap},onCreate:()=>C.getInstance(t).hideSuggestions(),onDispose:()=>C.getInstance(t).showSuggestions(),getFromEmailDomainAndSignature:t=>function(t){const e=F.getAuthorDomain(),i=L.X.getSignature(t);return{fromEmailDomain:e,emailSignature:i}}(t)}))),g.T.textarea("Outlook",(t=>({createLayout:()=>new c.A7(t.field,{gbuttonMinPadding:p.rR}),textMap:{createFieldTextMap:k.createEditorTextMap}})))])}(O||(O={}));const M=t=>{const e=getComputedStyle(t);return"sticky"===e.position&&"0px"===e.top?"topSticky":"sticky"===e.position&&"0px"===e.bottom?"bottomSticky":"unknown"},A=()=>({highlightsLayoutOptions:{fixUIGlitchesByForcingStackingContext:!0}}),I=t=>({customGbuttonPositioning:{injectionElement:t,injectionStyle:{top:"0",right:"0"},createPositionStyleBehavior:t=>t.pipe(o.U((t=>({position:"absolute",transform:"translate(0, -100%)",width:"auto",height:"auto",pointerEvents:"all",right:-t.left+"px",top:`${t.top}px`})))),calculateMetrics:(t,e,i)=>{const o=a.p8.create({top:i.top,left:t.size.width+i.left});return{offset:o,page:a.Cv.fromOffset(o,a.Cv.fromClient(t.client,{top:e.scrollY,left:e.scrollX}),{top:0,left:0}),client:a.Ir.create(a.E9.plus(t.client,o)),effectivePadding:{top:0,right:14,bottom:14,left:0},size:l.V.gButtonMaxSize}},createShiftBehavior:()=>r.S.sec1.pipe(o.U((()=>document.querySelector('button[aria-label*="Microsoft Editor"]')?{top:-11,left:-50}:{top:-14,left:-14})),n.O({top:-14,left:-14}))}}),U=(t,e)=>"unknown"===t?{}:"topSticky"===t?A():I(e)},52546:(t,e,i)=>{i.d(e,{X:()=>o});var o,n=i(88359);!function(t){t.getSignature=function(t){const e=[];t.getRichText().eachLine(((t,i)=>(!0===i.signature&&e.push(t),!0)));const i=e.map((t=>t.ops.reduce(((t,e)=>n.s.isInsertString(e)&&e.insert?t+e.insert:t),"")));return i.length?i.join(";"):null},t.getDomainFromEmail=function(t){const e=t.indexOf("@");return e>=0?t.substring(e+1):null}}(o||(o={}))}}]);