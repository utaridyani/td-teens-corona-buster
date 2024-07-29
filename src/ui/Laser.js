import Phaser from "phaser";
export default class Laser extends Phaser.Physics.Arcade.Sprite { //--> Kelas ini digunakan untuk membuat object dengan tipe sprite
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    this.setScale(2);
  }
  fire(x, y) {
    this.setPosition(x, y - 50); //---------> Nilai x dan y akan diatur ketika method ini dipanggil
    this.setActive(true);
    this.setVisible(true);
  }
  die() {            //--------> Terdapat 3 method yang dibuat dalam kelas ini. Lengkapi dengan lanjut ke tahap berikutnya!
    this.destroy()
  }

  update(time) {
    this.setVelocityY(-200);   //-----> Object bergerak naik 
    if (this.y < -10) {
    this.die();              //-----> Jika object melawati batas atas, maka akan menghilang
    }
  }
}

