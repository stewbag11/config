(self.webpackChunk=self.webpackChunk||[]).push([[3587],{94306:(e,t,n)=>{n.r(t),n.d(t,{ExtensionConflictController:()=>p});var o=n(49231),i=n(74514),s=n(5669),r=n(33874),l=n(34967),c=n(77634),a=n(12990),d=n(47681),f=n(34208);const h=({onClose:e})=>o.createElement(c.X,{mainContent:o.createElement("div",{className:d.extensionConflictPopup},o.createElement(f.e,{size:40,level:"warning"}),o.createElement("div",{className:d.extensionConflictPopupTitle},"Another writing extension is interfering with Grammarly"),o.createElement("div",{className:d.extensionConflictPopupDescription},"We suggest removing your other extension to get the best of Grammarly."),o.createElement(a.z,{className:d.extensionConflictPopupCTA,name:"got-it",kind:"success",onClick:e},"Got it")),onClose:e,size:"extra-large",includeMainContentPadding:!1});class p{constructor(e){this._doc=e,this._container=null}show(){var e,t;this._hide(),this._render(),null===(t=null===(e=this._findConflictDialog())||void 0===e?void 0:e.querySelector("button"))||void 0===t||t.addEventListener("click",(()=>this._hide()))}_hide(){this._container&&(this._container.dispose(),this._container=null)}_render(){this._container=s.V.get({monitorAs:"g-extension-conflict"}).inject(r.EM.fromDocument(this._doc,"g-extension-conflict"),r.zs.appendChild(this._doc.documentElement),l.G7.showWhenLoaded(o.createElement("div",{style:{position:"fixed",right:"16px",top:`${this._getCardOffsetTop()}px`,zIndex:99999},"data-grammarly-part":"extension-conflict-notification"},o.createElement(i.L,{chunkName:"extensionConflictPopup"},o.createElement(h,{onClose:()=>this._hide()})))))}_findConflictDialog(){const e=Array.from(this._doc.querySelectorAll("editor-card"));for(const t of e){const e=Array.from(t.querySelectorAll("div"));for(const t of e)if(t.shadowRoot){const e=Array.from(t.shadowRoot.querySelectorAll('div[role="alertdialog"]'));for(const t of e)if(t.innerText.toLocaleLowerCase().includes("editor"))return t}}}_getCardOffsetTop(){const e=this._findConflictDialog();return e?32+e.getBoundingClientRect().height:16}}},47681:e=>{e.exports={extensionConflictPopup:"A1ESu",extensionConflictPopupTitle:"TfZut",extensionConflictPopupDescription:"aqAAW",extensionConflictPopupCTA:"nW030",spin:"SBn75"}}}]);