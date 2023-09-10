// class User {
//   constructor(name, email, post) {
//     this.myName = name;
//     this.myEmail = email;
//     this.myPost = post;
//   }
// }

// let Users = [
//   {
//     name: "xxxx",
//     email: "xxxx",
//     posts: [
//       {
//         title: "xxxx",
//         body: "xxxx",
//       },
//     ],
//   },
// ];

// GET request
function readUsers() {
  let request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/users/");
  request.responseType = "json";
  request.send();
  request.onload = function () {
    console.log(request.response);
    if (request.status >= 200 && request.status < 300) {
      let users = request.response;
      let i = 0;
      for (user of users) {
        document.getElementById("users-container").innerHTML += `
        <div class="user-item${i}">
          <h4 id="user-item-name">${user.name}</h4>
          <p id="user-item-email">${user.email}</p>
        </div>
       `;
        console.log(user);
        i++;
      }
    } else {
      alert("Error");
      console.log(response);
    }
  };
}

function readUserPosts(postId) {
  let request = new XMLHttpRequest();
  request.open(
    "GET",
    `https://jsonplaceholder.typicode.com/users/${postId}/posts`
  );
  request.responseType = "json";
  request.send();
  request.onload = function () {
    console.log(request.response);
    if (request.status >= 200 && request.status < 300) {
      let posts = request.response;
      for (post of posts) {
        document.getElementById("posts-container").innerHTML += `
        <div class="post-item">
        <h4>${post.title}</h4>
        <hr />
        <p>
        ${post.body}
        </p>
      </div>
       `;
        console.log(user);
      }
    } else {
      alert("Error");
      console.log(response);
    }
  };
}

readUsers();
