export const copyArray = function (v) {
  var b = new Array(v.length)
  for (var i = 0; i < v.length; i++) {
    b[i] = v[i]
  }
  return b
}
