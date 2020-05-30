(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(1),r=a(9),i=(a(0),a(159)),o=a(217),s={title:"Events"},l={id:"events",title:"Events",description:"## Getting Started",source:"@site/docs/events.mdx",permalink:"/events",editUrl:"https://github.com/civitaslearning/embrace-sql/edit/master/docs/events.mdx",sidebar:"someSidebar",previous:{title:"Deploying",permalink:"/deploying"},next:{title:"Problems",permalink:"/problems"}},c=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Event Flow",id:"event-flow",children:[{value:"SQL Modules",id:"sql-modules",children:[]}]},{value:"Data Events",id:"data-events",children:[{value:"<code>before</code>",id:"before",children:[]},{value:"<code>after</code>",id:"after",children:[]},{value:"<code>afterError</code>",id:"aftererror",children:[]}]},{value:"System Events",id:"system-events",children:[{value:"<code>validateToken</code>",id:"validatetoken",children:[]},{value:"<code>resolveSQL</code>",id:"resolvesql",children:[]},{value:"<code>beforeStreamMessage</code>",id:"beforestreammessage",children:[]},{value:"<code>beforeMigration</code>",id:"beforemigration",children:[]},{value:"<code>afterMigration</code>",id:"aftermigration",children:[]}]},{value:"Handlers",id:"handlers",children:[]}],d={rightToc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"getting-started"},"Getting Started"),Object(i.b)("p",null,"One of the big choices in system design is CRUD or some form of EventSourcing / CQRS setup. EmbraceSQL -- embraces SQL -- C\u2019s are UPDATE/INSERT/DELETE and Q\u2019s are SELECT. They are separated by SQL itself. So CQRS is \u2018free\u2019, in fact SQL has had this notion all along."),Object(i.b)("p",null,"Now for the event sourcing part.\nBy default every command generates an event internal to the EmbraceSQL event processing system. EmbraceSQL itself uses an event driven architecture, starting with an API request, running through multiple event handlers, and finally returning results or an error.\nCommands - INSERT/UPDATE/DELETE -- can be twinned to a Kafka topic, so that any time the database is to be modified, other services can be informed. When one of these commands is detected, the entire originating request, encoded as JSON is placed in the topic as a message, along with the SQL. These events let you see:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Who: the originating request context contains a user token if authenticated"),Object(i.b)("li",{parentName:"ul"},"What: the resulting SQL and Parameters"),Object(i.b)("li",{parentName:"ul"},"When: total ordering of events in Kafka"),Object(i.b)("li",{parentName:"ul"},"Why: the originating request and paramters resulting from an API call or REST")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="./embracesql.yml"',title:'"./embracesql.yml"'}),"twinCommandsTo: kafka:hostname:port/topic\n")),Object(i.b)("p",null,"There is actually a bit more than that -- EmbraceSQL internally runs off message streams, when you call an API, the inputs are enqueued, and run through each handler, as well as for the database query itself.\nEmbraceSQL is itself a SQL EventSourcing system -- where the events ",Object(i.b)("em",{parentName:"p"},"are")," the SQL modules, and the handlers are handling events."),Object(i.b)("h2",{id:"event-flow"},"Event Flow"),Object(i.b)("h3",{id:"sql-modules"},"SQL Modules"),Object(i.b)(o.a,{chart:"\nsequenceDiagram\n  participant Client\n  participant EmbraceSQL\n  participant Handler\n  participant Database\n  participant Kafka\n  Client->>+EmbraceSQL: SQLAPI or AutoCRUD at URL with parameters\n  EmbraceSQL->>+Handler: validateToken\n  Handler--\x3e-EmbraceSQL: ...\n  EmbraceSQL->>+Handler: resolveSQL\n  Handler--\x3e-EmbraceSQL: ...\n  EmbraceSQL->>+Handler: beforeStreamMessage\n  Handler--\x3e-EmbraceSQL: ...\n  EmbraceSQL-xKafka: stream context as message\n  EmbraceSQL->>Database: transaction begin\n  activate Database\n  EmbraceSQL->>+Handler: before chain\n  Handler--\x3e-EmbraceSQL: ...\n  EmbraceSQL->>Database: sql + parameters\n  Database--\x3e>EmbraceSQL: results returned\n  EmbraceSQL->>+Handler: after chain\n  Handler--\x3e-EmbraceSQL: ...\n  opt Errors\n    EmbraceSQL->>+Handler: afterError chain\n    Handler--\x3e-EmbraceSQL: ...\n  end\n  alt error unhandled\n    EmbraceSQL->>Database: transaction rollback\n  else\n    EmbraceSQL->>Database: transaction commit\n  end\n  deactivate Database\n  EmbraceSQL--\x3e>Client: context.results returned\n",mdxType:"Mermaid"}),Object(i.b)("h2",{id:"data-events"},"Data Events"),Object(i.b)("p",null,"Data events are the main point you can customize SQL modules. All data handlers are hierarchial, with two chains 'before' and 'after'. Before chains run from the root folder down the file hierarchy toward your SQL file, after chains run from the final folder with the SQL up the file hierarchy."),Object(i.b)("h3",{id:"before"},Object(i.b)("inlineCode",{parentName:"h3"},"before")),Object(i.b)("p",null,"Each of the folder hierarchy based ",Object(i.b)("inlineCode",{parentName:"p"},"before")," handlers has a service queue, automatically defined, so that each folder, and each sql file has a before handling queue. Messages are placed in the root folder before handler, handled, and then passed down the folder hierarchy until a query is reached."),Object(i.b)("p",null,"After the ",Object(i.b)("inlineCode",{parentName:"p"},"before")," handlers are processed, the resulting ",Object(i.b)("inlineCode",{parentName:"p"},"context")," is presented to a pool of SQL processing queues for each attached database. This allows concurrent data access without resorting to multithreading or traditional connection pooling."),Object(i.b)("p",null,"When a query completes, the resulting data is attached to the context and passed back up the chain as ",Object(i.b)("inlineCode",{parentName:"p"},"after")," events."),Object(i.b)("h3",{id:"after"},Object(i.b)("inlineCode",{parentName:"h3"},"after")),Object(i.b)("p",null,"Each folder in the hierarchy, and the sql file itself has an automatically defined ",Object(i.b)("inlineCode",{parentName:"p"},"after")," event queue, which run in the reverse order as ",Object(i.b)("inlineCode",{parentName:"p"},"before")," events, from the sql file back to the root directory. Each handler runs, and passed up to the subsequent queue."),Object(i.b)("h3",{id:"aftererror"},Object(i.b)("inlineCode",{parentName:"h3"},"afterError")),Object(i.b)("p",null,"Unhandled exceptions raised in any handler in a chain, including coming from the supporting database engine, are handed here. You can do nothing, which continues the exception.\nIf you handle an exception, and do not raise another, and set ",Object(i.b)("inlineCode",{parentName:"p"},"context.error = null"),", EmbraceSQL treats it like no error happened, just like if you had wrapped your handler code in ",Object(i.b)("inlineCode",{parentName:"p"},"try{} catch{}")," and caught it."),Object(i.b)("p",null,"You can also handle exceptions normally in handler code as you see fit. This event acts as a backstop."),Object(i.b)("p",null,"There is no ",Object(i.b)("inlineCode",{parentName:"p"},"beforeError"),", EmbraceSQL is not psychic \ud83d\udd2e."),Object(i.b)("h2",{id:"system-events"},"System Events"),Object(i.b)("p",null,"While data events fire in response to SQL module invocations, system events can fire at any time."),Object(i.b)("h3",{id:"validatetoken"},Object(i.b)("inlineCode",{parentName:"h3"},"validateToken")),Object(i.b)("p",null,"OpenID Connect authorization tokens are decoded and validated by default. But you can provide your own event handler that does your own token validation."),Object(i.b)("h3",{id:"resolvesql"},Object(i.b)("inlineCode",{parentName:"h3"},"resolveSQL")),Object(i.b)("p",null,"SQL module inovcations resovle to chain of event handlers and associated SQL. The ",Object(i.b)("inlineCode",{parentName:"p"},"resolve")," event lets you tap into this and replace any handler or SQL you like, running ",Object(i.b)("em",{parentName:"p"},"before")," the first ",Object(i.b)("inlineCode",{parentName:"p"},"before")," handler."),Object(i.b)("h3",{id:"beforestreammessage"},Object(i.b)("inlineCode",{parentName:"h3"},"beforeStreamMessage")),Object(i.b)("p",null,"When connected to an external message stream, just before a message is to be sent to an external message stream, you have a chance to intercept it."),Object(i.b)("h3",{id:"beforemigration"},Object(i.b)("inlineCode",{parentName:"h3"},"beforeMigration")),Object(i.b)("p",null,"Just before a migration is going to start, this event is fired for each distinct migration SQL script that will run."),Object(i.b)("h3",{id:"aftermigration"},Object(i.b)("inlineCode",{parentName:"h3"},"afterMigration")),Object(i.b)("p",null,"After the migration, this event is fired for each distinct migration SQL."),Object(i.b)("h2",{id:"handlers"},"Handlers"),Object(i.b)("p",null,"Handlers are ",Object(i.b)("inlineCode",{parentName:"p"},"async")," JavaScript or TypeScript functions, that receive a ",Object(i.b)("inlineCode",{parentName:"p"},"context"),", run code as you see fit, and either throw an error or return.\nThe ",Object(i.b)("inlineCode",{parentName:"p"},"context")," is modified in place, and serves as a shared blackboard for each request."),Object(i.b)("p",null,"Handlers go one per file, with the file ending in ","[event-name]",".","[js|ts]",", exporting a single function named by ","[event-name]","."),Object(i.b)("p",null,"EmbraceSQL will generate empty handlers for you for each folder, for each sql file, and for the system level event handlers."))}b.isMDXComponent=!0},217:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(248),o=a.n(i);o.a.initialize({startOnLoad:!0});t.a=function(e){var t=e.chart;return Object(n.useEffect)((function(){o.a.contentLoaded()}),[]),r.a.createElement("div",{className:"mermaid"},t)}},312:function(e,t,a){var n={"./locale":214,"./locale.js":214};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=312}}]);