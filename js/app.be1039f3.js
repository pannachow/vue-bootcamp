(function(t){function e(e){for(var r,c,i=e[0],s=e[1],l=e[2],p=0,f=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);a&&a(e);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(u.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},u=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var a=s;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("Counter App")]),n("p",[t._v("Number: "+t._s(t.count))]),n("CounterButton",{attrs:{title:"Increase"},nativeOn:{click:function(e){return t.IncrementCounts(e)}}},[t._v("Increment count")]),n("CounterButton",{attrs:{title:"Decrease"},nativeOn:{click:function(e){return t.DecrementCounts(e)}}},[t._v("Increment count")]),n("CounterButton",{attrs:{title:"Reset"},nativeOn:{click:function(e){return t.ResetCounts(e)}}},[t._v("Reset count")])],1)},u=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"CounterButton"},[t._v(t._s(t.title))])},i=[],s={props:{title:{type:String,required:!0}}},l=s,a=(n("93b3"),n("2877")),p=Object(a["a"])(l,c,i,!1,null,"220d6042",null),f=p.exports,d={name:"App",components:{CounterButton:f},data(){return{count:0}},methods:{HelloWorld(){console.log("Hello my coder friends!")},IncrementCounts(){this.count=this.count+1},DecrementCounts(){this.count=this.count-1},ResetCounts(){this.count=0}}},v=d,b=(n("034f"),Object(a["a"])(v,o,u,!1,null,null,null)),h=b.exports;r["a"].config.productionTip=!1,new r["a"]({render:t=>t(h)}).$mount("#app")},"85ec":function(t,e,n){},"93b3":function(t,e,n){"use strict";var r=n("d126"),o=n.n(r);o.a},d126:function(t,e,n){}});
//# sourceMappingURL=app.be1039f3.js.map