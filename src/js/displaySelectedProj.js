import { getToDoList } from "./storeTasks";
import { displayToDoList } from "./display-to-do";

export function displaySelectedProj(project) {
  const toDoList = getToDoList();
  const toDos = document.querySelector(".to-dos");
  toDos.innerHTML = "";
  const filteredToDos = toDoList.filter((toDo) => toDo.project === project);
  displayToDoList(filteredToDos);
}
