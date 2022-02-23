const countingSort = (inputArr, n = inputArr.length) => {
  let k = Math.max(...inputArr);
  let t;
  //Create a temporary with 0 zero value
  //as the same length of max element + 1
  const temp = new Array(k + 1).fill(0);

  //Count the frequency of each element in the original array
  //And store it in temp array
  for(let i = 0; i < n; i++){
    t = inputArr[i];
    temp[t]++;
  }

  console.log('temp 1', temp);

  //Update the count based on the previous index
  for(let i = 1; i <= k; i++){
    // Updating elements of count array
    temp[i] = temp[i] + temp[i - 1];
  }

  console.log('temp 2', temp);

  //Output arr
  const outputArr = new Array(n).fill(0);

  for(let i = n - 1; i >= 0; i--) {
    // Add elements of array A to array B
    t = inputArr[i];
    outputArr[temp[t] - 1] = t;

    // Decrement the count value by 1
    temp[t] = temp[t] - 1;
  }

  return outputArr;
}

const arr = [1, 3, 2, 8, 5, 1, 5, 1, 2, 7];
console.log(countingSort(arr));
