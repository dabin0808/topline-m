(function(e){function t(t){for(var r,a,o=t[0],i=t[1],s=t[2],f=0,d=[];f<o.length;f++)a=o[f],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==c[o]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c={app:0},u=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0000bc49":"57ccc44b","chunk-01ba2407":"9bde4e5b","chunk-05201f05":"4186938b","chunk-0a57b351":"f8337a0a","chunk-0d325021":"c527a4f5","chunk-186a1bdf":"358b2c84","chunk-4aae72c0":"060d4009","chunk-4d65fe6b":"63c3df91","chunk-5440801f":"18922d63","chunk-77b4be3a":"08e64766","chunk-1bcdccc6":"dd24878a","chunk-263e36fd":"4748eba5","chunk-a664395e":"ecf4bdc9","chunk-bcce8430":"d42e1427","chunk-f77c96c2":"bddfb98d"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-0000bc49":1,"chunk-01ba2407":1,"chunk-05201f05":1,"chunk-0a57b351":1,"chunk-0d325021":1,"chunk-186a1bdf":1,"chunk-4aae72c0":1,"chunk-4d65fe6b":1,"chunk-5440801f":1,"chunk-1bcdccc6":1,"chunk-263e36fd":1,"chunk-a664395e":1,"chunk-f77c96c2":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0000bc49":"9f2b3169","chunk-01ba2407":"549dd4b7","chunk-05201f05":"56561356","chunk-0a57b351":"8d045d3a","chunk-0d325021":"975972fe","chunk-186a1bdf":"7b5be057","chunk-4aae72c0":"8036cd51","chunk-4d65fe6b":"1846df33","chunk-5440801f":"2becf1ac","chunk-77b4be3a":"31d6cfe0","chunk-1bcdccc6":"14086f06","chunk-263e36fd":"10f5c59e","chunk-a664395e":"f28e0305","chunk-bcce8430":"31d6cfe0","chunk-f77c96c2":"9cbf3cfa"}[e]+".css",c=i.p+r,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var s=u[o],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===c))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){s=d[o],f=s.getAttribute("data-href");if(f===r||f===c)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],p.parentNode.removeChild(p),n(u)},p.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(p)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=u);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=o(e);var d=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(p);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}c[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var p=f;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4360:function(e,t,n){"use strict";n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b"),n("159b");var r=n("ade3"),a=(n("96cf"),n("1da1")),c=n("2b0e"),u=n("2f62"),o=n("5d2d"),i=n("c24f");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}c["a"].use(u["a"]),t["a"]=new u["a"].Store({state:{user:Object(o["a"])("user"),keepAlive:["TabBar"]},mutations:{setUser:function(e,t){e.user=t,Object(o["b"])("user",e.user)},setKeepAlive:function(e,t){e.keepAlive=t}},actions:{updateProfile:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.state,r=t.commit,!n.user){e.next=7;break}return e.next=4,Object(i["c"])();case 4:a=e.sent,c=a.data,r("setUser",f({},n.user,{},c.data));case 7:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{include:e.$store.state.keepAlive}},[n("router-view")],1)],1)},c=[],u={name:"App",components:{},props:{},data:function(){return{}},computed:{},watch:{},created:function(){},methods:{}},o=u,i=(n("679e"),n("2877")),s=Object(i["a"])(o,a,c,!1,null,"66c08650",null),f=s.exports,d=n("a18c"),p=n("4360"),b=(n("4de4"),n("5a0c")),l=n.n(b),h=n("4208"),m=n.n(h);n("a471");l.a.locale("zh-cn"),l.a.extend(m.a);var k=function(e){return l()().to(l()(e))},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD hh:mm:ss";return l()(e).format(t)},O={install:function(e){e.filter("relativeTime",k),e.filter("formatTime",v)}},g=(n("a4d3"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("159b"),n("ddb0"),n("433b"),n("d399")),j=(n("96cf"),n("1da1")),y=n("ade3"),w=n("7bb1"),P=n("4c93"),_=n("1cd5"),x=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){Object(y["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}Object(w["d"])("eager"),Object.keys(P).forEach((function(e){Object(w["c"])(e,T({},P[e],{message:_["a"][e]}))})),Object(w["c"])("mobile",{validate:function(e){return/^1(3|5|6|7|8|9)\d{9}$/.test(e)},message:"手机号码格式错误"}),Object(w["c"])("code",{validate:function(e){return/^\d{6}$/.test(e)},message:"验证码格式错误"});var S=function(){var e=Object(j["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.validate();case 2:if(n=e.sent,!n){e.next=5;break}return e.abrupt("return",!0);case 5:return e.next=7,x(100);case 7:r=t.errors,e.t0=regeneratorRuntime.keys(r);case 9:if((e.t1=e.t0()).done){e.next=17;break}if(a=e.t1.value,c=r[a][0],!c){e.next=15;break}return Object(g["a"])(c),e.abrupt("return",!1);case 15:e.next=9;break;case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A={install:function(e){e.component("ValidationProvider",w["b"]),e.component("ValidationObserver",w["a"]),e.prototype.$validateForm=S}},D=(n("5cfb"),n("c625"),n("b650")),R=(n("3ec1"),n("7744")),C=(n("2a53"),n("34e9")),L=(n("9eda"),n("565f")),N=(n("da02"),n("6b41")),q=(n("1318"),n("ac28")),B=(n("4627"),n("2ed4")),G=(n("558f"),n("0b33")),I=(n("8990"),n("5e46")),M=(n("93b0"),n("2bdd")),U=(n("4391"),n("58e6")),$=(n("4072"),n("2830")),z=(n("a035"),n("21ab")),J=(n("bf24"),n("44bf")),Y=(n("6e75"),n("343b")),H=(n("87d0"),n("e41f")),F=(n("b342"),n("ad06")),K=(n("1fe9"),n("d961")),V=(n("bca0"),n("543e")),Q=(n("47e2"),n("2241")),W=(n("a247"),n("9ed2")),X=(n("d554"),n("ab2c")),Z=(n("578d"),n("ee83")),ee=(n("b204"),n("7d5e")),te=(n("d233"),n("7a82")),ne=(n("cea6"),n("28a2")),re=(n("4bc8"),n("d1e1")),ae=(n("47d1"),n("9ffb"));r["a"].use(D["a"]).use(R["a"]).use(C["a"]).use(L["a"]).use(N["a"]).use(g["a"]).use(q["a"]).use(B["a"]).use(G["a"]).use(I["a"]).use(M["a"]).use(U["a"]).use($["a"]).use(z["a"]).use(J["a"]).use(Y["a"]).use(H["a"]).use(F["a"]).use(K["a"]).use(V["a"]).use(Q["a"]).use(W["a"]).use(X["a"]).use(Z["a"]).use(ee["a"]).use(te["a"]).use(ne["a"]).use(re["a"]).use(ae["a"]);n("a4b1");r["a"].use(O),r["a"].use(A),r["a"].config.productionTip=!1,new r["a"]({router:d["a"],store:p["a"],render:function(e){return e(f)}}).$mount("#app")},"5d2d":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r=function(e){return JSON.parse(window.localStorage.getItem(e))},a=function(e,t){window.localStorage.setItem(e,JSON.stringify(t))}},"679e":function(e,t,n){"use strict";var r=n("98f4"),a=n.n(r);a.a},"98f4":function(e,t,n){},a18c:function(e,t,n){"use strict";n("d3b7");var r=n("2b0e"),a=n("8c4f"),c=function(){return n.e("chunk-4d65fe6b").then(n.bind(null,"9ed6"))},u=function(){return n.e("chunk-4aae72c0").then(n.bind(null,"9d76"))},o=function(){return Promise.all([n.e("chunk-77b4be3a"),n.e("chunk-263e36fd")]).then(n.bind(null,"7abe"))},i=function(){return Promise.all([n.e("chunk-77b4be3a"),n.e("chunk-1bcdccc6")]).then(n.bind(null,"efe3"))},s=function(){return n.e("chunk-bcce8430").then(n.bind(null,"4e5d"))},f=function(){return n.e("chunk-a664395e").then(n.bind(null,"230c"))},d=function(){return n.e("chunk-0a57b351").then(n.bind(null,"9639"))},p=function(){return n.e("chunk-0d325021").then(n.bind(null,"ecac"))},b=function(){return n.e("chunk-05201f05").then(n.bind(null,"6f29"))};r["a"].use(a["a"]);var l=[{name:"login",path:"/login",component:c},{path:"/",component:u,children:[{name:"home",path:"",component:o},{name:"my",path:"/my",component:d},{name:"qa",path:"/qa",component:function(){return n.e("chunk-5440801f").then(n.bind(null,"c988"))}},{name:"video",path:"/video",component:function(){return n.e("chunk-186a1bdf").then(n.bind(null,"007b"))}}]},{name:"search",path:"/search",component:i},{name:"search-result",path:"/search/:q",component:s},{name:"article",path:"/article/:articleId",component:f,props:!0},{name:"profile",path:"/profile",component:p},{name:"chat",path:"/chat",component:b},{name:"user",path:"/user/:userId",component:function(){return n.e("chunk-01ba2407").then(n.bind(null,"e382"))},props:!0},{name:"my-article",path:"/my-article/:type?",component:function(){return n.e("chunk-0000bc49").then(n.bind(null,"4455"))},props:!0},{name:"followers",path:"/:userId/followers",component:function(){return n.e("chunk-f77c96c2").then(n.bind(null,"678b"))},props:!0}],h=new a["a"]({routes:l});t["a"]=h},a4b1:function(e,t,n){},b775:function(e,t,n){"use strict";n("d3b7"),n("9889");var r=n("f564"),a=(n("96cf"),n("1da1")),c=n("bc3a"),u=n.n(c),o=n("d604"),i=n.n(o),s=n("4360"),f=n("a18c"),d=u.a.create({baseURL:"http://ttapi.research.itcast.cn/"});function p(){f["a"].push("/login?redirect="+f["a"].currentRoute.fullPath)}d.defaults.transformResponse=[function(e){try{return i.a.parse(e)}catch(t){return{}}}],d.interceptors.request.use((function(e){var t=s["a"].state.user;return t&&(e.headers.Authorization="Bearer ".concat(t.token)),e}),(function(e){return Promise.reject(e)})),d.interceptors.response.use((function(e){return e}),function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.response||401!==t.response.status){e.next=18;break}if(n=s["a"].state.user,n&&n.refresh_token){e.next=5;break}return p(),e.abrupt("return");case 5:return e.prev=5,e.next=8,u()({method:"PUT",url:"http://ttapi.research.itcast.cn/app/v1_0/authorizations",headers:{Authorization:"Bearer ".concat(n.refresh_token)}});case 8:return a=e.sent,s["a"].commit("setUser",{token:a.data.data.token,refresh_token:n.refresh_token}),e.abrupt("return",d(t.config));case 13:e.prev=13,e.t0=e["catch"](5),p();case 16:e.next=19;break;case 18:500===t.response.status&&Object(r["a"])("服务端异常，请稍后重试");case 19:return e.abrupt("return",Promise.reject(t));case 20:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t){return e.apply(this,arguments)}}()),t["a"]=d},c24f:function(e,t,n){"use strict";n.d(t,"g",(function(){return a})),n.d(t,"f",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"i",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"j",(function(){return f})),n.d(t,"k",(function(){return d})),n.d(t,"h",(function(){return p})),n.d(t,"e",(function(){return b})),n.d(t,"b",(function(){return l}));n("d3b7"),n("25f0");var r=n("b775");function a(e){return Object(r["a"])({method:"POST",url:"/app/v1_0/authorizations",data:e})}function c(){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/channels"})}function u(e){return Object(r["a"])({method:"POST",url:"/app/v1_0/user/followings",data:{target:e}})}function o(e){return Object(r["a"])({method:"DELETE",url:"/app/v1_0/user/followings/".concat(e)})}function i(){return Object(r["a"])({method:"GET",url:"/app/v1_0/user"})}function s(e){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/profile"})}function f(e){return Object(r["a"])({method:"PATCH",url:"/app/v1_0/user/photo",data:e})}function d(e){return Object(r["a"])({method:"PATCH",url:"/app/v1_0/user/profile",data:e})}function p(e){return Object(r["a"])({method:"GET",url:"/app/v1_0/sms/codes/".concat(e)})}function b(e){return Object(r["a"])({method:"GET",url:"/app/v1_0/users/".concat(e)})}function l(e,t){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/followers",params:t,data:{target:e.toString()}})}}});
//# sourceMappingURL=app.4517554c.js.map