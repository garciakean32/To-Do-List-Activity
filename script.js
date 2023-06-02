const addBtnClick = document.getElementById("add-btn");
const container = document.getElementsByClassName("to-do-list-container");
addBtnClick.addEventListener("click", function() {
    
    var newDiv = $("<div id='list' class='added-list-container'><div><p class='added-list'>placeholder</p></div><div class='done-delete-btn'><button class='done-btn'>Done</button><button class='delete-btn'>Delete</button></div></div>");

    container.append(newDiv);
});