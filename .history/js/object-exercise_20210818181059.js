// viết 1 function kiểm tra value có phải là object hay không
// typeof value === "object" : {} [] null
function isObj(value) {
  if (typeof value === "object" && !Array.isArray(value)) {
    return true;
  }
  return false;
}

console.log(isObj([]));
