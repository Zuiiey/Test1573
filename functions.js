document.body.onload = addElements;


var todoData = {
  displayComplete: true,
  items: [
    {
      label: "Skrubba golv",
      completed: true,
      time: "12 m",
      points: "34"
    },
    {
      label: "Töm sopor",
      completed: true,
      time: "12 m",
      points: "21"
    },
    {
      label: "Rengör kaffemaskinen",
      completed: true,
      time: "12 m",
      points: "21"
    },
    {
      label: "Fronta varor",
      completed: true,
      time: "10 m",
      points: "12"
    }
  ]
};

//console.log(todoData.items[1].label);

console.log();

function addElements () {

  for (i = 0; i < todoData.items.length; i++) {

    // Skapa nya element
    var newPTitle = document.createElement("p");
    var checkbox = document.createElement("input");
    var newPTime = document.createElement("p");
    var newPPoints = document.createElement("p");

    // Task-namnet
    var newTask = document.createTextNode(todoData.items[i].label);
    newPTitle.appendChild(newTask);
    newPTitle.id = "title" + i;

    // Checkboxen
    checkbox.type = "checkbox";
    checkbox.name = "checkboxName" + i;
    checkbox.value = true;
    checkbox.id = "checkbox" + i;
//    checkbox.onclick = ;

    // Tiden
    var newTime = document.createTextNode(todoData.items[i].time);
    newPTime.appendChild(newTime);
    newPTime.id = "time" + i;

    // Poängen
    var newPoints = document.createTextNode(todoData.items[i].points);
    newPPoints.appendChild(newPoints);
    newPPoints.id = "points" + i;

    // Lägg in i container
    document.getElementById("container").appendChild(checkbox);
    document.getElementById("container").appendChild(newPTitle);
    document.getElementById("container").appendChild(newPTime);
    document.getElementById("container").appendChild(newPPoints);

  }

}


function buttonClick() {
  //disabla knappen

  // få hela grejen att försvinna

}
