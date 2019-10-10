(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{42:function(e,n,t){e.exports=t(69)},69:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(12),o=t.n(c),i=t(10),u=t.n(i),l=t(15),d=t(11),s=t(2),f=t(3);function b(){var e=Object(s.a)(["\n  width: 100%;\n  min-height: 100vh;\n  background: #e9e9e9;\n  padding: 1rem 1rem 1rem 21rem;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 1.5rem;\n"]);return b=function(){return e},e}function m(){var e=Object(s.a)(['\n  *{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n  html{\n    font-size: 67.5%;\n    font-family: "Ubuntu", sans-serif;\n  }\n  body{\n    color: #555;\n  }\n\n']);return m=function(){return e},e}var p=Object(f.a)(m()),g=f.b.div(b()),v=t(18),h=t.n(v),O=t(39);function j(){var e=Object(s.a)(["\n  background: #333;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 20rem;\n  padding: 1rem;\n  height: 100%;\n  h1 {\n    text-align: center;\n    color: #fff;\n    font-size: 2.5rem;\n    font-weight: 100;\n  }\n"]);return j=function(){return e},e}var E=f.b.div(j()),y=function(e){return a.a.createElement(E,null,a.a.createElement("h1",null,"DASHBOARD"))};function w(){var e=Object(s.a)(["\n  /* display: grid;\n  grid-template-columns: ","; */\n  background: #fff;\n   border-radius: 5px;\n  padding: 1.5rem;\n"]);return w=function(){return e},e}var k=f.b.div(w(),(function(e){return e.grid?e.grid:"1fr"}));function x(){var e=Object(s.a)(["\n  background: #fff;\n  padding: 1rem;\n  width: 100%;\n  :not(:last-child) {\n    border-bottom: 1px solid #e9e9e9;\n  }\n  :first-child {\n    border-radius: 5px 5px 0 0;\n    div {\n      font-weight: 600;\n      color: #000;\n    }\n  }\n  :last-child {\n    border-radius: 0 0 5px 5px;\n  }\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  :hover {\n    background: #f9f9f9;\n  }\n"]);return x=function(){return e},e}function P(){var e=Object(s.a)(["\n  width: 100%;\n  padding: 1rem;\n  /* background: #e9e9e9; */\n"]);return P=function(){return e},e}var B=f.b.div(P()),D=f.b.div(x()),S=function(e){var n=e.articles;return a.a.createElement(k,null,a.a.createElement(B,null,a.a.createElement(D,null,a.a.createElement("div",null,"Productname"),a.a.createElement("div",null,"Barcode"),a.a.createElement("div",null,"Product stock")),n&&n.map((function(e,n){return a.a.createElement(D,{key:n},a.a.createElement("div",null,e.name),a.a.createElement("div",null,e.code),a.a.createElement("div",null,e.supply))}))))};function C(){var e=Object(s.a)(["\n  margin: 1rem 5px;\n  display: block;\n"]);return C=function(){return e},e}function A(){var e=Object(s.a)(["\n  width: 100%;\n  border-radius: 15px;\n  border: none;\n  background: #e9e9e9;\n  padding: 1rem;\n  text-indent: 5px;\n  :focus {\n    background: #d9d9d9;\n  }\n"]);return A=function(){return e},e}var z=f.b.input(A()),N=f.b.label(C());function R(){var e=Object(s.a)(["\n  display: inline-block;\n  background: #54c654;\n  color: #fff;\n  padding: 1rem 1.6rem;\n  border-radius: 20px;\n  border: none;\n  margin: 2rem 0;\n  transition: background 0.3s;\n  cursor: pointer;\n  :hover {\n    background: #45b545;\n  }\n"]);return R=function(){return e},e}var I=f.b.button(R()),J=function(e){return a.a.createElement(I,{onClick:e.clicked},e.children)},W=function(e){var n=e.setName,t=e.setBarCode,c=e.addProduct,o=Object(r.useRef)();return a.a.createElement(k,null,a.a.createElement(N,null,"Product name"),a.a.createElement(z,{type:"text",placeholder:"Product name",onChange:function(e){return n(e.target.value)}}),a.a.createElement(N,null,"Barcode"),a.a.createElement(z,{type:"text",placeholder:"Barcode",onChange:function(e){return t(e.target.value)},ref:o}),a.a.createElement(J,{clicked:c},"Add product"))};var H=function(){var e=Object(r.useState)(null),n=Object(d.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)(""),i=Object(d.a)(o,2),s=i[0],f=i[1],b=Object(r.useState)(null),m=Object(d.a)(b,2),v=m[0],j=m[1],E=Object(r.useState)(null),w=Object(d.a)(E,2),k=w[0],x=(w[1],function(){var e=Object(l.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/articles");case 2:n=e.sent,c(n.data.articles);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),P=function(){var e=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("/article",{name:s,code:v,prodNumber:k});case 2:e.sent,x();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){x()}),[]),a.a.createElement(O.a,null,a.a.createElement(g,null,a.a.createElement(p,null),a.a.createElement(y,null),a.a.createElement(S,{articles:t}),a.a.createElement(W,{setName:f,setBarCode:j,addProduct:P})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=t(13),T=t(36);function U(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function $(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?U(t,!0).forEach((function(n){Object(T.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):U(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var _={articles:[]},q=t(38),F=Object(L.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_ARTICLES":return $({},e,{articles:n.articles});default:return e}}));o.a.render(a.a.createElement(q.a,{store:F},a.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.681d1678.chunk.js.map