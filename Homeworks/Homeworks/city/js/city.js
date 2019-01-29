function myFunctionOne() {
    var newDiv = document.getElementById("divTwo");
    var divFour = document.getElementById("divFourth");
    var divfive = document.getElementById("divFifth");
    for(var i = 0 ;i < 4;i++){
        var div = document.createElement("DIV");
        newDiv.appendChild(div);
        div.id = "div" + i;
    }
    for(var j = 1; j < 5 ; j++){
        var divTwo = document.createElement("DIV");
        divFour.appendChild(divTwo);
        divTwo.className = "fourDiv" + j;
        };
    for (var k = 1 ; k <5 ; k++){
        var divThree = document.createElement("DIV");
        divfive.appendChild(divThree);
        divThree.className = "FifthDiv"+ k;
        }
    }
function myFunction () {
    var hiddenUl = document.getElementById("hiddenUl");
    if (hiddenUl.style.display == "none") {
        hiddenUl.style.display = "flex";
    }
    else hiddenUl.style.display = "none"
};
function myFunctionTwo() {
    if (document.getElementById("body").clientWidth > 672) {
        hiddenUl.style.display = "none"
    };
};