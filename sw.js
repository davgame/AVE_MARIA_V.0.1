if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const t=e=>i(e,l),u={module:{uri:l},exports:o,require:t};s[l]=Promise.all(n.map((e=>u[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/Autodrome-CJCkstZz.js",revision:null},{url:"assets/Autopark-hn_azjlL.js",revision:null},{url:"assets/Category-DxgNTvc2.js",revision:null},{url:"assets/Contact-CDG36ts1.js",revision:null},{url:"assets/Home-BlZcQ6d8.js",revision:null},{url:"assets/imgD-B1jF7LXL.js",revision:null},{url:"assets/index-CfZ5D6Hx.css",revision:null},{url:"assets/index-DNltlX9h.js",revision:null},{url:"assets/Instructor-4iHLAMkm.js",revision:null},{url:"assets/Navbar-BjpcbUbh.js",revision:null},{url:"index.html",revision:"7307dbfa76bfef8c1084d5c530831102"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon-32x32.png",revision:"2b1cd610d575cf2c6db47fc7ab098609"},{url:"download.png",revision:"0f7a2d59dbf57908af2e7dfaebb5e39e"},{url:"apple-touch-icon.png",revision:"f63bcd18f81649e01fb18d6db9ce0004"},{url:"android-chrome.png",revision:"8495d0fab5740b25ea35b33d5bc38855"},{url:"android-chrome-256.png",revision:"e16281d51089393f220c553783bf8f19"},{url:"favicon-512x512.png",revision:"113172b855646f588695f8971661eec2"},{url:"manifest.webmanifest",revision:"461af3e163ac9114899479167c1830c6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
