/* ১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো।. */

const student = {
  name: "marouf",
  id: 132,
  subject: ["english", "math", "economi", "historical"],
  bestFriends: {
    name: "rahim",
    id: 234,
    subject: ["english", "math", "economi", "historical"],
  },
  studyMeetings: function () {
    return `${this.name} start the meet session`;
  },
};
console.log(student.studyMeetings());
