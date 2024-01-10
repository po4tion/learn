// window.alert("Hello");
// alert("Hello"); // 다른 곳에서 찾을 수 없는 함수라면 자동으로 앞에 window가 추가된다.

/* 
  window는 document를 포함하고 있다.
*/

// DOM control
const title = document.getElementById("title");
console.log(title);

console.log("-------class-------");
const listItemList = document.getElementsByClassName("listItem");
console.log(listItemList);

console.log("-------query-------");
const listItemListByQuery = document.querySelectorAll(".listItem");
console.log(listItemListByQuery);
