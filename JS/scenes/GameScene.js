class GameScene extends Phaser.Scene{
  constructor(){
    super({key : "GameScene"});
  }


 preload() {

  this.load.image('nebula', 'IMG/nebula.jpg');
  this.load.image('ground', 'IMG/block.png');
  this.load.image('miniground', 'IMG/miniblock.png');
  this.load.image('star', 'IMG/gem.png');
  this.load.image('bomb', 'IMG/green.png');
  this.load.image('cloud','IMG/flyingb.png');
  this.load.image('goldKey','IMG/goldKey.png');
  this.load.image('chest','IMG/goldTrunk.png');
  this.load.audio('soundback','AUDIO/Game_Background.mp3');
  this.load.spritesheet('dude','IMG/sprite.png',
      {frameWidth: 47,frameHeight: 55});
  this.load.spritesheet('ninja','IMG/greninja.png',
      {frameWidth: 62, frameHeight: 62});
}

 create ()
{
  var music = this.sound.add('soundback');
   music.play();
   music.setLoop(true);
  //sets the bounds to the camera and the world of the game
  this.cameras.main.setBounds(0, 0, 1000, 1024 * 3);
  this.physics.world.setBounds(0, 0, 1000, 1024 * 3);
  //this display the background image
  this.add.image(0, 0, 'nebula').setOrigin(0);
  this.add.image(0, 1024, 'nebula').setOrigin(0);
  this.add.image(0, 1024*2, 'nebula').setOrigin(0);
  //this sets variables for elements that are necessary to win
  var keys = this.physics.add.group({allowGravity :false});
  var chest = this.physics.add.group({allowGravity :false});
  var gkey = false;
  //
  var cloudsType2 = this.physics.add.group({immovable :true,allowGravity :false,
    frictionY:3, moves : false, frictionX: 1});
  //
  this.ninjas = this.physics.add.group({immovable :true,allowGravity :false,
    frictionY:3, moves : false, frictionX: 1, frame:'ninja'});

  //this creates the horizontal moving clouds and gives them properties to make them movible
     var clouds = this.physics.add.group({collideWorldBounds: true,bounceX:1,immovable :true,
       allowGravity :false, frictionX: 1 });
  //this creates the platforms and makes them statics
     var platforms = this.physics.add.staticGroup();


     keys.create(120,180,'goldKey');
     chest.create(400,100,'chest');
      //Platforms
      platforms.create(200, 3055, 'ground');platforms.create(600, 3055, 'ground');platforms.create(1000, 3055, 'ground');
      platforms.create(500, 2755, 'ground');
      platforms.create(100, 2380, 'miniground');
      platforms.create(870, 2380, 'miniground');
      platforms.create(200, 2055, 'ground');
      platforms.create(900, 2055, 'ground');
      platforms.create(300, 1650, 'miniground');
      platforms.create(800, 1650, 'miniground');
      platforms.create(550, 1480, 'ground');
      platforms.create(300, 1310, 'miniground');
      platforms.create(800, 1310, 'miniground');
      platforms.create(120, 1020, 'miniground');
      platforms.create(320, 920, 'miniground');
      platforms.create(620, 1020, 'miniground');
      platforms.create(820, 920, 'miniground');
      platforms.create(600, 770, 'ground');
      platforms.create(320, 620, 'miniground');
      platforms.create(220, 500, 'miniground');
      platforms.create(120, 360, 'miniground');
      platforms.create(400, 120, 'ground');
      platforms.create(500, 250, 'ground');

      //horizontal moving clouds
      clouds.create(200, 2900, 'cloud');
      clouds.create(200, 2200, 'cloud');
      clouds.create(200, 1150, 'cloud');
      clouds.setVelocityX(150);

      //vertical moving clouds
      this.tweens.add({targets: cloudsType2.create(170, 2740, 'cloud'),y:2540,duration: 3000,ease: 'Sine.easeInOut',repeat: -1,yoyo:true});
      this.tweens.add({targets: cloudsType2.create(830, 2740, 'cloud'),y:2540,duration: 3000,ease: 'Sine.easeInOut',repeat: -1,yoyo:true});
      this.tweens.add({targets: cloudsType2.create(545, 1740, 'cloud'),y:2040,duration: 5000,ease: 'Sine.easeInOut',repeat: -1,yoyo:true});
      this.tweens.add({targets: cloudsType2.create(745, 365, 'cloud'),y:700,duration: 5000,ease: 'Sine.easeInOut',repeat: -1,yoyo:true});
  //this creates the physics of the player and sets the images for its movement
      this.player = this.physics.add.sprite(100, 3010, 'dude');
      var parent = this;
      this.gameOver = false;
      this.gameWin = false;
    //Creates the movement for the greninjas
    this.ninjaTween = this.tweens.add({targets: [this.ninjas.create(250, 3005, 'ninja')],x:900,duration: 6000,ease: 'Sine.easeInOut',
    repeat: -1,yoyo:true,onStart:function(){parent.ninjaTween1res = 1;} ,onRepeat:function(){parent.ninjaTween1res = 1;},onYoyo: function(){parent.ninjaTween1res = 0;}});
    this.ninjaTween2 = this.tweens.add({targets: [this.ninjas.create(400, 2705, 'ninja')],x:650,duration: 6000,ease: 'Sine.easeInOut',
    repeat: -1,yoyo:true,onStart:function(){parent.ninjaTween2res = 1;} ,onRepeat:function(){parent.ninjaTween2res = 1;},onYoyo: function(){parent.ninjaTween2res = 0;}});
    this.ninjaTween3 = this.tweens.add({targets: [this.ninjas.create(100, 2007, 'ninja')],x:380,duration: 6000,ease: 'Sine.easeInOut',
    repeat: -1,yoyo:true,onStart:function(){parent.ninjaTween3res = 1;} ,onRepeat:function(){parent.ninjaTween3res = 1;},onYoyo: function(){parent.ninjaTween3res = 0;}});
    this.ninjaTween4 = this.tweens.add({targets: [this.ninjas.create(750, 2007, 'ninja')],x:920,duration: 6000,ease: 'Sine.easeInOut',
    repeat: -1,yoyo:true,onStart:function(){parent.ninjaTween4res = 1;} ,onRepeat:function(){parent.ninjaTween4res = 1;},onYoyo: function(){parent.ninjaTween4res = 0;}});
    this.ninjaTween5 = this.tweens.add({targets: [this.ninjas.create(360, 1433, 'ninja')],x:680,duration: 6000,ease: 'Sine.easeInOut',
    repeat: -1,yoyo:true,onStart:function(){parent.ninjaTween5res = 1;} ,onRepeat:function(){parent.ninjaTween5res = 1;},onYoyo: function(){parent.ninjaTween5res = 0;}});
    this.ninjaTween6 = this.tweens.add({targets: [this.ninjas.create(400, 723, 'ninja')],x:650,duration: 6000,ease: 'Sine.easeInOut',
    repeat: -1,yoyo:true,onStart:function(){parent.ninjaTween6res = 1;} ,onRepeat:function(){parent.ninjaTween6res = 1;},onYoyo: function(){parent.ninjaTween6res = 0;}});
    this.ninjaTween7 = this.tweens.add({targets: [this.ninjas.create(400, 200, 'ninja')],x:650,duration: 6000,ease: 'Sine.easeInOut',
    repeat: -1,yoyo:true,onStart:function(){parent.ninjaTween7res = 1;} ,onRepeat:function(){parent.ninjaTween7res = 1;},onYoyo: function(){parent.ninjaTween7res = 0;}});
  //enables colition between player and the bounds of the world
      this.player.setCollideWorldBounds(true);


  //this creates the animation for dude
      this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 27, end:32  }),
        frameRate: 10,
        repeat: -1
      });
      this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 18, end:24 }),
        frameRate: 10,
        repeat: -1
      });
      this.anims.create({
        key: 'waiting',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 5 }),
        frameRate: 3,
        repeat: -1
      });

      this.anims.create({
        key:'jump',
        frames: this.anims.generateFrameNumbers('dude', { start: 14, end:17 }),
        frameRate: 3,
        repeat: -1
      });

      this.anims.create({
        key:'die',
        frames: this.anims.generateFrameNumbers('dude', { start: 6, end:8 }),
        frameRate: 3,
        repeat: -1
      });
      this.anims.create({
        key:'win',
        frames: this.anims.generateFrameNumbers('dude', { start: 9, end:13 }),
        frameRate: 10,
        repeat: -1
      });
  //this creates the animation for ground enem

     this.anims.create({
      key:'rightn',
      frames: this.anims.generateFrameNumbers('ninja', { start: 8, end:11 }),
      frameRate: 3,
      repeat: -1
      });
      this.anims.create({
       key:'leftn',
       frames: this.anims.generateFrameNumbers('ninja', { start: 4, end:7 }),
       frameRate: 3,
       repeat: -1
       });

       // Creates the meteorites
          var meteor = this.physics.add.group({bounceY:(1),bounceX:(1)});

      //this allow the colition between this.player and platforms
      this.physics.add.collider(this.player, platforms);
      this.physics.add.collider(this.player, cloudsType2, customSep, null,this);
      this.physics.add.collider(this.player, this.ninjas, loss, null,this);
      this.physics.add.overlap(this.player, this.ninjas, loss, null, this);
      this.physics.add.overlap(this.player, chest, win, null, this);
      this.physics.add.collider(this.player, clouds);

      //Sets the win
       function win(){
         if(gkey === true){
          this.gameWin = true;
          setTimeout(function(){music.stop();parent.scene.start("WinScene",{ score:score });}, 3000);
         }

       }

        function loss(player, ninja){
          player.setTint(0xff0000);
          player.anims.play('die');
          this.gameOver = true;
          this.player.setVelocityX(0);
          this.player.setVelocityY(0);
          setTimeout(function(){music.stop();parent.scene.start("LoseScene",{ score:score });}, 3000);
        }
       function customSep(player, cloudsType2) {
        //if (!this.player.locked && this.player.body.velocity.y > 0)  {
       this.player.locked = true;
       this.player.lockedTo = cloudsType2;
       cloudsType2.playerLocked = true;
       this.player.body.velocity.y = 0;

      }

      this.cursors = this.input.keyboard.createCursorKeys();


      var stars = this.physics.add.group({allowGravity :false,key: 'star',repeat: 8,setXY: { x: 100, y: 2850, stepX: 100 }});
    for (var i = 300; i < 800; i+=100) {
      stars.create(i,2605,"star");
    }
    for (var i = 100; i < 1000; i+=200) {
      stars.create(i,2105,"star");
    }
    for (var i = 100; i < 1000; i+=200) {
      stars.create(i,1905,"star");
    }
    for (var i = 300; i < 900; i+=100) {
      stars.create(i,1405,"star");
    }
    for (var i = 400; i < 900; i+=100) {
      stars.create(i,700,"star");
    }
    for (var i = 200; i < 900; i+=100) {
      stars.create(i,160,"star");
    }
    for (var i = 100; i < 1000; i+=100) {
      stars.create(i,1080,"star");
    }

   setInterval(function(){meteor.create(Phaser.Math.Between(100, 800), Phaser.Math.Between(100, 2800), 'bomb');}, 10000);


     this.physics.add.collider(platforms,meteor);

    //checking for the overlap between the this.player and the stars
      this.physics.add.overlap(this.player, stars, collectStar, null, this);
      this.physics.add.overlap(this.player, keys, collectKey, null, this);

    //these variables help to save the score and also print it
    var score = 0;
    var scoreText;
    scoreText = this.add.text(0, 0, 'score: 0', { fontSize: '32px', fill: '#4F0' });




    this.physics.add.collider(this.player, meteor, hitBomb, null, this);

    function hitBomb (player, meteor){
       player.setTint(0xff0000);
       player.anims.play('die');
       this.gameOver = true;
       this.player.setVelocityX(0);
       this.player.setVelocityY(0);
      setTimeout(function(){music.stop();parent.scene.start("LoseScene",{ score:score });}, 3000);
       }




     function collectStar (player, star){
    star.disableBody(true, true);

    score += 100;
    scoreText.setText('Score: ' + score);

    }

   function collectKey (player, key){
  key.disableBody(true, true);
  gkey = true;
   }

   this.cameras.main.startFollow(this.player);


}


     update () {


       if(this.ninjaTween1res == 1){
         this.ninjaTween.targets.forEach(ninja => {
           ninja.anims.play("rightn", true)
         });
       }else{
         this.ninjaTween.targets.forEach(ninja => {
           ninja.anims.play("leftn", true)
         });
       }

       if(this.ninjaTween2res == 1){
         this.ninjaTween2.targets.forEach(ninja => {
           ninja.anims.play("rightn", true)
         });
       }else{
         this.ninjaTween2.targets.forEach(ninja => {
           ninja.anims.play("leftn", true)
         });
       }

       if(this.ninjaTween3res == 1){
         this.ninjaTween3.targets.forEach(ninja => {
           ninja.anims.play("rightn", true)
         });
       }else{
         this.ninjaTween3.targets.forEach(ninja => {
           ninja.anims.play("leftn", true)
         });
       }

       if(this.ninjaTween4res == 1){
         this.ninjaTween4.targets.forEach(ninja => {
           ninja.anims.play("rightn", true)
         });
       }else{
         this.ninjaTween4.targets.forEach(ninja => {
           ninja.anims.play("leftn", true)
         });
       }

       if(this.ninjaTween5res == 1){
         this.ninjaTween5.targets.forEach(ninja => {
           ninja.anims.play("rightn", true)
         });
       }else{
         this.ninjaTween5.targets.forEach(ninja => {
           ninja.anims.play("leftn", true)
         });
       }

       if(this.ninjaTween6res == 1){
         this.ninjaTween6.targets.forEach(ninja => {
           ninja.anims.play("rightn", true)
         });
       }else{
         this.ninjaTween6.targets.forEach(ninja => {
           ninja.anims.play("leftn", true)
         });
       }
       if(this.ninjaTween7res == 1){
         this.ninjaTween7.targets.forEach(ninja => {
           ninja.anims.play("rightn", true)
         });
       }else{
         this.ninjaTween7.targets.forEach(ninja => {
           ninja.anims.play("leftn", true)
         });
       }

      if (this.cursors.left.isDown && this.gameOver === false && this.gameWin == false) {
        this.player.setVelocityX(-160);
        this.player.anims.play('left', true);
      } else if (this.cursors.right.isDown && this.gameOver === false && this.gameWin == false ) {
       this.player.setVelocityX(160);
       this.player.anims.play('right', true);
     } else {
       this.player.setVelocityX(0);
       if(this.gameOver === false){
         this.player.anims.play('waiting',true);
       }else{
         this.player.anims.play('die',true);
         this.cursors.left.enabled = false;
         this.cursors.right.enabled = false;
         this.cursors.up.enabled = false;
         this.player.setVelocityX(0)
         this.player.setVelocityY(0)
       }

     }

    if (this.cursors.up.isDown && this.player.body.touching.down && this.gameOver === false && this.gameWin == false) {
      this.player.setVelocityY(-330);
    }

    if(!this.player.body.touching.down){
      if(this.gameOver === false){
        this.player.anims.play('waiting',false);
        this.player.anims.play('jump',true);
      }else{
        this.player.anims.play('waiting',false);
        this.player.anims.play('jump',false);
        this.player.anims.play('die',true);
        this.cursors.left.enabled = false;
        this.cursors.right.enabled = false;
      }

    }

    if(this.gameWin == true){
      this.player.anims.play('win',true);
      this.cursors.left.enabled = false;
      this.cursors.right.enabled = false;
      this.cursors.up.enabled = false;


    }

  }

}
