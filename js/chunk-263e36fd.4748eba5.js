(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-263e36fd"],{"0bab":function(t,e,n){"use strict";var a=n("8257"),i=n.n(a);i.a},2423:function(t,e,n){"use strict";n.d(e,"f",(function(){return i})),n.d(e,"e",(function(){return r})),n.d(e,"b",(function(){return s})),n.d(e,"d",(function(){return c})),n.d(e,"g",(function(){return o})),n.d(e,"h",(function(){return l})),n.d(e,"i",(function(){return u})),n.d(e,"j",(function(){return d})),n.d(e,"a",(function(){return f})),n.d(e,"c",(function(){return h}));var a=n("b775");function i(t){return Object(a["a"])({method:"GET",url:"/app/v1_1/articles",params:t})}function r(t){return Object(a["a"])({method:"GET",url:"/app/v1_0/articles/".concat(t)})}function s(t){return Object(a["a"])({method:"POST",url:"/app/v1_0/article/likings",data:{target:t}})}function c(t){return Object(a["a"])({method:"DELETE",url:"/app/v1_0/article/likings/".concat(t)})}function o(t,e){return Object(a["a"])({method:"GET",url:"/app/v1_0/users/".concat(t,"/articles"),params:e})}function l(t){return Object(a["a"])({method:"GET",url:"/app/v1_0/user/articles",params:t})}function u(t){return Object(a["a"])({method:"GET",url:"/app/v1_0/article/collections",params:t})}function d(t){return Object(a["a"])({method:"GET",url:"/app/v1_0/user/histories",params:t})}function f(t){return Object(a["a"])({method:"POST",url:"/app/v1_0/article/collections",data:{target:t}})}function h(t){return Object(a["a"])({method:"DELETE",url:"/app/v1_0/article/collections/".concat(t)})}},2909:function(t,e,n){"use strict";function a(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("e260"),n("d3b7"),n("25f0"),n("3ca3"),n("ddb0");function i(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(t){return a(t)||i(t)||r()}n.d(e,"a",(function(){return s}))},"3ca3":function(t,e,n){"use strict";var a=n("6547").charAt,i=n("69f3"),r=n("7dd0"),s="String Iterator",c=i.set,o=i.getterFor(s);r(String,"String",(function(t){c(this,{type:s,string:String(t),index:0})}),(function(){var t,e=o(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=a(n,i),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,n){"use strict";var a=n("f8c2"),i=n("7b0b"),r=n("9bdd"),s=n("e95a"),c=n("50c4"),o=n("8418"),l=n("35a1");t.exports=function(t){var e,n,u,d,f,h=i(t),p="function"==typeof this?this:Array,v=arguments.length,m=v>1?arguments[1]:void 0,b=void 0!==m,g=0,_=l(h);if(b&&(m=a(m,v>2?arguments[2]:void 0,2)),void 0==_||p==Array&&s(_))for(e=c(h.length),n=new p(e);e>g;g++)o(n,g,b?m(h[g],g):h[g]);else for(d=_.call(h),f=d.next,n=new p;!(u=f.call(d)).done;g++)o(n,g,b?r(d,m,[u.value,g],!0):u.value);return n.length=g,n}},"63b3":function(t,e,n){},"7abe":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home page-container"},[n("div",{staticClass:"nav-bar"},[n("div",{staticClass:"logo"}),n("van-button",{staticClass:"search-btn",attrs:{round:"",type:"info",size:"small",icon:"search"},on:{click:function(e){return t.$router.push("/search")}}},[t._v("搜索")])],1),n("van-tabs",{staticClass:"fixed-tabs",attrs:{swipeable:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[t._l(t.channels,(function(t){return n("van-tab",{key:t.id,attrs:{title:t.name}},[n("article-list",{attrs:{channel:t}})],1)})),n("div",{staticClass:"wap-nav",attrs:{slot:"nav-right"},on:{click:function(e){t.isChannelEditShow=!0}},slot:"nav-right"},[n("van-icon",{attrs:{name:"wap-nav"}})],1)],2),n("van-popup",{style:{height:"95%"},attrs:{position:"bottom",round:""},model:{value:t.isChannelEditShow,callback:function(e){t.isChannelEditShow=e},expression:"isChannelEditShow"}},[n("van-nav-bar",{attrs:{title:"编辑频道"}},[n("van-icon",{attrs:{slot:"left",name:"cross",size:"20"},on:{click:function(e){t.isChannelEditShow=!1}},slot:"left"})],1),n("channel-edit",{attrs:{"user-channels":t.channels},on:{close:function(e){t.isChannelEditShow=!1}},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}})],1)],1)},i=[],r=(n("159b"),n("96cf"),n("1da1")),s=n("c24f"),c=n("5d2d"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.refreshLoading,callback:function(e){t.refreshLoading=e},expression:"refreshLoading"}},[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(t,e){return n("article-item",{key:e,attrs:{article:t}})})),1)],1)},l=[],u=n("2909"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return 0===t.article.cover.type?n("div",{staticClass:"article-item article-item-0",on:{click:t.onItemClick}},[n("div",{staticClass:"title"},[t._v(t._s(t.article.title))]),n("div",{staticClass:"label"},[n("span",[t._v(t._s(t.article.aut_name))]),n("span",[t._v(t._s(t.article.comm_count)+"评论")]),n("span",[t._v(t._s(t._f("relativeTime")(t.article.pubdate)))])])]):3===t.article.cover.type?n("div",{staticClass:"article-item article-item-3",on:{click:t.onItemClick}},[n("div",{staticClass:"title van-multi-ellipsis--l2"},[t._v(t._s(t.article.title))]),n("div",{staticClass:"cover"},t._l(t.article.cover.images,(function(e,a){return n("van-image",{key:a,staticClass:"cover-item",attrs:{fit:"cover",src:t.getPlaceholderImg(),"lazy-load":""}})})),1),n("div",{staticClass:"label"},[n("span",[t._v(t._s(t.article.aut_name))]),n("span",[t._v(t._s(t.article.comm_count)+"评论")]),n("span",[t._v(t._s(t._f("relativeTime")(t.article.pubdate)))])])]):n("div",{staticClass:"article-item article-item-1",on:{click:t.onItemClick}},[n("div",{staticClass:"title-label"},[n("div",{staticClass:"title van-multi-ellipsis--l3"},[t._v(t._s(t.article.title))]),n("div",{staticClass:"label"},[n("span",[t._v(t._s(t.article.aut_name))]),n("span",[t._v(t._s(t.article.comm_count)+"评论")]),n("span",[t._v(t._s(t._f("relativeTime")(t.article.pubdate)))])])]),n("van-image",{staticClass:"cover",attrs:{fit:"cover",src:t.getPlaceholderImg(),"lazy-load":""}})],1)},f=[],h=(n("d3b7"),n("25f0"),n("2ef0")),p={name:"ArticleInfo",components:{},props:{article:{type:Object,required:!0}},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{onItemClick:function(){this.$router.push({name:"article",params:{articleId:this.article.art_id.toString()}})},getPlaceholderImg:function(){return"http://lipengzhou.gitee.io/web-material/cover/".concat(Object(h["random"])(1,100),".jpeg")}}},v=p,m=(n("acb2"),n("2877")),b=Object(m["a"])(v,d,f,!1,null,"5ed78631",null),g=b.exports,_=n("2423"),C={name:"",components:{ArticleItem:g},props:{channel:{type:Object,required:!0}},data:function(){return{loading:!1,refreshLoading:!1,list:[],finished:!1,timestamp:null}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{onLoad:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(_["f"])({channel_id:this.channel.id,timestamp:this.timestamp||Date.now(),with_top:1});case 2:n=t.sent,a=n.data,i=a.data.results,(e=this.list).push.apply(e,Object(u["a"])(i)),this.loading=!1,i.length?this.timestamp=a.data.pre_timestamp:this.finished=!0;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onRefresh:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n,a,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(_["f"])({channel_id:this.channel.id,timestamp:Date.now(),with_top:1});case 2:n=t.sent,a=n.data,i=a.data.results,(e=this.list).unshift.apply(e,Object(u["a"])(i)),this.refreshLoading=!1,r=i.length?"更新了".concat(i.length,"条数据"):"暂无数据更新",this.$toast(r);case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},y=C,w=Object(m["a"])(y,o,l,!1,null,"5b0a4995",null),E=w.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"channel-container"},[n("van-cell",{attrs:{border:!1}},[n("div",{staticClass:"title-wrap",attrs:{slot:"title"},slot:"title"},[n("span",{staticClass:"title"},[t._v("我的频道")]),n("span",{staticClass:"tip"},[t._v("点击进入频道")])]),n("van-button",{attrs:{type:"danger",size:"mini",round:"",color:"#e5615b"},on:{click:function(e){t.isEdit=!t.isEdit}}},[t._v(t._s(t.isEdit?"完成":"编辑"))])],1),n("van-grid",{attrs:{gutter:10,clickable:""}},t._l(t.userChannels,(function(e,a){return n("van-grid-item",{key:e.id,staticClass:"channel-item",on:{click:function(n){return t.onChannelActiveOrDelete(e,a)}}},[n("span",{staticClass:"text",class:{active:t.value===a}},[t._v(t._s(e.name))]),n("van-icon",{directives:[{name:"show",rawName:"v-show",value:t.isEdit&&"推荐"!==e.name,expression:"isEdit && channel.name !== '推荐'"}],staticClass:"close-icon",attrs:{name:"close"}})],1)})),1),n("van-cell",{attrs:{border:!1}},[n("div",{staticClass:"title-wrap",attrs:{slot:"title"},slot:"title"},[n("span",{staticClass:"title"},[t._v("推荐频道")]),n("span",{staticClass:"tip"},[t._v("点击添加频道")])])]),n("van-grid",{attrs:{gutter:10,clickable:""}},t._l(t.recommendChannels,(function(e){return n("van-grid-item",{key:e.id,staticClass:"channel-item",on:{click:function(n){return t.onChannelAdd(e)}}},[n("span",{staticClass:"text"},[t._v(t._s(e.name))])])})),1)],1)},k=[],j=(n("7db0"),n("a434"),n("b0c0"),n("a9e3"),n("b775"));function A(){return Object(j["a"])({method:"GET",url:"/app/v1_0/channels"})}var I={name:"ChannelEdit",components:{},props:{userChannels:{type:Array,required:!0},value:{type:Number,default:0}},data:function(){return{isEdit:!1,allChannels:[]}},computed:{recommendChannels:function(){var t=this,e=[];return this.allChannels.forEach((function(n){var a=t.userChannels.find((function(t){return t.id===n.id}));a||e.push(n)})),e}},watch:{userChannels:function(){Object(c["b"])("channels",this.userChannels)}},created:function(){this.loadAllChannels()},mounted:function(){},methods:{onChannelActiveOrDelete:function(t,e){this.isEdit&&"推荐"!==t.name?this.userChannels.splice(e,1):(this.$emit("input",e),this.$emit("close"))},onChannelAdd:function(t){this.userChannels.push(t)},loadAllChannels:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,A();case 2:e=t.sent,n=e.data,this.allChannels=n.data.channels;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},x=I,S=(n("e9fc"),Object(m["a"])(x,O,k,!1,null,"754f5d1e",null)),N=S.exports,T={name:"HomePage",components:{ArticleList:E,ChannelEdit:N},props:{},data:function(){return{active:0,isChannelEditShow:!1,channels:[]}},computed:{},watch:{},created:function(){this.loadUserChannels()},methods:{loadUserChannels:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=[],n=Object(c["a"])("channels"),!n){t.next=6;break}e=n,t.next=12;break;case 6:return t.next=8,Object(s["f"])();case 8:a=t.sent,i=a.data.data.channels,i.forEach((function(t){t.articles=[],t.finished=!1,t.timestamp=null})),e=i;case 12:this.channels=e;case 13:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},L=T,R=(n("0bab"),Object(m["a"])(L,a,i,!1,null,"6275ee05",null));e["default"]=R.exports},"7db0":function(t,e,n){"use strict";var a=n("23e7"),i=n("b727").find,r=n("44d2"),s="find",c=!0;s in[]&&Array(1)[s]((function(){c=!1})),a({target:"Array",proto:!0,forced:c},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(s)},8257:function(t,e,n){},a630:function(t,e,n){var a=n("23e7"),i=n("4df4"),r=n("1c7e"),s=!r((function(t){Array.from(t)}));a({target:"Array",stat:!0,forced:s},{from:i})},a9e3:function(t,e,n){"use strict";var a=n("83ab"),i=n("da84"),r=n("94ca"),s=n("6eeb"),c=n("5135"),o=n("c6b6"),l=n("7156"),u=n("c04e"),d=n("d039"),f=n("7c73"),h=n("241c").f,p=n("06cf").f,v=n("9bf2").f,m=n("58a8").trim,b="Number",g=i[b],_=g.prototype,C=o(f(_))==b,y=function(t){var e,n,a,i,r,s,c,o,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=m(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+l}for(r=l.slice(2),s=r.length,c=0;c<s;c++)if(o=r.charCodeAt(c),o<48||o>i)return NaN;return parseInt(r,a)}return+l};if(r(b,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var w,E=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof E&&(C?d((function(){_.valueOf.call(n)})):o(n)!=b)?l(new g(y(e)),n,E):y(e)},O=a?h(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;O.length>k;k++)c(g,w=O[k])&&!c(E,w)&&v(E,w,p(g,w));E.prototype=_,_.constructor=E,s(i,b,E)}},acb2:function(t,e,n){"use strict";var a=n("b335"),i=n.n(a);i.a},b0c0:function(t,e,n){var a=n("83ab"),i=n("9bf2").f,r=Function.prototype,s=r.toString,c=/^\s*function ([^ (]*)/,o="name";!a||o in r||i(r,o,{configurable:!0,get:function(){try{return s.call(this).match(c)[1]}catch(t){return""}}})},b335:function(t,e,n){},d28b:function(t,e,n){var a=n("746f");a("iterator")},e01a:function(t,e,n){"use strict";var a=n("23e7"),i=n("83ab"),r=n("da84"),s=n("5135"),c=n("861d"),o=n("9bf2").f,l=n("e893"),u=r.Symbol;if(i&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};l(f,u);var h=f.prototype=u.prototype;h.constructor=f;var p=h.toString,v="Symbol(test)"==String(u("test")),m=/^Symbol\((.*)\)[^)]+$/;o(h,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=p.call(t);if(s(d,t))return"";var n=v?e.slice(7,-1):e.replace(m,"$1");return""===n?void 0:n}}),a({global:!0,forced:!0},{Symbol:f})}},e9fc:function(t,e,n){"use strict";var a=n("63b3"),i=n.n(a);i.a}}]);
//# sourceMappingURL=chunk-263e36fd.4748eba5.js.map