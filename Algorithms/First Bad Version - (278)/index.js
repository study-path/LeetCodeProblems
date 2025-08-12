var solution = function(isBadVersion) {
  return function(n) {
    let left = 1, right = n;
    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      if (isBadVersion(mid)) {
        // mid is bad => first bad is in [left, mid]
        right = mid;
      } else {
        // mid is good => first bad is in (mid, right]
        left = mid + 1;
      }
    }
    // left === right: first bad version
    return left;
  };
};
