(self.webpackChunk=self.webpackChunk||[]).push([[4762],{71143:(t,e,o)=>{o.r(e),o.d(e,{Notion:()=>n});var n,i=o(65647),a=o(20715),l=o(12518),r=o(87234),c=o(38684),p=o(75629),s=o(6088),f=o(44806),d=o(37094),h=o(23070),u=o(55793),g=o(16703),m=o(50899);!function(t){const e={kind:f.A.editable,name:"Notion.pageContentBody",match:t=>{const e=t.field.closest(".notion-page-content")||t.field.closest(".whenContentEditable"),o=t.field.closest(".notion-frame");return e?p.T.contentEditable("Notion",(t=>({target:e,matchCheckOverride:()=>!0,createLayout:()=>new c.A7(e,{customGbuttonPositioning:{injectionElement:o,injectionStyle:{bottom:"0",right:"20px",zIndex:m.op.toString()},createPositionStyleBehavior:t=>t.pipe(i.U((t=>({position:"absolute",width:"auto",height:"auto",pointerEvents:"all",right:`${t.left}px`,top:`${t.top}px`})))),calculateMetrics:(t,e,o)=>{const n=r.p8.create({top:t.size.height+o.top+33,left:t.size.width-o.left-20});return{offset:n,page:r.Cv.fromOffset(n,r.Cv.fromClient(t.client,{top:e.scrollY,left:e.scrollX}),{top:0,left:0}),client:r.Ir.create(r.E9.plus(t.client,n)),effectivePadding:{top:0,right:0,bottom:0,left:0},size:g.V.gButtonMaxSize}},createShiftBehavior:()=>a.of({top:-120,left:0})}}),textMap:{createFieldTextMap:t=>s.Z.create(t,{andFilterNodeOutput:(t,e)=>e.outputConsidered||t instanceof HTMLElement&&t.isContentEditable})}}))).match(t):l.left(f.x.fieldSkippedError({reason:"not a Notion pageContentBody",integrationName:"Notion",field:t.field}))}};t.page=(0,d.$W)({name:"notion",domain:u.ch},[e,...h.k.newLayoutRules])}(n||(n={}))}}]);