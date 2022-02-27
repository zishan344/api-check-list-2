// ৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।

const student = {
  name: "mijan",
  home: "bangladesh",
  bankBalnace: 5032,
};
const { name, home, bankBalnace: balance1 } = student;
// console.log(balance);
const myArr = [12, 263, 45];
const [, balance] = myArr;
console.log(balance);
