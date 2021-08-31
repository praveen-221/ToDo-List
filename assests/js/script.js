let add = document.querySelector("#add-btn");
let list = document.querySelector("#list");

add.addEventListener("click", function(event) {
    event.preventDefault();
    let listitem = document.getElementById("todo");
    console.log(listitem.value);

    if (listitem.value != '') {
        let work = document.createElement("li");
        console.log("li created");
        work.innerHTML = listitem.value;
        let removebtn = document.createElement("button");
        removebtn.className = "close";
        removebtn.innerHTML = "\u00D7";
        work.appendChild(removebtn);
        console.log("remove-btn created");
        list.appendChild(work);
        listitem.value = "";
        work.addEventListener("click", function (event) {
            event.target.style.textDecoration = "line-through";
        });
        removebtn.addEventListener("click", function (event) {
            event.target.parentElement.style.display = "none";
        });
    }
    else {
        alert("No Input...\n List some Work!!!");
    }
});