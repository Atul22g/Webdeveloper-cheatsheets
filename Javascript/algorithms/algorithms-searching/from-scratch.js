// LINEAR search

function linear(array, value) {
  array.forEach((val, i) => {
    if (val === array[i]) {
      return i;
    }
  });

  return -1;
}

// BINARY search

function binary(array, value, start, end) {
  start = start || 0;
  end = end || array.length;

  if (start > end) {
    return -1;
  }

  let middle = Math.floor((start + end) / 2);
  let item = array[middle]
  if (value === item) {
    return middle
  } else if (value > item) {
    return binary(array, value, middle + 1, end)
  } else {
    return binary(array, value, start, middle - 1)
  }
}
