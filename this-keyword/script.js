/**
 * Normal Mode: 
 *  this = window
 * Strict Mode: 
 *  this = window
 *  No this keyword replacement with global object
 * 
 * Module: 
 * this = undefined
 */

// console.log('Global', this, window); // window
function callme() {
    "use strict";
    // this keyword will not be replaced with global object
    console.log("Regular function", this);
}
new callme();

// let obj = {
//     name: "Aravind",
//     f1: function () {
//         console.log(this);
//         let f = () => {
//             console.log(this);
//         }
//         f();
//     },
//     f2: () => {
//         console.log(this);
//     }
// }

// obj.f1();
// obj.f2();
// let x = obj.f1;
// x();
