const handleLoadPostsApis = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      showPosts(data);
    });
};

const showPosts = (posts) => {
  const divContainer = document.getElementById("posts-container");

  posts.forEach((post) => {
    const div = document.createElement("div");
    divContainer.classList.add("grid", "grid-cols-4", "gap-4");
    div.classList.add("card", "bg-base-100", "shadow-sm");
    div.innerHTML = `
       <div class="card-body">
    <h2 class="card-title">${post.id}. ${post.title}.</h2>
    <p>${post.body}</p>
    <div class="card-actions justify-center">
      <button class="btn btn-secondary">Details</button>
    </div>
  </div>
      `;

    divContainer.appendChild(div);
  });
};

handleLoadPostsApis();
