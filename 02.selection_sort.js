// ⏳ O(n^2)

const findSmaller = arr => {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

const selectionSort = arr => {
  const newArr = [];

  while (arr.length) {
    const smallest = findSmaller(arr);

    newArr.push(arr[smallest]);
    arr.splice(smallest, 1);
  }

  return newArr;
}

console.log(selectionSort([5, 3, 6, 2, 10])) // → [2, 3, 5, 6, 10]
