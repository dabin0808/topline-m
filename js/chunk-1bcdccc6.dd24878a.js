(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1bcdccc6"],{"14c3":function(e,t,n){var r=n("c6b6"),c=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var i=n.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return c.call(e,t)}},1925:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n("b775");function c(e){return Object(r["a"])({method:"GET",url:"/app/v1_0/suggestion",params:{q:e}})}function i(e){return Object(r["a"])({method:"GET",url:"/app/v1_0/search",params:e})}},"44e7":function(e,t,n){var r=n("861d"),c=n("c6b6"),i=n("b622"),a=i("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==c(e))}},"498a":function(e,t,n){"use strict";var r=n("23e7"),c=n("58a8").trim,i=n("e070");r({target:"String",proto:!0,forced:i("trim")},{trim:function(){return c(this)}})},"4d63":function(e,t,n){var r=n("83ab"),c=n("da84"),i=n("94ca"),a=n("7156"),o=n("9bf2").f,s=n("241c").f,u=n("44e7"),l=n("ad6d"),f=n("9f7f"),h=n("6eeb"),p=n("d039"),d=n("69f3").set,v=n("2626"),x=n("b622"),g=x("match"),b=c.RegExp,w=b.prototype,m=/a/g,E=/a/g,S=new b(m)!==m,y=f.UNSUPPORTED_Y,R=r&&i("RegExp",!S||y||p((function(){return E[g]=!1,b(m)!=m||b(E)==E||"/a/i"!=b(m,"i")})));if(R){var O=function(e,t){var n,r=this instanceof O,c=u(e),i=void 0===t;if(!r&&c&&e.constructor===O&&i)return e;S?c&&!i&&(e=e.source):e instanceof O&&(i&&(t=l.call(e)),e=e.source),y&&(n=!!t&&t.indexOf("y")>-1,n&&(t=t.replace(/y/g,"")));var o=a(S?new b(e,t):b(e,t),r?this:w,O);return y&&n&&d(o,{sticky:n}),o},T=function(e){e in O||o(O,e,{configurable:!0,get:function(){return b[e]},set:function(t){b[e]=t}})},k=s(b),_=0;while(k.length>_)T(k[_++]);w.constructor=O,O.prototype=w,h(c,"RegExp",O)}v("RegExp")},5319:function(e,t,n){"use strict";var r=n("d784"),c=n("825a"),i=n("7b0b"),a=n("50c4"),o=n("a691"),s=n("1d80"),u=n("8aa5"),l=n("14c3"),f=Math.max,h=Math.min,p=Math.floor,d=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,x=function(e){return void 0===e?e:String(e)};r("replace",2,(function(e,t,n,r){return[function(n,r){var c=s(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,c,r):t.call(String(c),n,r)},function(e,i){if(r.REPLACE_KEEPS_$0||"string"===typeof i&&-1===i.indexOf("$0")){var s=n(t,e,this,i);if(s.done)return s.value}var p=c(e),d=String(this),v="function"===typeof i;v||(i=String(i));var b=p.global;if(b){var w=p.unicode;p.lastIndex=0}var m=[];while(1){var E=l(p,d);if(null===E)break;if(m.push(E),!b)break;var S=String(E[0]);""===S&&(p.lastIndex=u(d,a(p.lastIndex),w))}for(var y="",R=0,O=0;O<m.length;O++){E=m[O];for(var T=String(E[0]),k=f(h(o(E.index),d.length),0),_=[],I=1;I<E.length;I++)_.push(x(E[I]));var $=E.groups;if(v){var P=[T].concat(_,k,d);void 0!==$&&P.push($);var D=String(i.apply(void 0,P))}else D=g(T,d,k,_,$,i);k>=R&&(y+=d.slice(R,k)+D,R=k+T.length)}return y+d.slice(R)}];function g(e,n,r,c,a,o){var s=r+e.length,u=c.length,l=v;return void 0!==a&&(a=i(a),l=d),t.call(o,l,(function(t,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,r);case"'":return n.slice(s);case"<":o=a[i.slice(1,-1)];break;default:var l=+i;if(0===l)return t;if(l>u){var f=p(l/10);return 0===f?t:f<=u?void 0===c[f-1]?i.charAt(1):c[f-1]+i.charAt(1):t}o=c[l-1]}return void 0===o?"":o}))}}))},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("ad6d"),c=n("9f7f"),i=RegExp.prototype.exec,a=String.prototype.replace,o=i,s=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=c.UNSUPPORTED_Y||c.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],f=s||l||u;f&&(o=function(e){var t,n,c,o,f=this,h=u&&f.sticky,p=r.call(f),d=f.source,v=0,x=e;return h&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),x=String(e).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==e[f.lastIndex-1])&&(d="(?: "+d+")",x=" "+x,v++),n=new RegExp("^(?:"+d+")",p)),l&&(n=new RegExp("^"+d+"$(?!\\s)",p)),s&&(t=f.lastIndex),c=i.call(h?n:f,x),h?c?(c.input=c.input.slice(v),c[0]=c[0].slice(v),c.index=f.lastIndex,f.lastIndex+=c[0].length):f.lastIndex=0:s&&c&&(f.lastIndex=f.global?c.index+c[0].length:t),l&&c&&c.length>1&&a.call(c[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(c[o]=void 0)})),c}),e.exports=o},"9cef":function(e,t,n){},"9f7f":function(e,t,n){"use strict";var r=n("d039");function c(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=c("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=c("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),c=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==c},{exec:c})},bc77:function(e,t,n){"use strict";var r=n("9cef"),c=n.n(r);c.a},c975:function(e,t,n){"use strict";var r=n("23e7"),c=n("4d64").indexOf,i=n("b301"),a=[].indexOf,o=!!a&&1/[1].indexOf(1,-0)<0,s=i("indexOf");r({target:"Array",proto:!0,forced:o||s},{indexOf:function(e){return o?a.apply(this,arguments)||0:c(this,e,arguments.length>1?arguments[1]:void 0)}})},d784:function(e,t,n){"use strict";var r=n("6eeb"),c=n("d039"),i=n("b622"),a=n("9263"),o=n("9112"),s=i("species"),u=!c((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),f=!c((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,h){var p=i(e),d=!c((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),v=d&&!c((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return t=!0,null},n[p](""),!t}));if(!d||!v||"replace"===e&&(!u||!l)||"split"===e&&!f){var x=/./[p],g=n(p,""[e],(function(e,t,n,r,c){return t.exec===a?d&&!c?{done:!0,value:x.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l}),b=g[0],w=g[1];r(String.prototype,e,b),r(RegExp.prototype,p,2==t?function(e,t){return w.call(e,this,t)}:function(e){return w.call(e,this)})}h&&o(RegExp.prototype[p],"sham",!0)}},e070:function(e,t,n){var r=n("d039"),c=n("5899"),i="​᠎";e.exports=function(e){return r((function(){return!!c[e]()||i[e]()!=i||c[e].name!==e}))}},efe3:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-container"},[n("form",{attrs:{action:"/"}},[n("van-search",{attrs:{"show-action":"",placeholder:"请输入搜索关键词"},on:{click:function(t){return e.onSearch(e.searchText)},input:e.onSearchInput},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}},[n("div",{staticClass:"cancel",attrs:{slot:"action"},on:{click:function(t){return e.$router.back()}},slot:"action"},[e._v("取消")])])],1),n("van-cell-group",{directives:[{name:"show",rawName:"v-show",value:e.searchText,expression:"searchText"}]},e._l(e.suggestions,(function(t){return n("van-cell",{key:t,attrs:{icon:"search"},on:{click:function(n){return e.onSearch(t)}}},[n("div",{attrs:{slot:"title"},domProps:{innerHTML:e._s(e.highlight(t))},slot:"title"})])})),1),n("van-cell-group",{directives:[{name:"show",rawName:"v-show",value:!e.searchText,expression:"!searchText"}]},[n("van-cell",{attrs:{title:"历史记录"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.isDeleteShow,expression:"isDeleteShow"}]},[n("span",{on:{click:function(t){e.searchHistories=[]}}},[e._v("全部删除")]),e._v(" "),n("span",{on:{click:function(t){e.isDeleteShow=!1}}},[e._v("完成")])]),n("van-icon",{directives:[{name:"show",rawName:"v-show",value:!e.isDeleteShow,expression:"!isDeleteShow"}],attrs:{name:"delete"},on:{click:function(t){e.isDeleteShow=!0}}})],1),e._l(e.searchHistories,(function(t,r){return n("van-cell",{key:t,attrs:{title:t},on:{click:function(n){return e.onSearch(t)}}},[n("van-icon",{directives:[{name:"show",rawName:"v-show",value:e.isDeleteShow,expression:"isDeleteShow"}],attrs:{name:"close"},on:{click:function(t){return t.stopPropagation(),e.searchHistories.splice(r,1)}}})],1)}))],2)],1)},c=[],i=(n("c975"),n("a434"),n("4d63"),n("ac1f"),n("25f0"),n("5319"),n("498a"),n("96cf"),n("1da1")),a=n("1925"),o=n("5d2d"),s=n("2ef0"),u={name:"SearchPage",components:{},props:{},data:function(){return{str:'hello <span style="color: red">world</span>',searchText:"",suggestions:[],searchHistories:Object(o["a"])("search-histories")||[],isDeleteShow:!1}},computed:{},watch:{searchHistories:function(){Object(o["b"])("search-histories",this.searchHistories)}},created:function(){},methods:{onSearch:function(e){if(e.trim()){var t=this.searchHistories.indexOf(e);-1!==t&&this.searchHistories.splice(t,1),this.searchHistories.unshift(e),Object(o["b"])("search-histories",this.searchHistories),this.$router.push("/search/".concat(e))}},onSearchInput:Object(s["debounce"])(Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.searchText.trim(),t){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,Object(a["b"])(this.searchText);case 5:n=e.sent,this.suggestions=n.data.data.options;case 7:case"end":return e.stop()}}),e,this)}))),300),highlight:function(e){var t=new RegExp(this.searchText,"ig");return e.replace(t,'<span style="color: red">'.concat(this.searchText,"</span>"))}}},l=u,f=(n("bc77"),n("2877")),h=Object(f["a"])(l,r,c,!1,null,"748d6388",null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-1bcdccc6.dd24878a.js.map