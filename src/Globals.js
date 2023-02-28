const COLOR_MAP = {
  white: "#FFFFFF",
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF",
};

const TILE_SIZE = 3;

class TileData {
  constructor(index) {
    this.data = {};
    this.data.constraints = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    };
    this.data.colors = Array(TILE_SIZE * TILE_SIZE).fill("white");
    this.data.tileIndex = index;
  }

  updateData(newData) {
    this.data = newData;
  }

  updateColors(newColors) {
    this.data.colors = newColors;
  }

  updateConstraint(constraintKey, newValue) {
    this.data.constraints[constraintKey] = newValue;
  }

  getColors() {
    return this.data.colors;
  }

  getConstraint(key) {
    return this.data.constraints[key];
  }

  getTileIndex() {
    return this.data.tileIndex;
  }
}

export default COLOR_MAP;
export { TILE_SIZE, TileData };
