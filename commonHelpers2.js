import"./assets/modulepreload-polyfill-ec808ebb.js";import{i as o}from"./assets/vendor-651d7991.js";const c=document.querySelector(".form"),l=document.querySelector("input[name='delay']");document.querySelector("input[name='state']:checked");c.addEventListener("submit",t=>{t.preventDefault(),n()});function n(){const t=l.value,s=[...c.elements].find(e=>e.checked).value;new Promise((e,i)=>{s==="fulfilled"?e(t):i(t)}).then(e=>{setTimeout(()=>{o.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`})},t)}).catch(e=>{setTimeout(()=>{o.error({title:"Error",message:`❌ Rejected promise in ${e}ms`})},t)}),console.log(s)}
//# sourceMappingURL=commonHelpers2.js.map
