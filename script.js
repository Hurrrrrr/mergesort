"use strict";

function mergesort(arr) {

    if (arr.length <= 1) {
        return arr;
    }
    
    let mid = Math.floor(arr.length / 2);

    let leftArray = mergesort(arr.slice(0, mid));
    let rightArray = mergesort(arr.slice(mid));

    return merge(leftArray, rightArray);
}

let a1 = [2, 5, 3, 8, 6, 1, 3, 6];

// Merge two SORTED arrays
function merge(arr1, arr2) {

    let myArray = [];

    while ((arr1.length > 0) && (arr2.length > 0)) {
        if (arr1[0] < arr2[0]) {
            myArray.push(arr1.shift());
        } else {
            myArray.push(arr2.shift());
        }
    }

    return [...myArray, ...arr1, ...arr2];
}