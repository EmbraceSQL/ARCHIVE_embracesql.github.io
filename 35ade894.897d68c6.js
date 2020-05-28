(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(159)),i={title:"Deploying"},c={id:"deploying",title:"Deploying",description:"## Getting Started",source:"@site/docs/deploying.mdx",permalink:"/deploying",editUrl:"https://github.com/civitaslearning/embrace-sql/edit/master/docs/deploying.mdx",sidebar:"someSidebar",previous:{title:"Configuration",permalink:"/configuration"},next:{title:"Events",permalink:"/events"}},l=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Online Versioning",id:"online-versioning",children:[]},{value:"Logging",id:"logging",children:[]},{value:"Metrics",id:"metrics",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"getting-started"},"Getting Started"),Object(o.b)("p",null,"Embrace SQL lets you package itself, the server, along with your configuration, custom SQL, and handlers with one command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"docker run embrace-sql build my-embrace-sql-image\n")),Object(o.b)("p",null,"This will take the core EmbraceSQL server container, and overlay the current directory into a new Docker image.\nFrom there you can push your image to any container registry or hosting tool you like, as well as convert from Docker to other container formats."),Object(o.b)("h2",{id:"online-versioning"},"Online Versioning"),Object(o.b)("p",null,"Dev/Test/Stage as well as beta testing can be a challenge, so Embrace SQL provides out of the box support for versioned APIs. When your local directory is a Git repository, Embrace SQL has the ability to let you run any branch, tag, or SHA for any given query."),Object(o.b)("p",null,"You can do this on the fly with REST by appending ",Object(o.b)("inlineCode",{parentName:"p"},"#branch")," or ",Object(o.b)("inlineCode",{parentName:"p"},"#tag")," or ",Object(o.b)("inlineCode",{parentName:"p"},"#sha")," to the end of an URL."),Object(o.b)("p",null,"Similarly in code, in a handler, say you want to set all queries to be served from the ",Object(o.b)("inlineCode",{parentName:"p"},"stage")," branch, which means the most recent commit on this branch."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="./before.js"',title:'"./before.js"'}),'export const before = async (context) => {\n  context.version = "stage";\n};\n')),Object(o.b)("p",null,"You can get pretty creative with these handlers, and set the version based on the user token, or environment variables, or even rest calls to external confguration services."),Object(o.b)("p",null,"Internally EmbraceSQL uses Git to checkout and cache requested versions and dynamically sets itself up to process SQL modules with the SQL and handlers specified at that version. Separate event queues and handler registrations are used for each version, so there is no risk of mismatch between your SQL and your handlers."),Object(o.b)("p",null,"Care must be taken that your database won't have branch schema capability -- unfortunately such a thing does not yet exist.\nTo make working with versioned code easier, Embrace SQL knows which migrations are logically with a given branch/tag/sha and will warn you if they are not applied.\nEven smarter -- EmbraceSQL, for each database, for each schema, keeps track of the schema after each migration and will warn you if the schema does no match the expectations, and raise and event containing the schema diff.\nEmbrace SQL will still try to run your SQL modules even if there is a mismatch, but having the mismatch schema output will greatly aid your comfort with versioning."),Object(o.b)("h2",{id:"logging"},"Logging"),Object(o.b)("p",null,"EmbraceSQL writes out informative messages to ",Object(o.b)("inlineCode",{parentName:"p"},"stdout")," and error messages to ",Object(o.b)("inlineCode",{parentName:"p"},"stderr"),". Every message is written as a single line JSON with escaped linefeeds in an attempt to make the logs easier to parse and process with your favoite log and event management tool."),Object(o.b)("p",null,"Four log levels are enumerated: ",Object(o.b)("inlineCode",{parentName:"p"},"DEBUG"),", ",Object(o.b)("inlineCode",{parentName:"p"},"INFO"),", ",Object(o.b)("inlineCode",{parentName:"p"},"WARN"),", ",Object(o.b)("inlineCode",{parentName:"p"},"ERROR"),"."),Object(o.b)("h2",{id:"metrics"},"Metrics"),Object(o.b)("p",null,"EmbraceSQL exports metrics in Prometheus format at a well known URL ",Object(o.b)("inlineCode",{parentName:"p"},"http://server:port/metrics"),". In addition to default Prometheus metrics, you will find:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Per SQL Module",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Counters for every event"),Object(o.b)("li",{parentName:"ul"},"Histogram for every event handler run duration"))),Object(o.b)("li",{parentName:"ul"},"Per Database",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Counters for every event"),Object(o.b)("li",{parentName:"ul"},"Histogram for every event handler run duration")))))}u.isMDXComponent=!0},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,d=b["".concat(i,".").concat(m)]||b[m]||p[m]||o;return n?a.a.createElement(d,c({ref:t},s,{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);