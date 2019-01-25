function signIn() {
        document.getElementById("signIn").style.display = "flex";
        document.getElementById("signUpp").style.border= "none";
        document.getElementById("signInn").style.borderBottom = "2px solid #212F41";
        document.getElementById("signUp").style.display = "none";
        document.getElementById("divForCheckbox").style.display = "none";
        document.getElementById("buttonTwo").style.display = "block";
        document.getElementById("buttonOne").style.display = "none";
        return document.getElementById("footer").style.display = "none";
    }
function signUp() {
        document.getElementById("signInn").style.border= "none";
        document.getElementById("signUpp").style.borderBottom = "2px solid #212F41";
        document.getElementById("signIn").style.display = "none";
        document.getElementById("divForCheckbox").style.display = "block";
        document.getElementById("footer").style.display = "block";
        document.getElementById("buttonTwo").style.display = "none";
        document.getElementById("buttonOne").style.display = "block";
        return document.getElementById("signUp").style.display = "flex";
    }
    function myFunction() {
        var email = document.getElementById("loginEmail").value;
        var UserName = document.getElementById("loginuserName").value;
        var password= document.getElementById("loginPassword").value;
        var name = document.getElementById("loginName").value;
        var RepeatPassword = document.getElementById("RepeatPassword").value;
        var data = {name: name,UserName:UserName,  password: password, email: email, RepeatPassword:RepeatPassword};
        var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var regpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;   
        if (mailformat.test(email ) === false){
            document.getElementById("spanForMail").innerHTML = "You have entered an invalid email address!";
            document.getElementById("spanForMail").style.display = "block";
            return document.getElementById("loginEmail").style.border = "0.5px solid red";
        }   
        if (mailformat.test(email ) === true){
            document.getElementById("spanForMail").style.display = "none";
            document.getElementById("loginEmail").style.border = "2px solid green";
        }  
        if (regpass.test(password) === false) {
            document.getElementById("loginPassword").style.border = "0.5px solid red";
            document.getElementById("span").innerText = "Please input correct format";
            return document.getElementById("span").style.display = "block";
        };
        if (regpass.test(password) === true) {
            document.getElementById("loginPassword").style.border = "2px solid green";
            document.getElementById("span").style.display = "none";
        }; 
        if (password !== RepeatPassword) {
            document.getElementById("RepeatPassword").style.border = "0.5px solid red"
            document.getElementById("spanOne").innerText = "That password does not match.Try again";
            return document.getElementById("spanOne").style.display =  "block";
        }
        if(name && UserName && password && email && RepeatPassword && password === RepeatPassword){
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
    function myFunctionOne(){
        var UserNameOne = document.getElementById("loginuserNameOne").value;
        var passwordOne= document.getElementById("loginPasswordOne").value;
        var dataOne = { UserName:UserNameOne , password: passwordOne}
        var regpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;  
        var reguser = /^[a-zA-Z0-9]{6,}$/; 
        if (reguser.test(UserNameOne) === false) {
            document.getElementById("loginuserNameOne").style.border = "0.5px solid red";
            document.getElementById("pforuser").innerText = "Please input correct format";
            return document.getElementById("pforuser").style.display = "block";
        };
        if (reguser.test(UserNameOne) === true) {
            document.getElementById("loginuserNameOne").style.border = "0.5px solid green";
            document.getElementById("pforuser").style.display = "none";
        };
        if (regpass.test(passwordOne) === false) {
            document.getElementById("loginPasswordOne").style.border = "0.5px solid red";
            document.getElementById("pforpass").innerText = "Please input correct format";
            return document.getElementById("pforpass").style.display = "block";
        };
        if( UserNameOne && passwordOne ){
            fetch("http://rest.learncode.academy/api/learncode/friends", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(dataOne)
            })
            .then(response => response.json()) 
            .then((response) => {
                for(var key in response){
                    document.getElementById("hidden").style.display = "block";
                    document.getElementById("container").style.display = "none"; 
                    var contentLi = document.createElement("li");
                    document.getElementById("hidden").appendChild(contentLi).innerHTML = key + ": " +  response[key]
                    } 
            })
    }
}
 