(self.webpackChunk=self.webpackChunk||[]).push([[7690],{86820:(e,t,n)=>{n.d(t,{L_:()=>h,RZ:()=>E,zx:()=>p});var o=n(46504),a=n(38569),r=n(49231),i=n(43818),l=n(99627),c=n(42467),s=n(91346),m=n(34903),d=n(86523),u=n(40323);function p(e){return r.createElement(d.Y,h(e,u.LI))}function h(e,t){var n=(0,l.Sh)(e.className,t).className;return(0,a._)((0,o._)({},e),{className:n})}!function(e){var t=e.Animated=function(e){return r.createElement(d.Y,(0,a._)((0,o._)({},e),{animationMode:Boolean(e.animationMode)?e.animationMode:s.m.FromClickPoint}))};e.Primary=function(e){return r.createElement(t,(0,o._)({styleType:m.Z.Type.Button},h(e,u.T$)))},e.Secondary=function(e){return r.createElement(t,(0,o._)({styleType:m.Z.Type.Button},h(e,u.BD)))},e.Ghost=function(e){return r.createElement(t,(0,o._)({styleType:m.Z.Type.Button},h(e,u.fk)))},e.Tertiary=function(e){return r.createElement(t,(0,o._)({styleType:m.Z.Type.Base},h(e,u.UF)))},e.Flat=function(e){return r.createElement(t,h(e,u.$H))},e.White=function(e){return r.createElement(t,h(e,u.ix))},e.SidebarFlat=function(e){return r.createElement(d.Y,(0,o._)({styleType:m.Z.Type.H3Legacy},h(e,u.HN)))},e.Caps=function(e){return r.createElement(d.Y,(0,o._)({styleType:m.Z.Type.H3Legacy},h(e,u.Mp)))},e.Group=function(e){var t=e.children,n=e.className,c=e.align,s=void 0===c?"horizontal":c,m=e.sticky,d=e.name;return r.createElement(i.F.div,(0,a._)((0,o._)({role:"group"},(0,l.Sh)(n,"horizontal"===s?!0===m?u.vD:u.ru:u.oc)),{"data-name":d}),t)}}(p||(p={}));var E=function(e){var t=e.title,n=e.titleAlign,o=e.buttonClass,a=e.iconClass,s=e.iconWidth,m=e.tooltipClass;return r.createElement(p,{name:"info-button","aria-label":t,tag:d.X.div,title:r.createElement(i.F.div,(0,l.Sh)(u.bC,m),r.createElement("p",null,t)),titleAlign:n,className:o},r.createElement(c.JO.Info,{width:s,className:a}))}},73465:(e,t,n)=>{n.d(t,{o:()=>o});var o,a=n(49231),r=n(86820),i=n(99627),l=n(83137);!function(e){e.Primary=({className:e,theme:t,compact:n,children:o,...c})=>a.createElement(r.zx.Primary,{...(0,i.Sh)(l.button,e,"dark"===t?l.dark:void 0,n?l.noPadding:void 0),...c},o),e.Secondary=({className:e,theme:t,compact:n,children:o,...c})=>a.createElement(r.zx.Ghost,{...(0,i.Sh)(l.button,l.secondary,e,"dark"===t?l.dark:void 0,n?l.noPadding:void 0),...c},o),e.Tertiary=({className:e,theme:t,compact:n,children:o,...c})=>a.createElement(r.zx.Tertiary,{...(0,i.Sh)(l.button,l.tertiary,e,"dark"===t?l.dark:void 0,n?l.noPadding:void 0),...c},o)}(o||(o={}))},10606:(e,t,n)=>{n.r(t),n.d(t,{OnboardingPopupWithReminder:()=>g});var o,a=n(15542),r=n(68811),i=n(42467),l=n(38368),c=n(86820),s=n(49231),m=n(29375),d=n(86016),u=n(73465);!function(e){e.Flag=r.a.Flag}(o||(o={}));class p{constructor(){this._flags=new Set,this.actions={openUrl:()=>{throw new Error("Not implemented")},openPopup:()=>{throw new Error("Not implemented")}}}has(e){return this._flags.has(e)}}var h=n(84661),E=n(95904);const g=({isFlipped:e,onShow:t,onStart:n,onRemind:o,onRemove:g})=>{a.P.useEffectOnDidMount(t);const y=new p;return s.createElement(r.a.Context.Provider,{value:y},s.createElement("div",{className:(0,m.cs)(E.gButtonPopup,E.onboardingWithReminder,e&&E.flipped)},s.createElement(d.h,{className:E.onboardingClose,onClick:g,title:""},s.createElement(i.JO.Close,null)),s.createElement("p",{className:E.title},"Let us show you around"),s.createElement("p",{className:E.text},"Get a quick introduction to how Grammarly works."),s.createElement(u.o.Primary,{onClick:n},"Take a tour"),s.createElement(l.L,{name:"remind-me-later",appearanceBehavior:"mouseClick",label:s.createElement(u.o.Secondary,null,"Remind me later ",s.createElement(i.JO.Arrow,{width:"12",className:E.arrowhead})),align:"left",showDelay:0,theme:{dropdownContainer:E.dropdownContainer,dropdownList:E.dropdownList}},s.createElement(c.zx.Flat,{onClick:()=>o("hour")},"In an hour"),s.createElement(c.zx.Flat,{onClick:()=>o("tomorrow")},"Tomorrow"),s.createElement(c.zx.Flat,{onClick:()=>o("never")},"Don’t show this again")),s.createElement("div",{className:(0,m.cs)(E.popupFooter,e&&E.isFlipped)},"▲"),s.createElement(h.b,{className:E.onboardingWithReminderIconPosition})))}},84661:(e,t,n)=>{n.d(t,{b:()=>a});var o=n(49231);const a=o.memo((function(e){return o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",fill:"none",className:e.className},o.createElement("rect",{width:"42",height:"48",x:"1",y:"15",fill:"#00E0AC",stroke:"#0E101A",rx:"4"}),o.createElement("rect",{width:"42",height:"48",x:"9",y:"7",fill:"#fff",stroke:"#0E101A",rx:"4"}),o.createElement("path",{stroke:"#000",d:"M18 28h24m-24 9h24m-24 9h24"}),o.createElement("path",{d:"M41 12c0-6.076 4.924-11 11-11 6.077 0 11 4.924 11 11 0 5.316-3.769 9.75-8.781 10.777-.716.146-1.458.223-2.215.223H41V12Z",fill:"#027E6F"}),o.createElement("path",{d:"M59.618 10.957h-4.953l-1.23 2.022h4.14c-.64 3.517-4.552 5.911-8.46 3.886a4.602 4.602 0 0 1-1.967-1.948c-2.248-4.28.823-8.587 4.877-8.587 1.7 0 3.228.757 4.263 1.952l1.085-1.788a7.618 7.618 0 0 0-5.889-2.164c-3.823.264-6.923 3.433-7.11 7.26-.212 4.395 3.301 8.036 7.648 8.036 4.348 0 7.659-3.437 7.659-7.66 0-.343-.026-.68-.07-1.008h.008-.001Z",fill:"#fff"}))}))},83137:e=>{e.exports={button:"BfiSw",noPadding:"rqbz4",dark:"lwLJZ",secondary:"HB_J3",tertiary:"Yv5q6"}},95904:e=>{e.exports={gButtonPopup:"diNpB",newDataControl:"kwuQj",showWrapper:"UUYhD",flipped:"iGBQj",title:"pQCa0",icon:"ylCbI",button:"TufcJ",buttonText:"oE1vN",popupFooter:"rA9f6",isFlipped:"hSt1p",settings:"H5xEt",loginSSOPopup:"dGc8e",text:"jfR06",bold:"K4CWO",link:"UAmjO",secondary:"EXtIt",firstTime:"JpYft",close:"OUiPJ",disable:"_1jcw8",gdocs:"TQdVK",loginReminder:"H1d0B",permission:"RPuBs",buttonsContainer:"oNYLG",mainButton:"vJMgg",secondaryButton:"yRqtR",onboarding:"QrVo6",onboardingWithReminder:"njXr2",onboardingClose:"G0tug",dropdownContainer:"WJP1a",arrowhead:"HI72s",dropdownList:"Rog_Q",onboardingWithReminderIconPosition:"v1L7z",sessionTimeoutPopup:"djMQL",sessionTimeoutClose:"cE7Bk",sessionTimeoutPopupIconPosition:"_re7y",signinLink:"TT5tz",warningPopup:"HFaC5",btn:"Qq9h5",warningWithoutIcon:"FyT69",ctaBtnGroup:"_FPqK",ctaButton:"u6LqV",later:"ZFbyQ",managedSSOControl:"L1Rzm",illustration:"qESn3",signInWithSSO:"rq8co",signInWithSSO2:"wE0K3"}}}]);