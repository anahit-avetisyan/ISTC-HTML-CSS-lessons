 let myFunction=()=> {
    let name = document.getElementById("tagName").value
    let color= document.getElementById("Color").value
    let text = document.getElementById("Text").value
    let background = document.getElementById("Background").value
    if(name =="" ||color=="" || text == "" || background == ""){
        alert ("please input values")
    }
function Creator (tagName,color,text,background,radius,width,padding,margin){
        this.tagName = document.createElement(tagName); 
        this.color = this.tagName.style.color = color;
        this.text = this.tagName.innerText = text;
        this.background = this.tagName.style.backgroundColor = background;
        this.radius=this.tagName.style.borderRadius = "7px";
        this.width = this.tagName.style.width= "fit-content";
        this.padding = this.tagName.style.padding= "0.5%";
        this.margin = this.tagName.style.marginLeft= "2%";
        this.addHtml = function(){
        // console.log(document.getElementsByTagName("form")[0].appendChild(this.tagName));
        console.log(document.body.appendChild(this.tagName));
    }
    this.addHtml()
}
    let  newObject = new Creator(name,color,text,background);
        document.getElementById("tagName").value = "";
        document.getElementById("Color").value = "";
        document.getElementById("Text").value = "";
        document.getElementById("Background").value = "";
}
 
