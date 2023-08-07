(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const v=()=>{const o=document.getElementById("body"),s=document.getElementById("app"),r=document.createElement("div");r.classList="heading-menu-div",s.appendChild(r);const t=document.createElement("h1");t.textContent="Burgers & Beer",t.classList="title",r.appendChild(t);const e=document.createElement("div");e.classList="menu",s.appendChild(e);const n=document.createElement("ul");n.classList="items",e.appendChild(n);const a=document.createElement("h2");a.textContent="Cheese Burger",a.classList="burger",n.appendChild(a);const i=document.createElement("img");i.classList="item-one-pic",i.setAttribute("src","/vite-restaurant-app/amirali-mirhashemian-JqnuWlHmDfE-unsplash.jpg"),a.appendChild(i);const l=document.createElement("p");l.textContent="The world's best burger, a delightful fusion of juicy beef, gooey cheese, and secret seasonings, nestled between soft buns. The flavors dance on your palate, creating an unparalleled culinary experience that leaves everyone wondering about the magic behind its extraordinary taste.",l.classList="item-one-text",a.appendChild(l);const c=document.createElement("h2");c.textContent="Beer",c.classList="beer",n.appendChild(c);const u=document.createElement("img");u.classList="item-two-pic",u.setAttribute("src","/vite-restaurant-app/jose-hernandez-uribe-3CM0-XTk2WE-unsplash.jpg"),c.appendChild(u);const m=document.createElement("p");m.textContent="A revolutionary brew, the result of expert craftsmanship and innovative techniques. This beer tantalizes your senses with a harmonious blend of rich flavors, crisp notes, and a refreshing finish. Its secret recipe remains a mystery, making it a captivating and unparalleled indulgence.",m.classList="item-two-text",c.appendChild(m);const p=document.createElement("footer");p.classList="footer-about",o.appendChild(p);const d=document.createElement("p");d.textContent="Burger Photo By Amirali Mirhashemian.  Beer Photo by Jose Hernandez-Uribe.  Photos from UPsplash",p.appendChild(d),t.addEventListener("click",()=>{E(),b()})};function E(){const o=document.querySelector("#app"),s=document.querySelector(".heading-div"),r=document.querySelector(".operation-hours"),t=document.querySelector(".heading-menu-div"),e=document.querySelector(".about"),n=document.querySelector(".menu"),a=document.querySelector("#body"),i=document.querySelector("footer");s&&o.removeChild(s),r&&o.removeChild(r),e&&o.removeChild(e),n&&o.removeChild(n),t&&o.removeChild(t),a&&a.removeChild(i)}const b=()=>{const o=document.getElementById("app"),s=document.createElement("div");s.classList="heading-div",o.appendChild(s);const r=document.createElement("h1");r.textContent="Burgers & Beer",r.classList="title",s.appendChild(r);const t=document.createElement("div");t.classList="operation-hours",o.appendChild(t);const e=document.createElement("h2");e.textContent="Hours and Location",e.classList="ho-head",t.appendChild(e);const n=document.createElement("p");n.textContent="123 S The Street, The Village, NYC",n.classList="location",t.appendChild(n);const a=document.createElement("p");a.textContent="Monday 12pm - 10pm",a.classList="m",t.appendChild(a);const i=document.createElement("p");i.textContent="Tuesday 12pm - 10pm",i.classList="t",t.appendChild(i);const l=document.createElement("p");l.textContent="Wednesday 12pm - 10pm",l.classList="w",t.appendChild(l);const c=document.createElement("p");c.textContent="Thursday 11am - 11pm",c.classList="thurs",t.appendChild(c);const u=document.createElement("p");u.textContent="Friday 11am - 11pm",u.classList="f",t.appendChild(u);const m=document.createElement("p");m.textContent="Saturday 11am - 11pm",m.classList="sat",t.appendChild(m);const p=document.createElement("p");p.textContent="Sunday 10am - 10pm",p.classList="sun",t.appendChild(p);const d=document.createElement("div");d.classList="about",o.appendChild(d);const h=document.createElement("h2");h.textContent="What is BB",h.classList="about-head",d.appendChild(h);const f=document.createElement("p");f.classList="about-text",f.textContent="Indulge in our restaurant's craft beer and cutting-edge burgers. We serve unique, mouthwatering creations with carefully selected toppings. Experience the perfect pairing of gourmet burgers and exceptional brews in a warm, inviting atmosphere. The ultimate destination for burger enthusiasts and craft beer lovers.",d.appendChild(f);const C=document.createElement("Img");C.setAttribute("src","/vite-restaurant-app/noun-burger-and-beer-2947018.png"),C.classList="about-img",d.appendChild(C);const g=document.createElement("footer");g.classList="footer-home",body.appendChild(g);const y=document.createElement("p");y.textContent="Project By Jacob Warren @ The Odn Project 2023",g.appendChild(y),r.addEventListener("click",()=>{L(),v()})};function L(){const o=document.querySelector("#app"),s=document.querySelector(".heading-div"),r=document.querySelector(".operation-hours"),t=document.querySelector(".about"),e=document.querySelector("#body"),n=document.querySelector("footer");s&&o.removeChild(s),r&&o.removeChild(r),t&&o.removeChild(t),e&&e.removeChild(n)}function x(){b()}x();
