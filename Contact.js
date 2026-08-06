console.log("connected");


let sendbtn = document.getElementById("sendbtn");


function alertUser() {
    alert("Your responses have been sent");
}

if (sendbtn) {
    sendbtn.addEventListener("click", alertUser);
}

