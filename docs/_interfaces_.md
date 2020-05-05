---
name: Interfaces
route: _interfaces_.md
---

## Index

### Type aliases

* [Context](_interfaces_.md#context)
* [ContextParameters](_interfaces_.md#contextparameters)
* [Database](_interfaces_.md#database)
* [DatabaseTransactions](_interfaces_.md#databasetransactions)
* [Databases](_interfaces_.md#databases)
* [ParameterValue](_interfaces_.md#parametervalue)

## Type aliases

###  Context

Ƭ **Context**: *object*

Defined in interfaces.ts:16

This context is the 'one true parameter' passed to every Embrace SQL
event handler. It is created by EmbraceSQL at the start of each API
request, and serves as a shared state allowing handlers broad access
to the results of other handlers and databases managed by EmbraceSQL.

Having a single context parameter simplifies call signatures and facilitates
auto-complete in your editing experience.

This context is the base type. EmbraceSQL will generate an extended context
representing your specific set of configured databases. Properties of the context
that will be generated will be noted in comments.

#### Type declaration:

* **allow**(): *function*

  * (`message`: any): *void*

* **current_user**? : *string*

* **database**: *[Database](_interfaces_.md#database)*

* **databases**: *[Databases](_interfaces_.md#databases)‹DatabaseNames›*

* **deny**(): *function*

  * (`message`: any): *void*

* **error**? : *object*

* **grants**: *Array‹any›*

* **parameters**: *[ContextParameters](_interfaces_.md#contextparameters)‹ParameterNames›*

* **role**? : *string*

* **sql**: *string*

* **token**? : *object*

___

###  ContextParameters

Ƭ **ContextParameters**: *object*

Defined in interfaces.ts:142

The current set of parameters.

#### Type declaration:

___

###  Database

Ƭ **Database**: *object*

Defined in interfaces.ts:99

A single database available via the context

#### Type declaration:

* **transactions**: *[DatabaseTransactions](_interfaces_.md#databasetransactions)*

___

###  DatabaseTransactions

Ƭ **DatabaseTransactions**: *object*

Defined in interfaces.ts:109

Transaction control for databases.

#### Type declaration:

* **begin**(): *function*

  * (): *void*

* **commit**(): *function*

  * (): *void*

* **rollback**(): *function*

  * (): *void*

___

###  Databases

Ƭ **Databases**: *object*

Defined in interfaces.ts:92

All databases available.

#### Type declaration:

___

###  ParameterValue

Ƭ **ParameterValue**: *object*

Defined in interfaces.ts:132

Parameters can have a wide array of values, but they all need to be
able to turn into a string to finally create SQL.

#### Type declaration:

* **toString**(): *function*

  * (): *string*
