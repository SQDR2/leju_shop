(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/find/articleInfo/articleInfo"],{1520:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var r={jyfParser:function(){return Promise.all([n.e("common/vendor"),n.e("components/jyf-parser/jyf-parser")]).then(n.bind(null,"d58c"))}},c=function(){var t=this,e=t.$createElement;t._self._c},i=[]},"31b8":function(t,e,n){"use strict";n.r(e);var r=n("1520"),c=n("df5c");for(var i in c)"default"!==i&&function(t){n.d(e,t,(function(){return c[t]}))}(i);n("8c7b");var u,o=n("f0c5"),a=Object(o["a"])(c["default"],r["b"],r["c"],!1,null,"7472241b",null,!1,r["a"],u);e["default"]=a.exports},"775f":function(t,e,n){},"8c7b":function(t,e,n){"use strict";var r=n("775f"),c=n.n(r);c.a},df5c:function(t,e,n){"use strict";n.r(e);var r=n("fc1e"),c=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=c.a},edb0:function(t,e,n){"use strict";(function(t){n("b186");r(n("66fd"));var e=r(n("31b8"));function r(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},fc1e:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("a34a")),c=n("e452");function i(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,r,c,i,u){try{var o=t[i](u),a=o.value}catch(f){return void n(f)}o.done?e(a):Promise.resolve(a).then(r,c)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(r,c){var i=t.apply(e,n);function o(t){u(i,r,c,o,a,"next",t)}function a(t){u(i,r,c,o,a,"throw",t)}o(void 0)}))}}var a=function(){Promise.all([n.e("common/vendor"),n.e("components/jyf-parser/jyf-parser")]).then(function(){return resolve(n("d58c"))}.bind(null,n)).catch(n.oe)},f={name:"Article",components:{jyfParser:a},data:function(){return{id:"",article:{}}},onLoad:function(t){this.id=t.articleId,this.getArticleDetail()},methods:{getArticleDetail:function(){var e=this;return o(r.default.mark((function n(){var i,u;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,(0,c.productArticle)(e.id);case 2:i=n.sent,u=i.data,e.article=u.productArticle,t.setNavigationBarTitle({title:u.productArticle.title});case 6:case"end":return n.stop()}}),n)})))()}}};e.default=f}).call(this,n("543d")["default"])}},[["edb0","common/runtime","common/vendor"]]]);