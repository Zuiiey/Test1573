document.body.onload = addElements;


var todoData = {
  displayComplete: true,
  items: [
    {
      label: "Skrubba golv",
      completed: true
    },
    {
      label: "Töm sopor",
      completed: true
    },
    {
      label: "Rengör kaffemaskinen",
      completed: true
    }
  ]
};

//console.log(todoData.items[1].label);


function addElements () {

   /*for (var items in todoData) {
     var i = 0;
      var newDiv = document.createElement("div");
      var newContent = document.createTextNode("label");
      newDiv.appendChild(newContent);
      console.log(items + i);
      i++;
  } */

  for (i = 0; i < todoData.items.length; i++) {

    // Skapa <p>
    var newP = document.createElement("p");
    var checkbox = document.createElement("input");

    // Task-namnet
    var newTask = document.createTextNode(todoData.items[i].label);
    newP.appendChild(newTask);

    // Checkboxen
    checkbox.type = "checkbox";
    checkbox.name = "checkboxName" + i;
    checkbox.id = "checkbox" + i;


    // Lägg in <p> i diven container
    document.getElementById("container").appendChild(checkbox);
    document.getElementById("container").appendChild(newP);

  //  var currentP = document.getElementById("p");
  //  document.body.insertBefore(newP, currentP);
  //  var divCon = document.getElementById("container");
  //  divCon.appendChild();


  }

/*
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("Hi there and greetings!");
    newDiv.appendChild(newContent); //add the text node to the newly created div.

    // add the newly created element and its content into the DOM
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
    */

}
