if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>n(e,l),u={module:{uri:l},exports:t,require:o};s[l]=Promise.all(i.map((e=>u[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/Autodrome-CKZwVX49.js",revision:null},{url:"assets/Autopark-DtwTvOUa.js",revision:null},{url:"assets/Category-CJOyengV.js",revision:null},{url:"assets/Contact-CA5lLR9W.js",revision:null},{url:"assets/Home-CAZGah2O.js",revision:null},{url:"assets/imgD-B1jF7LXL.js",revision:null},{url:"assets/index-CfZ5D6Hx.css",revision:null},{url:"assets/index-DbUimZIA.js",revision:null},{url:"assets/Instructor-DRn9Va2k.js",revision:null},{url:"assets/Navbar-D4TQHYZH.js",revision:null},{url:"index.html",revision:"cdee4da4ba9d5103ff512856316e030b"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"download.png",revision:"0f7a2d59dbf57908af2e7dfaebb5e39e"},{url:"manifest.webmanifest",revision:"f4ab2f848b7e31216f1c886c9dcb2f82"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
