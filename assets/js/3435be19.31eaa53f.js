"use strict";(self.webpackChunkdocusaurus_website=self.webpackChunkdocusaurus_website||[]).push([[9185],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7628:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2,title:"test_e2e"},s="test_e2e",i={unversionedId:"other-tools/test_e2e",id:"other-tools/test_e2e",title:"test_e2e",description:"Run Cypress end-to-end tests",source:"@site/reference/other-tools/test_e2e.md",sourceDirName:"other-tools",slug:"/other-tools/test_e2e",permalink:"/test_pkgsaurus/reference/other-tools/test_e2e",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"test_e2e"},sidebar:"tutorialSidebar",previous:{title:"diagnostics",permalink:"/test_pkgsaurus/reference/other-tools/diagnostics"},next:{title:"Data",permalink:"/test_pkgsaurus/reference/category/data"}},l={},p=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Value",id:"value",level:2},{value:"Examples",id:"examples",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"test_e2e"},(0,a.kt)("inlineCode",{parentName:"h1"},"test_e2e")),(0,a.kt)("p",null,"Run Cypress end-to-end tests"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Uses ",(0,a.kt)("a",{parentName:"p",href:"https://www.cypress.io/"},"Cypress")," to run end-to-end tests\ndefined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"tests/cypress")," directory.\nRequires Node.js and the ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn")," command to be available on the system."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-r"},"test_e2e(interactive = FALSE)\n")),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Argument"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"interactive")),(0,a.kt)("td",{parentName:"tr",align:null},"Should Cypress be run in the interactive mode?")))),(0,a.kt)("h2",{id:"value"},"Value"),(0,a.kt)("p",null,"None. This function is called for side effects."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-r"},"if (interactive()) {\n# Run the end-to-end tests in the `tests/cypress` directory.\ntest_e2e()\n}\n")))}c.isMDXComponent=!0}}]);