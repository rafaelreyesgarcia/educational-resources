function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
}

function fibonacci(n) {
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n-1) + fibonacci(n-2);
  }
}

function binarySearch(array, target, start, end) {
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);

  if (array[mid] === target) {
    return mid;
  } else if (array[mid] > target) {
    return binarySearch(array, target, start, mid-1);
  } else {
    return binarySearch(array, target, mid+1, end);
  }
}
