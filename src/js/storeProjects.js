export function storeProject(Project) {
  //check for the existing local storage array or initialize it
  let projList = JSON.parse(localStorage.getItem("projList")) || [];
  projList.push(Project);

  localStorage.setItem("projList", JSON.stringify(projList));
}

export function getProjList() {
  let projList = JSON.parse(localStorage.getItem("projList")) || [];

  return projList;
}

export function populateProjDrop() {
  const projList = getProjList();
  const drop = document.getElementById("addProjectDropdown");

  drop.innerHtml = "";
  projList.forEach((project, index) => {
    const option = document.createElement("option");
    option.value = project; // You can customize this to suit your needs
    option.textContent = project; // Display the project title
    drop.appendChild(option);
  });
}
