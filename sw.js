if(!self.define){let s,e={};const r=(r,i)=>(r=new URL(r+".js",i).href,e[r]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=r,s.onload=e,document.head.appendChild(s)}else s=r,importScripts(r),e()})).then((()=>{let s=e[r];if(!s)throw new Error(`Module ${r} didn’t register its module`);return s})));self.define=(i,n)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let t={};const o=s=>r(s,l),u={module:{uri:l},exports:t,require:o};e[l]=Promise.all(i.map((s=>u[s]||o(s)))).then((s=>(n(...s),t)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Autodrome-Bxc1QU36.js",revision:null},{url:"assets/Autopark-C5eGZo73.js",revision:null},{url:"assets/Category-ChuTrlBG.js",revision:null},{url:"assets/Contact-DC-8EWKX.js",revision:null},{url:"assets/Home-BySBZjpO.js",revision:null},{url:"assets/imgD-B1jF7LXL.js",revision:null},{url:"assets/index-BMyO9oml.js",revision:null},{url:"assets/index-CfZ5D6Hx.css",revision:null},{url:"assets/Instructor-Ci35bTIY.js",revision:null},{url:"assets/Navbar-nDURtn2Q.js",revision:null},{url:"index.html",revision:"4b1a535fde4b93844085a069ea31b338"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"8a52cb94480d291057aaa23cd48a0752"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
