function largestOfFour(arr) {
  //creaty a variable with empty array
  let results = [];
  //create a for loop for outer array
  for (let i = 0; i < arr.length; i++) {
    /*create a second variable to hold the largest number and initialise it with the first number. This must be outside an 
     inner loop so it won’t be reassigned until we find a larger number.*/

    let largestNumber = arr[i][0];
    //create an inner loop to work with sub arrays
    for (let j = 0; j < arr[i]; j++) {
      /*Check if the element of the sub array is
     larger than the currently stored largest number. If so, then update the number in the variable.*/
      if (arr[i][j] > largestNumber) {
        //After the inner loop, save the largest number in the corresponding position inside of the results array.
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;

    console.log(results);
  }

  return results;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
