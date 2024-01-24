const draggable = document.getElementById("draggable");
const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const container3 = document.getElementById("container3");
draggable.addEventListener("dragstart", function (event) {
  event.dataTransfer.setData("text/plain", event.target.id);
});

function allowDrop(event) {
  event.preventDefault();
}

container1.addEventListener("dragover", allowDrop);
container2.addEventListener("dragover", allowDrop);
container3.addEventListener("dragover", allowDrop);

container1.addEventListener("drop", function (event) {
  drop(event, container1);
});

container2.addEventListener("drop", function (event) {
  drop(event, container2);
});

container3.addEventListener("drop", function (event) {
  drop(event, container3);
});

function drop(event, destination) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text/plain");
  const draggedElement = document.getElementById(data);
  destination.append(draggedElement);
}
