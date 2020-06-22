(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{105:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(2),r=(a(0),a(120));const l={title:"Databases"},o={id:"databases",isDocsHomePage:!1,title:"Databases",description:"Getting Started",source:"@site/docs/databases.mdx",permalink:"/databases",editUrl:"https://github.com/civitaslearning/embrace-sql/edit/master/docs/databases.mdx",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/index"},next:{title:"Tables",permalink:"/tables"}},s=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Adding a Database",id:"adding-a-database",children:[]},{value:"Remote Databases",id:"remote-databases",children:[]},{value:"Supported Databases",id:"supported-databases",children:[]},{value:"Database URLs",id:"database-urls",children:[]}],i={rightToc:s};function b({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"getting-started"},"Getting Started"),Object(r.b)("p",null,"EmbraceSQL not only works with multiple database flavors, it works with multiple databases. Embrace SQL lets you start from scratch with a new database, and lets you work with your existing databases. All you need to do is tell EmbraceSQL an URL to allow connection."),Object(r.b)("p",null,"By default, there is one database named ",Object(r.b)("inlineCode",{parentName:"p"},"default"),", which points to the local sqlite. So -- no config at all is equivalent to:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="embracesql.yaml"',title:'"embracesql.yaml"'}),"databases:\n  default: sqlite:embracesql.db\n")),Object(r.b)("p",null,"If you haven't already, generate a new config in any directory you like now:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"docker pull embracesql/server\ndocker run embracesql/server init > docker-compose.yaml\ndocker-compose up\n")),Object(r.b)("h2",{id:"adding-a-database"},"Adding a Database"),Object(r.b)("p",null,"You can add as many databases as you like."),Object(r.b)("p",null,"Let\u2019s add a new database, again using sqlite. Just paste in this config file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yml",metastring:'title="embracesql.yaml"',title:'"embracesql.yaml"'}),"databases:\n  default: sqlite:embracesql.db\n  other: sqlite:other.db\n")),Object(r.b)("p",null,"Using the EmbraceSQL Docker, do a ",Object(r.b)("inlineCode",{parentName:"p"},"reload"),"."),Object(r.b)("p",null,"This will create the new database, do an ",Object(r.b)("inlineCode",{parentName:"p"},"ls")," and see there will be two local db files."),Object(r.b)("p",null,"You can exit -- ",Object(r.b)("inlineCode",{parentName:"p"},"ctrl-c")," in your shell and then start again."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"docker-compose up\n")),Object(r.b)("h2",{id:"remote-databases"},"Remote Databases"),Object(r.b)("p",null,"It's fun to use SQLite to learn, but it's probably not what you are really running. So EmbraceSQL lets you connect to remote databases that you already have running. Let's say you have PostgreSQL running on some host:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="embracesql.yaml"',title:'"embracesql.yaml"'}),"databases:\n  default: postgresql://${USER}:${PASSWORD}@${HOST}:${PORT}/${DB}\n")),Object(r.b)("p",null,"And yes -- those are environment variables, so you can put in plain strings if you like, or have those environment variables set -- actually any environment variables you like -- set before EmbraceSQL starts up. These environment variables let you manage secrets and database locations any way you like, and work well with Kubernetes, ECS, and docker-compose."),Object(r.b)("h2",{id:"supported-databases"},"Supported Databases"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"SQLite: by file path"),Object(r.b)("li",{parentName:"ul"},"PostgreSQL: by network"),Object(r.b)("li",{parentName:"ul"},"MySQL: by network"),Object(r.b)("li",{parentName:"ul"},"RedShift: by network")),Object(r.b)("h2",{id:"database-urls"},"Database URLs"),Object(r.b)("p",null,"You connect to databases by URL:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"network format ",Object(r.b)("inlineCode",{parentName:"li"},"flavor://user:password@host:port/database")),Object(r.b)("li",{parentName:"ul"},"local file format ",Object(r.b)("inlineCode",{parentName:"li"},"flavor:filename"))),Object(r.b)("p",null,"You can harcode anything you like, but environment variables are suppoted in URLs and will be replaced automatically."),Object(r.b)("p",null,"While it's cool that you can have multiple, and mixed flavor of -- databases, you probably want to put something in there, so let's talk about ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"./tables"}),"Tables"),"."))}b.isMDXComponent=!0},120:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),c=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),u=c(a),p=n,m=u["".concat(o,".").concat(p)]||u[p]||d[p]||l;return a?r.a.createElement(m,s(s({ref:t},b),{},{components:a})):r.a.createElement(m,s({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var b=2;b<l;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);