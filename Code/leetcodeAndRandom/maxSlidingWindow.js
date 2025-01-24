// 239. Sliding Window Maximum (hard)

var maxSlidingWindow = function (nums, k) {
  // brute for approach

  // let output = [];

  // for (let i = 0; i <= nums.length - k; i++) {
  //     let maxI = nums[i];
  //     for (let j = i; j < i + k; j++) {
  //         maxI = Math.max(nums[j], maxI);
  //     }
  //     output.push(maxI);
  // }

  // return output;

  // deque approach

  const n = nums.length;

  const output = new Array(n - k + 1);
  // Create an output array to store the maximums of each sliding window.
  // Its size is (n - k + 1) because there are (n - k + 1) sliding windows of size k.

  const q = new Deque();
  // Initialize a deque (double-ended queue). This will store indices of `nums`, not the values themselves.
  // The deque helps efficiently keep track of the indices of the maximum elements in the current sliding window.

  let l = 0,
    r = 0;
  // `l` is the left boundary (start) of the sliding window, and `r` is the right boundary (end) of the sliding window.

  while (r < n) {
    while (q.size() && nums[q.back()] < nums[r]) {
      q.popBack();
    }
    q.pushBack(r);
    if (l > q.front()) {
      // If the left boundary (`l`) is greater than the index at the front of the deque,
      // remove it because it is outside the current window.
      q.popFront();
    }

    if (r + 1 >= k) {
      // Once the sliding window reaches its full size (i.e., `r + 1 >= k`),
      // we can start recording the maximums in the `output` array.

      output[l] = nums[q.front()];
      // The index at the front of the deque corresponds to the maximum element in the current sliding window.
      // Store that maximum in the `output` array.

      l++;
      // Move the left boundary of the window forward to slide the window.
    }

    r++;
    // Move the right boundary of the window forward to include the next element.
  }

  return output;
  // Return the output array containing the maximum values of all sliding windows.
};
