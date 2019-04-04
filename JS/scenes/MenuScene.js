class MenuScene extends Phaser.Scene{

  constructor(){
    super({key :"MenuScene"});
  }


  preload(){

    this.load.image('cover', '../IMG/spaceback.png');
    this.load.image('logo', '../IMG/name.png');
    this.load.image('start', '../IMG/playicon.png');
    this.load.image('blue', '../IMG/blue.png');
    this.load.image('block', '../IMG/block1.png');
    this.load.audio('soundThem','../AUDIO/Game-Menu.mp3');

  }
  create(){
    var music = this.sound.add('soundThem');
     music.play();
     music.setLoop(true);

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
       startButton.on('pointerover', () => {
         music.setLoop(false);
         music.stop();
         this.scene.start("GameScene"); });
       this.add.text(145, 490, 'Start', { fontSize: '25px', fill: '#F70' });


  }
  update(){}

}
