exports.id=443,exports.ids=[443],exports.modules={7215:(e,s,a)=>{Promise.resolve().then(a.bind(a,6793))},3412:(e,s,a)=>{Promise.resolve().then(a.bind(a,887)),Promise.resolve().then(a.bind(a,8745)),Promise.resolve().then(a.bind(a,4478)),Promise.resolve().then(a.t.bind(a,5889,23)),Promise.resolve().then(a.t.bind(a,4080,23))},721:(e,s,a)=>{Promise.resolve().then(a.t.bind(a,3642,23)),Promise.resolve().then(a.t.bind(a,7586,23)),Promise.resolve().then(a.t.bind(a,7838,23)),Promise.resolve().then(a.t.bind(a,8057,23)),Promise.resolve().then(a.t.bind(a,7741,23)),Promise.resolve().then(a.t.bind(a,3118,23))},6793:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>h});var l=a(7247),t=a(8964);a(2723),a(4546),a(5849);var i=a(4178);function r(){return l.jsx("div",{className:"rainbow-back-top",children:l.jsx("i",{className:"feather-arrow-up "})})}a(5961);var n=a(2421),c=a(29),o=a(4597),d=a(9906);function m(){let e=(0,i.usePathname)(),s=(0,t.useRef)(null),a=(0,t.useRef)(null),r=(0,t.useRef)([]),m=e=>{r.current.forEach((s,a)=>{if(s){if(a===e){if(s.classList.contains("open")){s.classList.remove("open");let e=s.nextElementSibling;e&&(e.style.height="0px")}else{s.classList.add("open");let e=s.nextElementSibling;e&&(e.style.height=e.scrollHeight+"px")}}else{s.classList.remove("open");let e=s.nextElementSibling;e&&(e.style.height="0px")}}})},h=s=>{var a=!1;return s.megamenuColumns&&s.megamenuColumns.forEach(s=>{s.some(s=>s.href.split("/")[1]==e.split("/")[1])&&(a=!0)}),s.submenu&&s.submenu.some(s=>s.href.split("/")[1]==e.split("/")[1])&&(a=!0),a};return l.jsx("div",{ref:s,className:"popup-mobile-menu",children:(0,l.jsxs)("div",{ref:a,className:"inner",children:[(0,l.jsxs)("div",{className:"header-top",children:[l.jsx("div",{className:"logo",children:(0,l.jsxs)(d.default,{href:"/",children:[l.jsx(o.default,{className:"logo-light",alt:"Corporate Logo",src:"/assets/images/logo/logo.png",width:288,height:100}),l.jsx(o.default,{className:"logo-dark",alt:"Corporate Logo",src:"/assets/images/logo/logo-dark.png",width:288,height:100})]})}),l.jsx("div",{className:"close-menu",children:l.jsx("button",{onClick:c.W,className:"close-button",children:l.jsx("i",{className:"feather-x"})})})]}),l.jsx("ul",{className:"mainmenu",children:n.p.map((s,a)=>(0,l.jsxs)("li",{className:`${s.hasMegamenu?"with-megamenu has-menu-child-item ":""} ${s.hasDropdown?"has-droupdown has-menu-child-item":""} ${"with-mega-item-2"==s.megamenuClass?"position-relative":""}`,children:[s.href?l.jsx(d.default,{className:e.split("/")[1]==s.href.split("/")[1]?"active":"",href:s.href,children:s.title}):l.jsx("a",{ref:e=>r.current[a]=e,onClick:()=>m(a),children:l.jsx("span",{className:h(s)?"activeParent":"",children:s.title})}),s.hasMegamenu&&l.jsx("div",{className:`rainbow-megamenu ${s.megamenuClass}`,children:l.jsx("div",{className:"wrapper",children:l.jsx("div",{className:"row row--0",children:s.megamenuColumns.map((a,t)=>l.jsx("div",{className:s.colclass,children:l.jsx("ul",{className:"mega-menu-item",children:a.map((s,a)=>l.jsx("li",{children:(0,l.jsxs)(d.default,{className:e.split("/")[1]==s.href.split("/")[1]?"active":"",href:s.href,children:[s.label," ",s.badge&&l.jsx("span",{className:"rainbow-badge-card",children:s.badge})]})},a))})},t))})})}),s.hasDropdown&&l.jsx("ul",{className:"submenu",children:s.submenu.map((s,a)=>l.jsx("li",{children:l.jsx(d.default,{className:e.split("/")[1]==s.href.split("/")[1]?"active":"",href:s.href,children:s.label})},a))})]},a))})]})})}function h({children:e}){return(0,i.usePathname)(),l.jsx("html",{lang:"en",children:(0,l.jsxs)("body",{className:"active-dark-mode",children:[l.jsx("main",{className:"page-wrapper",children:e}),l.jsx(m,{}),l.jsx(r,{})]})})}},7634:(e,s,a)=>{"use strict";a.d(s,{Z:()=>i});var l=a(7247),t=a(4597);function i(){return l.jsx("div",{id:"my_switcher",onClick:()=>{document.body.classList.contains("active-light-mode")?(document.body.setAttribute("class","active-dark-mode"),localStorage.setItem("isDarkmode",!0)):(document.body.setAttribute("class","active-light-mode"),localStorage.setItem("isDarkmode",!1))},className:"my_switcher",children:(0,l.jsxs)("ul",{children:[l.jsx("li",{children:l.jsx("a",{"data-theme":"light",className:"setColor light",children:l.jsx(t.default,{className:"sun-image",alt:"Sun images",src:"/assets/images/icons/sun-01.svg",width:18,height:18})})}),l.jsx("li",{children:l.jsx("a",{"data-theme":"dark",className:"setColor dark",children:l.jsx(t.default,{className:"Victor Image",alt:"Vector Images",src:"/assets/images/icons/vector.svg",width:18,height:18})})})]})})}a(8964)},887:(e,s,a)=>{"use strict";a.d(s,{default:()=>i});var l=a(7247),t=a(9906);function i(){return l.jsx("div",{className:"error-area ptb--200 ptb_sm--60 ptb_md--80",children:l.jsx("div",{className:"container",children:l.jsx("div",{className:"row align-item-center",children:l.jsx("div",{className:"col-lg-12",children:(0,l.jsxs)("div",{className:"error-inner",children:[l.jsx("h1",{children:"404"}),l.jsx("h2",{className:"title",children:"Ups la pagina no existe."}),l.jsx("div",{className:"view-more-button",children:l.jsx(t.default,{className:"btn-default",href:"/",children:"Volver"})})]})})})})})}a(8964)},8745:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>m});var l=a(7247);a(8964);var t=a(2421),i=a(9906),r=a(4178);function n(){let e=(0,r.usePathname)(),s=s=>{var a=!1;return s.megamenuColumns&&s.megamenuColumns.forEach(s=>{s.some(s=>s.href.split("/")[1]==e.split("/")[1])&&(a=!0)}),s.submenu&&s.submenu.some(s=>s.href.split("/")[1]==e.split("/")[1])&&(a=!0),a};return l.jsx(l.Fragment,{children:t.p.map((a,t)=>(0,l.jsxs)("li",{className:`${a.hasMegamenu?"with-megamenu has-menu-child-item ":""} ${a.hasDropdown?"has-droupdown has-menu-child-item":""} ${"with-mega-item-2"==a.megamenuClass?"position-relative":""}`,children:[a.href?l.jsx(i.default,{className:e.split("/")[1]==a.href.split("/")[1]?"active":"",href:a.href,children:a.title}):l.jsx("a",{className:s(a)?"active":"",children:a.title}),a.hasMegamenu&&l.jsx("div",{className:`rainbow-megamenu ${a.megamenuClass}`,children:l.jsx("div",{className:"wrapper",children:l.jsx("div",{className:"row row--0",children:a.megamenuColumns.map((s,t)=>l.jsx("div",{className:a.colclass,children:l.jsx("ul",{className:"mega-menu-item",children:s.map((s,a)=>l.jsx("li",{children:(0,l.jsxs)(i.default,{href:s.href,className:e.split("/")[1]==s.href.split("/")[1]?"active":"",children:[s.label,s.badge&&l.jsx("span",{className:"rainbow-badge-card",children:s.badge})]})},a))})},t))})})}),a.hasDropdown&&l.jsx("ul",{className:"submenu",children:a.submenu.map((s,a)=>l.jsx("li",{children:l.jsx(i.default,{className:e.split("/")[1]==s.href.split("/")[1]?"active":"",href:s.href,children:s.label})},a))})]},t))})}var c=a(4597),o=a(7634),d=a(29);function m({parentClass:e="rainbow-header header-default header-not-transparent header-sticky",btnClass:s="btn-default btn-small round"}){return l.jsx("header",{className:e,children:l.jsx("div",{className:"container position-relative",children:(0,l.jsxs)("div",{className:"row align-items-center row--0",children:[l.jsx("div",{className:"col-lg-3 col-md-6 col-4",children:l.jsx("div",{className:"logo",children:(0,l.jsxs)(i.default,{href:"/",children:[l.jsx(c.default,{className:"logo-light",alt:"Corporate Logo",src:"/assets/images/logo/logo.png",width:288,height:100}),l.jsx(c.default,{className:"logo-dark",alt:"Corporate Logo",src:"/assets/images/logo/logo-dark.png",width:288,height:100})]})})}),l.jsx("div",{className:"col-lg-9 col-md-6 col-8 position-static",children:(0,l.jsxs)("div",{className:"header-right",children:[l.jsx("nav",{className:"mainmenu-nav d-none d-lg-block",children:l.jsx("ul",{className:"mainmenu",children:l.jsx(n,{})})}),l.jsx("div",{className:"header-btn",children:l.jsx("a",{className:s,target:"_blank",href:"https://themeforest.net/user/rainbow-themes/portfolio",children:"BUY NOW"})}),l.jsx("div",{className:"mobile-menu-bar ml--5 d-block d-lg-none",children:l.jsx("div",{className:"hamberger",children:l.jsx("button",{onClick:d.q,className:"hamberger-button",children:l.jsx("i",{className:"feather-menu"})})})}),l.jsx(o.Z,{})]})})]})})})}},4478:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>i});var l=a(7247),t=a(8964);function i(){let e=(0,t.useRef)();return(0,l.jsxs)("div",{className:"header-top-news bg-image1",ref:e,children:[l.jsx("div",{className:"wrapper",children:l.jsx("div",{className:"container",children:l.jsx("div",{className:"row",children:l.jsx("div",{className:"col-lg-12",children:(0,l.jsxs)("div",{className:"inner",children:[(0,l.jsxs)("div",{className:"content",children:[l.jsx("span",{className:"rainbow-badge",children:"Limited Time Offer"}),l.jsx("span",{className:"news-text",children:"Intro price. Get Doob for Big Sale -95% off."})]}),l.jsx("div",{className:"right-button",children:l.jsx("a",{className:"btn-read-more",target:"_blank",href:"https://themeforest.net/user/rainbow-themes/portfolio",children:(0,l.jsxs)("span",{children:["Purchase Now ",l.jsx("i",{className:"feather-arrow-right"})]})})})]})})})})}),l.jsx("div",{className:"icon-close ",onClick:()=>{e.current.classList.add("deactive")},children:l.jsx("button",{className:"close-button bgsection-activation",children:l.jsx("i",{className:"feather-x"})})})]})}},2421:(e,s,a)=>{"use strict";a.d(s,{p:()=>l});let l=[{title:"Inicio",hasMegamenu:!1,megamenuClass:"with-mega-item-2",colclass:"col-lg-6 single-mega-item",href:"/",megamenuColumns:[[],[]]},{title:"Nosotros",href:"/about"},{title:"Contacto",href:"/contact"}]},29:(e,s,a)=>{"use strict";a.d(s,{W:()=>t,q:()=>l});let l=()=>{let e=document.querySelector(".popup-mobile-menu");e?e.classList.add("active"):console.warn("Elemento .popup-mobile-menu no encontrado")},t=()=>{let e=document.querySelector(".popup-mobile-menu");e?e.classList.remove("active"):console.warn("Elemento .popup-mobile-menu no encontrado")}},1796:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>l});let l=(0,a(5347).createProxy)(String.raw`C:\Users\leona\Desktop\Proyectos\evolutivax\app\layout.js#default`)},2316:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>n,metadata:()=>r});var l=a(2051),t=a(5347);let i=(0,t.createProxy)(String.raw`C:\Users\leona\Desktop\Proyectos\evolutivax\components\elements\Error.jsx#default`);a(6269),a(9624),a(2349),a(5862),(0,t.createProxy)(String.raw`C:\Users\leona\Desktop\Proyectos\evolutivax\components\headers\Header4.jsx#default`),(0,t.createProxy)(String.raw`C:\Users\leona\Desktop\Proyectos\evolutivax\components\headers\Topbar.jsx#default`);let r={title:"Page Not Found ",description:""};function n(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{children:[l.jsx("div",{className:"rainbow-gradient-circle"}),l.jsx("div",{className:"rainbow-gradient-circle theme-pink"})]}),l.jsx(i,{})]})}},5862:(e,s,a)=>{},7481:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});var l=a(4564);let t=e=>[{type:"image/x-icon",sizes:"256x256",url:(0,l.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},2723:()=>{}};