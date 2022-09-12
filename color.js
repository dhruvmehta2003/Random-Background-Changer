function color() { 
    x = Math.floor(Math.random() *256);
    y = Math.floor(Math.random() * 256);
    z = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor=
    "rgb(" + x + "," + y + "," + z + ")";
};