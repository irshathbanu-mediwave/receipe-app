let addRecipe = [
  //   {
  //     id: "1",
  //     recipe: "Panner masala",
  //     step: "aaa",
  //     time: "1hr 30m",
  //     img: "vv",
  //   },
];
function makeRecipe(notes) {
  // debugger;
  const div = document.createElement("div");
  div.setAttribute("class", "card");
  const div1 = document.createElement("div");
  div1.setAttribute("class", "right");
  const div2 = document.createElement("div");
  div2.setAttribute("class", "left");
  //
  const divtitle = document.createElement("div");
  divtitle.setAttribute("class", "title");
  const divimg = document.createElement("div");
  divimg.setAttribute("class", "receipe-img");

  const id = `notes-${notes["id"]}`;
  div.setAttribute("id", id);

  const h2 = document.createElement("h2");
  h2.innerText = notes["recipe"];

  const h3 = document.createElement("h3");
  h3.innerText = notes["step"];
  const h4 = document.createElement("h4");
  h4.innerText = notes["time"];
  const img = document.createElement("img");
  img.src = notes["img"];
  img.setAttribute("class", "food-img");
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Remove";
  deleteBtn.setAttribute("id", "deletebtn");
  deleteBtn.setAttribute("type", "submit");
  deleteBtn.addEventListener("click", function () {
    remove(addRecipe["id"]);
    // div.remove();
    // updateUI();
    // saveStorage();
  });
  // div.appendChild(h2);
  // div.appendChild(h3);
  // div.appendChild(h4);
  // div.appendChild(img);
  // div.appendChild(deleteBtn);
  div.append(div1);
  div.append(div2);
  div1.appendChild(divimg);
  div1.appendChild(divtitle);
  div2.appendChild(deleteBtn);

  divimg.appendChild(img);
  divtitle.appendChild(h2);
  divtitle.appendChild(h3);
  divtitle.appendChild(h4);
  // div.appendChild(div1);
  return div;
}
function updateUI() {
  // debugger;
  clearApp();
  for (let i = 0; i < addRecipe.length; i++) {
    const addnewRecipe = makeRecipe(addRecipe[i]);

    appendToApp(addnewRecipe);
  }
}
function remove(removeItem) {
  // debugger;
  const removelist = addRecipe.findIndex((notes) => notes.id == removeItem);
  // addRecipe = removelist;
  addRecipe.slice(removelist, 1);
  console.log(removelist);
  const totalcount = document.querySelector("#value");
  totalcount.innerText = addRecipe.length;
  updateUI();
}

function clearApp() {
  const app = document.querySelector("#app");
  app.innerHTML = "";
}
function appendToApp(RecipeDiv) {
  const app = document.querySelector("#app");
  app.appendChild(RecipeDiv);
}
function saveStorage() {
  const str = JSON.stringify(addRecipe);
  localStorage.setItem("my-item", str);
}

function LocalStorage() {
  const str = localStorage.getItem("my-item");
  if (!str) {
    favMovies = [];
  } else {
    favMovies = JSON.parse(str);
  }
}

function hookForm() {
  const form = document.getElementById("Entry-recipe");
  // console.log("hookform");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const newrecipe = document.getElementById("recipe").value;
    const newnote = document.getElementById("get-note").value;
    const newtime = document.getElementById("get-time").value;
    const newImage = document.getElementById("get-img").value;
    const edit = {
      id: new Date().getHours(),
      recipe: newrecipe,
      step: newnote,
      time: newtime,
      img: newImage,
    };
    addcard(edit);
  });
}
function addcard(cardadd) {
  addRecipe.push(cardadd);
  saveStorage();
  updateUI();
}

hookForm();
updateUI();
LocalStorage();
