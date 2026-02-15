import{a as u,S as f,i as c}from"./assets/vendor--6n4cVRZ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="personal_api_key",y="https://pixabay.com/api/";async function g(s){const o={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await u.get(y,{params:o})).data}catch(r){throw console.error("Помилка при виконанні запиту:",r),r}}const d=document.querySelector(".gallery");let h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function n(s){const o=s.map(({webformatURL:r,largeImageURL:i,tags:e,likes:t,views:a,comments:l,downloads:m})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${i}">
          <img class="gallery-image" src="${r}" alt="${e}" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes</b> ${t}</p>
          <p class="info-item"><b>Views</b> ${a}</p>
          <p class="info-item"><b>Comments</b> ${l}</p>
          <p class="info-item"><b>Downloads</b> ${m}</p>
        </div>
      </li>`).join("");d.insertAdjacentHTML("beforeend",o),h.refresh()}const b=document.querySelector(".form");b.addEventListener("submit",async s=>{s.preventDefault();const o=s.currentTarget.elements["search-text"].value.trim();if(!o){c.warning({message:"Search field cannot be empty!"});return}n(),n();try{const r=await g(o);r.hits.length===0?c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):n(r.hits)}catch{c.error({message:"Something went wrong. Please try again."})}finally{n(),s.target.reset()}});
//# sourceMappingURL=index.js.map
