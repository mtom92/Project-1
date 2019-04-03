class MenuScene extends Phaser.Scene{

  constructor(){
    super({key :"MenuScene"});
  }


  preload(){

    this.load.image('cover', 'http://localhost:3000/IMG/spaceback.png');
    this.load.image('logo', 'http://localhost:3000/IMG/name.png');
    this.load.image('start', 'http://localhost:3000/IMG/playicon.png');
    this.load.image('blue', 'http://localhost:3000/IMG/blue.png');
    this.load.image('block', 'http://localhost:3000/IMG/block1.png');

  }
  create(){

    this.add.image(400, 300, 'cover');


        var particles = this.add.particles('blue');

        var emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });
        var block = this.physics.add.image(400, 380, 'block');
        block.body.setAllowGravity(0);
        block.body.setAllowGravity(0);
        block.body.setImmovable(true);
        var logo = this.physics.add.image(200, 100, 'logo');

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        emitter.startFollow(logo);

        this.physics.add.collider(block,logo);

       var startButton = this.add.image(180,450, 'start');;
       startButton.setInteractive();
       startButton.on('pointerover', () => { this.scene.start("GameScene") });


  }
  update(){}

}
