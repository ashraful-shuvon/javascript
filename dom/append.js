const mainContainer = document.getElementById("main-container");

const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerHTML = "Places to visit in Bangladesh";
section.appendChild(h1);

const ul = document.createElement("ul");
section.appendChild(ul);

const li1 = document.createElement("li");
li1.innerHTML = "Cox's Bazar";
ul.appendChild(li1);
const li2 = document.createElement("li");
li2.innerHTML = "Bandarban";
ul.appendChild(li2);
const li3 = document.createElement("li");
li3.innerHTML = "Rangamati";
ul.appendChild(li3);

mainContainer.appendChild(section);
