//string(chuỗi)
"learn Javascript";
'learn HTML CSS';
`my name is tri`;

const myname = "quoc tri";
const job = "UX UI designer"
console.log(myname);
console.log(typeof myname);
const Str = "my name is tri and i am front end developer";
console.log(Str);
const Str2 = "my name is " + myname + " and i am " + job;
console.log(Str2);
const Str3 = `my name is ${myname} and i am ${job}`;
console.log(Str3);
console.log(Str3.length);
// my name is quoc tri and i am UX UI designer -> index: 0-36 -> length:37

//split: tách phần tử thành mảng
const Str4 = "Frontend Developer";
console.log(Str4.split("")); // ["F", "r", "o", "n", "t", "e", "n", "d", " ", "D", "e", "v", "e", "l", "o", "p", "e", "r"]
console.log(Str4.split(" ")); // ["Frontend", "Developer"]
console.log(Str4.split("/")); // ["Frontend Developer"]
//toLowerCase: chuyển thành chữ thường
console.log(Str4.toLowerCase());
//toUpperCase: chuyển thành chữ in hoa
console.log(Str4.toUpperCase());
//startsWith: kiểm tra xem có bắt đầu bằng phần tử đó không -> trả về true, flase
console.log(Str4.startsWith("Frontend")); //true
console.log(Str4.startsWith("frontend")); //false
//endsWith: kiểm tra xem có kết thúc bằng phần tử đó không -> trả về true, flase
console.log(Str4.endsWith("Developer")); //true
console.log(Str4.endsWith("Designer")); //false
//includes: kiểm tra có chứa phầ tử hay không -> trả về true, flase
console.log(Str4.includes("end")); //true