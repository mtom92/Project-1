var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent:"container",
    physics:{
      default : 'arcade',
      arcade :{
        gravity : { y: 300},
        debug : false
        }
      },
    scene : [ MenuScene, GameScene, WinScene,LoseScene]
};

    var game = new Phaser.Game(config);
