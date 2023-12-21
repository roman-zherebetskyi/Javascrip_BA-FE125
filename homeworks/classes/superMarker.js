import Marker from "./marker.js";

class SuperMarker extends Marker {
  changeColor(value) {
    return (this.color = value);
  }

  fill() {
    this.inkAmount = 100;
  }
}

export default SuperMarker;