var canvas = new fabric.Canvas("myCanvas");

bolaX = 0;
bolaY = 0;
raloX = 800;
raloY = 400;

blockImageWidth = 5;
blockImageHeight = 5;

function loadImg() {
    fabric.Image.fromURL("golf-h.png", function (Img) {
        raloobj = Img;
        raloobj.scaleToWidth(50);
        raloobj.scaleToHeight(50);
        raloobj.set({
            top: raloY,
            left: raloX
        });
        canvas.add(raloobj);
    });
    newImage();
}

function newImage() {
    fabric.Image.fromURL("ball.png", function (Img) {
        bolaobj = Img;
        bolaobj.scaleToWidth(50);
        bolaobj.scaleToHeight(50);
        bolaobj.set({
            top: bolaY,
            left: bolaX
        });
        canvas.add(bolaobj);
    });
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if ((bolaX == raloX) && (bolaY == raloY)) {
        canvas.remove(bolaobj);
        document.getElementById("hd3").innerHTML = "Você atingiu o objetivo!!!";
         document.getElementById("myCanvas").style.borderColor = "red";
    }

    else {
        if (keyPressed == '38') {
            up();
            console.log("up");
        }
        if (keyPressed == '40') {
            down();
            console.log("down");
        }
        if (keyPressed == '37') {
            left();
            console.log("left");
        }
        if (keyPressed == '39') {
            right();
            console.log("right");
        }
    }

    function up() {
        if(bolaY >= 5) {
            bolaY = bolaY - blockImageHeight;
            canvas.remove(bolaobj);
            newImage();
        }
    }

    function down() {
        if(bolaY <= 450) {
            bolaY = bolaY + blockImageHeight;
            canvas.remove(bolaobj);
            newImage();
        }
    }

    function left() {
        if(bolaX >= 5) {
            bolaX = bolaX - blockImageWidth;
            canvas.remove(bolaobj);
            newImage();
        }
    }

    function right() {
        if(bolaX <= 1050) {
            bolaX = bolaX + blockImageWidth;
            canvas.remove(bolaobj);
            newImage();
        }
}