function Meetnow() {
    window.location.href = "/meetNow";
}

function Join() {
    var roomname = document.getElementById("inp_Join").value;
    if (roomname.includes('dostdekho.herokuapp.com') || roomname.includes('localhost')) {
        roomname = new URL(roomname).pathname.replace("/", "").trim();
    }
    console.log(roomname);
    window.location.href = "/" + roomname;
}