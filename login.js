function fun() {
    var email=document.getElementById("username").value;
    var pass=document.getElementById("password").value;
    if(email=='sumit.18@gmail.com' && pass=='Sumit@13'){
        alert("Succsefully Login!")
      window.location.assign("profile.html");
    }
    }