console.log("connected");



let subbtn = document.getElementById("subbtn");

function alertUser() {
    alert("Your responses have been submitted");
}
if (subbtn) {
    subbtn.addEventListener("click", alertUser);
}