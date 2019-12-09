(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{43:function(e,n,t){e.exports=t(70)},70:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(12),o=t.n(c),i=t(10),u=t.n(i),l=t(15),s=t(17),d=t(7),f=t(1),m=t(16),p=t.n(m),b=t(2),g=t(40);function v(){var e=Object(f.a)(["\n  flex: 0 0 20%;\n  background: #434343;\n  padding: 1rem;\n  align-self: stretch;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  h1 {\n    text-align: center;\n    color: #fff;\n    font-size: 2.5rem;\n    font-weight: 100;\n    padding: 2rem;\n  }\n"]);return v=function(){return e},e}var h=b.c.div(v()),O=function(e){return a.a.createElement(h,null,a.a.createElement("h1",null,"DASHBOARD"))};function j(){var e=Object(f.a)(["\n  max-width: 120rem;\n  margin: 30px auto;\n  border-radius: 5px;\n  min-height: 100rem;\n  box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.2);\n  background: #e9e9e9;\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden;\n  @media screen and (max-width: 1200px) {\n    margin: 0;\n    border-radius: 0;\n  }\n"]);return j=function(){return e},e}var y=b.c.div(j());function w(){var e=Object(f.a)(["\n  padding: 2rem;\n  flex: 1;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 60rem 60rem;\n  grid-gap: 1.5rem;\n  @media screen and (max-width: 1150px) {\n    grid-template-columns: 1fr;\n  }\n"]);return w=function(){return e},e}var E=b.c.main(w()),k=function(e){return a.a.createElement(y,null,a.a.createElement(O,null),a.a.createElement(E,null,e.children))};function x(){var e=Object(f.a)(["\n  /* display: grid;\n  grid-template-columns: ","; */\n  background: #fff;\n  border-radius: 5px;\n  padding: 1.5rem 1rem;\n  box-shadow: 0 1rem 3rem rgba(0,0,0,.06)\n"]);return x=function(){return e},e}var P=b.c.div(x(),(function(e){return e.grid?e.grid:"1fr"}));function C(){var e=Object(f.a)(["\n  background: #fff;\n  padding: 1rem 0;\n  width: 100%;\n  cursor: pointer;\n  :not(:last-child) {\n    border-bottom: 1px solid #e9e9e9;\n  }\n  :first-child {\n    border-radius: 5px 5px 0 0;\n    div {\n      font-weight: 600;\n      color: #000;\n    }\n  }\n  :last-child {\n    border-radius: 0 0 5px 5px;\n  }\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  transition: background 0.3s;\n  :hover {\n    background: #f9f9f9;\n  }\n"]);return C=function(){return e},e}function S(){var e=Object(f.a)(["\n  width: 100%;\n  padding: 1rem;\n  /* background: #e9e9e9; */\n  overflow: scroll;\n"]);return S=function(){return e},e}var D=b.c.div(S()),N=b.c.div(C()),z=function(e){var n=e.articles,t=e.select;return a.a.createElement(P,null,a.a.createElement(D,null,a.a.createElement(N,null,a.a.createElement("div",null,"Productnaam"),a.a.createElement("div",null,"Barcode"),a.a.createElement("div",null,"Voorraad")),n&&n.map((function(e,n){return a.a.createElement(N,{key:n,onClick:function(){return t(e)}},a.a.createElement("div",null,e.name),a.a.createElement("div",null,e.code),a.a.createElement("div",null,e.supply))}))))};function B(){var e=Object(f.a)(["\n  font-size: 1.5rem;\n  transition: all 0.3s;\n  padding: 1.3rem 1.6rem;\n  cursor: pointer;\n  border: 3px solid transparent;\n  ",";\n"]);return B=function(){return e},e}function A(){var e=Object(f.a)(["\n  border-bottom: 3px solid #54c654;\n  color: #54c654;\n"]);return A=function(){return e},e}function I(){var e=Object(f.a)(["\n  width: 100%;\n  margin: 1rem auto 2rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  border-bottom: 1px solid #c9c9c9;\n"]);return I=function(){return e},e}var W=b.c.div(I()),R=Object(b.b)(A()),U=b.c.p(B(),(function(e){return e.active?R:null}));function T(){var e=Object(f.a)(["\n  display: inline-block;\n  background: #54c654;\n  color: #fff;\n  padding: 1rem 2rem;\n  border-radius: 20px;\n  border: none;\n  margin: 2rem 1rem;\n  transition: all 0.3s;\n  cursor: pointer;\n  font-size: 1.3rem;\n  :hover {\n    background: #45b545;\n  }\n"]);return T=function(){return e},e}var F=b.c.button(T()),J=function(e){return a.a.createElement(F,{onClick:e.clicked},e.children)};function L(){var e=Object(f.a)(["\n  margin: 1rem 5px;\n  display: block;\n"]);return L=function(){return e},e}function M(){var e=Object(f.a)(["\n  width: 100%;\n  border-radius: 15px;\n  border: none;\n  background: #e9e9e9;\n  padding: 1rem;\n  text-indent: 5px;\n  transition: background 0.3s;\n  :focus {\n    background: #d9d9d9;\n  }\n"]);return M=function(){return e},e}var _=b.c.input(M()),H=b.c.label(L()),V=function(e){var n=e.setName,t=e.setBarCode,c=e.addProduct,o=e.barCode,i=e.productName,u=Object(r.useState)("scan"),l=Object(d.a)(u,2),s=l[0],f=l[1];return a.a.createElement(P,null,a.a.createElement(W,null,a.a.createElement(U,{onClick:function(){return f("manual")},active:"manual"===s},"Manueel"),a.a.createElement(U,{onClick:function(){return f("scan")},active:"scan"===s},"Scan")),"manual"===s?a.a.createElement(a.a.Fragment,null,a.a.createElement(H,null,"Productnaam (Alleen invullen als je een nieuw product toevoegd)"),a.a.createElement(_,{type:"text",placeholder:"Productnaam",onChange:function(e){return n(e.target.value)},value:i}),a.a.createElement(H,null,"Barcode*"),a.a.createElement(_,{type:"number",placeholder:"Barcode",onChange:function(e){return t(e.target.value,s)},value:o}),a.a.createElement(J,{clicked:function(){return c(o)}},"Product toevoegen")):a.a.createElement(a.a.Fragment,null,a.a.createElement(H,null,"Barcode*"),a.a.createElement(_,{type:"number",placeholder:"Barcode",onChange:function(e){return t(e.target.value,s)},value:o})))};function $(){var e=Object(f.a)(["\n  width: 100%;\n  padding: 2rem;\n  background: ",";\n  opacity: 0.6;\n  transition: all 0.3s;\n  font-size: 1.6rem;\n  margin-bottom: 1rem;\n  border-radius: 2px;\n  :hover {\n    opacity: 1;\n  }\n  color: #fff;\n"]);return $=function(){return e},e}function q(){var e=Object(f.a)(["\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  width: 50%;\n"]);return q=function(){return e},e}var G=b.c.div(q()),K=b.c.p($(),(function(e){return"success"===e.type?"#54c654":"red"})),Q=function(e){var n=e.notifications,t=e.removeNotification;return a.a.createElement(G,null,n.map((function(e,n){return a.a.createElement(K,{key:n,type:e.type,onClick:function(){return t(n)}},e.message)})))};function X(){var e=Object(f.a)(["\n  z-index: 91;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: #fff;\n  width: 50%;\n  min-height: 10rem;\n  padding: 2rem;\n  border-radius: 5px;\n  span {\n    position: absolute;\n    top: 1rem;\n    right: 2rem;\n    font-size: 3rem;\n    cursor: pointer;\n  }\n"]);return X=function(){return e},e}function Y(){var e=Object(f.a)(["\n  width: 100%;\n  position: fixed;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.2);\n  top: 0;\n  left: 0;\n  z-index: 90;\n"]);return Y=function(){return e},e}var Z=b.c.div(Y()),ee=b.c.div(X()),ne=function(e){return a.a.createElement(Z,{onClick:e.unselect,className:"backdrop"},a.a.createElement(ee,null,e.children," ",a.a.createElement("span",null,"\xd7")))},te=t(13);function re(){var e=Object(f.a)(["\n  display: inline-block;\n  background: #dbdbdb;\n  color: #555;\n  padding: 1rem 1.6rem;\n  border-radius: 20px;\n  border: none;\n  margin: 1rem;\n  transition: all 0.3s;\n  cursor: pointer;\n  font-size: 1.3rem;\n  :hover {\n    background: #cecece;\n  }\n"]);return re=function(){return e},e}var ae=b.c.button(re()),ce=function(e){return a.a.createElement(ae,{onClick:e.clicked},e.children)};function oe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ie(){var e=Object(f.a)(["\n  margin: 3rem auto 0;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n"]);return ie=function(){return e},e}function ue(){var e=Object(f.a)(["\n  margin: 3rem auto;\n"]);return ue=function(){return e},e}var le=b.c.div(ue()),se=b.c.div(ie()),de=function(e){var n=Object(r.useState)(""),t=Object(d.a)(n,2),c=t[0],o=t[1],i=Object(r.useState)(0),u=Object(d.a)(i,2),l=u[0],s=u[1],f=Object(r.useState)(0),m=Object(d.a)(f,2),p=m[0],b=m[1];return Object(r.useEffect)((function(){o(e.selected.name),s(e.selected.code),b(e.selected.supply)}),[]),a.a.createElement(le,null,a.a.createElement(H,null,"Product naam"),a.a.createElement(_,{type:"text",value:c,onChange:function(e){return o(e.target.value)}}),a.a.createElement(H,null,"Product naam"),a.a.createElement(_,{type:"number",value:l,onChange:function(e){return s(parseInt(e.target.value))}}),a.a.createElement(H,null,"Product naam"),a.a.createElement(_,{type:"number",value:p,onChange:function(e){return b(parseInt(e.target.value))}}),a.a.createElement(se,null,a.a.createElement(ce,{clicked:e.cancel},"Cancel"),a.a.createElement(J,{clicked:function(){return e.save(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?oe(t,!0).forEach((function(n){Object(te.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):oe(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e.selected,{name:c,code:l,supply:p}))}},"Save")))};function fe(){var e=Object(f.a)(['\n*{\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  outline: none;\n}\nhtml{\n  font-size: 67.5%;\n  font-family: "Ubuntu", sans-serif;\n}\nbody{\n  color: #555;\n  background: linear-gradient(#54c654, #91d159);\n  background-repeat: no-repeat;\n  min-height: 100vh;\n}\n::-moz-selection { /* Code for Firefox */\ncolor: #fff;\nbackground: #54c654;\n}\n\n::selection {\ncolor: #fff;\nbackground: #54c654;\n}\n']);return fe=function(){return e},e}var me="",pe=Object(b.a)(fe());var be=function(){var e=Object(r.useState)([]),n=Object(d.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)(""),i=Object(d.a)(o,2),f=i[0],m=i[1],b=Object(r.useState)(""),v=Object(d.a)(b,2),h=v[0],O=v[1],j=Object(r.useState)([]),y=Object(d.a)(j,2),w=y[0],E=y[1],x=Object(r.useState)({}),P=Object(d.a)(x,2),C=P[0],S=P[1],D=function(e){var n={message:e.message,type:e.type,id:Date.now()+Math.random()},t=Object(s.a)(w).concat(n);E(t),setTimeout((function(){t=Object(s.a)(w).filter((function(e){return e.id!==n.id})),E((function(e){return e.filter((function(e){return e.id!==n.id}))}))}),5e3)},N=function(){var e=Object(l.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get(me+"/articles");case 2:n=e.sent,c(n.data.articles);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(l.a)(u.a.mark((function e(){var n,r=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.length>0&&void 0!==r[0]?r[0]:h,t.filter((function(e){return console.log(typeof e.code,typeof n),e.code===n})),0!==t.filter((function(e){return parseInt(e.code)===parseInt(n)})).length||""!==f){e.next=4;break}return e.abrupt("return",D({message:"Je moet een naam invullen als je een nieuw product toevoegd",type:"error"}));case 4:if(!(n.length<13)){e.next=6;break}return e.abrupt("return",D({message:"Barcode moet 13 cijfers bevatten",type:"error"}));case 6:return e.next=8,p.a.post(me+"/article",{name:f,code:n});case 8:D({message:"Product successvol toegevoegd",type:"success"}),N();case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(l.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.patch("".concat(me,"/article/").concat(n._id),n);case 2:D({message:"Updaten item successvol",type:"success"}),N(),S({});case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),I=function(e){("span"===e.target.localName||"button"===e.target.localName||e.target.className.includes("backdrop"))&&S({})};return Object(r.useEffect)((function(){N(),console.log("new version!")}),[]),Object(r.useEffect)((function(){console.log(h)}),[h]),a.a.createElement(g.a,null,a.a.createElement(pe,null),a.a.createElement(k,null,a.a.createElement(z,{articles:t,select:function(e){S(e)}}),a.a.createElement(V,{setName:m,setBarCode:function(e,n){if("scan"===n&&13===e.toString().length)return B(parseInt(e)),void O("");O(parseInt(e)),console.log(e)},addProduct:B,barCode:h,productName:f})),a.a.createElement(Q,{removeNotification:function(e){var n=Object(s.a)(w);n.splice(e,1),E(n)},notifications:w}),Object.keys(C).length>0?a.a.createElement(ne,{unselect:I},a.a.createElement(de,{selected:C,cancel:I,save:A})):null)},ge=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ve(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var he=t(14);function Oe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function je(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Oe(t,!0).forEach((function(n){Object(te.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Oe(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var ye={articles:[]},we=t(39),Ee=Object(he.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD_ARTICLES":return je({},e,{articles:n.articles});default:return e}}));o.a.render(a.a.createElement(we.a,{store:Ee},a.a.createElement(be,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");ge?(!function(e,n){fetch(e).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ve(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ve(n,e)}))}}()}},[[43,1,2]]]);
//# sourceMappingURL=main.28a28dc2.chunk.js.map