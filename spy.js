function Spy(target, method) {
  var final = {count: 0};

  var fn = target[method];
  target[method] = function() {
    final.count += 1;
    return fn.apply(this, arguments);
  }
  return final;
}

module.exports = Spy;
