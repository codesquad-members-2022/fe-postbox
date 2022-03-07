const $app = document.querySelector("#app");

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function init() {
  for (let i = 0; i < getRandomNumber(1, 10); i++) {
    const $div = document.createElement("div");
    $div.classList.add("town");
    $div.style.height = `${getRandomNumber(20, 200)}px`;
    $div.style.width = `${getRandomNumber(20, 200)}px`;
    $app.appendChild($div);
  }
}

window.addEventListener("DOMContentLoaded", init);

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//     <style>
//       #app {
//         display: grid;
//       }
//       .town {
//         border: 1px solid blue;
//         border-radius: 5%;
//       }
//     </style>
//   </head>
//   <body>
//     <div id="app"></div>
//     <script src="index.js"></script>
//   </body>
// </html>
