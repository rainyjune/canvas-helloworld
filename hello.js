window.addEventListener("load", windowLoaded, false);

function windowLoaded() {
  canvasApp();
}

function canvasApp() {
  if(!canvasSupport()) {
    alert("Your browser does not support HTML5 Canvas!");
    return false;
  } else if (!canvasTextSupport()){
    alert("Your browser does not support Canvas Text!");
    return false;
  } else {
    helloApp();
  }
}


function helloApp() {
  var canvas = document.getElementById("helloCanvas"),
      ctx = canvas.getContext("2d");

  var fadeIn = true,
      alpha = 0;

  var text = "Hello World";

  var helloImage = new Image();
  helloImage.src = "html5bg.jpg";
  
  function loop() {
    setTimeout(loop, 20);
    drawScreen();
  }

  loop();

  function drawScreen() {
    // Background 
    ctx.globalAlpha = 1;
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Image
    ctx.globalAlpha = .25;
    ctx.drawImage(helloImage, 0, 0);
    // Text
    if (fadeIn) {
      alpha += .01;
      if (alpha >= 1) {
        alpha = 1;
        fadeIn = false;
      }
    } else {
      alpha -= .01;
      if (alpha < 0) {
        alpha = 0;
        fadeIn = true;
      }
    }

    ctx.font = "72px Sans-Serif";
    ctx.textBaseline = "top";

    ctx.globalAlpha = alpha;
    ctx.fillStyle = "#ffffff";
    ctx.fillText(text, 150, 200);
  }
}

function canvasSupport() {
  var elem = document.createElement("canvas");
  return !!(elem.getContext && elem.getContext("2d"));
}

function canvasTextSupport(){
  var elem = document.createElement("canvas");
  return !!(elem.getContext && elem.getContext("2d") && typeof elem.getContext("2d").fillText === "function");
}
