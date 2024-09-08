import { createToDo } from "./to-do";

export function getToDo() {
  const title = document.querySelector("#titleInput");
  const description = document.querySelector("#descriptionInput");
  const due = document.querySelector("#dueInput");
  const priority = document.querySelector("#priorityInput");
  const project = "";
  return new createToDo(
    title.value,
    description.value,
    due.value,
    priority.value,
    project
  );
}
