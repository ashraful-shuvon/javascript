const handleData = () => {
  //   console.log("clicked");

  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

const handleLoadUsers = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json()) //json promise
    .then((data) => {
      //   console.log(data);
      displayUser(data);
    });
};

const displayUser = (users) => {
  //   console.log(users);

  //   const userName = users.map((user) => console.log(user.name));

  const userNameContainer = document.getElementById("userName");
  users.forEach((user) => {
    // console.log(element.name);

    const li = document.createElement("li");
    li.innerText = user.name;
    userNameContainer.appendChild(li);
  });
};
