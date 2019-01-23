function myFunction() {
    var email = document.getElementById("loginEmail").value;
    var lastName = document.getElementById("loginLastName").value;
    var password= document.getElementById("loginPassword").value;
    var name = document.getElementById("loginName").value;
    var RepeatPassword = document.getElementById("RepeatPassword").value;
    var data = {name: name,lastName:lastName,  password: password, email: email, RepeatPassword:RepeatPassword};
    var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var regpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;   
    // for(var key in data){
    //     data[key]= "" 
    //     document.getElementById("allelem").style.display = "block";
    //     document.getElementById("allelem").innerText = "Please fill all fields";
    // }
    if (regpass.test(password) === false) {
               document.getElementById("loginPassword").style.border = "0.5px solid red";
               document.getElementById("span").innerText = "Please input correct format";
               document.getElementById("span").style.display = "block";
           };
    if (regpass.test(password) === true) {
            document.getElementById("loginPassword").style.border = "none";
            document.getElementById("span").style.display = "none";
        };
        if (mailformat.test(email ) === false){
            document.getElementById("spanForMail").innerHTML = "You have entered an invalid email address!";
            document.getElementById("spanForMail").style.display = "block";
            document.getElementById("loginEmail").style.border = "0.5px solid red";
    }   
    if (mailformat.test(email ) === true){
        document.getElementById("spanForMail").style.display = "none";
        document.getElementById("loginEmail").style.border = "none";
        }   
    if(password !== RepeatPassword){
        document.getElementById("RepeatPassword").style.border = "0.5px solid red"
        document.getElementById("spanOne").innerText = "That password does not match.Try again";
        document.getElementById("spanOne").style.display =  "block";
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
