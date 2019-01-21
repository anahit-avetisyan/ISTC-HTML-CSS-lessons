function myFunction() {
    var email = document.getElementById("loginEmail").value;
    var lastName = document.getElementById("loginLastName").value;
    var password= document.getElementById("loginPassword").value;
    var name = document.getElementById("loginName").value;
    var RepeatPassword = document.getElementById("RepeatPassword").value;
    var data = {name: name,lastName:lastName,  password: password, email: email, RepeatPassword:RepeatPassword};
    var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var regpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;   
    if (regpass.test(password) === false) {
               document.getElementById("loginPassword").style.borderColor = "red";
               document.getElementById("span").innerText = "Please input correct format";
               return document.getElementById("span").style.display = "block";
           };
        if (mailformat.test(email ) === false){
    return  alert("You have entered an invalid email address!");
    }   
    if(password !== RepeatPassword){
        document.getElementById("loginPassword").style.border = "0.5px solid red"
        document.getElementById("loginPassword").style.outline= "none";
        document.getElementById("span").innerText = "That password does not match.Try again";
        return document.getElementById("span").style.display =  "block";
    }
    if(name && password && email && RepeatPassword && password === RepeatPassword){
        fetch("http://rest.learncode.academy/api/learncode/friends", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(response => response.json()) 
        .then((response) => {
            for(var key in response){
                document.getElementById("hidden").style.display = "block";
                document.getElementById("container").style.display ="none"; 
                var contentLi = document.createElement("li");
                document.getElementById("hidden").appendChild(contentLi).innerHTML = key + ": " +  response[key]
                } 
        })
    }  
}
