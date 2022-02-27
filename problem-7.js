// ৭. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে।

const loadApi = () => {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((data) => LoadPhto(data));
};
loadApi();
const LoadPhto = (data) => {
  //   console.log(data.slice(0, 5));
  const photoSection = document.getElementById("photoSection");
  data.slice(0, 5).forEach((user) => {
    // console.log(user);
    const div = document.createElement("div");
    div.innerHTML = `
  <div class="card"">
  <img src="${user.thumbnailUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${user.title}</h5>
 
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  `;
    photoSection.appendChild(div);
  });
};
