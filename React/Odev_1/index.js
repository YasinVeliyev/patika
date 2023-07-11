import getData from "./app.js";

// (async () => console.log(await getData(1)))();

// !(async function () {
//     console.log(await getData(1));
// })();

// +(async function () {
//     console.log(await getData(1));
// })();

getData(1).then(console.log).catch(console.error);
