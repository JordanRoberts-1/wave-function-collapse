const COLOR_MAP = {
  white: "#FFFFFF",
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF",
};

const TILE_SIZE = 9;

class TileData {
  constructor() {
    this.data = {};
    this.data.colors = Array(TILE_SIZE).fill("white");
  }

  updateData(newData) {
    this.data = newData;
  }

  updateColors(newColors) {
    this.data.colors = newColors;
  }

  getColors() {
    return this.data.colors;
  }
}

export default COLOR_MAP;
export { TILE_SIZE, TileData };
