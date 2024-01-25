#this keyword
| Scope                   | Sloppy Mode(non-strict mode )                        | Strict Mode                         | JavaScript Module                 |
|-------------------------|------------------------------------|------------------------------------|-----------------------------------|
| **Global**              | Refers to global object (e.g., `window` in browsers) | Refers to `window`              | Refers to `undefined`              |
| **Regular Function**    | Refers to the object which invokes the method , if no object present then `this` keyword will be replaced with global  | Refers to the object which invokes the method. If no object invokes then it will be `undefined` |   Refers to the object which invokes the method. If no object invokes then it will be `undefined`  |
| **Arrow Function**      | Refers to the `this` value of the enclosing lexical scope (does not have its own `this`) | Refers to the `this` value of the enclosing lexical scope (does not have its own `this`) | Refers to the `this` value of the enclosing lexical scope (does not have its own `this`) |

Notes:
- In sloppy mode & Strict Mode the global object is used as the default value for `this` in the global context.
- In Module `this` keyword in global refers to `undefined`.
- In sloppy Mode ( non strict mode) there will be no replacement of `this` keyword inside regular functions.
- Arrow functions do not have their own `this` value and inherit it from the enclosing lexical scope. This behavior is the same across modes.
- In JavaScript modules, the behavior is similar to strict mode. The global object is not used for functions that are not methods, and `this` is `undefined` by default.
- The code present inside a `class` will by default be evaluated as `strict-mode` so no `this` keyword replacement.

Remember to use `"use strict";` at the beginning of your scripts or functions to enable strict mode where necessary.
