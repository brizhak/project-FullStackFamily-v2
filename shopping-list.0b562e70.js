function e(e,t,i,r){Object.defineProperty(e,t,{get:i,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},s=i.parcelRequired7c6;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},i.parcelRequired7c6=s),s.register("kyEFX",function(t,i){"use strict";e(t.exports,"register",function(){return r},function(e){return r=e}),e(t.exports,"resolve",function(){return o},function(e){return o=e});var r,o,s={};r=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)s[t[i]]=e[t[i]]},o=function(e){var t=s[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),s("kyEFX").register(JSON.parse('{"fT3mu":"shopping-list.0b562e70.js","cagbC":"amazon.14359d3c.png","hJuzG":"apple.9c33fe27.png","hDM3Y":"bookshop.8a4b449f.png","hm5VY":"icons.bc01a40e.svg","6vdv8":"index.a38ec3c7.js","11MfQ":"index.74ccfc59.js"}')),s("5xxQm"),s("8FnLx"),s("ciJSj"),s("dTazW"),s("epHO8");var a=s("9bk7d"),n={};n=new URL(s("kyEFX").resolve("cagbC"),import.meta.url).toString();var l={};l=new URL(s("kyEFX").resolve("hJuzG"),import.meta.url).toString();var c={};c=new URL(s("kyEFX").resolve("hDM3Y"),import.meta.url).toString();var p={};p=new URL(s("kyEFX").resolve("hm5VY"),import.meta.url).toString();const u=document.querySelector(".shopping-list-list");function d(){(0,a.readShoppingList)(a.dataUser.userId).then(e=>{if(e.exists()){let i=e.val(),r=Object.keys(i),o=[];if(0!==r.length){for(let e of r){let r=i[`${e}`],s=`<li class="shop-cart-container">
        <div class="shop-cart-wrap">
          <div class="shop-image-wrapper">
            <img class="shop-image" src="${r.book_image}" alt="${r.title}" width="100" height="142" />
          </div>
          <div class="shop-cart-info">
            <h2 class="shop-cart-title">${r.title}</h2>
            <h3 class="shop-cart-category">${r.list_name}</h3>
            <p class="shop-cart-description">${r.description}
            </p>
            <div class="shop-cart-bottom-wrap">
              <h4 class="shop-cart-author">${r.author}</h4>
              <ul class="shop-cart-media">
                <li class="shop-cart-media-item">
                  <a
                    href="${r.buy_links[0].url}"
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
                    href="${r.buy_links[1].url}"
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
                    href="${r.buy_links[4].url}"
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
      </li>`;o.push(s)}markupList=o.join(""),u.innerHTML=markupList;let e=document.querySelector(".shopping-list-list");e.addEventListener("click",g)}}else{let e=`<li></li><p class="empty-shopping-list-text">
      This page is empty, add some books and proceed to order.
    </p>
    <div>
      <picture>
        <source
          srcset="./img/books_desk_tab_1x.png 1x,
                .img/books_desk_tab_2x.png 2x"
           type="image/png"
          media="(min-width: 768px)"
        />
        <source
          srcset="
            ./img/shopping/books_mob_1x.png 1x,
            ./img/shopping/books_mob_2x.png 2x
          "
          media="(max-width: 767px)"
        />
        <img
          class="empty-shopping-list-img"
          src="./img/shopping/books_mob_1x.png"
          alt="empty shopping list img"
        />
      </picture>
    </div></li>`;u.innerHTML=e}})}function g(e){if("BUTTON"!==e.target.nodeName)return;let t=e.target.id;(0,a.removeElShoppingList)(a.dataUser.userId,t),d()}setTimeout(d,50),s("6zeq2"),s("bUb57"),s("gjiCh");
//# sourceMappingURL=shopping-list.0b562e70.js.map
