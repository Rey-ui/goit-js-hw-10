import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as r,i as c}from"./assets/vendor-651d7991.js";const l=document.querySelector("input#datetime-picker"),s=document.querySelector("button[data-start]"),d=document.querySelector("span[data-days]"),f=document.querySelector("span[data-hours]"),p=document.querySelector("span[data-minutes]"),m=document.querySelector("span[data-seconds]");let a,n=!1;const v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t,e,o){clearInterval(a),a=null;const u=t[0],i=new Date;u<i?(n||(c.show({title:"Hey",message:"Ви ввели невірну дату"}),n=!0),s.disabled=!0):(n=!1,s.disabled=!1)}};r(l,v);s.addEventListener("click",()=>{if(!s.disabled){const t=r.parseDate(l.value),e=new Date;t<e?(n||(c.show({title:"Hey",message:"Ви ввели невірну дату"}),n=!0),clearInterval(a),s.disabled=!0):(n=!1,clearInterval(a),a=setInterval(()=>{x()},1e3))}});function C(t){const y=Math.floor(t/864e5),h=Math.floor(t%864e5/36e5),D=Math.floor(t%864e5%36e5/6e4),S=Math.floor(t%864e5%36e5%6e4/1e3);return{days:y,hours:h,minutes:D,seconds:S}}function b(t){if(t===null||isNaN(t))d.textContent="00",f.textContent="00",p.textContent="00",m.textContent="00";else{const e=C(t);d.textContent=String(e.days).padStart(2,"0"),f.textContent=String(e.hours).padStart(2,"0"),p.textContent=String(e.minutes).padStart(2,"0"),m.textContent=String(e.seconds).padStart(2,"0")}}function x(){const t=r.parseDate(l.value),e=new Date;if(t<e){n||(c.show({title:"Hey",message:"Ви ввели невірну дату"}),n=!0),a=null,clearInterval(a),s.disabled=!0;return}else{n=!1;const o=t-e;b(o)}}
//# sourceMappingURL=commonHelpers.js.map
