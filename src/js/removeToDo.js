import { getToDoList } from "./storeTasks";

export function deleteToDo(id) {
  let list = getToDoList();

  if (id >= 0 && id < list.length) {
    // Step 3: Remove the element at the specified index
    list.splice(id, 1);
  } else {
    console.error("Index out of bounds");
  }

  // Step 4: Store the updated array back into localStorage
  localStorage.setItem("toDoList", JSON.stringify(list));
}
