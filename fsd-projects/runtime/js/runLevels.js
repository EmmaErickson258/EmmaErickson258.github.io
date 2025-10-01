var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createSawBlade (x,y) {
    var hitZoneSize = 25;
    var damageFromObstacle = 10;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
      sawBladeHitZone.x = x;
      sawBladeHitZone.y = y;
      game.addGameItem(sawBladeHitZone)
    var obstacleImage = draw.bitmap("img/sawblade.png");
     sawBladeHitZone.addChild(obstacleImage);
      obstacleImage.x = -25
      obstacleImage.y = -25
  }
    createSawBlade(600, groundY - 105)
    createSawBlade(700, groundY - 10)
    createSawBlade(800, groundY - 105)
    createSawBlade(1100, groundY - 10)
    createSawBlade(1250, groundY - 10)
    createSawBlade(1400, groundY - 10)
    createSawBlade(1600, groundY - 10)
    createSawBlade(1800, groundY - 10)
    createSawBlade(1700, groundY - 105)
function createEnemy(x, y) {
    var enemy = game.createGameItem("enemy", 25);
    var redSquare = draw.rect(50, 50, "red");
      redSquare.x = -25;
      redSquare.y = -25;
      enemy.addChild(redSquare);
        enemy.x = x;
        enemy.y = groundY - y;
        game.addGameItem(enemy);
        enemy.velocityX = -3;
        enemy.rotationalVelocity = -2;

    enemy.onPlayerCollision= function () {
      game.changeIntegrity(-10);
    }

    enemy.onProjectileCollision= function() {
      game.increaseScore(1000);
      enemy.shrink();
    }
  }
createEnemy(1500, groundY - 250);
createEnemy(1900, groundY - 200);
createEnemy(2300, groundY - 250);
createEnemy(2800, groundY - 255);

function createReward(x, y) {
   var reward = game.createGameItem("reward", 25);
    var yellowSquare = draw.rect(50, 50, "yellow");
      yellowSquare.x = -25;
      yellowSquare.y = -25;
      reward.addChild(yellowSquare);
        reward.x = x;
        reward.y = groundY - y;
        game.addGameItem(reward);
        reward.velocityX = -3;
        reward.rotationalVelocity = -2;

    reward.onPlayerCollision= function () {
      game.changeIntegrity(10);
      reward.shrink()
    }

    reward.onProjectileCollision= function() {
      game.changeIntegrity(-10);
    }
  }
createReward(1100, groundY - 150);
createReward(1700, groundY - 160);
createReward(2300, groundY - 155);
 
    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
