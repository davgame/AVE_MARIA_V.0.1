if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const t=e=>n(e,o),u={module:{uri:o},exports:l,require:t};s[o]=Promise.all(r.map((e=>u[e]||t(e)))).then((e=>(i(...e),l)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/Autodrome-CYfK9puy.js",revision:null},{url:"assets/Autopark-TGsE77t3.js",revision:null},{url:"assets/Category-Broxnh5q.js",revision:null},{url:"assets/Contact-oGKDfkg6.js",revision:null},{url:"assets/Home-CSDhsVOf.js",revision:null},{url:"assets/imgD-B1jF7LXL.js",revision:null},{url:"assets/index-CfZ5D6Hx.css",revision:null},{url:"assets/index-uNnNhP1h.js",revision:null},{url:"assets/Instructor-D5VJmvUG.js",revision:null},{url:"assets/Navbar-uymAAem1.js",revision:null},{url:"index.html",revision:"2b442289a59afe5e32a7faea4af367f6"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon-32x32.png",revision:"2b1cd610d575cf2c6db47fc7ab098609"},{url:"download.png",revision:"0f7a2d59dbf57908af2e7dfaebb5e39e"},{url:"apple-touch-icon.png",revision:"f63bcd18f81649e01fb18d6db9ce0004"},{url:"android-chrome.png",revision:"8495d0fab5740b25ea35b33d5bc38855"},{url:"android-chrome-256.png",revision:"e16281d51089393f220c553783bf8f19"},{url:"favicon-512x512.png",revision:"113172b855646f588695f8971661eec2"},{url:"manifest.webmanifest",revision:"461af3e163ac9114899479167c1830c6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
