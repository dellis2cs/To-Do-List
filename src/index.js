import "./styles.css";
import { getToDo } from "./js/getToDo.js";
import { displayToDoList } from "./js/display-to-do.js";
import { getToDoList, storeToDo } from "./js/storeTasks.js";
import {
  storeProject,
  getProjList,
  populateProjDrop,
} from "./js/storeProjects.js";
import { displayProjList } from "./js/displayProject.js";
import { deleteToDo } from "./js/removeToDo.js";
import { getProject } from "./js/projInput.js";
import { displaySelectedProj } from "./js/displaySelectedProj.js";

const add = document.querySelector(".add");
const inputs = document.querySelector(".inputs");
const submit = document.querySelector(".submitToDo");
const clear = document.querySelector(".clear");
const projButton = document.querySelector(".addProject");
const submitProject = document.querySelector(".submitProj");
const projInputs = document.querySelector(".projInputs");

displayToDoList();
displayProjList();

document.addEventListener("DOMContentLoaded", function () {
  const toDoContainer = document.querySelector("#content");
  toDoContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("deleteButton")) {
      deleteToDo(event.target.parentElement.parentElement.id);
      displayToDoList();
    }
  });
});
const addProjectInputs = document.querySelector(".addProjectInputs");

const submitNewProj = document.querySelector(".submitAddProj");
const projectDrop = document.querySelector("#addProjectDropdown");
let selectedId = null;

// //show the input field to add new projects
addProjectButtons.forEach((addProject) => {
  addProject.addEventListener("click", function () {
    selectedId = addProject.parentElement.parentElement.id;
    addProjectInputs.style.visibility = "visible";
    populateProjDrop();
  });
});

// //submit add project for a todo
submitNewProj.addEventListener("click", function () {
  const toDoList = getToDoList();

  // Update the project in the `toDoList` object
  toDoList[selectedId]["project"] = projectDrop.value;

  // Save the updated `toDoList` object back to local storage
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
  addProjectInputs.style.visibility = "hidden";
});

//show the inputs to create a new project
projButton.addEventListener("click", function () {
  projInputs.style.visibility = "visible";
});

//submit the new project and display the project list
submitProject.addEventListener("click", function () {
  storeProject(getProject());
  projInputs.style.visibility = "hidden";
  displayProjList();
});

const sideBarProjs = document.querySelectorAll(".projSideButton");
sideBarProjs.forEach((sideBarBtn) => {
  sideBarBtn.addEventListener("click", function () {
    displaySelectedProj(sideBarBtn.textContent);
  });
});

//show inputs to create a new to-do
add.addEventListener("click", function () {
  inputs.style.visibility = "visible";
});

//submit the new to do and display it
submit.addEventListener("click", function () {
  storeToDo(getToDo());
  displayToDoList();

  inputs.style.visibility = "hidden";
});

//clear all to-do's
clear.addEventListener("click", function () {
  localStorage.removeItem("toDoList");
  displayToDoList();
});

//Show all to-dos
const allButton = document.querySelector(".projSideButtonAll ");
allButton.addEventListener("click", function () {
  displayToDoList();
});
