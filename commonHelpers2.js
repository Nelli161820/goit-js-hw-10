import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as o}from"./assets/vendor-77e16229.js";const s=document.querySelector(".form"),c=s.querySelector('input[name="delay"]'),l=s.querySelectorAll('input[name="state"]');s.addEventListener("submit",function(r){r.preventDefault();const t=Number(c.value),n=[...l].find(e=>e.checked).value;new Promise((e,i)=>{setTimeout(()=>{n==="fulfilled"?e(t):i(t)},t)}).then(e=>{o.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`})}).catch(e=>{o.error({title:"Error",message:`❌ Rejected promise in ${e}ms`})})});
//# sourceMappingURL=commonHelpers2.js.map
