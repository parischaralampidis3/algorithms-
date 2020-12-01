function frankenSplice(arr1,arr2,n){
//splice second array
let secondArr = arr2.slice();

//loop through each element of the first array

for( let i = 0; i<arr1.length; i++){

    secondArr.splice( n, 0, arr1[i]);

    
}
return secondArr;
}


frankenSplice([1,2,3],[4,5,6],1);