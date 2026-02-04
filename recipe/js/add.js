function add() {
   var name = document.getElementById("recipeName");
   var link = document.getElementById("link");

   if (name.value != "" && link.value != "") {
      var listItem = document.createElement("li");
      var anchor = document.createElement("a");
      anchor.href = link.value;
      listItem.appendChild(anchor);
      anchor.innerHTML = name.value;

      document.getElementById("recipes").appendChild(listItem);
   }
}

button = document.getElementById("addRecipeBtn");
button.addEventListener("click", add);