(this["webpackJsonpgithub-react-app"]=this["webpackJsonpgithub-react-app"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),l=a.n(c),u=(a(10),a(1));function o(e){var t=e.setQuery,a=Object(n.useState)(""),c=Object(u.a)(a,2),l=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(l)}},r.a.createElement("input",{placeholder:"Search by repo's name...",value:l,onChange:function(e){return o(e.target.value)},className:"search"}),r.a.createElement("button",{type:"submit","aria-label":"search"},r.a.createElement("i",{className:"fa fa-search","aria-hidden":"true"})))}function i(e){var t=e.setLicense,a=Object(n.useState)([]),c=Object(u.a)(a,2),l=c[0],o=c[1];Object(n.useEffect)((function(){return fetch("https://api.github.com/licenses").then((function(e){return e.json()})).then((function(e){return o(e)})).catch((function(){return o(["Something went wrong. Try again later"])})),function(){}}),[]);var i=l.map((function(e){return r.a.createElement("option",{key:e.key,value:e.key},e.name)}));return r.a.createElement("div",{className:"select"},r.a.createElement("select",{defaultValue:"DEFAULT",onChange:function(e){t(e.target.value)},className:"browser-default"},r.a.createElement("option",{value:"DEFAULT",disabled:!0},"Select license to filter"),i))}function s(){return r.a.createElement("div",null,r.a.createElement("img",{src:"../loader.gif",alt:"loading..."}))}function m(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Something went wrong. Try again later"),r.a.createElement("img",{className:"error",src:"../error.png",alt:"error... something went wrong"}))}var f=a(4);function h(e){var t=e.pages,a=e.setPages,n=t.total,c=t.current;function l(e){e>=1&&(a((function(t){return Object(f.a)({},t,{current:e})})),window.scrollTo(0,0))}return r.a.createElement("div",{className:"pagination"},r.a.createElement("button",{className:1===c?"disabled":"",onClick:function(){return l(1)}},"<<"),r.a.createElement("button",{className:1===c?"disabled":"",onClick:function(){return l(c-1)}},"<"),r.a.createElement("button",{className:"active"},c),r.a.createElement("button",{className:c===n?"disabled":"",onClick:function(){return l(c+1)},title:c+1},">"),r.a.createElement("button",{className:c===n?"disabled":"",onClick:function(){return l(n)},title:n},">>"))}function E(e){var t=e.license,a=e.query,c=Object(n.useState)([]),l=Object(u.a)(c,2),o=l[0],i=l[1],f=Object(n.useState)(!0),E=Object(u.a)(f,2),b=E[0],d=E[1],g=Object(n.useState)(!1),p=Object(u.a)(g,2),v=p[0],j=p[1],O=Object(n.useState)({total:1,current:1}),w=Object(u.a)(O,2),S=w[0],y=w[1];Object(n.useEffect)((function(){var e="";return t&&(e="+license:".concat(t)),d(!0),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=new Date(Date.now()-26784e5).toISOString().slice(0,10),n="https://api.github.com/search/repositories?q=".concat(a,"+language:javascript+created%3A%3E").concat(t).concat(e,"&sort=stars&page=").concat(S.current);j(!1),fetch(n).then((function(e){return e.json()})).then((function(e){i(e.items);var t=Math.ceil((e.total_count>1e3?1e3:e.total_count)/30);y({total:t,current:S.current})})).then((function(){return d(!1)})).catch((function(){return j(!0)}))}(e),function(){}}),[t,a,S.current]);var N=o.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("h4",null,r.a.createElement("a",{href:e.html_url},e.name),r.a.createElement("span",null,r.a.createElement("sup",null,r.a.createElement("i",{className:"fa fa-star","aria-hidden":"true"})," ",e.stargazers_count),r.a.createElement("sub",null,r.a.createElement("i",{className:"fa fa-calendar","aria-hidden":"true"})," ",(t=e.created_at,new Date(t).toLocaleDateString())))));var t}));return v?r.a.createElement(m,null):r.a.createElement(r.a.Fragment,null,b?r.a.createElement(s,null):N,S.total>1?r.a.createElement(h,{pages:S,setPages:y}):null)}a(11);var b=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(u.a)(l,2),m=s[0],f=s[1];return Object(n.useEffect)((function(){}),[a,m]),r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement(o,{setQuery:f}),r.a.createElement(i,{setLicense:c})),r.a.createElement(E,{license:a,query:m}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.facdcbc2.chunk.js.map