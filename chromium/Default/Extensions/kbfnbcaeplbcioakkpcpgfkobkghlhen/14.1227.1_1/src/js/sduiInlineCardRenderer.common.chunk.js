(self.webpackChunk=self.webpackChunk||[]).push([[3384],{9074:(e,t,n)=>{n.d(t,{u:()=>o});var o,r,i,u,a,l,s,c=n(49231),d=n(90023),f=n(39620),m=n(10859),S=n(65882),p=n(30586),z=n(78488),h=n(69715),v=n(58303),y=n(52256),C=n(15542);r=o||(o={}),i=r.Manager=function(e){var t=e.children,n=e.remSize,o=f.Dx(n).pipe(m.shareReplay({refCount:!0,bufferSize:1}));return C.P.useSingleton("RemSize.Manager"),C.P.useSubscriptionTo(o),c.createElement(s.Provider,{value:o},t)},r.DefaultManager=function(e){var t=e.children;return C.P.useSingleton("RemSize.DefaultManager"),c.createElement(i,{remSize:a(u)},t)},u=r.defaultSizeObserver=S.aj(p.Lw("(max-width: 1359px)"),p.Lw("(min-width: 1600px)"),(function(e,t){return e?14:t?18:16})),a=r.withRemSizeEffect=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;return e.pipe(z.b((function(e){return t(v.G(e))})),h.x(t.bind(null,v.YP)),m.shareReplay({refCount:!0,bufferSize:1}))},l=r.defaultFontSizeSetter=function(e){o.setRootCssVar(document.documentElement,e),o.setRootFontSize(e)},s=r.Context=c.createContext(u),r.setRootCssVar=function(e,t){e.style.setProperty("--rem",(0,d.zG)(t,v.UI(String),y.QP))},r.setRootFontSize=function(e){document.documentElement.style.fontSize=(0,d.zG)(e,v.UI((function(e){return e+"px"})),y.QP)}},99970:(e,t,n)=>{n.r(t),n.d(t,{SduiCard:()=>E});var o=n(49231),r=n(90023),i=n(9074),u=n(9690),a=n(20715),l=n(78488),s=n(58303),c=n(14288),d=n(68812),f=n(91217),m=n(36408),S=n(8355),p=n(29357),z=n(75787);const h=z.ux.style({padding:z.ux.px(4)}),v=()=>o.createElement(p.T,{type:"mini",size:16,className:h});var y;!function(e){e.of=e=>e}(y||(y={}));const C=({children:e})=>o.createElement(i.u.Manager,{remSize:(0,r.zG)(a.of(16),l.b((e=>i.u.setRootCssVar(document.documentElement,s.G(e)))))},o.createElement(u.G.DefaultProvider,null,e)),E=({model:e})=>o.createElement(C,null,o.createElement(c.P,{key:e.sdui.id,sduiRootId:e.sdui.id,content:e.sdui.content,prevContent:s.YP,transitions:[],designSystem:{...m.k,inlineCard:(0,S.I)(y.of(13.5),y.of(20.25)),icon:{...d.y,[f.Tb.GButtonSmall]:v}},onMount:r.Q1,onAnimationEnd:r.Q1,notify:e.notify}))}}]);