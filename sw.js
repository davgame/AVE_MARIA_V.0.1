if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const t=e=>i(e,o),u={module:{uri:o},exports:l,require:t};s[o]=Promise.all(r.map((e=>u[e]||t(e)))).then((e=>(n(...e),l)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/Autodrome-D7_BmY7U.js",revision:null},{url:"assets/Autopark-CP-P_psK.js",revision:null},{url:"assets/Category-DskNPtKj.js",revision:null},{url:"assets/Contact-CEcPVABN.js",revision:null},{url:"assets/Home-DiWvGofm.js",revision:null},{url:"assets/imgD-B1jF7LXL.js",revision:null},{url:"assets/index-CfZ5D6Hx.css",revision:null},{url:"assets/index-CmcY2WIF.js",revision:null},{url:"assets/Instructor-CEsLd2KP.js",revision:null},{url:"assets/Navbar-DQAGAIfM.js",revision:null},{url:"index.html",revision:"56e21bf73a4c8641407374687e202e7c"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon-32x32.png",revision:"2b1cd610d575cf2c6db47fc7ab098609"},{url:"download.png",revision:"0f7a2d59dbf57908af2e7dfaebb5e39e"},{url:"apple-touch-icon.png",revision:"f63bcd18f81649e01fb18d6db9ce0004"},{url:"android-chrome.png",revision:"8495d0fab5740b25ea35b33d5bc38855"},{url:"android-chrome-256.png",revision:"e16281d51089393f220c553783bf8f19"},{url:"manifest.webmanifest",revision:"4e1afa1684c059eaa578309e2bae450b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
