function myFunctionOne() {
    var newDiv = document.getElementById("divTwo");
    for(var i = 0 ;i < 4;i++){
        var div = document.createElement("div");
        newDiv.appendChild(div);
        div.id = "div" + i;
        if( i == 0){
            div.style.backgroundColor = "#1BBC9B"   
        };
        if( i == 1){
            div.style.backgroundColor = "#E67F22";
        };
        if( i == 2){
            div.style.backgroundColor = "#3598DB"   
        };
        if( i == 3){
            div.style.backgroundColor = "#2ABD69"   
        };
    };
};
function myFunction () {
    var hiddenUl = document.getElementById("hiddenUl");
    if (hiddenUl.style.display == "none") {
        hiddenUl.style.display = "flex";
    }
    else hiddenUl.style.display = "none"
};