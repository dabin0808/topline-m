(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d65fe6b"],{"14c3":function(e,t,n){var r=n("c6b6"),a=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var i=n.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"2909f":function(e,t,n){},5319:function(e,t,n){"use strict";var r=n("d784"),a=n("825a"),i=n("7b0b"),o=n("50c4"),c=n("a691"),s=n("1d80"),u=n("8aa5"),l=n("14c3"),f=Math.max,d=Math.min,v=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,g=function(e){return void 0===e?e:String(e)};r("replace",2,(function(e,t,n,r){return[function(n,r){var a=s(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,a,r):t.call(String(a),n,r)},function(e,i){if(r.REPLACE_KEEPS_$0||"string"===typeof i&&-1===i.indexOf("$0")){var s=n(t,e,this,i);if(s.done)return s.value}var v=a(e),p=String(this),h="function"===typeof i;h||(i=String(i));var b=v.global;if(b){var m=v.unicode;v.lastIndex=0}var $=[];while(1){var E=l(v,p);if(null===E)break;if($.push(E),!b)break;var y=String(E[0]);""===y&&(v.lastIndex=u(p,o(v.lastIndex),m))}for(var S="",w=0,R=0;R<$.length;R++){E=$[R];for(var k=String(E[0]),I=f(d(c(E.index),p.length),0),O=[],_=1;_<E.length;_++)O.push(g(E[_]));var A=E.groups;if(h){var C=[k].concat(O,I,p);void 0!==A&&C.push(A);var P=String(i.apply(void 0,C))}else P=x(k,p,I,O,A,i);I>=w&&(S+=p.slice(w,I)+P,w=I+k.length)}return S+p.slice(w)}];function x(e,n,r,a,o,c){var s=r+e.length,u=a.length,l=h;return void 0!==o&&(o=i(o),l=p),t.call(c,l,(function(t,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,r);case"'":return n.slice(s);case"<":c=o[i.slice(1,-1)];break;default:var l=+i;if(0===l)return t;if(l>u){var f=v(l/10);return 0===f?t:f<=u?void 0===a[f-1]?i.charAt(1):a[f-1]+i.charAt(1):t}c=a[l-1]}return void 0===c?"":c}))}}))},6547:function(e,t,n){var r=n("a691"),a=n("1d80"),i=function(e){return function(t,n){var i,o,c=String(a(t)),s=r(n),u=c.length;return s<0||s>=u?e?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===u||(o=c.charCodeAt(s+1))<56320||o>57343?e?c.charAt(s):i:e?c.slice(s,s+2):o-56320+(i-55296<<10)+65536)}};e.exports={codeAt:i(!1),charAt:i(!0)}},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("ad6d"),a=n("9f7f"),i=RegExp.prototype.exec,o=String.prototype.replace,c=i,s=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=a.UNSUPPORTED_Y||a.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],f=s||l||u;f&&(c=function(e){var t,n,a,c,f=this,d=u&&f.sticky,v=r.call(f),p=f.source,h=0,g=e;return d&&(v=v.replace("y",""),-1===v.indexOf("g")&&(v+="g"),g=String(e).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==e[f.lastIndex-1])&&(p="(?: "+p+")",g=" "+g,h++),n=new RegExp("^(?:"+p+")",v)),l&&(n=new RegExp("^"+p+"$(?!\\s)",v)),s&&(t=f.lastIndex),a=i.call(d?n:f,g),d?a?(a.input=a.input.slice(h),a[0]=a[0].slice(h),a.index=f.lastIndex,f.lastIndex+=a[0].length):f.lastIndex=0:s&&a&&(f.lastIndex=f.global?a.index+a[0].length:t),l&&a&&a.length>1&&o.call(a[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a}),e.exports=c},"9ed6":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("van-nav-bar",{staticClass:"page-navbar",attrs:{title:"注册/登录"}},[n("van-icon",{attrs:{slot:"left",name:"cross"},on:{click:function(t){return e.$router.back()}},slot:"left"})],1),n("ValidationObserver",{ref:"form"},[n("ValidationProvider",{attrs:{name:"手机号",rules:"required|mobile"}},[n("van-field",{attrs:{type:"tel",maxlength:"11",placeholder:"请输入手机号"},model:{value:e.user.mobile,callback:function(t){e.$set(e.user,"mobile",t)},expression:"user.mobile"}},[n("van-icon",{attrs:{slot:"left-icon","class-prefix":"icon",name:"shouji"},slot:"left-icon"})],1)],1),n("ValidationProvider",{attrs:{name:"验证码",rules:"required|code"}},[n("van-field",{ref:"codeField",attrs:{type:"tel",maxlength:"6",placeholder:"请输入验证码"},model:{value:e.user.code,callback:function(t){e.$set(e.user,"code",t)},expression:"user.code"}},[n("van-icon",{attrs:{slot:"left-icon","class-prefix":"icon",name:"mima"},slot:"left-icon"}),n("van-button",{attrs:{slot:"button",size:"small",type:e.isSending?"default":"primary",disabled:e.isSending},on:{click:e.onSendCode},slot:"button"},[e.isSending?n("van-count-down",{ref:"countDown",attrs:{time:6e4,format:"ss s","auto-start":!1},on:{finish:function(t){e.isSending=!1}}}):n("span",[e._v("获取验证码")])],1)],1)],1)],1),n("div",{staticClass:"login-btn-box"},[n("van-button",{attrs:{color:"#6db4fb",type:"info"},on:{click:e.onLogin}},[e._v("登录")])],1),n("van-divider",[e._v("账号：13911111111 密码：246810")]),n("van-divider",[e._v("如果收不到验证码，请使用万能验证码：246810")])],1)},a=[],i=(n("ac1f"),n("5319"),n("96cf"),n("1da1")),o=n("c24f"),c=n("7bb1"),s={name:"LoginPage",components:{},props:{},data:function(){return{user:{mobile:"",code:""},isSending:!1}},computed:{},watch:{},created:function(){},methods:{onLogin:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$validateForm(this.$refs.form);case 2:if(t=e.sent,t){e.next=5;break}return e.abrupt("return");case 5:return this.$toast.loading({duration:0,forbidClick:!0,message:"登录中..."}),e.prev=6,e.next=9,Object(o["g"])(this.user);case 9:n=e.sent,this.$store.commit("setUser",n.data.data),this.$store.dispatch("updateProfile"),this.$toast.success("登录成功"),r=this.$route.query.redirect||"/",this.$router.replace(r),e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](6),this.$toast.fail("登录失败，手机号或验证码错误");case 20:case"end":return e.stop()}}),e,this,[[6,17]])})));function t(){return e.apply(this,arguments)}return t}(),onSendCode:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,n,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.user.mobile,e.next=3,Object(c["e"])(t,"required|mobile",{name:"手机号码"});case 3:if(n=e.sent,n.valid){e.next=7;break}return this.$toast(n.errors[0]),e.abrupt("return");case 7:return this.isSending=!0,this.$refs["codeField"].focus(),this.$nextTick((function(){r.$refs.countDown.start()})),e.prev=10,e.next=13,Object(o["h"])(t);case 13:e.next=17;break;case 15:e.prev=15,e.t0=e["catch"](10);case 17:case"end":return e.stop()}}),e,this,[[10,15]])})));function t(){return e.apply(this,arguments)}return t}()}},u=s,l=(n("e582"),n("2877")),f=Object(l["a"])(u,r,a,!1,null,"76d1f7b7",null);t["default"]=f.exports},"9f7f":function(e,t,n){"use strict";var r=n("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},d784:function(e,t,n){"use strict";var r=n("6eeb"),a=n("d039"),i=n("b622"),o=n("9263"),c=n("9112"),s=i("species"),u=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),f=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,d){var v=i(e),p=!a((function(){var t={};return t[v]=function(){return 7},7!=""[e](t)})),h=p&&!a((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return t=!0,null},n[v](""),!t}));if(!p||!h||"replace"===e&&(!u||!l)||"split"===e&&!f){var g=/./[v],x=n(v,""[e],(function(e,t,n,r,a){return t.exec===o?p&&!a?{done:!0,value:g.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:l}),b=x[0],m=x[1];r(String.prototype,e,b),r(RegExp.prototype,v,2==t?function(e,t){return m.call(e,this,t)}:function(e){return m.call(e,this)})}d&&c(RegExp.prototype[v],"sham",!0)}},e582:function(e,t,n){"use strict";var r=n("2909f"),a=n.n(r);a.a}}]);
//# sourceMappingURL=chunk-4d65fe6b.63c3df91.js.map