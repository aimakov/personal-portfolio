export const particlesColor = [
  [233, 97, 0],
  [251, 241, 69],
  [192, 107, 252],
  [34, 136, 64],
  [253, 46, 27],
  [11, 95, 254],
];

export const stoneColors = {
  MindStone: [
    [253, 248, 1],
    [229, 129, 1],
    [233, 162, 14],
    [187, 121, 17],
    [74, 53, 10],
  ],
  SoulStone: [
    [227, 100, 31],
    [253, 203, 37],
    [150, 56, 6],
    [252, 138, 23],
    [119, 59, 16],
  ],
  TimeStone: [
    [41, 212, 157],
    [36, 173, 59],
    [27, 133, 63],
    [51, 245, 157],
    [2, 37, 22],
  ],
  PowerStone: [
    [175, 104, 252],
    [108, 42, 209],
    [61, 28, 100],
    [81, 31, 154],
    [250, 134, 255],
  ],
  RealityStone: [
    [252, 47, 24],
    [189, 79, 89],
    [253, 46, 44],
    [210, 36, 16],
    [64, 19, 29],
  ],
  SpaceStone: [
    [7, 119, 252],
    [3, 31, 107],
    [13, 109, 253],
    [4, 63, 160],
    [85, 231, 249],
  ],
};

export const islandsNumber = 6;
export const cellSize = 15;
export const curve = 0.2;
export const zoom = 0.1;
export const divider = 200;
export const debug = false;
export const islandsAngle = (2 * Math.PI) / islandsNumber;

export const canvasWidth = (width: number) => width;
export const canvasHeight = (height: number) => height;
export const numberOfParticles = (width: number) => Math.min(3000, width * 4);

export const centerRadius = (width: number) => Math.min(Math.max(80, width * 0.1), 100);
export const islandRadius = (width: number, height: number) => Math.min(Math.max(width * 0.04, 30), 45);

export const islandPositionRadius = (width: number, height: number, islandRadius: number) => Math.min(width * 0.4 - islandRadius, height * 0.4 - islandRadius);

export const fontSize = (width: number) => Math.min(15, 0.01 * width);
