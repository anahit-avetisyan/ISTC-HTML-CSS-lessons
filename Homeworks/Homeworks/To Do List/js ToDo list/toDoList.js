var addList = [];
function addToDoList() {
    var textInput = document.getElementById("inputText").value ;
    addList.unshift(textInput);
    var divForAdd = document.createElement("DIV");
    var pForAdd = document.createElement("p");
    var icheckForAdd = document.createElement("i");
    var iForAdd = document.createElement("i");
    icheckForAdd.className = "far fa-check-square";
    iForAdd.className = "fas fa-trash-alt";
    divForAdd.id = "icons";
    pForAdd.className = "pForAddTodo";
    pForAdd.style.color = "green";
    var myList = document.getElementById("main");
    var appenddiv = document.getElementById("main").appendChild(divForAdd);
    var appendchechi = appenddiv.appendChild(icheckForAdd);
    var appendp = appenddiv.appendChild(pForAdd).innerText = textInput;
    var appendi = appenddiv.appendChild(iForAdd);
    myList.insertBefore(divForAdd,myList.childNodes[0]);
    document.getElementsByClassName("far fa-check-square")[0].onclick = function myFunction() {
        if (this.parentElement.getElementsByClassName("pForAddTodo")[0].style.color == "green") {
            this.style.color = "rgb(239, 108, 98)";
            this.parentElement.getElementsByClassName("pForAddTodo")[0].style.textDecorationLine ="line-through";
            this.parentElement.getElementsByClassName("pForAddTodo")[0].style.color = "rgb(239, 108, 98)";
        }
        else {
            this.style.color = "green";
            this.parentElement.getElementsByClassName("pForAddTodo")[0].style.textDecorationLine ="none";
            this.parentElement.getElementsByClassName("pForAddTodo")[0].style.color = "green";
        };
    };
    document.getElementsByClassName("fas fa-trash-alt")[0].onclick = function myFunction() {
        item = this.parentElement;
        item.parentNode.removeChild(item);
        for (var i = 0; i < addList.length; i++ ){ 
            if(addList[i] === this.parentElement.getElementsByClassName("pForAddTodo")[0].textContent){
                addList.splice(i,1);
                break;  
            };
        };
    };
};
var myallP = document.getElementsByTagName("P");
function showActiveList() {
    for (var i=0; i< myallP.length; i++){
        myallP[i].parentElement.style.display = "flex";
    };
    for(var j = 0; j < myallP.length; j++){
        if (myallP[j].style.color == "rgb(239, 108, 98)") {
            myallP[j].parentElement.style.display = "none";
        }; 
    };
};
function showCompletedList() {
    for (var i=0; i< myallP.length; i++){
        myallP[i].parentElement.style.display = "flex";
    };
    for (var k = 0; k < myallP.length; k++){
        if(myallP[k].style.color == "green") {
            myallP[k].parentElement.style.display = "none";
        };
    };
};
function showAllList() {
    for (var i=0; i< myallP.length; i++){
        myallP[i].parentElement.style.display = "flex";
    };
};