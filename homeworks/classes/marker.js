class Marker {
  inkAmount = 100;

  constructor(color = 'black') {
    this.color = color;
  }

  write(someText = '') {
    this.inkAmount -= someText.split(' ').join('').length;

    if (this.inkAmount < 0) {
      console.log(
        `%cSorry, you can't write anymore! The marker is empty!`,
        'color: red'
      );
      console.log(
        `%c${someText.slice(0, this.inkAmount)}`,
        `color: ${this.color}`
      );
      this.inkAmount = 0;
      return;
    }

    console.log(`%cInk status: ${this.inkAmount}%`, 'color: yellow');
    console.log(`%c${someText}`, `color: ${this.color}`);
  }
}

export default Marker;
