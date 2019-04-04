class LoseScene extends Phaser.Scene{

  constructor(){
    super({key :"LoseScene"});
  }


  init(data)
   {
       this.score = data.score;
   }

  preload(){

    this.load.image('cover', 'http://localhost:3000/IMG/spaceback2.jpg');
    this.load.spritesheet('dude','http://localhost:3000/IMG/sprite.png',
        {frameWidth: 47,frameHeight: 55});
    this.load.image('start', 'http://localhost:3000/IMG/playicon.png');
    this.load.image('home', 'http://localhost:3000/IMG/home.png');
    this.load.image('try', 'http://localhost:3000/IMG/try.gif');

  }
  create(){


     this.add.image(700, 400, 'cover');
     this.add.image(250, 235, 'try');
     this.add.text(300, 20, 'You Lose!!', { fontSize: '50px', fill: '#F70' });
     this.add.text(120, 490, 'Play Again', { fontSize: '20px', fill: '#F70' });
     this.add.text(555, 490, 'Home', { fontSize: '20px', fill: '#F70' });
       var startButton = this.add.image(180,450, 'start');;
       startButton.setInteractive();
       startButton.on('pointerover', () => { this.scene.start("GameScene") });
       var home = this.add.image(580,435, 'home');;
       home.setInteractive();
       home.on('pointerover', () => { this.scene.start("MenuScene") });
       var scoreText;
       scoreText = this.add.text(500, 200, 'Score: 0', { fontSize: '40px', fill: '#F7A' });
       scoreText.setText('Score: ' + this.score);


  }
  update(){}

}