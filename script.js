const input = document.getElementById("inputBar");
let toDoList = []

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("addBtn").click();
    }
});

document.getElementById("addBtn").addEventListener("click", function () {

    if (input.value === "")
        return alert("Please enter a task");

    if (toDoList.find(x => x === input.value))
        return alert(`Task "${input.value}" already exist`);

    toDoList.push(input.value)

    const mainContainer = document.getElementById("toDoList");
    const addedListContainerDiv = document.createElement("div");
    addedListContainerDiv.setAttribute('class', 'added-list-container')

    mainContainer.appendChild(addedListContainerDiv);

    const divContainter = document.createElement("div");
    addedListContainerDiv.appendChild(divContainter);

    const p = document.createElement("p");
    p.setAttribute('class', 'added-list')
    p.textContent = input.value;
    divContainter.appendChild(p);

    const divActionContainer = document.createElement("div");
    divActionContainer.setAttribute('class', 'done-delete-btn')
    addedListContainerDiv.appendChild(divActionContainer);

    const btnDone = document.createElement("button");
    btnDone.setAttribute('class', 'done-btn')
    btnDone.textContent = "Done";
    divActionContainer.appendChild(btnDone);

    const btnDelete = document.createElement("button");
    btnDelete.setAttribute('class', 'delete-btn')
    btnDelete.textContent = "Delete";
    divActionContainer.appendChild(btnDelete);

    btnDone.addEventListener("click", function () {
        btnDone.classList.toggle("done-btn-toggle");
        p.classList.toggle("added-list-toggle");

        btnDone.textContent = btnDone.textContent === "Done" ? "Undone" : "Done"

    });

    btnDelete.addEventListener("click", function () {
        mainContainer.removeChild(addedListContainerDiv);
        const inputValue = p.textContent
        toDoList = toDoList.filter(x => x !== inputValue)
    });

    input.value = ""
});