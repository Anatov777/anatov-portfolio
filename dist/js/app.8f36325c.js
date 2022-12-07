(function(t){function e(e){for(var n,a,s=e[0],c=e[1],u=e[2],p=0,h=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&h.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(h.length)h.shift()();return r.push.apply(r,u||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,s=1;s<o.length;s++){var c=o[s];0!==i[c]&&(n=!1)}n&&(r.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},i={app:0},r=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/anatov-portfolio/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[t._m(0),o("main",{staticClass:"main"},[o("portfolio-list",{attrs:{msg:"Welcome to Your Vue.js App"}})],1),t._m(1)])},r=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header"},[o("h1",[t._v("Мои проекты")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{staticClass:"footer"},[o("div",{staticClass:"contacts"},[o("h2",[t._v("Контакты")]),o("div",{staticClass:"contacts__content"},[o("p",[t._v("anatovtimur@gmail.com")]),o("a",{attrs:{href:"tel:+79817244835"}},[t._v("+79817244835")])])])])}],a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"projects"},t._l(t.PROJECTS,(function(t,e){return o("portfolio-item",{key:e,attrs:{"project-data":t}})})),1)},s=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"projects__item"},[o("h2",[t._v(t._s(t.projectData.title))]),o("p",{domProps:{innerHTML:t._s(t.projectData.description)}}),o("p",[t._v(t._s(t.projectData.technologies))]),o("div",{staticClass:"links-wrapper"},[t.projectData.github?o("p",[o("a",{staticClass:"github-link",attrs:{href:t.projectData.github,target:"_blank"}},[t._v("GitHub")])]):t._e(),t.projectData.site?o("p",[o("a",{staticClass:"show-btn",attrs:{href:t.projectData.site,target:"_blank"}},[t._v("Посмотреть")])]):t._e()])])},u=[],l={name:"PortfolioItem",props:{projectData:Object}},p=l,h=o("2877"),f=Object(h["a"])(p,c,u,!1,null,null,null),v=f.exports,b={name:"PortfolioList",components:{PortfolioItem:v},created:function(){this.PROJECTS=[{title:"Авторизация",description:"Авторизация на Vue с использованием Supabase.",technologies:"Технологии: Vue.js 3, Composition API, Typescript, Tailwind CSS, Supabase",github:"https://github.com/Anatov777/vue3-example",site:"https://anatov777.github.io/vue3-example/"},{title:'Учетная система "Консультации"',description:"Предназначена для автоматизации работы с консультациями пациентов.",technologies:"Технологии: Vue.js, Vuex, Vuetify, Vuelidate",github:"https://github.com/Anatov777/consulting",site:"https://anatov777.github.io/consulting/#/patients"},{title:"Корпоративный портал",description:"Примеры задач, выполненных для корпоративного портала.",technologies:"Технологии: Vue.js, Vuex, Vuelidate, Bootstrap",site:"https://github.com/Anatov777/corporate-portal"},{title:"Кольцевая диаграмма",description:"Диаграмма показывает процентное соотношение сотрудников компании по отделам.",technologies:"Технологии: Vue.js, Chart.js",github:"https://github.com/Anatov777/doughnut-chart",site:"https://anatov777.github.io/doughnut-chart/"},{title:"Гостиница",description:"Верстка страниц сайта гостиницы.",technologies:"Технологии: HTML, CSS, JS/jQuery",github:"https://github.com/Anatov777/toxin-hotel",site:"https://anatov777.github.io/toxin-hotel/"},{title:"Университет",description:"Верстка страниц сайта университета.",technologies:"Технологии: Pug, SCSS, JS/jQuery, Gulp",github:"https://github.com/Anatov777/university",site:"https://anatov777.github.io/university/"}]}},d=b,g=Object(h["a"])(d,a,s,!1,null,null,null),m=g.exports,_=(o("fce9"),{name:"App",components:{PortfolioList:m}}),j=_,y=Object(h["a"])(j,i,r,!1,null,null,null),S=y.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(S)}}).$mount("#app")},fce9:function(t,e,o){}});
//# sourceMappingURL=app.8f36325c.js.map