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
  const value = Object.keys(obj).map((key) => [key, obj[key]]);
  return value;
}
console.log(objectToArray2({ a: 1, b: 2 }));

// Cách 3: hasOwnProperty(key) -> nếu object chứa key trả vầ true, ngược lại false
function objectToArray3(obj) {
  if (!isObj(obj)) return;
  let result = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push([key, obj[key]]);
    }
  }
  return result;
}
console.log(objectToArray3({ a: 1, b: 2 }));

// BT3: without : ({ a: 1, b: 2, c: 3 }, "b", "c") -> { a: 1 }
function without(obj, ...key) {
  console.log(key);
  const newObj = { ...obj };
  key.forEach((item) => {
    delete newObj[item];
  });
  return newObj;
}
console.log(without({ a: 1, b: 2, c: 3 }, "b", "c"));

// BT4: kiểm tra 2 obj xem có giống nhau không :
// {a: 1, b: 2} {a: 1, b: 2} -> true
// {a: 1, b: 2} {a: 1, b: 2, c: 3} -> false
function isEqualObject(obj1, obj2) {
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);
  if (key1.length !== key2.length) {
    return false;
  }
  const result = key1.every((key) => obj1[key] === obj2[key]);
  //   return console.log(key2);
}
console.log(isEqualObject({ a: 1, d: 2 }, { a: 2, c: 3 }));
