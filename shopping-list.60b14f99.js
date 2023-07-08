function e(e,t,r,o){Object.defineProperty(e,t,{get:r,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},s=r.parcelRequired7c6;null==s&&((s=function(e){if(e in o)return o[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},r.parcelRequired7c6=s),s.register("kyEFX",function(t,r){"use strict";e(t.exports,"register",function(){return o},function(e){return o=e}),e(t.exports,"resolve",function(){return i},function(e){return i=e});var o,i,s={};o=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)s[t[r]]=e[t[r]]},i=function(e){var t=s[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),s("kyEFX").register(JSON.parse('{"fT3mu":"shopping-list.60b14f99.js","cagbC":"amazon.14359d3c.png","hJuzG":"apple.9c33fe27.png","hDM3Y":"bookshop.8a4b449f.png","kvnZu":"books_mob_1x.7615c344.png","h5tlt":"books_mob_2x.fb581b54.png","bzidz":"books_desk_tab_1x.d158e64a.png","2lt6W":"books_desk_tab_2x.0de291f3.png","5tnqZ":"index.2d468734.js","awZUq":"index.9295f165.js"}')),s("5xxQm"),s("8FnLx"),s("ciJSj"),s("dTazW");var a=s("9bk7d"),n={};n=new URL(s("kyEFX").resolve("cagbC"),import.meta.url).toString();var l={};l=new URL(s("kyEFX").resolve("hJuzG"),import.meta.url).toString();var c={};c=new URL(s("kyEFX").resolve("hDM3Y"),import.meta.url).toString();var p={};p='<svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 2.25h4.5m-9 2.25h13.5m-1.5 0-.526 7.89c-.079 1.183-.118 1.775-.374 2.224a2.25 2.25 0 0 1-.974.91c-.464.226-1.058.226-2.244.226H7.868c-1.186 0-1.78 0-2.244-.225a2.25 2.25 0 0 1-.974-.911c-.256-.449-.295-1.04-.374-2.225L3.75 4.5M7.5 7.875v3.75m3-3.75v3.75" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';var d=s("gjiCh"),h={};h=new URL(s("kyEFX").resolve("kvnZu"),import.meta.url).toString(),shopListClearMob1x=new URL(h);var u={};u=new URL(s("kyEFX").resolve("h5tlt"),import.meta.url).toString(),shopListClearMob2x=new URL(u);var g={};g=new URL(s("kyEFX").resolve("bzidz"),import.meta.url).toString(),shopListClearDeskTab1x=new URL(g);var m={};m=new URL(s("kyEFX").resolve("2lt6W"),import.meta.url).toString(),shopListClearDeskTab2x=new URL(m);const b=document.querySelector(".sheave"),f=document.querySelector(".shopping-list-list"),v=window.screen.width;function k(){!1===a.authStates.status&&(f.innerHTML=""),(0,d.showLoader)(),(0,a.readShoppingList)(a.dataUser.userId).then(e=>{if(e.exists()){let r=e.val(),o=Object.keys(r),i=[];if(0!==o.length){for(let e of o){let o=r[`${e}`],s=`<li class="shop-cart-container">
        <div class="shop-cart-wrap">
          <div class="shop-image-wrapper">
            <img class="shop-image" src="${o.book_image}" alt="${o.title}" width="100" height="142" />
          </div>
          <div class="shop-cart-info">
            <h2 class="shop-cart-title">${o.title}</h2>
            <h3 class="shop-cart-category">${o.list_name}</h3>
            <p class="shop-cart-description">${o.description}
            </p>
            <div class="shop-cart-bottom-wrap">
              <h4 class="shop-cart-author">${o.author}</h4>
              <ul class="shop-cart-media">
                <li class="shop-cart-media-item">
                  <a
                    href="${o.buy_links[0].url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Amazon"
                  >
                    <picture class="amazon-picture">
                      <source
                        srcset="${t(n)}"
                        type="image/png"
                      />
                      <img
                        class="media-icon amazon-icon"
                        src="${t(n)}"
                        alt="Amazon logo"
                        width="32"
                        height="11"
                      />
                    </picture>
                  </a>
                </li>
                <li class="shop-cart-media-item">
                  <a
                    href="${o.buy_links[1].url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Apple Books"
                  >
                    <picture>
                      <source
                        srcset="${t(l)}"
                        type="image/png"
                      />
                      <img
                        class="media-icon media-book-icon"
                        src="${t(l)}"
                        alt="Apple book logo"
                        width="16"
                        height="16"
                      />
                    </picture>
                  </a>
                </li>
                <li class="shop-cart-media-item">
                  <a
                    href="${o.buy_links[4].url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Bookshop"
                  >
                    <picture>
                      <source
                        srcset="${t(c)}"
                        type="image/png"
                      />
                      <img
                        class="media-icon media-book-icon"
                        src="${t(c)}"
                        alt="Book shop logo"
                        width="16"
                        height="16"
                      />
                    </picture>
                  </a>
                </li>
              </ul>
            </div>
            <button
              class="shop-cart-btn"
              type="button"
              id="${e}"
              data-title="title"
              aria-label="Remove button"
            >
           <svg class="shop-cart-btn-trash" width="18" height="18"">
           ${t(p)}
           </svg>
            </button>
          </div>
        </div>
      </li>`;i.push(s)}let e=i.join("");f.innerHTML=e;let s=document.querySelector(".shopping-list-list");s.addEventListener("click",_)}}else{let e=`<li><p class="empty-shopping-list-text">
      This page is empty, add some books and proceed to order.
    </p>
     
      <picture>
        <source
          srcset="
            ${shopListClearDeskTab1x} 1x,
            ${shopListClearDeskTab2x} 2x
          "
          media="(min-width: 768px)"
            type="image/png"
        />
        <sorce
          srset=" 
           ${shopListClearMob1x} 1x,
            ${shopListClearMob2x} 2x
          "
          media="(max-width: 767px)"
            type="image/png"
        />
        <img
          class="empty-shopping-list-img"
          src="${shopListClearMob1x}"
          alt="empty shopping list img"
        />
      </picture>
        </li>`;f.innerHTML=e}(0,d.hideLoader)()})}function _(e){if("BUTTON"!==e.target.nodeName)return;let t=e.target.id;(0,a.removeElShoppingList)(a.dataUser.userId,t),k()}v<1440&&b.classList.add("visually-hidden"),k(),s("6zeq2"),s("bUb57"),s("gjiCh"),s("9tydV");
//# sourceMappingURL=shopping-list.60b14f99.js.map
