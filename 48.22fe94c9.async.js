(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[48],{J4gX:function(e,t,n){},"KmR/":function(e,t,n){},SZ5S:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return m}));var o=n("2XQ8");function a(e){var t="scrollTop"in e?e.scrollTop:e.pageYOffset;return Math.max(t,0)}function r(e,t){"scrollTop"in e?e.scrollTop=t:e.scrollTo(e.scrollX,t)}var c=/scroll|auto/i;function l(e){var t=1;return"HTML"!==e.tagName&&"BODY"!==e.tagName&&e.nodeType===t}function u(e,t){var n=e,o=t||window;while(n&&n!==o&&l(n)){var a=window.getComputedStyle(n),r=a.overflowY;if(c.test(r))return n;n=n.parentNode}return o}function i(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function s(e){r(window,e),r(document.body,e)}var d=Object(o["e"])();function m(){d&&s(i())}},SvJk:function(e,t,n){"use strict";n.r(t);var o=n("jem/"),a=n("ERkP"),r=n.n(a),c=n("zCf4"),l=n("SZ5S"),u=n("9cXV"),i=n("w7sN"),s=n("hs5g"),d=(n("KmR/"),Object(u["b"])("docs")),m=()=>{var e=Object(a["useContext"])(s["a"]),t=e.locale,n=e.menu,u=Object(a["useState"])(),m=Object(o["a"])(u,2),f=m[0],w=m[1];return Object(a["useEffect"])((()=>{if(n){var e=!1,o="zh-CN"===t?n.markdownCN():n.markdown();return w(void 0),o.then((t=>{e||(t=null!=t.default?t.default:t,Object(l["d"])(window,0),w(t.html))})),()=>{e=!0}}}),[n,t]),n?r.a.createElement("div",{className:d()},r.a.createElement(i["a"],{html:f})):r.a.createElement(c["a"],{to:"/"})};m.displayName="Components",t["default"]=m},w7sN:function(e,t,n){"use strict";var o=n("BoRD"),a=n("Uwx9"),r=n("ERkP"),c=n.n(r),l=n("9cXV"),u=n("hs5g"),i=(n("J4gX"),{"zh-CN":{loading:"\u52a0\u8f7d\u4e2d..."},"en-US":{loading:"Loading..."}}),s=e=>{var t=e.className,n=e.html,s=Object(a["a"])(e,["className","html"]),d=Object(r["useContext"])(u["a"]),m=d.locale,f=i[m];return c.a.createElement("div",Object(o["a"])({className:Object(l["a"])("markdown",t)},s,n?{dangerouslySetInnerHTML:{__html:n}}:{children:f.loading}))};s.displayName="Markdown",t["a"]=s}}]);