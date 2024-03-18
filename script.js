/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
   let ans = arr.map(
    if(arr[profession]==="developer")
    console.log(ans)
   )
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
   let ans = arr.forEach(
    if(arr[profession]==="developer")
    console.log(ans)
   )
}

function addData() {
  //Write your code here, just console.log
}

function removeAdmin() {
  //Write your code here, just console.log
  let ans = arr.filter(
    if(arr[profession]==="admin")
    console.log(ans)
   )
}

function concatenateArray() {
  //Write your code here, just console.log
  let ans = arr.reduce(
    if(arr[profession]==="developer")
    console.log(ans)
   )
}
