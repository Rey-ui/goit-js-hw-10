import"./assets/modulepreload-polyfill-ec808ebb.js";import{i as s}from"./assets/vendor-651d7991.js";const o=document.querySelector(".form"),l=document.querySelector("input[name='delay']");o.addEventListener("submit",t=>{t.preventDefault(),r()});function r(){const t=l.value,c=[...o.elements].find(e=>e.checked).value;new Promise((e,i)=>{setTimeout(()=>{c==="fulfilled"?e(t):i(t)},t)}).then(e=>{s.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`})}).catch(e=>{s.error({title:"Error",message:`❌ Rejected promise in ${e}ms`})})}
//# sourceMappingURL=commonHelpers2.js.map
