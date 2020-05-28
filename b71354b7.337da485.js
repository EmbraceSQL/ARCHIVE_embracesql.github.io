(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{150:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var r=a(1),n=a(9),i=(a(0),a(159)),o={title:"Problems"},l={id:"problems",title:"Problems",description:"## Overview",source:"@site/docs/problems.mdx",permalink:"/problems",editUrl:"https://github.com/civitaslearning/embrace-sql/edit/master/docs/problems.mdx",sidebar:"someSidebar",previous:{title:"Events",permalink:"/events"},next:{title:"Interfaces",permalink:"/interfaces"}},s=[{value:"Overview",id:"overview",children:[]}],c={rightToc:s};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"Data access has a problems, this is the catalog of problems EmbraceSQL is trying to solve."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The majority of your data is stored in relational databases."),Object(i.b)("li",{parentName:"ul"},"Accessing data via API is repetitive work:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Mapping data from queries to runtime data structures requires coding."),Object(i.b)("li",{parentName:"ul"},"Connecting, configuring, preparing statements, submitting queries, pickout out results require coding."))),Object(i.b)("li",{parentName:"ul"},"Accessing data via ORMs have two broad categories that create repetitive work:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Those that require you to build with them from scratch, or worse -- start over."),Object(i.b)("li",{parentName:"ul"},"Those that require mapping from database data to runtime data."))),Object(i.b)("li",{parentName:"ul"},"ORMs and data access layers attempt to, and ultimately fail to eliminate SQL from application programming."),Object(i.b)("li",{parentName:"ul"},"Data access fails to generate meaningful business events required to integrate multiple systems into a cohesive business."),Object(i.b)("li",{parentName:"ul"},"Databases live longer than applications, and over time multiple applications emerge with nearly redundant data access TO the same database, just in different languages and styles."),Object(i.b)("li",{parentName:"ul"},"Data access strategies do nothing to reduce the number of data models, which typically include a database (absolutely required if you want to restart your app, ever) and multiple (technically optional) runtime data models including 1 or more of:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Business Objects Models"),Object(i.b)("li",{parentName:"ul"},"Data Transfer Objects Models"),Object(i.b)("li",{parentName:"ul"},"View Models"))),Object(i.b)("li",{parentName:"ul"},"Expressing graph data, even with GraphQL, even in the simple case of master-detail relationships, requires multiple queries as well as application code to resolve a graph."),Object(i.b)("li",{parentName:"ul"},"Row and column, or object and property level access control and visibility is left to application code leading to redundant implementation."),Object(i.b)("li",{parentName:"ul"},"The code editing experience in application code when working with database data, lacks type awareness and auto complete."),Object(i.b)("li",{parentName:"ul"},"No data access exists that is comfortable and safe \u201cfor security\u201d to use directly from a client application, leading to additional middleware services and servers."),Object(i.b)("li",{parentName:"ul"},"Data access tends to consider the one database, or application use case, and fails to deal with the common case of bringing together multiple databases and file stores."),Object(i.b)("li",{parentName:"ul"},"Stored procedures and function in the databases do not deal with versions/branches/promotion models."),Object(i.b)("li",{parentName:"ul"},"Data access tools are language specific, while the programming market at large is clearly polyglot with Python, JavaScript, Java, and C# being dominant. "),Object(i.b)("li",{parentName:"ul"},"Typical data access coding, particularly with ORMs, leads to excessive querying, such as the master-loop-query-detail which generates N database trips instead of the 1 that would be optimal."),Object(i.b)("li",{parentName:"ul"},"Typical data access keeps the user identity in application code, and the database has no contextual notion of the end user.")))}p.isMDXComponent=!0},159:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),p=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},u=function(e){var t=p(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),b=r,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return a?n.a.createElement(m,l({ref:t},c,{components:a})):n.a.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);