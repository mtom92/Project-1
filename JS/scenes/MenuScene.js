class MenuScene extends Phaser.Scene{

  constructor(){
    super({key :"MenuScene"});
  }


  preload(){

    this.load.image('cover', 'http://localhost:3000/IMG/startimg.gif');
    this.load.image('start', 'http://localhost:3000/IMG/playicon.png');
    this.load.setBaseURL('http://labs.phaser.io');

        this.load.image('sky', 'assets/skies/nebula.jpg');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('red', 'assets/particles/red.png');
  }
  create(){
    this.add.image(300,200, 'start');
    this.add.image(400, 300, 'cover');

        var particles = this.add.particles('red');

        var emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        var logo = this.physics.add.image(400, 100, 'logo');

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        emitter.startFollow(logo);
  }
  update(){}

}
