(function(t){function n(n){for(var a,i,o=n[0],c=n[1],l=n[2],p=0,d=[];p<o.length;p++)i=o[p],r[i]&&d.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(n);while(d.length)d.shift()();return s.push.apply(s,l||[]),e()}function e(){for(var t,n=0;n<s.length;n++){for(var e=s[n],a=!0,o=1;o<e.length;o++){var c=e[o];0!==r[c]&&(a=!1)}a&&(s.splice(n--,1),t=i(i.s=e[0]))}return t}var a={},r={1:0},s=[];function i(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=a,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)i.d(e,a,function(n){return t[n]}.bind(null,a));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=n,o=o.slice();for(var l=0;l<o.length;l++)n(o[l]);var u=c;s.push([9,0]),e()})({"02dS":function(t,n,e){"use strict";var a=e("glZn"),r=e.n(a);r.a},"53wb":function(t,n,e){"use strict";var a=e("ePpL"),r=e.n(a);r.a},"7X6E":function(t,n,e){},9:function(t,n,e){t.exports=e("Vtdi")},JaCR:function(t,n,e){},L2bO:function(t,n,e){"use strict";var a=e("yptG"),r=e.n(a);r.a},PZoM:function(t,n,e){"use strict";var a=e("JaCR"),r=e.n(a);r.a},Qv4F:function(t,n,e){"use strict";var a=e("bXZg"),r=e.n(a);r.a},Vtdi:function(t,n,e){"use strict";e.r(n);e("VRzm");var a=e("Kw5r"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("SiteHeader"),e("div",{staticClass:"container"},[e("BitstampBtc"),e("BitstampBch"),e("BitstampEth"),e("BitstampXrp"),e("BitstampLtcoin"),e("SiteFooter")],1)],1)},s=[],i=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("header",{staticClass:"site-header"},[e("h1",[e("strong",[t._v("WHATCoin")]),t._v(" WHICHCoin")])])])}],c={name:"SiteHeader"},l=c,u=(e("rLBh"),e("KHd+")),p=Object(u["a"])(l,i,o,!1,null,"05b0d51f",null),d=p.exports,f=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"block bitstamp animated fadeIn"},[t.errored?e("section",[e("p",[t._v("Oops, try reloading the page")])]):e("section",[t.loading?e("div",[t._v("\n        Loading...\n      ")]):e("div",[e("a",{staticClass:"block__btn--std animated flipInX",attrs:{href:"#"}},[e("span",{staticClass:"block__btn--coin"},[t._v("BTC")]),e("span",{staticClass:"block__btn--currency"},[t._v("$")]),e("span",{staticClass:"block__btn--price"},[t._v(t._s(t.results.high))])])])])])},h=[],v=e("vDqi"),_=e.n(v),b={name:"BitstampBtc",data:function(){return{results:null,errors:[],errored:!1,loading:!0}},mounted:function(){var t=this,n="btcusd",e="https://cors-anywhere.herokuapp.com/",a="https://www.bitstamp.net/api/v2/ticker/";_.a.get(e+a+n).then(function(n){t.results=n.data}).catch(function(n){var e=n;t.errors.push(e)}).finally(function(){t.loading=!1})}},m=b,g=(e("02dS"),Object(u["a"])(m,f,h,!1,null,"a3edab46",null)),y=g.exports,k=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"block bitstamp animated fadeIn"},[t.errored?e("section",[e("p",[t._v("Oops, try reloading the page")])]):e("section",[t.loading?e("div",[t._v("\n        Loading...\n      ")]):e("div",[e("a",{staticClass:"block__btn--std animated flipInX",attrs:{href:"#"}},[e("span",{staticClass:"block__btn--coin"},[t._v("BCH")]),e("span",{staticClass:"block__btn--currency"},[t._v("$")]),e("span",{staticClass:"block__btn--price"},[t._v(t._s(t.results.high))])])])])])},w=[],C={name:"BitstampBtc",data:function(){return{results:null,errors:[],errored:!1,loading:!0}},mounted:function(){var t=this,n="bchusd",e="https://cors-anywhere.herokuapp.com/",a="https://www.bitstamp.net/api/v2/ticker/";_.a.get(e+a+n).then(function(n){t.results=n.data}).catch(function(n){var e=n;t.errors.push(e)}).finally(function(){t.loading=!1})}},B=C,O=(e("Z/or"),Object(u["a"])(B,k,w,!1,null,"ac6090da",null)),E=O.exports,$=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"block bitstamp animated fadeIn"},[t.errored?e("section",[e("p",[t._v("Oops, try reloading the page")])]):e("section",[t.loading?e("div",[t._v("\n        Loading...\n      ")]):e("div",[e("a",{staticClass:"block__btn--std animated flipInX",attrs:{href:"#"}},[e("span",{staticClass:"block__btn--coin"},[t._v("ETH")]),e("span",{staticClass:"block__btn--currency"},[t._v("$")]),e("span",{staticClass:"block__btn--price"},[t._v(t._s(t.results.high))])])])])])},j=[],x={name:"BitstampEth",data:function(){return{results:null,errors:[],errored:!1,loading:!0}},mounted:function(){var t=this,n="ethusd",e="https://cors-anywhere.herokuapp.com/",a="https://www.bitstamp.net/api/v2/ticker/";_.a.get(e+a+n).then(function(n){t.results=n.data}).catch(function(n){var e=n;t.errors.push(e)}).finally(function(){t.loading=!1})}},I=x,L=(e("PZoM"),Object(u["a"])(I,$,j,!1,null,"506dd826",null)),P=L.exports,S=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"block bitstamp animated fadeIn"},[t.errored?e("section",[e("p",[t._v("Oops, try reloading the page")])]):e("section",[t.loading?e("div",[t._v("\n        Loading...\n      ")]):e("div",[e("a",{staticClass:"block__btn--std animated flipInX",attrs:{href:"#"}},[e("span",{staticClass:"block__btn--coin"},[t._v("XRP")]),e("span",{staticClass:"block__btn--currency"},[t._v("$")]),e("span",{staticClass:"block__btn--price"},[t._v(t._s(t.results.high))])])])])])},X=[],H={name:"BitstampEth",data:function(){return{results:null,errors:[],errored:!1,loading:!0}},mounted:function(){var t=this,n="xrpusd",e="https://cors-anywhere.herokuapp.com/",a="https://www.bitstamp.net/api/v2/ticker/";_.a.get(e+a+n).then(function(n){t.results=n.data}).catch(function(n){var e=n;t.errors.push(e)}).finally(function(){t.loading=!1})}},T=H,Z=(e("53wb"),Object(u["a"])(T,S,X,!1,null,"4e2dc86a",null)),M=Z.exports,F=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"block bitstamp animated fadeIn"},[t.errored?e("section",[e("p",[t._v("Oops, try reloading the page")])]):e("section",[t.loading?e("div",[t._v("\n        Loading...\n      ")]):e("div",[e("a",{staticClass:"block__btn--std animated flipInX",attrs:{href:"#"}},[e("span",{staticClass:"block__btn--coin"},[t._v("LITECOIN")]),e("span",{staticClass:"block__btn--currency"},[t._v("$")]),e("span",{staticClass:"block__btn--price"},[t._v(t._s(t.results.high))])])])])])},q=[],A={name:"BitstampEth",data:function(){return{results:null,errors:[],errored:!1,loading:!0}},mounted:function(){var t=this,n="ltcusd",e="https://cors-anywhere.herokuapp.com/",a="https://www.bitstamp.net/api/v2/ticker/";_.a.get(e+a+n).then(function(n){t.results=n.data}).catch(function(n){var e=n;t.errors.push(e)}).finally(function(){t.loading=!1})}},J=A,R=(e("q2/u"),Object(u["a"])(J,F,q,!1,null,"8a44779e",null)),V=R.exports,G=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("section",{staticClass:"site-footer"},[e("div",[e("p",[t._v("\n                The Prices are realtime data, sourced from the respective providers public API. \n                "),e("a",{attrs:{href:"#"}},[t._v("Click here")]),t._v(" to see a list.\n            ")])]),e("div",[e("p",[t._v("Built by Mannuel Ferreira "),e("a",{attrs:{href:"https://themwebs.me/about-me/"}},[t._v("say hello")])])])])])}],N={name:"SiteFooter"},Q=N,W=(e("L2bO"),Object(u["a"])(Q,G,K,!1,null,null,null)),z=W.exports,D={name:"app",components:{SiteHeader:d,BitstampBtc:y,BitstampBch:E,BitstampEth:P,BitstampXrp:M,BitstampLtcoin:V,SiteFooter:z}},U=D,Y=(e("Qv4F"),Object(u["a"])(U,r,s,!1,null,null,null)),tt=Y.exports;a["a"].config.productionTip=!1,a["a"].prototype.$appName="what-coin-which-coin",new a["a"]({render:function(t){return t(tt)}}).$mount("#app")},"Z/or":function(t,n,e){"use strict";var a=e("wE0g"),r=e.n(a);r.a},bXZg:function(t,n,e){},ePpL:function(t,n,e){},glZn:function(t,n,e){},"q2/u":function(t,n,e){"use strict";var a=e("7X6E"),r=e.n(a);r.a},qAl4:function(t,n,e){},rLBh:function(t,n,e){"use strict";var a=e("qAl4"),r=e.n(a);r.a},wE0g:function(t,n,e){},yptG:function(t,n,e){}});
//# sourceMappingURL=app.824ee461.js.map