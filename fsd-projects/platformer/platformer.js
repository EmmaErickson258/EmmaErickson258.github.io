$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(180, 650, 140, 25, "green");

    createPlatform(100, 265, 150, 25, "green");

    createPlatform(475, 525, 150, 40, "green");

    createPlatform(475, 250, 150, 25, "green");

    createPlatform(325, 400, 100, 42, "green");

    createPlatform(750, 450, 175, 25, "green");

    createPlatform(1085, 300, 100, 25, "green");

    createPlatform(700, 125, 175, 25, "green");

    createPlatform(1300, 575, 50, 25, "green");

    // TODO 3 - Create Collectables
    createCollectable("database", 100, 225)
    createCollectable("database", 750, 85)
    createCollectable("database", 1300, 535)

    // TODO 4 - Create Cannons
    createCannon("top", 350, 1000)
    createCannon("right", 475, 1000)
    createCannon("bottom", 950, 1000)

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
