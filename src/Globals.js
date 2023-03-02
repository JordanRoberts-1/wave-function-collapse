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

const indexFromPos = (x, y) => {
  return y * TILE_SIZE + x;
};

const compareEdge = (edge1, edge2) => {
  const edge2Reversed = [...edge2].reverse();
  for (let i = 0; i < edge1.length; i++) {
    if (edge1[i] != edge2Reversed[i]) {
      return false;
    }
  }
  return true;
};

class TileData {
  constructor(index) {
    this.data = {};
    this.data.edges = {
      top: Array(TILE_SIZE).fill("white"),
      right: Array(TILE_SIZE).fill("white"),
      bottom: Array(TILE_SIZE).fill("white"),
      left: Array(TILE_SIZE).fill("white"),
    };
    this.data.colors = Array(TILE_SIZE * TILE_SIZE).fill("white");
    this.data.tileIndex = index;
  }

  updateData(newData) {
    this.data = newData;
  }

  updateColors(newColors) {
    this.data.colors = newColors;

    let x = 0;
    let y = 0;
    this.data.edges = { top: [], right: [], bottom: [], left: [] };
    for (x = 0; x < TILE_SIZE; x++) {
      this.data.edges.top.push(newColors[indexFromPos(x, y)]);
    }

    x = TILE_SIZE - 1;
    for (y = 0; y < TILE_SIZE; y++) {
      this.data.edges.right.push(newColors[indexFromPos(x, y)]);
    }

    y = TILE_SIZE - 1;
    for (x = TILE_SIZE - 1; x >= 0; x--) {
      this.data.edges.bottom.push(newColors[indexFromPos(x, y)]);
    }

    x = 0;
    for (y = TILE_SIZE - 1; y >= 0; y--) {
      this.data.edges.left.push(newColors[indexFromPos(x, y)]);
    }
  }

  updateEdge(constraintKey, newValue) {
    this.data.edges[constraintKey] = parseInt(newValue);
  }

  getColors() {
    return this.data.colors;
  }

  getEdge(key) {
    return this.data.edges[key];
  }

  getEdges() {
    return this.data.edges;
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

  isOption(index) {
    return this.data.totalOptions.has(index);
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

  isCollapsed() {
    return this.data.collapsed;
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
      const edges = tiles[option].getEdges();
      let dirsMatch = true;
      for (const [direction, neighborGridData] of Object.entries(
        neighborsObject
      )) {
        const currEdge = edges[direction];
        const neighborOppDirection = NEIGHBOR_KEY_MAP[direction];
        let currDirMatch = false;
        for (const neighborOption of neighborGridData.getOptions()) {
          const neighborEdge =
            tiles[neighborOption].getEdge(neighborOppDirection);
          if (compareEdge(currEdge, neighborEdge)) {
            currDirMatch = true;
          }
        }
        if (currDirMatch == false) {
          dirsMatch = false;
        }
      }

      if (dirsMatch == false) {
        this.data.totalOptions.delete(option);
        changedFlag = true;
      }
    }
    return changedFlag;
  }
}

export default COLOR_MAP;
export { TILE_SIZE, TileData, GRID_WIDTH, GRID_HEIGHT, GridData };
