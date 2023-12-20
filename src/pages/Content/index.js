// import { printLine } from "./modules/print";
// import { linkClick } from "./modules/linkClick";

// console.log("Content script works!");
// console.log("Must reload extension for modifications to take effect.");

// printLine("Using the 'printLine' function from the Print Module");

// var button = document.getElementById("goButton");

// console.log("button:", button);
// if (button === null) {
//   console.log("button is null");
// } else {
//   console.log("button is not null");
//   button.addEventListener(
//     "click",
//     () => linkClick("Western Christianity"),
//     false
//   );
// }

console.log('Content script works!');

const dexTables = document.querySelectorAll('div.ds-dex-table');

// contentScript.js

// document.addEventListener('DOMContentLoaded', function () {
//   // Select all divs with the class 'ds-dex-table'
//   const dexTables = document.querySelectorAll('div.ds-dex-table');

//   console.log('dexTables:', dexTables);
//   // Extract relevant information from these elements
//   const extractedData = Array.from(dexTables).map((table) => {
//     // You can customize what data you want to extract
//     return table.innerHTML; // or any other data of the element
//   });

//   // Send data to the background script
//   chrome.runtime.sendMessage({ type: 'DEX_TABLE_DATA', data: extractedData });
// });
