(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[46],{"/VAb":function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function r(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}n.d(t,"a",(function(){return r}))},"5p7d":function(e,t,n){},"9A+y":function(e,t,n){"use strict";var a=n("ERkP"),r=n("GRM5");function c(e,t){var n=Object(a["useContext"])(r["a"]),c=n.locale,o=Object(a["useMemo"])((()=>e[c]||e[t]),[c,e,t]);return[o]}t["a"]=c},EEr5:function(e,t,n){"use strict";var a=n("BoRD"),r=n("Uwx9"),c=n("ERkP"),o=n.n(c),i=n("9cXV"),l=(n("5p7d"),Object(i["b"])("demo-block")),s=e=>{var t=e.className,n=e.title,c=e.children,s=e.cardMode,d=Object(r["a"])(e,["className","title","children","cardMode"]);return o.a.createElement(o.a.StrictMode,null,o.a.createElement("div",Object(a["a"])({className:Object(i["a"])(l({"card-mode":s}),t)},d),n&&o.a.createElement("div",{className:l("title")},n),o.a.createElement("div",{className:l("content")},c)))};s.displayName="DemoBlock",t["a"]=s},"jem/":function(e,t,n){"use strict";function a(e){if(Array.isArray(e))return e}function r(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done);a=!0)if(n.push(o.value),t&&n.length===t)break}catch(l){r=!0,c=l}finally{try{a||null==i["return"]||i["return"]()}finally{if(r)throw c}}return n}}n.d(t,"a",(function(){return i}));var c=n("/VAb");function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){return a(e)||r(e,t)||Object(c["a"])(e,t)||o()}},pg56:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var a=n("jem/"),r=n("ERkP"),c=n.n(r),o=n("BoRD"),i=n("Uwx9"),l=n("vWRp"),s=n("9cXV"),d="fnx-divider",u=Object(s["b"])(d),m={dashed:!1,hairline:!0,contentPosition:"center"},f=Object(r["forwardRef"])(((e,t)=>{var n=Object(l["a"])(m,e),r=Object(a["a"])(n,2),d=r[0],f=d.dashed,b=d.hairline,h=d.contentPosition,v=r[1],y=v.className,E=v.children,p=Object(i["a"])(v,["className","children"]);return c.a.createElement("div",Object(o["a"])({className:Object(s["a"])(u({dashed:f,hairline:b,["content-".concat(h)]:null!=E}),y)},p,{ref:t}),E)}));f.displayName="Divider";var b=f,h=n("EEr5"),v=n("9A+y"),y={"zh-CN":{basicUsage:"\u57fa\u7840\u7528\u6cd5",text:"\u6587\u672c",dashed:"\u865a\u7ebf",withText:"\u5c55\u793a\u6587\u672c",contentPosition:"\u5185\u5bb9\u4f4d\u7f6e",customStyle:"\u81ea\u5b9a\u4e49\u6837\u5f0f"},"en-US":{basicUsage:"Basic Usage",text:"Text",dashed:"Dashed",withText:"With Text",contentPosition:"Content Position",customStyle:"Custom Style"}};function E(){var e=Object(v["a"])(y,"en-US"),t=Object(a["a"])(e,1),n=t[0];return c.a.createElement(c.a.Fragment,null,c.a.createElement(h["a"],{cardMode:!0,title:n.basicUsage},c.a.createElement(b,null)),c.a.createElement(h["a"],{cardMode:!0,title:n.withText},c.a.createElement(b,null,n.text)),c.a.createElement(h["a"],{cardMode:!0,title:n.contentPosition},c.a.createElement(b,{contentPosition:"left"},n.text),c.a.createElement(b,{contentPosition:"right"},n.text),c.a.createElement(b,{contentPosition:"center"},n.text)),c.a.createElement(h["a"],{cardMode:!0,title:n.dashed},c.a.createElement(b,{dashed:!0,hairline:!1},n.text)),c.a.createElement(h["a"],{cardMode:!0,title:n.customStyle},c.a.createElement(b,{style:{borderColor:"var(--fnx-primary-color)",color:"var(--fnx-primary-color)",padding:"0 16px"}},n.text)))}},vWRp:function(e,t,n){"use strict";var a=n("BcGY");function r(e,t){var n={},r=Object(a["a"])({},t),c=e;for(var o in c)n[o]=void 0!==r[o]?r[o]:c[o],delete r[o];return[n,r]}t["a"]=r}}]);