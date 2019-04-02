class GameScene extends Phaser.Scene{
  constructor(){
    super({key : "GameScene"});
  }


 preload() {
  this.load.image('nebula', 'http://localhost:3000/IMG/nebula.jpg');
  this.load.image('ground', 'http://localhost:3000/IMG/block.png');
  this.load.image('star', 'http://localhost:3000/IMG/star.png');
  this.load.image('bomb', 'http://localhost:3000/IMG/bomb.png');
  this.load.image('cloud','http://localhost:3000/IMG/flyingb.png')
  this.load.spritesheet('dude','http://localhost:3000/IMG/sprit1.gif',
      {
      frameWidth: 37,
      frameHeight: 46
      }
  );
}

 create ()
{
  //sets the bounds to the camera and the world of the game
  this.cameras.main.setBounds(0, 0, 1000, 1024 * 3);
  this.physics.world.setBounds(0, 0, 1000, 1024 * 3);
  //this display the background image
  this.add.image(0, 0, 'nebula').setOrigin(0);
  this.add.image(0, 1024, 'nebula').setOrigin(0);
  this.add.image(0, 1024*2, 'nebula').setOrigin(0);
  //
  var cloudsType2 = this.physics.add.group({immovable :true,allowGravity :false, frictionX: 1,frictionY: 1,moves:false});

  //this creates the horizontal moving clouds and gives them properties to make them movible
     var clouds = this.physics.add.group({collideWorldBounds: true,bounceX: 1,immovable :true,
       allowGravity :false, frictionX: 1});
  //this creates the platforms and makes them statics
     var platforms = this.physics.add.staticGroup();
      //Platforms
      platforms.create(200, 3055, 'ground');platforms.create(600, 3055, 'ground');platforms.create(1000, 3055, 'ground');
      platforms.create(500, 2755, 'ground');
      //horizontal moving clouds
      clouds.create(200, 2900, 'cloud');
      clouds.setVelocityX(60);
      //vertical moving clouds
      var nubes = [];
       nubes.push(cloudsType2.create(200, 2600, 'cloud'));


      this.tweens.add({
          targets: nubes,
          y:400,
          duration: 6000,
          ease: 'Sine.easeInOut',
          repeat: -1,
          yoyo:true
      });
  //this creates the physics of the player and sets the images for its movement
      this.player = this.physics.add.sprite(100, 3020, 'dude');
  //makes the player able to bounce when it touches a platform
      this.player.setBounce(0.2);
  //enables colition between player and the bounds of the world
      this.player.setCollideWorldBounds(true);


  //this creates the animation for the sprite
      this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
      });

      this.anims.create({
        key: 'turn',
        frames: this.anims.generateFrameNumbers('dude', { start: 28, end: 28 }),
        frameRate: 10,
        repeat: -1
      });

      this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 11, end: 18 }),
        frameRate: 10,
        repeat: -1
      });



      //this allow the colition between this.player and platforms
      this.physics.add.collider(this.player, platforms);
      this.physics.add.collider(this.player, clouds);
      this.physics.add.collider(this.player, cloudsType2);

      this.cursors = this.input.keyboard.createCursorKeys();

      var stars = this.physics.add.group({
      key: 'star',
      repeat: 11,
      setXY: { x: 12, y: 50, stepX: 70 }
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

   this.cameras.main.startFollow(this.player);

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
