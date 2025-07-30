// function in bracket is called self revoking function no need to call the function
// (function foo(){
//     console.log("Self revoking function");
//     document.getElementById("tag1").innerHTML="Content uploaded"
// })();
function foo() {
  console.log("Self revoking function");

  document.getElementById("tag1").innerHTML = "Content uploaded";
  // document.getElementById("tag2").innerHTML="Content uploaded";
}

foo();
// setTimeout(() => {
//     console.log("This is delay message")
// },200)

// function renderProdcts() {
//   document.getElementById("data").innerHTML = `
//     <table border=true>
//         <thead>
//             <tr>
//                 <th>Product Name</th>
//                 <th> Price</th>
//                 <th>Description</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td>Product1</td>
//                 <td>1234</td>
//                 <td>Lorem ipsum dolor sit amee impedit ipsum officiis praesentium facere laudantium.</td>
//             </tr>
//             <tr>
//                 <td>Product2</td>
//                 <td>234</td>
//                 <td>Lorem iatis nam dolorum, in quasi nemo reprehenderit tenetur. Quod, est ea.n</td>
//             </tr>
//         </tbody>
//     </table>`;
// }

productList = [
  { name: "Product 1", price: "1230", description: "Awesome PRoduct" },
  { name: "Product 2", price: "230", description: "okayish PRoduct" },
];

// var productList = [];
// function loadProducts(renderProdcts) {
//   setTimeout(() => {
//     productList = [
//       { name: "Product 1", price: "1230", description: "Awesome PRoduct" },
//       { name: "Product 2", price: "230", description: "okayish PRoduct" },
//     ];
//     renderProdcts();
//   }, 2000);
// }

function renderProdcts() {
  let table = `
      <table border=true cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
        <thead style="background-color: #f4f4f4;">
          <tr>
            <th>Product Name</th>
            <th>Price (₹)</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
    `;

  productList.forEach((product) => {
    table += `
        <tr>
          <td>${product.name}</td>
          <td>${product.price}</td>
          <td>${product.description}</td>
        </tr>
      `;
  });

  table += `
        </tbody>
      </table>
    `;

  document.getElementById("data").innerHTML = table;
}
renderProdcts();

// function renderDataProducts() {
//   function renderProdcts() {
//     if (productList.length === 0) {
//       document.getElementById("data").innerHTML = "Loding data";
//       return;
//     }
//     let table = `
//       <table border=true cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
//         <thead style="background-color: #f4f4f4;">
//           <tr>
//             <th>Sr.No. </th>
//             <th>Product Name</th>
//             <th>Price (₹)</th>
//             <th>Description</th>
//           </tr>
//         </thead>
//         <tbody>
//           ${productList.map((product, index) => {
//             return `
//               <tr>
//                 <td>
//                   ${index + 1}
//                 </td>
//                 <td>
//                   ${product.name}
//                 </td>
//                 <td>
//                   ${product.price}
//                 </td>
//                 <td>
//                   ${product.description}
//                 </td>
//               </tr>
//             `;
//           })}
//         </tbody>
//       </table>
//     `;

//     document.getElementById("data").innerHTML = table;
//   }

//   loadProducts(renderProdcts);
//   renderProdcts();
// }

// setTimeout(foo,5000);
// foo();
// setTimeout(renderProdcts, 2000);
// renderDataProducts();
