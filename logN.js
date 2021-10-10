// Binary Search & O(log n)
let arr = [1,2,3,4,5,6,7,8];
let start = 0;
let end = arr.length - 1;
let target = 8;

function binarySearch(arr, start, end, target) {
    let midIndex = Math.floor((start + end) /2);
    if (arr[midIndex] === target) return true;

    if (arr[midIndex] > target) return binarySearch(arr, start, midIndex -1, target)
    else return binarySearch(arr, midIndex + 1, end, target)
}

// console.log(binarySearch(arr, start, end, target))

// Merge Sort & O(n log n)
function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }

    const middleIndex = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, middleIndex);
    const rightArr = arr.slice(middleIndex, arr.length)
    console.log("leftArr:" + leftArr)
    console.log("rightArr:" + rightArr)
    console.log("___________________")

    return merge(mergeSort(leftArr), mergeSort(rightArr)) //O(log n)
}

function merge(leftArr, rightArr){
    console.log("Call Merge with leftArr: " + leftArr + "| rightArr: " + rightArr);
    let resultArr = []
    let leftIndex = 0
    let rightIndex = 0

    while (leftIndex < leftArr.length && rightIndex < rightArr.length){
        if (leftArr[leftIndex] < rightArr[rightIndex]){
            resultArr.push(leftArr[leftIndex])
            leftIndex += 1
        } else {
            resultArr.push(rightArr[rightIndex]);
            rightIndex += 1
        }
    }
    return resultArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}

let arr2 = [12, 3 ,16, 6 ,5, 1];
// console.log(mergeSort(arr));

function fib(n){
  if (n === 0) {
    return 0;
  }
  if (n === 1){
    return 1;
  }
  return fib(n-1) + fib(n - 2);

}

// O(2^n)
// fib(4);

function f(n){
  if (n === 0){
    console.log("******")
    return
  }

  for (let i = 0 ; i < n; i++){
    console.log(i);
    f( n - 1);
  }
}

// f(3)
function countDown(n) {
  console.log(n);
  if (n === 0) {
    return;
  }
  return countDown(n-1);
}
// countDown(5)

function twoLoops(a){
  for (let i = 0; i < a; i++) { // O(n)
    //  do somrthing
  }

  for (let i = 0; i < a; i++) { // O(n)
    // do something
  }
}