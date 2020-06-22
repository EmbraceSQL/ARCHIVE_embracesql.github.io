(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var a=n(2),r=(n(0),n(120));const l={title:"Embedded"},c={id:"embedded",isDocsHomePage:!1,title:"Embedded",description:"Getting Started",source:"@site/docs/embedded.mdx",permalink:"/embedded",editUrl:"https://github.com/civitaslearning/embrace-sql/edit/master/docs/embedded.mdx",sidebar:"someSidebar",previous:{title:"Security",permalink:"/security"},next:{title:"Configuration",permalink:"/configuration"}},o=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Adding a CLI",id:"adding-a-cli",children:[]}],i={rightToc:o};function s({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"getting-started"},"Getting Started"),Object(r.b)("p",null,"EmbraceSQL can run in ",Object(r.b)("em",{parentName:"p"},"embedded mode"),", which is aimed at two use cases:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Making a React Native application with inline SQLite"),Object(r.b)("li",{parentName:"ul"},"Making a Node command line program for database interaction"),Object(r.b)("li",{parentName:"ul"},"Making a Node server program with inline database access")),Object(r.b)("p",null,"In all cases, it is recommended that you set up a multiple package repo, with a minimum of two pacakges:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The EmbraceSQL root package"),Object(r.b)("li",{parentName:"ul"},"Your app (1+ packages at your discretion)")),Object(r.b)("p",null,"So, here is a handy skeleton you can start from:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"yarn add -g https://github.com/embracesql/embracesql.git\ngit clone https://github.com/wballard/skeleton.git\ncd skeleton\nyarn\nyarn test\n")),Object(r.b)("p",null,"And now -- configure EmbraceSQL -- this will start from an empty directory\nand get everything in place for you to start working."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"yarn install -g @embracesql/cli\nmkdir packages/databases\nembracesql embedded packages/databases --nowatch\nyarn\n")),Object(r.b)("p",null,"This does something a little different -- rather than run a server, this generates a package with EmbraceSQL inside."),Object(r.b)("p",null,"Now when you are developing, you can keep the code generator running:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"npx run embracesql embedded --nowatch packages/databases\n")),Object(r.b)("p",null,"This will watching will look out for any ",Object(r.b)("inlineCode",{parentName:"p"},".sql")," or ",Object(r.b)("inlineCode",{parentName:"p"},".ts")," file changes and regenerate.\nThis is how you generally will want to proceed for development."),Object(r.b)("p",null,"If you are scripting up as part of a one time build -- you can run with the ",Object(r.b)("inlineCode",{parentName:"p"},"--nowatch")," option."),Object(r.b)("h2",{id:"adding-a-cli"},"Adding a CLI"),Object(r.b)("p",null,"Now it's time to make a super simple database driven hello world. Make a new package:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"mkdir packages/hello\n")),Object(r.b)("p",null,"Add in a package."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="packages/hello/package.json"',title:'"packages/hello/package.json"'}),'{\n  "name": "hello",\n  "version": "0.0.0",\n  "license": "MIT",\n  "dependencies": {\n    "@embracesql/engine": "*",\n    "databases": "*",\n    "ts-node": "*"\n  },\n  "scripts": {\n    "hello": "ts-node hello.ts"\n  }\n}\n')),Object(r.b)("p",null,"And we'll need to link up our multirepo."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"yarn\n")),Object(r.b)("p",null,"We'll code up a simple hello world. You are welcome to copy and paste this code!\nBut if you type it -- you'll get a feel for the autocomplete!"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="packages/hello/hello.ts"',title:'"packages/hello/hello.ts"'}),'// this is our actual embedded database.\nimport { EmbraceSQLEmbedded } from "databases";\n\nconst main = async () => {\n  const embedded = await EmbraceSQLEmbedded();\n  console.log(await embedded.databases.default.hello({}));\n};\nmain();\n')),Object(r.b)("p",null,"And now run it!"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"cd packages/hello\nyarn hello\n")))}s.isMDXComponent=!0},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(c,".").concat(u)]||b[u]||d[u]||l;return n?r.a.createElement(m,o(o({ref:t},s),{},{components:n})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<l;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);