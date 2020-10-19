module.exports = function reverse (n) {
  const res = n.toString().split("").reverse().join("");
  const num = parseInt(res)
  return num
}
