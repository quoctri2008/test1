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
// my name is quoc tri and i am UX UI designer -> index: 0-36 -> length:37
console.log(Str3.length);