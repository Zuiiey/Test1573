document.body.onload = addElement;


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
console.log(todoData.items.length);

function addElement () {

   /*for (var items in todoData) {
     var i = 0;
      var newDiv = document.createElement("div");
      var newContent = document.createTextNode("label");
      newDiv.appendChild(newContent);
      console.log(items + i);
      i++;
  } */

  for (i = 0; i < todoData.items.length; i++) {
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode(todoData.items[i].label);
    newDiv.appendChild(newContent);

    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
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
