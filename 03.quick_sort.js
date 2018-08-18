// ⏳  O(n log n)

const qSort = arr => {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[Math.floor((arr.length - 1) / 2)];

  const less = arr.filter(x => x < pivot);
  const greater = arr.filter(x => x > pivot);

  return [...qSort(less), pivot, ...qSort(greater)];
};

console.log(qSort([10, 5, 2, 20, 3])); // → [2, 3, 5, 10, 20]
