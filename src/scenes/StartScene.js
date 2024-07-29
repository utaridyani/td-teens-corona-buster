import Phaser from "phaser";

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super("start-scene");
  }

  init(data) {
    this.startButton = undefined;
    this.startLabel = undefined;
  }

  preload() {
    this.load.image("background", "images/bg_layer1.png");
    this.load.image("start-button", "images/start.png");
  }

  create() {
    this.add.image(200, 320, "background");
    this.add.text(100, 100, "START", {
      fontSize: "60px",
      fontStyle: "bold",
      color: "black",
    });
    // using button
    // this.startButton = this.add.image(200, 400, 'start-button')
    //   .setInteractive().setScale(0.5);

    // using text
    this.startButton = this.add.text(100, 400, "Click Here", {
      fontSize: "30px",
      fontStyle: "bold",
      color: "black",
    }).setInteractive();
    
    this.startButton.once(
        "pointerup",
        () => {
          this.scene.start("corona-buster-scene");
        },
        this
      );
  }
}