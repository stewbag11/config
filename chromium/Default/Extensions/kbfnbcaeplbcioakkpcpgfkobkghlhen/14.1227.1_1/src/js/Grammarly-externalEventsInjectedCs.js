var _a;self.GR_EXTENSION_ID=(null===(_a=document.currentScript)||void 0===_a?void 0:_a.getAttribute("data-ext-id"))||"unknown",self.GR_EXTENSION_SEND=function(t,e){if(!t)throw new TypeError("cant be called without message");const n=document.createEvent("CustomEvent");n.initCustomEvent("external:"+t,!0,!0,e),document.dispatchEvent(n)};