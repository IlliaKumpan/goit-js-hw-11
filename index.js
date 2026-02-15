import{a as m,S as d,i as c}from"./assets/vendor--6n4cVRZ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="54668130-3dbf133d1de2adf3be7a098c3",y="https://pixabay.com/api/";async function g(s){const o={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await m.get(y,{params:o})).data}catch(t){throw console.error("Info about error",t),t}}const l=document.querySelector(".gallery"),n=document.querySelector(".loader");let h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const o=s.map(({webformatURL:t,largeImageURL:i,tags:e,likes:r,views:a,comments:f,downloads:u})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${i}">
          <img class="gallery-image" src="${t}" alt="${e}" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b> ${r}</p>
          <p class="info-item"><b>Views</b> ${a}</p>
          <p class="info-item"><b>Comments</b> ${f}</p>
          <p class="info-item"><b>Downloads</b> ${u}</p>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",o),h.refresh()}function L(){l.innerHTML=""}function w(){n&&n.classList.add("is-open")}function S(){n&&n.classList.remove("is-open")}const q=document.querySelector(".form");q.addEventListener("submit",async s=>{s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();if(!o){c.warning({message:"Search field cannot be empty!"});return}L(),w();try{const t=await g(o);t.hits.length===0?c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):b(t.hits)}catch{c.error({message:"Something went wrong. Please try again."})}finally{S(),s.target.reset()}});
//# sourceMappingURL=index.js.map
