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
console.log(Str4.toLowerCase()); // frontend developer

//toUpperCase: chuyển thành chữ in hoa
console.log(Str4.toUpperCase()); //FRONTEND DEVELOPER

//startsWith: kiểm tra xem có bắt đầu bằng phần tử đó không -> trả về true, flase
console.log(Str4.startsWith("Frontend")); //true
console.log(Str4.startsWith("frontend")); //false

//endsWith: kiểm tra xem có kết thúc bằng phần tử đó không -> trả về true, flase
console.log(Str4.endsWith("Developer")); //true
console.log(Str4.endsWith("Designer")); //false

//includes: kiểm tra có chứa phầ tử hay không -> trả về true, flase
console.log(Str4.includes("end")); //true


//indexOf : kiểm tra xem phần tử nằm tại vị trí index (đầu tiên) là số mấy
console.log(Str4.indexOf("e")); //5

//lastIndexOf : kiểm tra xem phần tử nằm tại vị trí index (cuối cùng) là số mấy
console.log(Str4.lastIndexOf("e")); //16

//replace : thay thế các phần tử bằng các phần tử khác
console.log(Str4.replace("Developer", "Desinger")) // Frontend Designer

//repeat: lặp lại chuỗi
console.log(Str4.repeat(3)); // Frontend DeveloperFrontend DeveloperFrontend Developer

//slice: lấy phần tử đầu tiên -> phần tử cuối - 1
console.log(Str4.slice(0, 8)); //Frontend
console.log(Str4.slice(0)); //Frontend Developer
console.log(Str4.slice(-2)); //er

//trim:loại bỏ khoảng trống 2 bên
const Str5 = "   My Name   ";
console.log(Str5.trim()); //My Name
console.log(Str5.trimStart()); //My Name    -> bỏ khoảng trống bên trái
console.log(Str5.trimEnd());  //   My Name -> bỏ khoảng trống bên phải


//charAt: lấy ra kí tự theo index trong chuỗi
const myjob = "developer";
console.log(myjob.charAt(0)); //d

//substr -> lấy ra 1 phần của chuỗi (index, length)
const fullname = "TruongLeQuocTri";
console.log(fullname.substr(1, 5)); // ruong

//substring -> lấy ra các kí tự của chuỗi (start index, end index)
console.log(fullname.substring(1, 5)); // ruon