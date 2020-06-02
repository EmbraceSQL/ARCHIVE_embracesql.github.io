(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{156:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(1),r=a(9),l=(a(0),a(159)),o=a(218),i={title:"SQL Modules"},s={id:"sqlmodules",title:"SQL Modules",description:"## Getting Started",source:"@site/docs/sqlmodules.mdx",permalink:"/sqlmodules",editUrl:"https://github.com/civitaslearning/embrace-sql/edit/master/docs/sqlmodules.mdx",sidebar:"someSidebar",previous:{title:"Tables",permalink:"/tables"},next:{title:"Security",permalink:"/security"}},c=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Data Handlers",id:"data-handlers",children:[{value:"Context",id:"context",children:[]},{value:"Using Multiple Databases",id:"using-multiple-databases",children:[]}]},{value:"SQL Dialect",id:"sql-dialect",children:[]},{value:"Transactions",id:"transactions",children:[]},{value:"AutoCRUD",id:"autocrud",children:[{value:"Error Handling",id:"error-handling",children:[]},{value:"Supported Formats",id:"supported-formats",children:[]}]},{value:"Invoking SQL Modules",id:"invoking-sql-modules",children:[{value:"REST",id:"rest",children:[]},{value:"Cient Library",id:"cient-library",children:[]}]}],d={rightToc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"getting-started"},"Getting Started"),Object(l.b)("p",null,"A given SQL file defines a new Modules, which exposes an API, automatically sets up ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"./events"}),"event queues"),", generates Data Handlers templates, and ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"./clients"}),"Generated Client Libraries"),".\nYou just type SQL, EmbraceSQL does the rest.\nThis is a different approach than ORMs, which generate a meta schema, or a mapping, which you then use in application code, which then generates SQL at runtime.\nThis is a SQL first approach, and you are going to type a whole lot less to use it, as well as be able to access legacy databases."),Object(l.b)("p",null,"The SQL you write is the SQL that is going to run. You are in full control and will not need to learn a new way to write SQL."),Object(l.b)("p",null,"As a simple example, let's make two new API endpoints in a directory by creating some sql files. These are tucked under the ",Object(l.b)("inlineCode",{parentName:"p"},"./default")," meaning they are for the defatult database."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'title="migrations/default/001.sql"',title:'"migrations/default/001.sql"'}),"CREATE TABLE things(\n  id integer PRIMARY KEY,\n  name text NOT NULL\n);\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'title="migrations/default/002.sql"',title:'"migrations/default/002.sql"'}),'INSERT INTO things(id, name) values(1, "planes");\nINSERT INTO things(id, name) values(2, "trains");\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"docker run -v ${PWD}:/var/embracesql embracesql/server migrate\n")),Object(l.b)("p",null,"And now the sql scripts to define the sql modules."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'title="./default/things/all.sql"',title:'"./default/things/all.sql"'}),"SELECT * FROM things;\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'title="./default/things/add.sql"',title:'"./default/things/add.sql"'}),"INSERT INTO things(id, name) VALUES(:id, :name);\n")),Object(l.b)("p",null,"Notice the named parameters.\nYou can set up named parameters using ",Object(l.b)("inlineCode",{parentName:"p"},":name")," where ",Object(l.b)("inlineCode",{parentName:"p"},"name")," can be any continuous string you like.\nThis format is as raw a sql as possible, with the specific idea that you can open and edit an SQL file using your favorite SQL editor or IDE to interactively test and build your query.\nEmbraceSQL doesn't dictate any particular developer tools."),Object(l.b)("p",null,"Go to your directory and start the server."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"docker-compose up\n")),Object(l.b)("p",null,"If you open a browser to http://localhost:8765/ you will see EmbraceSQL has picked up your new files and there are now new APIs."),Object(l.b)("p",null,"--todo--screenshot"),Object(l.b)("p",null,"Go ahead and give these APIs a test. This will give you a before and after look."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'curl http://localhost:8765/default/things/all\ncurl --request POST --data \'{"id": 100, "name": "cake"}\' -H "Content-Type: application/json" http://localhost:8765/default/things/add\ncurl http://localhost:8765/default/things/all\n')),Object(l.b)("h2",{id:"data-handlers"},"Data Handlers"),Object(l.b)("p",null,"Data Handlers are an opportunity for you to add bits of code to handle events in the EmbraceSQL SQL module lifecycle. Data access can ",Object(l.b)("em",{parentName:"p"},"almost always")," be pulled of with straight SQL, but sometimes you need a little adjustment."),Object(l.b)("p",null,"Back in the local directory do ",Object(l.b)("inlineCode",{parentName:"p"},"ls things/default")," -- notice a few new files:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"all.sql.before.ts\nall.sql.after.ts\nall.sql.afterError.ts\nadd.sql.before.ts\nadd.sql.after.ts\nadd.sql.afterError.ts\n")),Object(l.b)("p",null,"Take a look inside -- these are data handlers, generated in TypeScript. ",Object(l.b)("inlineCode",{parentName:"p"},"before")," provides the ability to intercept a query on the way in, and ",Object(l.b)("inlineCode",{parentName:"p"},"after")," results on the way out."),Object(l.b)("p",null,"You are really limited only by your imagination, but some suggestions for ",Object(l.b)("inlineCode",{parentName:"p"},"before")," handlers:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Check security with code (more on our security model later)"),Object(l.b)("li",{parentName:"ul"},"Re-write or replace parameter values")),Object(l.b)("p",null,"And for ",Object(l.b)("inlineCode",{parentName:"p"},"after")," handlers:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Remove or obfuscate secure data at the row/column level"),Object(l.b)("li",{parentName:"ul"},"Make an additional query for more or associated data with EmbraceSQL")),Object(l.b)("p",null,"Data Handlers are hierarchical, to allow defaults, and to cut down copy and paste programming.\nStarting from a like-named foo.sql, EmbraceSQL looks for ",Object(l.b)("inlineCode",{parentName:"p"},"foo.sql.[event].[extension]")," for a given event, across all extensions. From there, the local directory ",Object(l.b)("inlineCode",{parentName:"p"},"[event].[extension]"),", and repeatedly up each directoy to the root directory where EmbraceSQL is running. This is the event handler chain."),Object(l.b)("p",null,"OK -- so ",Object(l.b)("em",{parentName:"p"},"resolution"),", handlers run in order from root to child, so ",Object(l.b)("inlineCode",{parentName:"p"},"./before.js")," then ",Object(l.b)("inlineCode",{parentName:"p"},"./default/before.js"),", then ",Object(l.b)("inlineCode",{parentName:"p"},"./default/things/all.before.js"),". If at any point you throw an exception, this will make it all the way back to your calling client as an error message."),Object(l.b)("p",null,"This means handlers are a chain:"),Object(l.b)(o.a,{chart:"\nstateDiagram\n  br: Root level before handler\n  bf: Folder level before handler\n  bff: File level before handler\n  aff: File level after handler\n  af: Folder level after handler\n  ar: Root level after handler\n  [*] --\x3e br\n  br --\x3e bf\n  bf --\x3e bff\n  bff --\x3e aff\n  aff --\x3e af\n  af --\x3e ar\n  ar --\x3e [*]\n",mdxType:"Mermaid"}),Object(l.b)("p",null,"Let\u2019s look inside the ",Object(l.b)("inlineCode",{parentName:"p"},"add")," handlers, and tweak some parameters."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="./default/things/add.sql.before.js"',title:'"./default/things/add.sql.before.js"'}),"export const before = async (context) => {\n  // modify a passed in parameter by name\n  context.parameters.name = context.parameters.name + \u201c-ahoy\u201d;\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="./default/things/add.sql.after.js"',title:'"./default/things/add.sql.after.js"'}),"export const after = async (context) => {\n  // run a different SQL module inline, no parameters, grabbing the results\n  context.results = await context.databases.default.things.all.sql({});\n};\n")),Object(l.b)("p",null,"And now -- give it a try, not only will you have a slightly different name than what you sent in -- you will get rows back as well, with one API call, instead of the two we previously ran."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'curl --request POST --data \'{"id": 200, "name": "ahoy"}\' http://localhost:8765/default/things/add\n')),Object(l.b)("p",null,"The advantage here is you can batch up multiple interactions, even with multiple databases, behind a single trip over the network."),Object(l.b)("h3",{id:"context"},"Context"),Object(l.b)("p",null,"The Data Handler execution model relies on a context, which is shared between all handlers in a chain. This is the ",Object(l.b)("em",{parentName:"p"},"one parameter")," passed to each handler, potentialy modified by a handler, and is available subsequent handlers."),Object(l.b)("p",null,"EmbraceSQL itself creates this context when an SQL module call starts, and augments this context when running the SQL through to the database, adding the results from the database."),Object(l.b)("p",null,"This shared context, and single parameter call signature for handlers makes handlers more consistent and affords easy access to object destructuring syntax features to pick out the bits of context you find interesting in your application."),Object(l.b)("h3",{id:"using-multiple-databases"},"Using Multiple Databases"),Object(l.b)("p",null,"We've seen in ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"./databases"}),"Databases")," that you can have multiple databases -- so then -- how does an API -- an .sql file -- know which database to use?"),Object(l.b)("p",null,"The answer is -- folders. Each folder under root correspondes to a named database."),Object(l.b)("h2",{id:"sql-dialect"},"SQL Dialect"),Object(l.b)("p",null,"EmbraceSQL does not define a new SQL dialect, it passes your SQL through directly to each database. This lets you use SQL fully, along with all the advanced features of your database, without the traditional limits created by ORM style query generators. It also lets you write SQL files with your existing favorite SQL editing tools."),Object(l.b)("p",null,"The trade-off is of couse, you need to know the SQL of you database! The good news is you won't need to learn yet another query language, or an API that generates a quey language and keep ",Object(l.b)("em",{parentName:"p"},"that")," mapping in your head."),Object(l.b)("h2",{id:"transactions"},"Transactions"),Object(l.b)("p",null,"For any given database, you can begin, commit, or rollback a transaction at any time in any handler. You can do this in SQL, and you can do this in handler code."),Object(l.b)("p",null,"Any transaction that was not committed by the time data is returned is automatically rolled back, meaning and ",Object(l.b)("inlineCode",{parentName:"p"},"INSERT")," ",Object(l.b)("inlineCode",{parentName:"p"},"UPDATE")," or ",Object(l.b)("inlineCode",{parentName:"p"},"DELETE")," will have no permanent effect.\nData can still return, which can let you do somewhat clever things like, insert data, read it back, and then an automatic roll back happen. This is a handy trick for database testing, where you can let transactions \u2018undo\u2019 the test data changes for you, restoring your database to a pristine state."),Object(l.b)("p",null,"For example, let's modify a previous handler:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="./things/add.sql.before.js"',title:'"./things/add.sql.before.js"'}),"export const before = async (context) => {\n  // start a database transaction\n  await context.databases.default.transactions.begin();\n  // modify a passed in parameter by name\n  context.parameters.name = context.parameters.name + \u201c-ahem\u201d;\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="./things/add.sql.after.js"',title:'"./things/add.sql.after.js"'}),"export const after = async (context) => {\n  // run a SQL module inline, no parameters\n  context.results = await context.invoke.things.all.sql({});\n  // do not commit, as this is commented out\n  // note that by this time we have already done the insert\n  // and queried the database\n  // await context.databases.default.transactions.commit();\n  // we could also explicitly rollback, but this will happen on its own\n  // await context.databases.default.transactions.rollback();\n};\n")),Object(l.b)("p",null,"And behold the rollback, which you can see in your shell."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'curl http://localhost:8765/things/all\ncurl --request POST --data \'{"id": 100, "name": "cough"}\' http://localhost:8765/things/add\ncurl http://localhost:8765/things/all\n')),Object(l.b)("p",null,"This will show the table, then a modified table, then back to the original table."),Object(l.b)("h2",{id:"autocrud"},"AutoCRUD"),Object(l.b)("p",null,"It's great to be able to have the full power of SQL when you need it -- but sometimes you just need to do some basic CRUD. EmbraceSQL automatically inspects your databases and creates default SQL Modules for your tables for working with single and multiple records operations by key, eliminating a big pile of very tedious coding and testing."),Object(l.b)("p",null,"Let's set up some tables for a really vanilla shopping cart, in our default testing SQLite database and see how this works. We'll have a pretty normal set or orders, items to order, and an association table to put items in an order."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'title="./migrations/default/002.sql"',title:'"./migrations/default/002.sql"'}),"CREATE TABLE orders(\n  order_id INTEGER PRIMARY KEY AUTOINCREMENT,\n  name TEXT NOT NULL\n);\nCREATE TABLE items(\n  item_id INTEGER PRIMARY KEY AUTOINCREMENT,\n  description TEXT NOT NULL\n);\nCREATE TABLE order_items(\n  order_item_id INTEGER PRIMARY KEY AUTOINCREMENT,\n  order_id INTEGER NOT NULL,\n  item_id INTEGER NOT NULL,\n  quantity INTEGER NOT NULL,\n  FOREIGN KEY(order_id) REFERENCES orders(order_id),\n  FOREIGN KEY(item_id) REFERENCES items(item_id)\n);\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"docker run embrace-sql migrate\n")),Object(l.b)("p",null,"Without writing any SQL at all, you get a REST interface for these tables."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"POST")," new rows to tables to Create"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"GET")," table rows by key to Read"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"UPDATE")," particular fields to values to Update"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"DELETE")," by key to Delete")),Object(l.b)("p",null,"You can also make ",Object(l.b)("inlineCode",{parentName:"p"},"before")," and ",Object(l.b)("inlineCode",{parentName:"p"},"after")," handlers for these automatically generated SQL modules, without needing to write the SQL.\nThe way to think about it is -- EmbraceSQL has a lot of SQL built in for the common cases, and you can write any SQL you like for more complex cases. Whether you write the sql, or EmbraceSQL has it built in, you can always create event handlers to intercept query results and modify them as needed."),Object(l.b)("p",null,"Even more powerful, with ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"./clients"}),"Generated Client Libraries"),", you have typing and autocompletion available for you for every API. Let's see how AutoCRUD looks from TypeScript. So you can get a lot of data access without any SQL or mapping at all."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'import EmbraceSQL from "./embrace-sql";\n\nconst client = new EmbraceSQL("http://localhost:8765");\n\nconst example = async () => {\n\n  // little shortcut to type less...\n  const db = client.databases.default;\n\n  // make some items we can order\n  const item_key = await db.items.create({description: "Paper"});\n\n  // and array valued, make a few records in one shot...\n  const more_item_keys = await db.items.create([\n    {description: "Can"},\n    {description: "Loaf"},\n  ]);\n\n  // no need to pass in the key, it is an auto increment, but you\n  // sure will need it to put in order items, so let\'s capture the created key\n  // whih EmbraceSQL thought of for you\n  const order_key = await db.orders.create({name: "Sample"});\n\n  // now join items and orders with one of each\n  // again notice we don\'t need to mention the autoincrement\n  await db.order_items.create([item_key, ...more_item_keys].map(\n    (item_key) => ({order_key.order_id, item_key.item_id, quantity: 1})\n  ));\n\n  // You can use that created key to \'read back\' a record, kinda handy\n  // oh -- and it pulls back the whole associated referential graph\n  // your reward for embracing sql and referential integrity is not needing\n  // to query to get child records like order_items or lookup data like items\n  const my_order = await db.orders.read(order_key);\n\n  // notice three tables are joined automatically and you can get the description\n  // EmbraceSQL inside created a query batch to pull in all this data\n  // -- in one trip to the database, so it\'s not a chatterbox like ORMs\n  console.log(my_order.name, my_order.order_items, my_order.order_items[0].description);\n\n  // hmm -- I really want two of that... let\'s update, passing in all the order items\n  // and using nice object spread with one property of overwrite\n  await db.order_items.update({...my_order.order_items, quantity: 2});\n\n  // nope -- I don\'t want it at all\n  // delete the whole thing down the referentia graph\n  await db.orders.delete(order_key);\n\n  // but the items aren\'t deleted -- they are lookup data!\n  // EmbraceSQL is smart enough to only delete children\n  console.log(await db.items.all());\n\n  // clean up the items\n  await db.items.all.delete();\n};\nexample();\n')),Object(l.b)("p",null,"So, every SQL module has event handlers, and pure SQL inside. So you\ncan actually spy on EmbraceSQL -- even change the SQL for AutoCRUD on the fly if you really wish it!"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="./default/items/before.js"',title:'"./default/items/before.js"'}),"export const before = (context) => {\n  // look inside EmbraceSQL and see what it is doing!\n  // this will run for the folder items, corresponding to the table items\n  // so will run for create, read, update and delete\n  console.log(context.sql, context.parameters);\n};\n")),Object(l.b)("h3",{id:"error-handling"},"Error Handling"),Object(l.b)("p",null,"Some errors are more critical than others. Sometimes you want to keep going, sometimes you want to abort. EmbraceSQL is a bit of a perfectionist, and aborts the entire request on any unhandled error. You can be more forgiving though, and decide to keep going by creating an error handler:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript",metastring:'title="./things/add.sql.error.js"',title:'"./things/add.sql.error.js"'}),"export const error = (context) => {\n  // see what happened and print it out, the error is on the context\n  console.log(context.error);\n  // do nothing and the error 'counts'\n\n  // optionally 'eat' the error\n  context.error = undefined;\n\n  // raise it again -- or any error and the transaction aborts\n  // throw \"Oh! Noes!\";\n};\n")),Object(l.b)("p",null,"You can also ",Object(l.b)("inlineCode",{parentName:"p"},"try/catch")," in your handler code, so in practice the ",Object(l.b)("inlineCode",{parentName:"p"},"error")," event handlers are useful to capture errors coming back from your database engine."),Object(l.b)("h3",{id:"supported-formats"},"Supported Formats"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"TSV/CSV, parameter names are extracted from the 0th row"),Object(l.b)("li",{parentName:"ul"},"JSONS - one JSON per line, each line is self describing with parameter names")),Object(l.b)("h2",{id:"invoking-sql-modules"},"Invoking SQL Modules"),Object(l.b)("p",null,"There are three styles of invocation:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Request/Response via REST"),Object(l.b)("li",{parentName:"ul"},"Request/Response via generated client libraries"),Object(l.b)("li",{parentName:"ul"},"Fire and Forget via messages")),Object(l.b)("h3",{id:"rest"},"REST"),Object(l.b)("p",null,"Every SQL Module is exposed via REST, as shown in examples.\nThese work until complete and return to the caller, transactions roll back automatically if any timeout occurs."),Object(l.b)("h3",{id:"cient-library"},"Cient Library"),Object(l.b)("p",null,"Client libraries are typed wrappers that support auto-complete, but are really just REST."),Object(l.b)("p",null,"Having an API is great, now let's add ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"./security"}),"Security"),"."))}b.isMDXComponent=!0},218:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(249),o=a.n(l);o.a.initialize({startOnLoad:!0});t.a=function(e){var t=e.chart;return Object(n.useEffect)((function(){o.a.contentLoaded()}),[]),r.a.createElement("div",{className:"mermaid"},t)}},313:function(e,t,a){var n={"./locale":215,"./locale.js":215};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=313}}]);