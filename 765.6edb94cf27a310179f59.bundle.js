(self.webpackChunkfilters_app=self.webpackChunkfilters_app||[]).push([[765],{976:(e,n,t)=>{"use strict";t.r(n);var r=t(271),i=t.n(r),a=t(650),o=t.n(a),c=t(84),l=t(379),s=t.n(l),u=t(780);s()(u.Z,{insert:"head",singleton:!1}),u.Z.locals;const f=function(e){var n=e.tasksArr||[1,2,3],t=e.tasksArr&&(0,c.useDispatch)(),r=e.tasksArr?"menu-wrapper":"default menu-wrapper";return i().createElement("div",{className:r},i().createElement("p",null,n.length," items in this list"),i().createElement("div",{className:"btn-wrapper"},i().createElement("button",{type:"button",className:"filter-btn all",id:"allButton",autoFocus:!0,onClick:function(){t(e.filterAction("all"))}},"ALL"),i().createElement("button",{type:"button",className:"filter-btn active",onClick:function(){t(e.filterAction("active"))}},"ACTIVE"),i().createElement("button",{type:"button",className:"filter-btn completed",onClick:function(){t(e.filterAction("completed"))}},"COMPLETED")),i().createElement("button",{type:"button",className:"filter-btn clr-completed",onClick:function(){var r=n.filter((function(e){return!0===e.completed})).map((function(e){return e.taskID}));t(e.clearTasksAction(r)),t(e.filterAction("all")),setTimeout((function(){return document.getElementById("allButton").focus()}),300)}},"CLEAR COMPLETED"))},d=function(){return i().createElement(f,null)};o().render(i().createElement(d,null),document.getElementById("root"))},780:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});var r=t(645),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,"* {\n  margin: 0;\n}\n\n.menu-wrapper {\n  margin: 1rem 0;\n  width: 40rem;\n  height: auto;\n  display: flex;\n  justify-content: space-between;\n}\n\n.btn-wrapper {\n  width: 15rem;\n  display: flex;\n  justify-content: space-between;\n}\n\n.menu-wrapper p {\n  padding-top: 3px;\n  display: inline-block;\n}\n\n.filter-btn {\n  padding: 0.25rem;\n  border: none;\n  border-radius: 3px;\n}\n\n.filter-btn:active {\n  outline: black;\n}\n\n.default {\n  margin: 10rem;\n}\n",""]);const a=i},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&i[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},379:(e,n,t)=>{"use strict";var r,i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function o(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],i=0;i<e.length;i++){var c=e[i],l=n.base?c[0]+n.base:c[0],s=t[l]||0,u="".concat(l," ").concat(s);t[l]=s+1;var f=o(u),d={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:u,updater:h(d,n),references:1}),r.push(u)}return r}function l(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}return n}var s,u=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function f(e,n,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,i);else{var a=document.createTextNode(i),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(a,o[n]):e.appendChild(a)}}function d(e,n,t){var r=t.css,i=t.media,a=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,m=0;function h(e,n){var t,r,i;if(n.singleton){var a=m++;t=p||(p=l(n)),r=f.bind(null,t,a,!1),i=f.bind(null,t,a,!0)}else t=l(n),r=d.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var i=o(t[r]);a[i].references--}for(var l=c(e,n),s=0;s<t.length;s++){var u=o(t[s]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}t=l}}}}}]);