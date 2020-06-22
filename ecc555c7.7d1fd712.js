(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{117:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return b}));var n=a(2),l=a(6),r=(a(0),a(120)),s=a(175),o={title:"SQL Modules"},i={id:"sqlmodules",isDocsHomePage:!1,title:"SQL Modules",description:"Getting Started",source:"@site/docs/sqlmodules.mdx",permalink:"/sqlmodules",editUrl:"https://github.com/civitaslearning/embrace-sql/edit/master/docs/sqlmodules.mdx",sidebar:"someSidebar",previous:{title:"Tables",permalink:"/tables"},next:{title:"Security",permalink:"/security"}},d=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Data Handlers",id:"data-handlers",children:[{value:"Context",id:"context",children:[]},{value:"Using Multiple Databases",id:"using-multiple-databases",children:[]}]},{value:"SQL Dialect",id:"sql-dialect",children:[]},{value:"Transactions",id:"transactions",children:[]},{value:"AutoCRUD",id:"autocrud",children:[{value:"Error Handling",id:"error-handling",children:[]}]},{value:"Invoking SQL Modules",id:"invoking-sql-modules",children:[{value:"REST",id:"rest",children:[]},{value:"Cient Library",id:"cient-library",children:[]},{value:"Client Library -- Embedded",id:"client-library----embedded",children:[]}]}],c={rightToc:d};function b(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"getting-started"},"Getting Started"),Object(r.b)("p",null,"A given SQL file defines a new Modules, which exposes an API, automatically sets up ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"./events"}),"event queues"),", generates Data Handlers templates, and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"./clients"}),"Generated Client Libraries"),".\nYou just type SQL, EmbraceSQL does the rest.\nThis is a different approach than ORMs, which generate a meta schema, or a mapping, which you then use in application code, which then generates SQL at runtime.\nThis is a SQL first approach, and you are going to type a whole lot less to use it, as well as be able to access legacy databases."),Object(r.b)("p",null,"The SQL you write is the SQL that is going to run. You are in full control and will not need to learn a new way to write SQL."),Object(r.b)("p",null,"As a simple example, let's make two new API endpoints in a directory by creating some sql files. These are tucked under the ",Object(r.b)("inlineCode",{parentName:"p"},"./default")," meaning they are for the defatult database."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'title="./migrations/001.sql" file=../../engine/tests/configs/sqlmodules-transactions/migrations/default/001.sql',title:'"./migrations/001.sql"',file:"../../engine/tests/configs/sqlmodules-transactions/migrations/default/001.sql"}),"CREATE TABLE things(\n  id integer PRIMARY KEY,\n  name text NOT NULL\n);\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'title="./migrations/002.sql" file=../../engine/tests/configs/sqlmodules-transactions/migrations/default/002.sql',title:'"./migrations/002.sql"',file:"../../engine/tests/configs/sqlmodules-transactions/migrations/default/002.sql"}),'INSERT INTO things(id, name) values(1, "planes");\nINSERT INTO things(id, name) values(2, "trains");\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"docker run -v ${PWD}:/var/embracesql embracesql/server migrate\n")),Object(r.b)("p",null,"And now the sql scripts to define the sql modules."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'title="./default/all.sql" file=../../engine/tests/configs/sqlmodules-transactions/default/all.sql',title:'"./default/all.sql"',file:"../../engine/tests/configs/sqlmodules-transactions/default/all.sql"}),"SELECT * FROM things;\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'title="./default/add.sql" file=../../engine/tests/configs/sqlmodules-transactions/default/add.sql',title:'"./default/add.sql"',file:"../../engine/tests/configs/sqlmodules-transactions/default/add.sql"}),"INSERT INTO things(id, name) VALUES(:id, :name);\n")),Object(r.b)("p",null,"Notice the named parameters.\nYou can set up named parameters using ",Object(r.b)("inlineCode",{parentName:"p"},":name")," where ",Object(r.b)("inlineCode",{parentName:"p"},"name")," can be any continuous string you like.\nThis format is as raw a sql as possible, with the specific idea that you can open and edit an SQL file using your favorite SQL editor or IDE to interactively test and build your query.\nEmbraceSQL doesn't dictate any particular developer tools."),Object(r.b)("p",null,"Go to your directory and start the server."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"docker-compose up\n")),Object(r.b)("p",null,"If you open a browser to http://localhost:8765/ you will see EmbraceSQL has picked up your new files and there are now new APIs."),Object(r.b)("p",null,"--todo--screenshot"),Object(r.b)("p",null,"Go ahead and give these APIs a test. This will give you a before and after look."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'curl http://localhost:8765/default/all\ncurl --request POST --data \'{"id": 100, "name": "cake"}\' -H "Content-Type: application/json" http://localhost:8765/default/things/add\ncurl http://localhost:8765/default/all\n')),Object(r.b)("h2",{id:"data-handlers"},"Data Handlers"),Object(r.b)("p",null,"Data Handlers are an opportunity for you to add bits of code to handle events in the EmbraceSQL SQL module lifecycle. Data access can ",Object(r.b)("em",{parentName:"p"},"almost always")," be pulled of with straight SQL, but sometimes you need a little adjustment."),Object(r.b)("p",null,"Back in the local directory do ",Object(r.b)("inlineCode",{parentName:"p"},"ls default")," -- notice a few new files:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"all.sql.before.ts\nall.sql.after.ts\nall.sql.afterError.ts\nadd.sql.before.ts\nadd.sql.after.ts\nadd.sql.afterError.ts\n")),Object(r.b)("p",null,"Take a look inside -- these are data handlers, generated in TypeScript. ",Object(r.b)("inlineCode",{parentName:"p"},"before")," provides the ability to intercept a query on the way in, and ",Object(r.b)("inlineCode",{parentName:"p"},"after")," results on the way out."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Handlers are optional -- you can just write SQL. You probably ",Object(r.b)("em",{parentName:"p"},"should")," just write SQL."))),Object(r.b)("p",null,"You are really limited only by your imagination, but some suggestions for ",Object(r.b)("inlineCode",{parentName:"p"},"before")," handlers:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Check security with code (more on our security model later)"),Object(r.b)("li",{parentName:"ul"},"Re-write or replace parameter values")),Object(r.b)("p",null,"And for ",Object(r.b)("inlineCode",{parentName:"p"},"after")," handlers:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Remove or obfuscate secure data at the row/column level"),Object(r.b)("li",{parentName:"ul"},"Make an additional query for more or associated data with EmbraceSQL")),Object(r.b)("p",null,"Data Handlers are hierarchical, to allow defaults, and to cut down copy and paste programming.\nStarting from a any ",Object(r.b)("inlineCode",{parentName:"p"},"foo.sql"),", EmbraceSQL looks for ",Object(r.b)("inlineCode",{parentName:"p"},"foo.sql.[event].ts")," for a given event, across all extensions.\nFrom there, the local directory ",Object(r.b)("inlineCode",{parentName:"p"},"[event].ts"),", and repeatedly up each directory to the root directory where EmbraceSQL is running.\nThis is the event handler chain."),Object(r.b)("p",null,"Here is a picture of the event handler chain:"),Object(r.b)(s.a,{chart:"\nstateDiagram\n  br: Root level before handler\n  bf: Folder level before handler\n  bff: File level before handler\n  aff: File level after handler\n  af: Folder level after handler\n  ar: Root level after handler\n  [*] --\x3e br\n  br --\x3e bf\n  bf --\x3e bff\n  bff --\x3e aff\n  aff --\x3e af\n  af --\x3e ar\n  ar --\x3e [*]\n",mdxType:"Mermaid"}),Object(r.b)("p",null,"Let\u2019s look inside the ",Object(r.b)("inlineCode",{parentName:"p"},"add")," handlers, and tweak some parameters."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="./add.sql.before.js" file=../../engine/tests/configs/sqlmodules/default/add.sql.before.ts',title:'"./add.sql.before.js"',file:"../../engine/tests/configs/sqlmodules/default/add.sql.before.ts"}),'import * as types from "../context";\n\nexport const before: types.default_addHandler = async (context) => {\n  context.parameters.forEach((p) => (p.name = p.name + "-ahoy"));\n};\n')),Object(r.b)("p",null,"And after the query -- let's read back the rows.\nThis pretty handy as a general trick by the way to read back a lookup table."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="./add.sql.before.js" file=../../engine/tests/configs/sqlmodules/default/add.sql.after.ts',title:'"./add.sql.before.js"',file:"../../engine/tests/configs/sqlmodules/default/add.sql.after.ts"}),'import * as types from "../context";\n\nexport const after: types.default_addHandler = async (context) => {\n  context.results = await context.databases.default.all();\n  return context;\n};\n')),Object(r.b)("p",null,"And now -- give it a try, not only will you have a slightly different name than what you sent in -- you will get rows back as well, with one API call, instead of the two we previously ran."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'curl --request POST --data \'{"id": 200, "name": "ahoy"}\' -H "Content-Type: application/json"\n http://localhost:8765/default/add\n')),Object(r.b)("p",null,"The advantage here is you can batch up multiple interactions, even with multiple databases, behind a single trip over the network."),Object(r.b)("h3",{id:"context"},"Context"),Object(r.b)("p",null,"The Data Handler execution model relies on a ",Object(r.b)("inlineCode",{parentName:"p"},"context"),", which is shared between all handlers in a chain.\nThis is the ",Object(r.b)("em",{parentName:"p"},"one parameter")," passed to each handler, potentialy modified by a handler, and is available subsequent handlers.\nThis one parameter approach allows for a simple call signature, and a shared 'blackboard' pattern between your handlers and the EmbraceSQL engine itself."),Object(r.b)("p",null,"EmbraceSQL itself creates this context when an SQL module call starts, and augments this context when running the SQL through to the database, adding the results from the database."),Object(r.b)("p",null,"This shared context, and single parameter call signature for handlers makes handlers more consistent and affords easy access to object destructuring syntax features to pick out the bits of context you find interesting in your application."),Object(r.b)("p",null,"The actual ",Object(r.b)("inlineCode",{parentName:"p"},"context")," is typed, and generated based on the SQL you write and the schema of your database.\nAs you change the SQL, the type of the ",Object(r.b)("inlineCode",{parentName:"p"},"parameters")," and ",Object(r.b)("inlineCode",{parentName:"p"},"results")," properties in particular will change.\nThis is particularly handy as it allows autocomplete while editing your handlers!"),Object(r.b)("h3",{id:"using-multiple-databases"},"Using Multiple Databases"),Object(r.b)("p",null,"We've seen in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"./databases"}),"Databases")," that you can have multiple databases -- so then -- how does an API -- an .sql file -- know which database to use?"),Object(r.b)("p",null,"The answer is -- folders.\nEach folder under the EmbraceSQL root correspondes to a named database, with the exception of the reserved folders under ",Object(r.b)("inlineCode",{parentName:"p"},"migrations"),"."),Object(r.b)("h2",{id:"sql-dialect"},"SQL Dialect"),Object(r.b)("p",null,"EmbraceSQL does not define a new SQL dialect, it passes your SQL through directly to each database. This lets you use SQL fully, along with all the advanced features of your database, without the traditional limits created by ORM style query generators. It also lets you write SQL files with your existing favorite SQL editing tools."),Object(r.b)("p",null,"The trade-off is of couse, you need to know the SQL of you database! The good news is you won't need to learn yet another query language, or an API that generates a quey language and keep ",Object(r.b)("em",{parentName:"p"},"that")," mapping in your head."),Object(r.b)("h2",{id:"transactions"},"Transactions"),Object(r.b)("p",null,"For any given database, you can begin, commit, or rollback a transaction at any time in any handler. You can do this in SQL, and you can do this in handler code."),Object(r.b)("p",null,"Any transaction that was not committed by the time data is returned is automatically rolled back, meaning and ",Object(r.b)("inlineCode",{parentName:"p"},"INSERT")," ",Object(r.b)("inlineCode",{parentName:"p"},"UPDATE")," or ",Object(r.b)("inlineCode",{parentName:"p"},"DELETE")," will have no permanent effect.\nData can still return, which can let you do somewhat clever things like, insert data, read it back, and then an automatic roll back will happen.\nThis is a handy trick for database testing, where you can let transactions \u2018undo\u2019 the test data changes for you, restoring your database to a pristine state by having a conditional on your ",Object(r.b)("inlineCode",{parentName:"p"},"commit"),"."),Object(r.b)("p",null,"For example, let's modify a previous handler:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="./add.sql.before.js" file=../../engine/tests/configs/sqlmodules-transactions/default/add.sql.before.ts',title:'"./add.sql.before.js"',file:"../../engine/tests/configs/sqlmodules-transactions/default/add.sql.before.ts"}),'import * as types from "../context";\n\nexport const before: types.default_addHandler = async (context) => {\n  // start a database transaction\n  await context.databases.default.transactions.begin();\n  // modify a passed in parameter by name\n  context.parameters.forEach((p) => (p.name = p.name + "-ahem"));\n};\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="./add.sql.before.js" file=../../engine/tests/configs/sqlmodules-transactions/default/add.sql.after.ts',title:'"./add.sql.before.js"',file:"../../engine/tests/configs/sqlmodules-transactions/default/add.sql.after.ts"}),'import * as types from "../context";\n\nexport const after: types.default_addHandler = async (context) => {\n  // run a SQL module inline, no parameters\n  context.results = await context.databases.default.all({});\n  // do not commit, as this is commented out\n  // note that by this time we have already done the insert\n  // and queried the database\n  // await context.databases.default.transactions.commit();\n  // we could also explicitly rollback, but this will happen on its own\n  // await context.databases.default.transactions.rollback();\n};\n')),Object(r.b)("p",null,"And behold the rollback, which you can see in your shell."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'curl http://localhost:8765/things/all\ncurl --request POST --data \'{"id": 100, "name": "cough"}\' -H "Content-Type: application/json"  http://localhost:8765/things/add\ncurl http://localhost:8765/things/all\n')),Object(r.b)("p",null,"This will show the table, then a modified table, then back to the original table."),Object(r.b)("h2",{id:"autocrud"},"AutoCRUD"),Object(r.b)("p",null,"It's great to be able to have the full power of SQL when you need it -- but sometimes you just need to do some basic CRUD. EmbraceSQL automatically inspects your databases and creates default SQL Modules for your tables for working with single and multiple records operations by key, eliminating a big pile of very tedious coding and testing."),Object(r.b)("p",null,"Let's set up some tables for a really vanilla shopping cart, in our default testing SQLite database and see how this works. We'll have a pretty normal set or orders, items to order, and an association table to put items in an order."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'title="./migrations/003.sql" file=../../engine/tests/configs/sqlmodules-autocrud/migrations/default/003.sql',title:'"./migrations/003.sql"',file:"../../engine/tests/configs/sqlmodules-autocrud/migrations/default/003.sql"}),"CREATE TABLE orders(\n  order_id INTEGER PRIMARY KEY AUTOINCREMENT,\n  name TEXT NOT NULL\n)\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'title="./migrations/004.sql" file=../../engine/tests/configs/sqlmodules-autocrud/migrations/default/004.sql',title:'"./migrations/004.sql"',file:"../../engine/tests/configs/sqlmodules-autocrud/migrations/default/004.sql"}),"CREATE TABLE items(\n  item_id INTEGER PRIMARY KEY AUTOINCREMENT,\n  description TEXT NOT NULL\n)\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sql",metastring:'title="./migrations/005.sql" file=../../engine/tests/configs/sqlmodules-autocrud/migrations/default/005.sql',title:'"./migrations/005.sql"',file:"../../engine/tests/configs/sqlmodules-autocrud/migrations/default/005.sql"}),"CREATE TABLE order_items(\n  order_item_id INTEGER PRIMARY KEY AUTOINCREMENT,\n  order_id INTEGER NOT NULL,\n  item_id INTEGER NOT NULL,\n  quantity INTEGER NOT NULL,\n  FOREIGN KEY(order_id) REFERENCES orders(order_id),\n  FOREIGN KEY(item_id) REFERENCES items(item_id)\n);\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"docker run embrace-sql migrate\n")),Object(r.b)("p",null,"Without writing any SQL at all, you get a REST interface for these tables."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"POST")," new rows to tables to Create"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"GET")," table rows by key to Read"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"UPDATE")," particular fields to values to Update"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"DELETE")," by key to Delete")),Object(r.b)("p",null,"You can also make ",Object(r.b)("inlineCode",{parentName:"p"},"before")," and ",Object(r.b)("inlineCode",{parentName:"p"},"after")," handlers for these automatically generated SQL modules, without needing to write the SQL.\nThe way to think about it is -- EmbraceSQL has a lot of SQL built in for the common cases, and you can write any SQL you like for more complex cases. Whether you write the sql, or EmbraceSQL has it built in, you can always create event handlers to intercept query results and modify them as needed."),Object(r.b)("p",null,"Even more powerful, with ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"./clients"}),"Generated Client Libraries"),", you have typing and autocompletion available for you for every API. Let's see how AutoCRUD looks from TypeScript. So you can get a lot of data access without any SQL or mapping at all."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),'import EmbraceSQL from "./embrace-sql";\n\nconst client = new EmbraceSQL("http://localhost:8765");\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript",metastring:"file=../../engine/tests/examples/orders_items.ts",file:"../../engine/tests/examples/orders_items.ts"}),"export const example = async (client): Promise<void> => {\n  // little shortcut to type less...\n  const db = client.databases.default.autocrud;\n\n  // make a single item -- comes back with an object\n  const item_key = await db.items.create({ description: \"Paper\" });\n\n  // and array valued, make a few records in one shot...\n  const more_item_keys = await db.items.create(\n    { description: \"Can\" },\n    { description: \"Loaf\" }\n  );\n\n  // no need to pass in the key, it is an auto increment, but you\n  // sure will need it to put in order items, so let's capture the created key\n  // whih EmbraceSQL thought of for you\n  const order_key = await db.orders.create({ name: \"Sample\" });\n\n  // now join items and orders with one of each\n  // again notice we don't need to mention the autoincrement\n  await db.order_items.create(\n    [item_key, ...more_item_keys].map((item_key) => ({\n      order_id: order_key.order_id,\n      item_id: item_key.item_id,\n      quantity: 1,\n    }))\n  );\n\n  // You can use that created key to 'read back' a record, kinda handy\n  // oh -- and it pulls back the whole associated referential graph\n  // your reward for embracing sql and referential integrity is not needing\n  // to query to get child records like order_items or lookup data like items\n  const my_order = await db.orders.read(order_key);\n\n  // notice three tables are joined automatically and you can get the description\n  // EmbraceSQL inside created a query batch to pull in all this data\n  // -- in one trip to the database, so it's not a chatterbox like ORMs\n  const my_order_and_related = await db.orders.readWithRelated(order_key);\n  console.log(my_order_and_related);\n\n  // And sometimes you really do need the whole table\n  // This is even simpler, just don't pass any parameters!\n  const all_orders = await db.orders.read();\n  console.log(all_orders);\n\n  // hmm -- I really want two of that... let's update, passing in all the order items\n  // and using nice object spread with one property of overwrite\n  await db.order_items.update({\n    ...my_order.order_items,\n    quantity: 2,\n  });\n\n  // nope -- I don't want it at all\n  // delete the whole thing down the referentia graph\n  await db.orders.delete(order_key);\n\n  // but the items aren't deleted -- they are lookup data!\n  // EmbraceSQL is smart enough to only delete children\n  console.log(await db.items.read());\n\n  // clean up the items\n  await db.items.delete(await db.items.read());\n  console.log(await db.items.read());\n};\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"example(client);\n")),Object(r.b)("h3",{id:"error-handling"},"Error Handling"),Object(r.b)("p",null,"Some errors are more critical than others. Sometimes you want to keep going, sometimes you want to abort. EmbraceSQL is a bit of a perfectionist, and aborts the entire request on any unhandled error. You can be more forgiving though, and decide to keep going by creating an error handler:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript",metastring:'title="./default/hello.sql.afterError.ts" file=../../engine/tests/configs/hello-handler/default/hello.sql.afterError.ts',title:'"./default/hello.sql.afterError.ts"',file:"../../engine/tests/configs/hello-handler/default/hello.sql.afterError.ts"}),"import * as types from \"../context\";\n\nexport const afterError: types.default_helloHandler = async (context) => {\n  // see what happened and print it out, the error is on the context\n  console.log(context.error);\n  // do nothing and the error 'counts'\n\n  // optionally 'eat' the error\n  context.error = undefined;\n\n  // raise it again -- or any error and the transaction aborts\n  // throw \"Oh! Noes!\";\n};\n")),Object(r.b)("p",null,"You can also ",Object(r.b)("inlineCode",{parentName:"p"},"try/catch")," in your handler code, so in practice the ",Object(r.b)("inlineCode",{parentName:"p"},"error")," event handlers are useful to capture errors coming back from your database engine."),Object(r.b)("h2",{id:"invoking-sql-modules"},"Invoking SQL Modules"),Object(r.b)("p",null,"There are three styles of invocation:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Request/Response via REST"),Object(r.b)("li",{parentName:"ul"},"Request/Response via generated client libraries"),Object(r.b)("li",{parentName:"ul"},"Request/Response -- embedded -- via generated client libraries")),Object(r.b)("h3",{id:"rest"},"REST"),Object(r.b)("p",null,"Every SQL Module is exposed via REST, as shown in examples.\nThese work until complete and return to the caller, transactions roll back automatically if any timeout occurs."),Object(r.b)("h3",{id:"cient-library"},"Cient Library"),Object(r.b)("p",null,"Client libraries are typed wrappers that support auto-complete, but are really just REST under the hood, using the client to give you nice autocomplete, communicating to the server with REST, and coming back."),Object(r.b)("h3",{id:"client-library----embedded"},"Client Library -- Embedded"),Object(r.b)("p",null,"In this style, there is no REST, your process has EmbraceSQL in it as a TypeScript module.\nCalls to the generated client library invoke database access directly from your process.\nThis is useful for making your own node server that uses EmbraceSQL as the data access library, as well as to have autocomplete and strong types with SQLite in process in React Native applications."),Object(r.b)("p",null,"Having an API is great, now let's add ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"./security"}),"Security"),"."))}b.isMDXComponent=!0},175:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(207),s=a.n(r);s.a.initialize({startOnLoad:!0});t.a=({chart:e})=>(Object(n.useEffect)(()=>{s.a.contentLoaded()},[]),l.a.createElement("div",{className:"mermaid"},e))},271:function(e,t,a){var n={"./locale":173,"./locale.js":173};function l(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}l.keys=function(){return Object.keys(n)},l.resolve=r,e.exports=l,l.id=271}}]);