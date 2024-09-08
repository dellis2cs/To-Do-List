import { getToDoList } from "./storeTasks";

export function displayToDoList(toDoList) {
  const toDos = document.querySelector(".to-dos");
  toDos.innerHTML = "";
  let list;
  if (toDoList) {
    list = toDoList;
  } else {
    list = getToDoList();
  }

  for (let i = 0; i < list.length; i++) {
    let title = list[i]["title"];
    let description = list[i]["description"];
    let due = list[i]["due"];
    let priority = list[i]["priority"];
    let id = i;

    let card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("id", id);

    let cardHeader = document.createElement("div");
    cardHeader.classList.add("cardHeader");

    let titleH1 = document.createElement("h1");
    titleH1.classList.add("title");
    titleH1.textContent = title;

    let projButton = document.createElement("button");
    projButton.classList.add("projButton");
    projButton.textContent = "Add to Project";

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.textContent = "Delete To-Do";

    cardHeader.appendChild(titleH1);
    cardHeader.appendChild(deleteButton);
    cardHeader.append(projButton);
    card.appendChild(cardHeader);

    let descriptionH3 = document.createElement("h3");
    descriptionH3.classList.add("description");
    descriptionH3.textContent = description;
    card.appendChild(descriptionH3);

    let dueH3 = document.createElement("h3");
    dueH3.classList.add("due");
    dueH3.textContent = due;
    card.appendChild(dueH3);

    let priorityH3 = document.createElement("h3");
    priorityH3.classList.add("priority");
    priorityH3.textContent = priority;
    card.appendChild(priorityH3);

    toDos.appendChild(card);
  }
}
