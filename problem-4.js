/* ৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।
 */

const myArr = [52, 7, 98, 49, 100, 67, 65, 546, 43, 75, 3, 63, 68];

const newArr = myArr.map((x) => x / 7);
// console.log(newArr);

// const newArr2 = myArr.forEach((x) => console.log(x));
// console.log(newArr2);

const newArr3 = myArr.find((x) => x > 70);
// console.log(newArr3);

const newArr4 = myArr.filter((x) => x > 67);
// console.log(newArr4);
