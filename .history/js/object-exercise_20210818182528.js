// BT1: viết 1 function kiểm tra value có phải là object hay không
// typeof value === "object" : {} [] null
function isObj(value) {
  if (typeof value === "object" && !Array.isArray(value) && value !== null) {
    return true;
  }
  return false;
}

console.log(isObj());

// BT2: {a:1,b:2} -> [["a", 1], ["b", 2]]
// Cách 1
function objectToArray(obj) {
  if (!isObj(obj)) return;
  return Object.entries(obj);
}
console.log(objectToArray({ a: 1, b: 2 }));

// Cách 2
function objectToArray2(obj) {
  if (!isObj(obj)) return;
  const value = Object.keys(obj).map((key) => [key, key[obj]]);
  return value;
}
console.log(objectToArray2({ a: 1, b: 2 }));
