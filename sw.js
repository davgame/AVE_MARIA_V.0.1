if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const t=e=>r(e,o),u={module:{uri:o},exports:l,require:t};s[o]=Promise.all(i.map((e=>u[e]||t(e)))).then((e=>(n(...e),l)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/Autodrome-Bxc1QU36.js",revision:null},{url:"assets/Autopark-C5eGZo73.js",revision:null},{url:"assets/Category-ChuTrlBG.js",revision:null},{url:"assets/Contact-DC-8EWKX.js",revision:null},{url:"assets/Home-BySBZjpO.js",revision:null},{url:"assets/imgD-B1jF7LXL.js",revision:null},{url:"assets/index-BMyO9oml.js",revision:null},{url:"assets/index-CfZ5D6Hx.css",revision:null},{url:"assets/Instructor-Ci35bTIY.js",revision:null},{url:"assets/Navbar-nDURtn2Q.js",revision:null},{url:"index.html",revision:"31ce8b8eed6100e1c5219c0638105a2a"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon-32x32.png",revision:"2b1cd610d575cf2c6db47fc7ab098609"},{url:"apple-touch-icon.png",revision:"f63bcd18f81649e01fb18d6db9ce0004"},{url:"android-chrome.png",revision:"8495d0fab5740b25ea35b33d5bc38855"},{url:"android-chrome-256.png",revision:"e16281d51089393f220c553783bf8f19"},{url:"manifest.webmanifest",revision:"11b2427588a170660473b012ecc368a3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
