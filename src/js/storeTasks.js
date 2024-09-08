export function storeToDo(toDo) {
  //check for the existing local storage array or initialize it
  let toDoList = JSON.parse(localStorage.getItem("toDoList")) || [];
  toDoList.push(toDo);

  localStorage.setItem("toDoList", JSON.stringify(toDoList));
}

export function getToDoList() {
  let toDoList = JSON.parse(localStorage.getItem("toDoList")) || [];

  return toDoList;
}
