function Leaver() {
    console.log("Before unload");
    return "Are you sure you want to leave?";

}

window.onbeforeunload = Leaver;