!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=14)}([function(e,t){const n=document.querySelector(".aside");document.querySelector(".header__btn--close").addEventListener("click",()=>{n.classList.toggle("hide")})},,,,,,,,,function(e,t,n){},function(e,t){let n=window.matchMedia("(min-width: 768px)");document.addEventListener("DOMContentLoaded",r),window.addEventListener("scroll",r),n.addEventListener("change",r);let i=0;function r(){const e=document.querySelector(".header"),t=document.querySelector(".main-image"),n=e.offsetHeight,r=t.offsetHeight,a=r-n,l=document.querySelector(".option-bar"),o=()=>window.pageYOffset||document.documentElement.scrollTop,c=()=>l.classList.contains("fix");let s=window.scrollY;e.style.borderBottom=s>30?"1.5px solid white":"none",o()>a&&!c()&&l.classList.add("fix"),o()<a&&c()&&l.classList.remove("fix"),s>=r-n&&!l.classList.contains("header--scroll")?e.classList.add("header--scroll"):e.classList.remove("header--scroll"),i=o()}},function(e,t){document.addEventListener("DOMContentLoaded",()=>{document.querySelector("#sort-to-max").addEventListener("click",(function(){let e=document.querySelector(".item-container");for(let t=0;t<e.children.length;t++)for(let i=t;i<e.children.length;i++)+e.children[t].getAttribute("data-sort")>+e.children[i].getAttribute("data-sort")&&(replaceNode=e.replaceChild(e.children[i],e.children[t]),n(replaceNode,e.children[t]))})),document.querySelector("#sort-to-min").addEventListener("click",(function(){let e=document.querySelector(".item-container");for(let t=0;t<e.children.length;t++)for(let i=t;i<e.children.length;i++)+e.children[t].getAttribute("data-sort")<+e.children[i].getAttribute("data-sort")&&(replaceNode=e.replaceChild(e.children[i],e.children[t]),n(replaceNode,e.children[t]))})),document.querySelector("#reset").addEventListener("click",(function(){let e=document.querySelector(".item-container");for(let t=0;t<e.children.length;t++)for(let i=t;i<e.children.length;i++)+e.children[t].getAttribute("id")>+e.children[i].getAttribute("id")&&(replaceNode=e.replaceChild(e.children[i],e.children[t]),n(replaceNode,e.children[t]))}));let e=document.querySelector(".option-bar__form--gender"),t=document.querySelector(".option-bar__form--sale");function n(e,t){return t.parentNode.insertBefore(e,t.nextSibling)}e.addEventListener("click",(function(){let e=document.querySelector('input[name="gender"]:checked').value,t=document.getElementsByClassName("item-container")[0];for(let n=0;n<t.children.length;n++)"all"==e?t.children[n].classList.remove("item--hide-gender"):t.children[n].dataset.gender!=e?t.children[n].classList.add("item--hide-gender"):t.children[n].classList.remove("item--hide-gender")})),t.addEventListener("click",(function(){let e=document.querySelector('input[name="sale"]:checked').value,t=document.getElementsByClassName("item-container")[0];for(let n=0;n<t.children.length;n++)"all"==e?t.children[n].classList.remove("item--hide-sale"):0==+t.children[n].dataset.sale&&t.children[n].classList.add("item--hide-sale")}))})},,,function(e,t,n){"use strict";n.r(t);n(9);const i=[{name:"GUCCI flora gorgeous jasmine",id:1,price:140,volume:100,gender:"female",img:"../img/g18.jpg",sale:"0",aviable:"true"},{name:"GUCCI flora gorgeous gardenia",id:2,price:130,volume:100,gender:"female",img:"../img/g1.jpeg",sale:"0",aviable:"true"},{name:"GUCCI the alchemist's garden fading autumn",id:3,price:440,volume:150,gender:"unisex",img:"../img/g2.jpeg",sale:"0",aviable:"true"},{name:"GUCCI the alchemist's garden a chant for the nymph",id:4,price:550,volume:100,gender:"female",img:"../img/g3.jpeg",sale:"0",aviable:"true"},{name:"GUCCI bloom eau de toilette",id:5,price:110,volume:100,gender:"female",img:"../img/g20.jpg",sale:"20",aviable:"false"},{name:"GUCCI bloom profumo di fiori",id:6,price:110,volume:50,gender:"female",img:"../img/g4.jpeg",sale:"10",aviable:"true"},{name:"GUCCI guilty pour femme",id:7,price:110,volume:50,gender:"female",img:"../img/g5.jpeg",sale:"0",aviable:"true"},{name:"GUCCI guilty",id:8,price:180,volume:90,gender:"male",img:"../img/g6.jpeg",sale:"0",aviable:"true"},{name:"GUCCI made to measure",id:9,price:100,volume:30,gender:"male",img:"../img/g21.png",sale:"10",aviable:"true"},{name:"GUCCI flora emerald gardenia",id:10,price:160,volume:100,gender:"female",img:"../img/g7.jpeg",sale:"0",aviable:"true"},{name:"GUCCI pour homme",id:11,price:90,volume:100,gender:"male",img:"../img/g8.jpeg",sale:"0",aviable:"true"},{name:"GUCCI bloom",id:12,price:96,volume:50,gender:"female",img:"../img/g9.jpeg",sale:"20",aviable:"true"},{name:"GUCCI guilty pour homme",id:13,price:100,volume:90,gender:"male",img:"../img/g10.jpeg",sale:"0",aviable:"true"},{name:"GUCCI the alchemist's garden a midnight stroll",id:14,price:640,volume:100,gender:"unisex",img:"../img/g11.jpeg",sale:"15",aviable:"true"},{name:"GUCCI alchemist's garden a gloaming night",id:15,price:640,volume:100,gender:"unisex",img:"../img/g12.jpeg",sale:"0",aviable:"true"},{name:"GUCCI guilty absolute pour femme",id:16,price:110,volume:120,gender:"female",img:"../img/g13.webp",sale:"0",aviable:"true"},{name:"GUCCI guilty black",id:17,price:90,volume:50,gender:"male",img:"../img/g14.webp",sale:"0",aviable:"true"},{name:"GUCCI bloom ambrosia di fiori",id:18,price:120,volume:100,gender:"female",img:"../img/g15.jpg",sale:"15",aviable:"true"},{name:"GUCCI guilty pour homme black",id:19,price:130,volume:90,gender:"male",img:"../img/g16.jpg",sale:"0",aviable:"true"},{name:"GUCCI the alchemist's garden a song for the rose",id:20,price:620,volume:100,gender:"unisex",img:"../img/g17.jpg",sale:"0",aviable:"true"},{name:"GUCCI flora",id:21,price:120,volume:75,gender:"female",img:"../img/g19.jpg",sale:"0",aviable:"true"}],r=document.getElementById("container"),a=document.getElementById("shopping-cart"),l=document.getElementById("header-content");const o=new class{constructor(){this.keyName="products"}getProducts(){const e=localStorage.getItem(this.keyName);return null!==e?JSON.parse(e):[]}putProducts(e){let t=this.getProducts(),n=!1;const i=t.indexOf(e);return-1===i?(t.push(e),n=!0):t.splice(i,1),localStorage.setItem(this.keyName,JSON.stringify(t)),{pushProduct:n,products:t}}};const c=new class{constructor(){this.classNameActive="shop-item--active"}handleSetLocationStorage(e,t){const{pushProduct:n,products:i}=o.putProducts(t);n?e.classList.add(this.classNameActive):e.classList.remove(this.classNameActive),s.render(i.length)}render(){const e=o.getProducts();let t="";i.forEach(({id:n,name:i,price:r,img:a,gender:l,sale:o,aviable:c})=>{let s="",d=+o,m=+r;-1!==e.indexOf(String(n))&&(s=" "+this.classNameActive+" "),0!==d?(m=Math.floor(+m-+m*+d/100),t+=`\n                <div class = 'shop-item' data-sort = '${m}' data-gender = '${l}' data-sale = '${d}' data-aviable = '${c}' id = '${n}'>\n               `,"true"==c&&(t+=`<button class = 'shop-inner-text ${s}'></button>`),t+=`<div class = 'shop-item__img' style = "background-image: url('${a}');" ></div>\n                <span class = 'shop-item__name'>${i}</span>\n                <span class = 'shop-item__price shop-item__sale' ><span class = 'shop-item__old-price'>€ ${r}</span><span class = 'shop-item__new-price'>€ ${m}</span></span>`):(t+=` <div class = 'shop-item' data-sort = '${r}' data-gender = '${l}' data-sale = '${d}' id = '${n}'>`,"true"==c&&(t+=`<button class = 'shop-inner-text ${s}'></button>`),t+=`<div class = 'shop-item__img' style = "background-image: url('${a}');"></div>\n                <span class = 'shop-item__name'>${i}</span>\n                <span class = 'shop-item__price' >€ ${r}</span>`),t+="\n            </div>\n            "});let n=t;r.insertAdjacentHTML("afterbegin",n)}};c.render();const s=new class{rendCart(){document.querySelector(".cart-container").style.display="flex",d.render()}render(){document.querySelector(".header__icon")||l.insertAdjacentHTML("afterbegin",'\n\n        <button class="header__icon btn--cart icon-cart"><svg  width="25" height="25" viewBox="0 0 25 25"  xmlns="http://www.w3.org/2000/svg"><path d="M3.75879 6.75H21.2588V23.25H3.75879V6.75Z" fill="white" stroke-width="1.5"></path><path d="M16.75 9V5.3105C16.75 4.16729 16.3022 3.07089 15.5052 2.26252C14.7082 1.45414 13.6272 1 12.5 1C11.3728 1 10.2918 1.45414 9.4948 2.26252C8.69777 3.07089 8.25 4.16729 8.25 5.3105L8.25 9" fill="white" stroke-width="1.5"></path></svg></button>\n        ')}};s.render();const d=new class{closeCart(){document.querySelector(".cart-container").style.display="none",a.innerHTML=""}render(){const e=o.getProducts();let t="<button class = 'close-cart-btn'>╳</button>",n=0;i.forEach(({id:i,name:r,price:a,sale:l,img:o})=>{let c=+a-Math.floor(+a*+l/100);-1!==e.indexOf(String(i))&&(t+=`\n                <div class="cart-container__item">\n                    <div class = 'cart-container__item-img' style = "background-image: url('${o}');"></div>\n                    <div class='cart-container__caption-inner'>\n                        <span class = 'cart-container__item-name'>${r}</span>\n                        <span class = 'cart-container__item-price'>€ ${c} </span>\n                    </div>\n                </div>\n                `,n+=+a)});let r=`\n        <div class = 'cart-container__inner'>${t}\n            <div class = 'cart-container__total'>total: € ${n}</div>\n            <a class = 'cart-container__total'>place an order</a>\n           </div> `;a.insertAdjacentHTML("afterbegin",r)}};document.querySelectorAll(".shop-inner-text").forEach(e=>{e.addEventListener("click",t=>{c.handleSetLocationStorage(e,String(t.target.closest(".shop-item").id))})});let m=document.querySelector(".cart-container");document.querySelector(".btn--cart").addEventListener("click",()=>{s.rendCart()}),m.addEventListener("click",e=>{e.target==document.querySelector(".close-cart-btn")&&d.closeCart()}),document.querySelector("#search-input").oninput=function(){let e=this.value.toLowerCase().trim(),t=document.querySelectorAll(".shop-item__name");""!=e?t.forEach((function(t){-1==t.textContent.toLowerCase().search(e)?t.closest(".shop-item").classList.add("item--hide-search"):t.closest(".shop-item").classList.contains("item--hide-search")&&t.closest(".shop-item").classList.remove("item--hide-search")})):t.forEach((function(e){e.closest(".shop-item").classList.contains("item--hide-search")&&e.closest(".shop-item").classList.remove("item--hide-search")}))};n(10),n(11),n(0)}]);
//# sourceMappingURL=../shop.js.map