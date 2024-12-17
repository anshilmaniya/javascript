"use strict";
function registed() {
    var Fullname = document.getElementById("full-name-input").value;
    var number = document.getElementById("Enter-number").value;
    var Enteremail = document.getElementById("Enter-Email").value;
    var Password = document.getElementById("Enter-Password").value;
    var inputerror1 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var registerobject = {
        name: Fullname,
        nub: number,
        emailed: Enteremail,
        pass: Password
    };
    // console.log("1",registerobject);
    var storaged = JSON.parse(localStorage.getItem("user-details")) || [];
    console.log(storaged);

    var userinfo = storaged.some((items) => {
        return items.emailed === Enteremail;
    });
    if (userinfo) {
        alert("User already existes.");
    }
    else if (Fullname === "") {
        alert("pls Enter Fullname");
    }
    else if (number === "") {
        alert("pls Enter number");
    }
    else if (Enteremail === "") {
        alert("pls Enter email");
    }
    else if (!inputerror1.test(Enteremail)) {
        alert("Email is not valid");
    }
    else if (Password === "") {
        alert("pls Enter Password");
    }

    else {
        storaged.push(registerobject);
        localStorage.setItem("user-details", JSON.stringify(storaged));
        window.location.href = "movie-login.html";
    }
}
function watchpassword() {
    var inputpassword1 = document.getElementById("Enter-Password");
    if (inputpassword1.type === "password") {
        inputpassword1.type = "text";
    } else {
        inputpassword1.type = "password";
    }
}

function emailvalid() {
    var inputvalue1 = document.getElementById("Enter-Email").value;
    var netflixdiv1 = document.getElementById("email-invalidation");
    var inputerror1 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (inputerror1.test(inputvalue1)) {
        netflixdiv1.textContent = "";
    } else {
        netflixdiv1.textContent = "Please enter a valid email address.";
    }
}

function submited() {
    var storaged = JSON.parse(localStorage.getItem("user-details")) || [];
    var inputemail = document.getElementById("input-email").value;
    var inputpassword = document.getElementById("input-password").value;
    var emailExists = storaged.some((item) => {
        return (item.emailed === inputemail) && (item.pass === inputpassword);
    });
    if (emailExists) {
        window.location.href = "media-center.html";
    }
    else {
        alert("you need to register");
    }
}
function inputvalue() {
    var inputvalue = document.getElementById("input-email").value;
    var netflixdiv = document.getElementById("erroring");
    var inputerror = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (inputerror.test(inputvalue)) {
        netflixdiv.textContent = "";
    } else {
        netflixdiv.textContent = "Please enter a valid email address.";
    }
}
function toggle() {
    var inputpassword = document.getElementById("input-password");
    if (inputpassword.type === "password") {
        inputpassword.type = "text";
    } else {
        inputpassword.type = "password";
    }
}

function adding() {
    var storaged = JSON.parse(localStorage.getItem("user-details")) || [];
    var inputemail = document.getElementById("input-value").value;
    console.log(inputemail);
    console.log(storaged);
    var emailExists = storaged.some((item) => {
        return (item.emailed === inputemail);
    });
    // console.log(emailExists);
    if (emailExists) {
        window.location.href = "media-center.html";
    }
    else {
        alert("Email-address is not Exists");
    }
}

function opennav() {
    document.getElementById("Frequently-2").style.width = "auto";
    document.getElementById("Frequently-2").style.display = "block";
    document.getElementById("additionsign").style.display = "none";
    // alert("Aa")
}
function remove() {
    document.getElementById("Frequently-2").style.display = "none";
    document.getElementById("additionsign").style.display = "block";

}
function opennav3() {
    document.getElementById("Frequently-3").style.width = "auto";
    document.getElementById("Frequently-3").style.display = "block";
    document.getElementById("additionsign-3").style.display = "none";
}
function remove3() {
    document.getElementById("Frequently-3").style.display = "none";
    document.getElementById("additionsign-3").style.display = "block";

}
function opennav4() {
    document.getElementById("Frequently-4").style.width = "auto";
    document.getElementById("Frequently-4").style.display = "block";
    document.getElementById("additionsign-4").style.display = "none";
}
function remove4() {
    document.getElementById("Frequently-4").style.display = "none";
    document.getElementById("additionsign-4").style.display = "block";

}
function opennav5() {
    document.getElementById("Frequently-5").style.width = "auto";
    document.getElementById("Frequently-5").style.display = "block";
    document.getElementById("additionsign-5").style.display = "none";
}
function remove5() {
    document.getElementById("Frequently-5").style.display = "none";
    document.getElementById("additionsign-5").style.display = "block";
}
// function opennav(index) {
//     var objectalldara = document.querySelectorAll("#Frequently-2")[index];
//     if (objectalldara.style.display === "block") {
//         objectalldara.style.display = "none";
//     } else {
//         objectalldara.style.display = "block";
//     }
//     console.log(objectalldara, "objectalldara");
// }
// function remove() {
//     document.getElementById("Frequently-2").style.display = "none";
//     document.getElementById("additionsign").style.display = "block";
// }

var alldata = []
function sumited() {
    var question = document.getElementById("Questions-1").value;
    document.getElementById("Questions-1").value = "";
    console.log(question, "question");
    var answer = document.getElementById("answer").value;
    document.getElementById("answer").value = "";
    console.log(answer, "answer");
    var alldataobject = {
        question1: question,
        answer1: answer
    };
    alldata.push(alldataobject);
    console.log(alldata);
    document.getElementById("Frequently-1").innerHTML = alldata.map((item, index) => {
        return `<div id="${`objectalldata${index}`}">
        <p class="Frequently-1-1" onclick="opennav(${index})" id="Frequently-1-1">${item.question1}</p>
        <p class="Frequently-2" id="Frequently-2" onclick="remove()">${item.answer1}</p>
        </div>`;
    }).join("")
}