const COLOR_MAP = {
  white: "#FFFFFF",
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF",
};

const TILE_SIZE = 3;
const GRID_WIDTH = 16;
const GRID_HEIGHT = 16;

//Maps from a given direction to it's opposite direction
const NEIGHBOR_KEY_MAP = {
  top: "bottom",
  bottom: "top",
  right: "left",
  left: "right",
};

class TileData {
  constructor(index) {
    this.data = {};
    this.data.constraints = {
      top: 1,
      right: 1,
      bottom: 1,
      left: 1,
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
    this.data.constraints[constraintKey] = parseInt(newValue);
  }

  getColors() {
    return this.data.colors;
  }

  getConstraint(key) {
    return this.data.constraints[key];
  }

  getConstraints() {
    return this.data.constraints;
  }

  getTileIndex() {
    return this.data.tileIndex;
  }
}

class GridData {
  constructor(posIndex, numTiles) {
    this.data = {};
    this.data.posIndex = posIndex;
    this.data.totalOptions = new Set(Array(numTiles).keys());
    this.data.totalOptions.delete(0);
    this.data.tileChoice = 0;
    this.data.collapsed = false;
  }

  getOptions() {
    return this.data.totalOptions;
  }

  getPos() {
    return [
      this.data.posIndex % GRID_WIDTH,
      Math.floor(this.data.posIndex / GRID_WIDTH),
    ];
  }

  getIndex() {
    return this.data.posIndex;
  }

  getEntropy() {
    return this.data.totalOptions.size;
  }

  getChoice() {
    return this.data.tileChoice;
  }

  collapse() {
    if (this.getEntropy() === 0) {
      return false;
    }
    let optionsArray = Array.from(this.data.totalOptions);
    this.setChoice(
      optionsArray[Math.floor(Math.random() * optionsArray.length)]
    );
    return true;
  }

  setChoice(tileIndex) {
    this.data.tileChoice = tileIndex;
    this.data.totalOptions.clear();
    this.data.totalOptions.add(tileIndex);
    this.data.collapsed = true;
  }

  updateOptions(neighborsObject, tiles) {
    let changedFlag = false;
    for (const option of this.data.totalOptions) {
      const optionConstraints = tiles[option].getConstraints();
      let dirsMatch = true;
      for (const [direction, neighborGridData] of Object.entries(
        neighborsObject
      )) {
        const currConstraint = optionConstraints[direction];
        const neighborOppDirection = NEIGHBOR_KEY_MAP[direction];
        let currDirMatch = false;
        for (const neighborOption of neighborGridData.getOptions()) {
          const neighborConstraint =
            tiles[neighborOption].getConstraint(neighborOppDirection);
          if (currConstraint === neighborConstraint) {
            currDirMatch = true;
          }
        }
        if (currDirMatch === false) {
          dirsMatch = false;
        }
      }

      if (dirsMatch !== true) {
        this.data.totalOptions.delete(option);
        changedFlag = true;
      }
    }
    return changedFlag;
  }
}

export default COLOR_MAP;
export { TILE_SIZE, TileData, GRID_WIDTH, GRID_HEIGHT, GridData };
