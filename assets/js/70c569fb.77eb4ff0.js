"use strict";(self.webpackChunkdocusaurus_website=self.webpackChunkdocusaurus_website||[]).push([[6475],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return n?i.createElement(m,r(r({ref:t},u),{},{components:n})):i.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1,title:"What is Rhino PACKAGE"},r="What is Rhino?",s={unversionedId:"explanation/what-is-rhino",id:"explanation/what-is-rhino",title:"What is Rhino PACKAGE",description:"Rhino is an R package designed to help you build high quality,",source:"@site/docs/explanation/what-is-rhino.md",sourceDirName:"explanation",slug:"/explanation/what-is-rhino",permalink:"/test_pkgsaurus/docs/explanation/what-is-rhino",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"What is Rhino PACKAGE"},sidebar:"tutorialSidebar",previous:{title:"Explanation",permalink:"/test_pkgsaurus/docs/category/explanation"},next:{title:"App Structure",permalink:"/test_pkgsaurus/docs/explanation/application-structure"}},l={},p=[],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-rhino"},"What is Rhino?"),(0,a.kt)("p",null,"Rhino is an R package designed to help you build high quality,\nenterprise-grade Shiny applications at speed. It allows you to create\nShiny apps \u201cThe Appsilon Way\u201d - like a fullstack software engineer:\napply best software engineering practices, modularize your code, test it\nwell, make UI beautiful and think about adoption from the very\nbeginning."),(0,a.kt)("p",null,"Rhino is an opinionated framework with a focus on best practices and\ndevelopment tools. It started as a series internal projects at Appsilon\naiming to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Save time and avoid repetitive tasks: include all best practices we\ncare about from the very beginning of a project."),(0,a.kt)("li",{parentName:"ol"},"Unify applications\u2019 architecture: provide sensible defaults so that\nwe don\u2019t reinvent the wheel."),(0,a.kt)("li",{parentName:"ol"},"Automate and codify our existing practices: pass knowledge in the\nform of code instead of documents and manuals.")),(0,a.kt)("p",null,"Over the past few years, we have been building internal tools to address\nthese issues and help us easily structure projects in a fast way. It has\nsince evolved into an R package that we are now excited to share with\nthe Shiny community."),(0,a.kt)("p",null,"Please keep in mind that this project is in the early stages. We wanted\nto get something out to the R community and look forward to continuing\ndevelopment with feedback from users. This is just the beginning."),(0,a.kt)("h1",{id:"why-rhino"},"Why Rhino?"),(0,a.kt)("p",null,"Because Rhino helps you build Shiny apps faster, while making them more\nreliable and easier to maintain. It bundles in a coherent way a set of\ntools and practices that are beneficial for most Shiny applications,\nespecially in enterprise."),(0,a.kt)("p",null,"You may want to use Rhino if:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You need a nested files structure that will handle a bigger\napplication."),(0,a.kt)("li",{parentName:"ol"},"You want to follow a complete set of solutions built on industry\nexperience, avoid spending time \u201creinventing the wheel\u201d."),(0,a.kt)("li",{parentName:"ol"},"You\u2019d like to have a scalable, modularized application with clear\ncode organization and neat separation of responsibilities. Rhino can\nserve as a guide to understanding these concepts (box, Shiny\nmodules, view / logic separation)."),(0,a.kt)("li",{parentName:"ol"},"You want to save time and avoid repetitive tasks. Rhino allows you\nto quickly start your Shiny project with a set of preconfigured\ndevelopment tools (linters, CI, Cypress, logging, Sass and JS\nbuilding)"),(0,a.kt)("li",{parentName:"ol"},"You are building an application for production use in enterprise -\nyou need to make sure it\u2019s highly maintainable and reliable in the\nlong term. Most Shiny applications can be converted to a Rhino\nproject in less than 2 hours.")),(0,a.kt)("h1",{id:"similar-projects"},"Similar projects"),(0,a.kt)("p",null,"Rhino is not the first project of its kind aimed at helping the Shiny\ncommunity to enhance the structure of their applications. We believe\nthat each of these has value, and it is up to the developer to decide\nwhat is best for them in their project."),(0,a.kt)("p",null,"How Rhino is different from \u2026?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"golem:")," Rhino apps are not R packages. Rhino puts more emphasis\non development tools, clean configuration and minimal boilerplate\nand tries to provide default solutions for typical problems and\nquestions in these areas."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"leprechaun:")," Leprechaun works by scaffolding Shiny apps, without\nadding dependencies. Rhino minimizes generated code and aims to\nprovide a complete foundation for building Shiny apps ready for\ndeployment in enterprise, so that you can focus on application\u2019s\nlogic and user experience."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"devtools:")," devtools streamlines packages development. Rhino is a\ncomplete framework for building Shiny apps. Rhino features are\ninterdependent (e.g.\xa0coverage and unit tests) and cannot be used\nwithout making the app into basic Rhino structure."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"usethis:")," usethis adds independent code snippers you ask it to.\nRhino is a complete framework for building Shiny apps. Your app is\ndesigned to call Rhino functions instead of having them insert code\ninto your project.")))}c.isMDXComponent=!0}}]);