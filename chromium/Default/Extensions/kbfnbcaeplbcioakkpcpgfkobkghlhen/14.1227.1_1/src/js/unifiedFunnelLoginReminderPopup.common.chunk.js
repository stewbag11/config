(self.webpackChunk=self.webpackChunk||[]).push([[1530],{77680:(e,n,t)=>{t.d(n,{o:()=>a});var i=t(4603),s=t(49231);const r=t(70932).Y.create("Hooks.Auth.useSignIn");const o=async()=>{var e;return null===(e=await(0,i.OB)().bgRpc.api.checkAuthPermissions())||void 0===e||e},l=async()=>{var e;return null===(e=await(0,i.OB)().bgRpc.api.requestAuthPermissions())||void 0===e||e};function a({checkPermissions:e=o,requestPermissions:n=l}={}){return function({checkPermissions:e,requestPermissions:n}){const[t,i]=(0,s.useState)(),o=Boolean(t),[l,a]=(0,s.useState)(!1);return{needPermissions:o,requestingPermissions:l,bindSignIn:n=>t=>{o||l||e().then((e=>{e?(i(void 0),n(t)):i((()=>{n(t)}))})).catch((e=>{r.warn(`There was an error during checkPermissions: ${e}`)}))},onRequestPermissions:()=>{l||(a(!0),n().then((e=>{a(!1),e&&(i(void 0),null==t||t())})))}}}({checkPermissions:e,requestPermissions:n})}},99143:(e,n,t)=>{t.r(n),t.d(n,{UnifiedFunnelLoginReminderPopup:()=>E,UnifiedFunnelLoginReminderPopupView:()=>k});var i=t(49231),s=t(74037),r=t(30916),o=t(29425),l=t(29375),a=t(72415),u=t(99836),c=t(82935),m=t(12990),p=t(77680),g=t(26899),d=t(74731);const h=e=>({source:"authHook",slot:o.G0.Assistant,name:o.RP.UnifiedFunnelLoginReminder,experience:o.VP.SignUp,lastKnownUserType:(0,r.qf)(e)}),E=({continueSignupWithEmail:e,openSigninPage:n,...t})=>{i.useEffect((()=>{const e=(0,u.Tb)();c.J.loginReminderPopupShow(),e.loginReminderPopupShow(),(0,s.B0)({...h(t.authUserDetails),userType:t.authUserDetails.previousUserType})}),[]);const{bindSignIn:r,...o}=(0,p.o)(),l={onSignIn:r((e=>n(e))),onContinueSignupWithEmail:r((n=>e(n)))};return i.createElement(k,{...o,...l,...t})},k=({isFlipped:e,needPermissions:n,requestingPermissions:t,onRequestPermissions:r,remove:u,authUserDetails:p,onContinueSignupWithEmail:E,onSignIn:k,skipTrustedCheck:y})=>{const P=(0,g.W)(),S=h(p),f={...S,userType:p.previousUserType};return i.createElement("div",{className:(0,l.cs)(d.unifiedFunnel,e&&d.isFlipped,e&&d.flipped)},i.createElement(a.M,{clickHandler:u},i.createElement("button",{className:d.close})),i.createElement("div",{className:(0,l.cs)(d.popupFooter,e&&d.isFlipped)},"▲"),n?i.createElement(i.Fragment,null,i.createElement("h1",null,"Chrome requires your permission to let Grammarly sign you in"),i.createElement("p",null,"Please follow your browser′s prompts to  allow Grammarly to  read grammarly.com site data."),i.createElement("div",null,i.createElement(m.z,{kind:"success",onClick:r,className:d.mainButton},"Allow ",i.createElement(m.g,null,"and continue to sign in"))),i.createElement("p",{className:d.footer},t?i.createElement(i.Fragment,null,"We are requesting your browser to grant permission."):i.createElement(i.Fragment,null,"Next, your browser will ask you to grant permission."))):i.createElement(i.Fragment,null,i.createElement("h1",null,"You’re missing out on key Grammarly features!"),i.createElement("h2",null,"Sign up to:"),i.createElement("ul",null,i.createElement("li",null,"Get Grammarly for Google Docs Beta"),i.createElement("li",null,"Toggle Grammarly for any website"),i.createElement("li",null,"Start your personalized dictionary")),i.createElement(m.z,{kind:"success",onClick:()=>{const e=o.VP.SignUp;null===c.J||void 0===c.J||c.J.signUpButtonClick("assistant"),(0,s.T2)({...f,action:e}),P.auth.beginAuth(),E({...S,action:e})},className:d.mainButton},"Sign up"),i.createElement("footer",{className:d.login},"Already have an account? ",i.createElement(a.M,{clickHandler:()=>{const e=o.VP.SignIn;null===c.J||void 0===c.J||c.J.signInButtonClick("assistant"),(0,s.T2)({...f,action:e}),P.auth.beginAuth(),k({...S,action:e})},skipTrustedCheck:y},i.createElement("span",{className:d.link},"Log in")))))}},74731:e=>{e.exports={unifiedFunnel:"pT8bW",showWrapper:"cu2Gm",flipped:"v6iOt",mainButton:"SBntp",login:"VgcNS",link:"SenZ5",popupFooter:"yjHHz",isFlipped:"B8MAr",close:"w4VV6",auth_button:"X7TsH"}}}]);