import { getProjList } from "./storeProjects";

export function displayProjList(projList) {
  const projNames = document.querySelector(".projNames");
  projNames.innerHTML = "";
  let list = getProjList();
  let allBtn = document.createElement("button");
  allBtn.textContent = "All";
  allBtn.classList.add("projSideButtonAll");
  projNames.appendChild(allBtn);
  for (let i = 0; i < list.length; i++) {
    let projBtn = document.createElement("button");
    projBtn.textContent = list[i];
    projBtn.classList.add("projSideButton");
    projNames.appendChild(projBtn);
  }
}
