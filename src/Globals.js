const COLOR_MAP = {
  white: "#FFFFFF",
  salmon: "#ff9393",
  red: "#FF0000",
  darkred: "#730000",
  pink: "#ff00bb",
  purple: "#a900ff",
  darkblue: "#0b0082",
  blue: "#1600ff",
  teal: "#00f5ff",
  lightgreen: "#00FF00",
  green: "#00771c",
  yellow: "#faff09",
  orange: "#ff9300",
  black: "#000000",
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

  getEdgesRotated(rotateIndex) {
    const edges = this.getEdges();
    let result = { ...edges };

    const keys = Object.keys(edges);
    for (const keyIndex in keys) {
      const currentKey = parseInt(keyIndex);
      result[keys[(currentKey + rotateIndex) % 4]] = edges[keys[currentKey]];
    }
    return result;
  }

  getEdgeRotated(key, rotateIndex) {
    let edgesRotated = this.getEdgesRotated(rotateIndex);
    return edgesRotated[key];
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
    this.data.totalOptions = {};
    for (let i = 1; i < numTiles; i++) {
      this.data.totalOptions[i] = new Set([0, 1, 2, 3]);
    }
    this.data.tileChoice = 0;
    this.data.tileRotationChoice = 0;
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
    return Object.keys(this.data.totalOptions).length;
  }

  getChoice() {
    return [this.data.tileChoice, this.data.tileRotationChoice];
  }

  isOption(index, rotateAmount) {
    const options = this.getOptions();
    const result =
      Object.hasOwn(options, index) && options[index].has(rotateAmount);
    return result;
  }

  removeOption(option, rotateAmount) {
    this.data.totalOptions[option].delete(rotateAmount);
    if (this.data.totalOptions[option].size === 0) {
      delete this.data.totalOptions[option];
    }
  }

  collapse() {
    if (this.getEntropy() === 0) {
      return false;
    }
    const optionsArray = Object.keys(this.data.totalOptions);
    let option = optionsArray[Math.floor(Math.random() * optionsArray.length)];
    let rotatedOptionsArray = Array.from(this.data.totalOptions[option]);
    let rotationAmount =
      rotatedOptionsArray[
        Math.floor(Math.random() * rotatedOptionsArray.length)
      ];

    this.setChoice(option, rotationAmount);
    return true;
  }

  setChoice(tileIndex, rotateAmount) {
    this.data.tileChoice = tileIndex;
    this.data.tileRotationChoice = rotateAmount;
    this.data.totalOptions = {};
    this.data.totalOptions[tileIndex] = new Set([rotateAmount]);
    this.data.collapsed = true;
  }

  isCollapsed() {
    return this.data.collapsed;
  }

  updateOptions(neighborsObject, tiles) {
    let changedFlag = false;
    for (const [optionIndex, option] of Object.entries(
      this.data.totalOptions
    )) {
      for (const rotateAmount of option) {
        const edges = tiles[optionIndex].getEdgesRotated(rotateAmount);
        const dirsMatch = checkNeighbors(neighborsObject, edges, tiles);

        if (dirsMatch == false) {
          this.removeOption(optionIndex, rotateAmount);
          changedFlag = true;
        }
      }
    }
    return changedFlag;
  }
}

const compareEdge = (edge1, edge2) => {
  const edge2Reversed = [...edge2].reverse();
  for (let i = 0; i < edge1.length; i++) {
    if (edge1[i] != edge2Reversed[i]) {
      return false;
    }
  }
  return true;
};

const checkNeighbors = (neighborsObject, edges, tiles) => {
  let dirsMatch = true;
  for (const [direction, neighborGridData] of Object.entries(neighborsObject)) {
    const currEdge = edges[direction];
    const neighborOppDirection = NEIGHBOR_KEY_MAP[direction];
    let currDirMatch = false;
    for (const [neighborOptionIndex, neighborOption] of Object.entries(
      neighborGridData.getOptions()
    )) {
      for (const neighborRotateAmount of neighborOption) {
        const neighborEdges =
          tiles[neighborOptionIndex].getEdgesRotated(neighborRotateAmount);
        const neighborEdge = neighborEdges[neighborOppDirection];
        const edgesMatch = compareEdge(currEdge, neighborEdge);
        if (edgesMatch) {
          currDirMatch = true;
        }
      }
    }
    if (currDirMatch == false) {
      dirsMatch = false;
    }
  }
  return dirsMatch;
};

export default COLOR_MAP;
export { TILE_SIZE, TileData, GRID_WIDTH, GRID_HEIGHT, GridData };
