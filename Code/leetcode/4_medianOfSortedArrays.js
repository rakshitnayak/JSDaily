// lc : 4, median of sorted arrays

// brute force
function findMedianSortedArrays(nums1, nums2) {
  const a = [...nums1, ...nums2].sort((a, b) => a - b);

  const mid = Math.floor(a.length / 2);

  if (a.length % 2 === 0) {
    console.log(a[mid - 1] + a[mid + 1]);
    return (a[mid - 1] + a[mid]) / 2;
  } else {
    return a[mid];
  }
}

console.log(findMedianSortedArrays([1, 2], [3, 4]));
