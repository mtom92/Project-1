class LoseScene extends Phaser.Scene{

  constructor(){
    super({key :"LoseScene"});
  }

  //this function is getting data from the gamescene
  init(data)
   {
       this.score = data.score;
   }

  preload(){
   //preñoading all the assets
    this.load.image('cover', 'IMG/spaceback2.jpg');
    this.load.spritesheet('dude','IMG/sprite.png',
        {frameWidth: 47,frameHeight: 55});
    this.load.image('start', 'IMG/playicon.png');
    this.load.image('home', 'IMG/home.png');
    this.load.image('try', 'IMG/try.gif');
    this.load.audio('lose','AUDIO/lose.mp3');

  }
  create(){
    //setting a variable to play a sound
    /* var music = this.sound.add('lose');
      music.play();
      music.setLoop(true);*/
    //creating all the assets previously preloaded
     this.add.image(700, 400, 'cover');
     this.add.image(250, 235, 'try');
     this.add.text(300, 20, 'You Lose!!', { fontSize: '50px', fill: '#F70' });
     this.add.text(120, 490, 'Play Again', { fontSize: '20px', fill: '#F70' });
     this.add.text(555, 490, 'Home', { fontSize: '20px', fill: '#F70' });
     // creating a variable to save the score
     var scoreText;
     scoreText = this.add.text(500, 200, 'Score: 0', { fontSize: '40px', fill: '#F7A' });
     scoreText.setText('Score: ' + this.score);
     //variable to play again
       var startButton = this.add.image(180,450, 'start');;
       startButton.setInteractive();
       startButton.on('pointerover', () => {
        /* music.setLoop(false);
         this.scene.stop();
         music.stop();*/
         this.scene.start("GameScene");
       });
    //variable to return to menue
       var home = this.add.image(580,435, 'home');
       home.setInteractive();
       home.on('pointerover', () => {
      /* music.setLoop(false);
       this.scene.stop();
       music.stop();*/
      this.scene.start("MenuScene");
    });
}
  update(){}

}
