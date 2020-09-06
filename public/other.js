function Meetnow() {
    window.location.href = "/meetNow";
}

function Join(){
    var roomname = document.getElementById("inp_Join").value;
    window.location.href = "/"+roomname;
}