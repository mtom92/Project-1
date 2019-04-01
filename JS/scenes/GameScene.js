class GameScene extends Phaser.Scene{
  constructor(){
    super({key : "GameScene"});
  }

/*// sets the configuration of the scene
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    // adds physics to the game
    physics:{
      default : 'arcade',
      arcade :{
        gravity : { y: 300},
        debug : false
      }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);*/

 preload() {
  this.load.image('nebula', 'http://localhost:3000/IMG/nebula.jpg');
  this.load.image('ground', 'http://localhost:3000/IMG/platform.png');
  this.load.image('star', 'http://localhost:3000/IMG/star.png');
  this.load.image('bomb', 'http://localhost:3000/IMG/bomb.png');
  this.load.spritesheet('dude','http://localhost:3000/IMG/dude.png',
      {
      frameWidth: 32,
      frameHeight: 48
      }
  );
}

 create ()
{
  //this display the background image
  this.add.image(400, 300, 'nebula');
  //this creates the platforms and makes them statics
  var platforms = this.physics.add.staticGroup();

      platforms.create(400, 568, 'ground').setScale(2).refreshBody();

      platforms.create(600, 400, 'ground');
      platforms.create(50, 250, 'ground');
      platforms.create(750, 220, 'ground');
      platforms.create(350, 90, 'ground');

  //this creates the physics of the player and sets the images for its movement
      this.player = this.physics.add.sprite(100, 450, 'dude');

      this.player.setBounce(0.2);
      this.player.setCollideWorldBounds(true);


      this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
      });

      this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
      });

      this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
      });

      //this allow the colition between this.player and platforms
      this.physics.add.collider(this.player, platforms);

      this.cursors = this.input.keyboard.createCursorKeys();

      var stars = this.physics.add.group({
      key: 'star',
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 }
        });

      stars.children.iterate(function (child) {

      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        });
    //this function allows the colition between stars and this.player
      this.physics.add.collider(stars, platforms);
    //checking for the overlap between the this.player and the stars
      this.physics.add.overlap(this.player, stars, collectStar, null, this);

    //these variables help to save the score and also print it
    var score = 0;
    var scoreText;
    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#4F0' });

    var bombs = this.physics.add.group();
    this.physics.add.collider(bombs, platforms);
    this.physics.add.collider(this.player, bombs, hitBomb, null, this);

    function hitBomb (player, bomb)
     {
       this.physics.pause();
       player.setTint(0xff0000);
       player.anims.play('turn');
       this.gameOver = true;
     }


     function collectStar (player, star)
   {
    star.disableBody(true, true);

    score += 10;
    scoreText.setText('Score: ' + score);

    if (stars.countActive(true) === 0)
       {
        stars.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });

        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);

       }
   }
}


     update ()
     {

    if (this.cursors.left.isDown) {
    this.player.setVelocityX(-160);
    this.player.anims.play('left', true);
  } else if (this.cursors.right.isDown) {
     this.player.setVelocityX(160);
     this.player.anims.play('right', true);
         } else {
           this.player.setVelocityX(0);
           this.player.anims.play('turn');
                 }

              if (this.cursors.up.isDown && this.player.body.touching.down) {
                  this.player.setVelocityY(-330);
                    }
       }

}
