import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as m}from"./assets/vendor-CZ4EWmTT.js";const n=document.querySelector("button[data-start]"),f=document.querySelector("span[data-days]"),h=document.querySelector("span[data-hours]"),p=document.querySelector("span[data-minutes]"),y=document.querySelector("span[data-seconds]"),S=document.querySelector(".timer-input");let c=null,u=null;n.disabled=!0;function b(){S.disabled=!0,n.disabled=!0,u=setInterval(()=>{const t=Date.now(),e=c-t;if(e<=0){clearInterval(u),alert("Countdown finished");return}q(C(e))},1e3)}function C(t){const d=Math.floor(t/864e5),s=Math.floor(t%864e5/36e5),i=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:s,minutes:i,seconds:l}}function o(t){return String(t).padStart(2,"0")}n.addEventListener("click",b);function q({days:t,hours:e,minutes:r,seconds:a}){f.textContent=o(t),h.textContent=o(e),p.textContent=o(r),y.textContent=o(a)}const w={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<Date.now()?(window.alert("Please choose a date in the future"),n.disabled=!0):(n.disabled=!1,c=t),console.log(t[0])}};m("#datetime-picker",w);
//# sourceMappingURL=1-timer.js.map
