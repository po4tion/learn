log = console.log;

function productOfArray(product) {
  if (product.length === 1) {
    return product[0];
  }

  return product[0] * productOfArray(product.slice(1));
}

/* 
  productOfArray([1,2,3]) // 6
  productOfArray([1,2,3,10]) // 60  
*/

log(productOfArray([1, 2, 3]));
log(productOfArray([1, 2, 3, 10]));
