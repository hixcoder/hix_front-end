const postItems = document.querySelectorAll('[class^="user-item"]');

// postItems.forEach((element) => {
//   element.addEventListener("click", function () {
//     // Handle click event here
//     let firstInput = document.getElementById("first-input").value;
//     let secondInput = document.getElementById("second-input").value;
//     let result;
//     try {
//       result = divide(firstInput, secondInput);
//       document.getElementById("result").innerHTML = result;
//     } catch (e) {
//       alert(`Error: ${e}`);
//     } finally {
//       console.log("finally hello world");
//     }
//   });
// });

console.log(postItems.length);

for (let i = 0; i < postItems.length; i++) {
  document
    .getElementById(`user-item${i}`)
    .addEventListener("click", function () {
      readUserPosts(i);
    });
}
