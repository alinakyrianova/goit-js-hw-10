var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("4LOEY");const d=document.querySelector(".breed-select"),c=document.querySelector(".cat-info");d.addEventListener("change",(function(e){const t=e.target.value;document.body.classList.add("show-loader"),document.body.classList.remove("show-error"),(0,r.fetchCatByBreed)(t).then((e=>{const t=e[0];t?function(e){document.querySelector(".loader").style.display="none",c.innerHTML=`\n    <img src="${e.url}" alt="Cat">\n    <h3>${e.breeds[0].name}</h3>\n    <p>${e.breeds[0].description}</p>\n    <p>Temperament: ${e.breeds[0].temperament}</p>\n  `}(t):c.innerHTML=""})).catch((e=>{console.error("Помилка при отриманні інформації про кота:",e),document.body.classList.remove("show-loader"),document.querySelector(".error").style.display="block"}));const n=document.querySelector(".loader-text");n&&n.classList.add("is-hidden")})),(0,r.fetchBreeds)().then((e=>{e.forEach((e=>{const t=document.createElement("option");t.value=e.id,t.textContent=e.name,d.appendChild(t)}))})).catch((e=>{console.error("Помилка при отриманні колекції порід:",e)}));
//# sourceMappingURL=index.c4f56d0c.js.map