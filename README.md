# Project-1

# About The Game:
This game was created with JS , HTML and CSS  using the library Phaser 3 to handle the physics required for the purpose of the game and also because it has a lot of features that improve the quality of the game. To add Phaser to this project I had to add the library downloaded from https://phaser.io/download to the directory node_modules that is in this project.


# General description of the Game :
The main purpose is to go up  using the platforms and the clouds to get a key an open a chest . While you are climbing you have to avoid the enemies and meteorites because if you collide with them you will lose. Also you have to collect the gems , every gem gives you 100 points. The meteorites appear every 9 seconds so you have to be fast or if you want a big score you have to avoid them.

#Phaser 3
In this section Im gonna try to describe how I use some phaser methods to make this game

|             Method             |               Purpose          |              Used for            |
| ------------------------------:|:------------------------------:|:--------------------------------:|
| load.image()                   | Loads an Image                 | Preload images to the scene      |
| cameras.main.setBounds()       | Set the bounds for the camera  | Camera limits                    |
| physics.add.group()            | Adds physics to a group        | Create groups with same physics  |
| tweens.add()                   | Creates a movement             | Move the Clouds                  |
| anims.create()                 | Creates a sequence for images  | Animate Player an enemies        |
| physics.add.collider()         | Creates a collision            | Collision between elements       |
| add.text()                     | Add text to the scene          | Adding text                      |
| Math.Between()                 | Generates a random value       | Generates position for meteorites|
| disableBody()                  | Erase the body of an object    | Player collect the gems          |
| scene.start()                  | Start a new scene              | Change scenes                    |


# How to play it:

Put your pointer in the Start icon
![Menu Game](https://github.com/mtom92/Project-1/blob/master/IMG/Menu.png)

The you can move the character to the left (left keyboard), to the right (right keyboard) or jump (up keyboard)
![Game Scene](https://github.com/mtom92/Project-1/blob/master/IMG/Game.png)

Every time that you collide with an enemy you will lose an so the next scene will appear
![Lose Scene](https://github.com/mtom92/Project-1/blob/master/IMG/Lose.png)

If you make it to the top and you got the key you will win an the next scene will show up
![Win Scene](https://github.com/mtom92/Project-1/blob/master/IMG/Win.png)

When you lose or win you will be able to play again or go to the menu.


# Conclusion
Using a library was not as easy as I thought it would be, but the Phaser lab was definitively a tool that help a lot. I have never use a library before and I think its a necessary experience before you start to work because a lot of companies have their own libraries and when you are already worked whit that Im pretty sure it wouldn't be a problem doing it in the future


## Technologies Used:
* HTML
* CSS
* JavaScript
* Phaser 3

## External sources:
* W3Schools
* StackOverflow
* Phaser Lab
