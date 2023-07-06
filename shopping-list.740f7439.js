function e(e,t,r,i){Object.defineProperty(e,t,{get:r,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},s=r.parcelRequired7c6;null==s&&((s=function(e){if(e in i)return i[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return i[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},r.parcelRequired7c6=s),s.register("kyEFX",function(t,r){"use strict";e(t.exports,"register",function(){return i},function(e){return i=e}),e(t.exports,"resolve",function(){return o},function(e){return o=e});var i,o,s={};i=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)s[t[r]]=e[t[r]]},o=function(e){var t=s[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),s("kyEFX").register(JSON.parse('{"fT3mu":"shopping-list.740f7439.js","cagbC":"amazon.14359d3c.png","hJuzG":"apple.9c33fe27.png","hDM3Y":"bookshop.8a4b449f.png","hm5VY":"icons.bc01a40e.svg","drU6R":"index.010b1d01.js","8ZGWj":"index.e0b8f458.js"}')),s("5xxQm"),s("8FnLx"),s("ciJSj"),s("dTazW");var a=s("9bk7d"),n={};n=new URL(s("kyEFX").resolve("cagbC"),import.meta.url).toString();var l={};l=new URL(s("kyEFX").resolve("hJuzG"),import.meta.url).toString();var c={};c=new URL(s("kyEFX").resolve("hDM3Y"),import.meta.url).toString();var p={};p=new URL(s("kyEFX").resolve("hm5VY"),import.meta.url).toString();const u=document.querySelector(".shopping-list-list");function d(){!1===a.authStates.status&&(u.innerHTML=""),(0,a.readShoppingList)(a.dataUser.userId).then(e=>{if(e.exists()){let r=e.val(),i=Object.keys(r),o=[];if(0!==i.length){for(let e of i){let i=r[`${e}`],s=`<li class="shop-cart-container">
        <div class="shop-cart-wrap">
          <div class="shop-image-wrapper">
            <img class="shop-image" src="${i.book_image}" alt="${i.title}" width="100" height="142" />
          </div>
          <div class="shop-cart-info">
            <h2 class="shop-cart-title">${i.title}</h2>
            <h3 class="shop-cart-category">${i.list_name}</h3>
            <p class="shop-cart-description">${i.description}
            </p>
            <div class="shop-cart-bottom-wrap">
              <h4 class="shop-cart-author">${i.author}</h4>
              <ul class="shop-cart-media">
                <li class="shop-cart-media-item">
                  <a
                    href="${i.buy_links[0].url}"
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
                    href="${i.buy_links[1].url}"
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
                    href="${i.buy_links[4].url}"
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
              <svg class="shop-cart-btn-trash">
                <use href="${t(p)}"></use>
              </svg>
            </button>
          </div>
        </div>
      </li>`;o.push(s)}let e=o.join("");u.innerHTML=e;let s=document.querySelector(".shopping-list-list");s.addEventListener("click",g)}}else{let e=`<li></li><p class="empty-shopping-list-text">
      This page is empty, add some books and proceed to order.
    </p>
    <div>
      <picture>
        <source
          srcset="src/img/books_desk_tab_1x.png 1x,
                src/img/books_desk_tab_2x.png 2x"
           type="image/png"
          media="(min-width: 768px)"
        />
        <source
          srcset="
            src/img/shopping/books_mob_1x.png 1x,
            src/img/shopping/books_mob_2x.png 2x
          "
          media="(max-width: 767px)"
        />
        <img
          class="empty-shopping-list-img"
          src="src/img/shopping/books_mob_1x.png"
          alt="empty shopping list img"
        />
      </picture>
    </div></li>`;u.innerHTML=e}})}function g(e){if("BUTTON"!==e.target.nodeName)return;let t=e.target.id;(0,a.removeElShoppingList)(a.dataUser.userId,t),d()}d(),s("6zeq2"),s("bUb57"),s("gjiCh");
//# sourceMappingURL=shopping-list.740f7439.js.map
