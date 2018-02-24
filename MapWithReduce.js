module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function(prev, curr, idx, arr) {
    prev.push(fn(curr));
    return prev;
  }, []);
}
