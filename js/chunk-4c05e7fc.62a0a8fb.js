(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c05e7fc"],{5676:function(t,n,e){},9639:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"my-container"},[t.$store.state.user?e("div",{staticClass:"user-info-wrap"},[e("div",{staticClass:"base-info-wrap"},[e("div",{staticClass:"avatar-title-wrap",on:{click:function(n){return t.$router.push({name:"user",params:{userId:t.user.id}})}}},[e("van-image",{staticClass:"avatar",attrs:{round:"",fit:"cover",src:t.user.photo}}),e("div",{staticClass:"title"},[t._v(t._s(t.user.name))])],1),e("van-button",{attrs:{round:"",size:"mini"},on:{click:function(n){return t.$router.push("/user/profile")}}},[t._v("编辑资料")])],1),e("van-grid",{staticClass:"data-info",attrs:{border:!1}},[e("van-grid-item",[e("span",{staticClass:"count"},[t._v(t._s(t.user.art_count))]),e("span",{staticClass:"text"},[t._v("头条")])]),e("van-grid-item",{attrs:{to:"/user/"+t.user.id+"/followers"}},[e("span",{staticClass:"count"},[t._v(t._s(t.user.follow_count))]),e("span",{staticClass:"text"},[t._v("关注")])]),e("van-grid-item",[e("span",{staticClass:"count"},[t._v(t._s(t.user.fans_count))]),e("span",{staticClass:"text"},[t._v("粉丝")])]),e("van-grid-item",[e("span",{staticClass:"count"},[t._v(t._s(t.user.like_count))]),e("span",{staticClass:"text"},[t._v("获赞")])])],1)],1):e("div",{staticClass:"not-login"},[e("div",{staticClass:"mobile",on:{click:function(n){return t.$router.push({name:"login",query:{redirect:"/my"}})}}}),e("div",{staticClass:"text"},[t._v("点击登录")])]),e("van-grid",{attrs:{clickable:"","column-num":3}},[e("van-grid-item",{attrs:{text:"我的收藏",to:"/my-article/collect"}},[e("van-icon",{attrs:{slot:"icon",name:"star-o",color:"#eb5253"},slot:"icon"})],1),e("van-grid-item",{attrs:{text:"浏览历史",to:"/my-article/history"}},[e("van-icon",{attrs:{slot:"icon",name:"browsing-history-o",color:"#ffa023"},slot:"icon"})],1),e("van-grid-item",{attrs:{text:"作品",to:"/my-article"}},[e("van-icon",{attrs:{slot:"icon",name:"edit",color:"#678eff"},slot:"icon"})],1)],1),e("van-cell-group",{attrs:{border:!1}}),t.$store.state.user?e("van-cell-group",[e("van-cell",{staticStyle:{"text-align":"center"},attrs:{title:"退出登录",clickable:""},on:{click:t.onLogout}})],1):t._e()],1)},a=[],s=(e("96cf"),e("1da1")),o=e("c24f"),i={name:"MyPage",data:function(){return{user:{}}},watch:{"$store.state.user":function(){this.$store.state.user&&this.loadUser()}},created:function(){this.$store.state.user&&this.loadUser()},methods:{onLogout:function(){var t=this;this.$dialog.confirm({title:"退户确认",message:"退出当前头条账号，将不能同步收藏，发布评论和云端分享等"}).then((function(){t.$store.commit("setUser",null)})).catch((function(){}))},loadUser:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["d"])();case 2:n=t.sent,this.user=n.data.data;case 4:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}()}},c=i,u=(e("dad1"),e("2877")),l=Object(u["a"])(c,r,a,!1,null,"7fb8b354",null);n["default"]=l.exports},c24f:function(t,n,e){"use strict";e.d(n,"g",(function(){return a})),e.d(n,"f",(function(){return s})),e.d(n,"a",(function(){return o})),e.d(n,"i",(function(){return i})),e.d(n,"d",(function(){return c})),e.d(n,"c",(function(){return u})),e.d(n,"j",(function(){return l})),e.d(n,"k",(function(){return d})),e.d(n,"h",(function(){return f})),e.d(n,"e",(function(){return v})),e.d(n,"b",(function(){return p}));e("d3b7"),e("25f0");var r=e("b775");function a(t){return Object(r["a"])({method:"POST",url:"/app/v1_0/authorizations",data:t})}function s(){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/channels"})}function o(t){return Object(r["a"])({method:"POST",url:"/app/v1_0/user/followings",data:{target:t}})}function i(t){return Object(r["a"])({method:"DELETE",url:"/app/v1_0/user/followings/".concat(t)})}function c(){return Object(r["a"])({method:"GET",url:"/app/v1_0/user"})}function u(t){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/profile"})}function l(t){return Object(r["a"])({method:"PATCH",url:"/app/v1_0/user/photo",data:t})}function d(t){return Object(r["a"])({method:"PATCH",url:"/app/v1_0/user/profile",data:t})}function f(t){return Object(r["a"])({method:"GET",url:"/app/v1_0/sms/codes/".concat(t)})}function v(t){return Object(r["a"])({method:"GET",url:"/app/v1_0/users/".concat(t)})}function p(t,n){return Object(r["a"])({method:"GET",url:"/app/v1_0/user/followers",params:n,data:{target:t.toString()}})}},dad1:function(t,n,e){"use strict";var r=e("5676"),a=e.n(r);a.a}}]);
//# sourceMappingURL=chunk-4c05e7fc.62a0a8fb.js.map