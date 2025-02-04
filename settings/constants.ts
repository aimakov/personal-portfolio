export const particlesColor = [
  [233, 97, 0],

  [192, 107, 252],
  [253, 46, 27],
  [251, 241, 69],
  [11, 95, 254],
  [34, 136, 64],
];

export const islandsNumber = 6;
export const cellSize = 15;
export const curve = 0.2;
export const zoom = 0.1;
export const divider = 200;
export const debug = false;
export const islandsAngle = (2 * Math.PI) / islandsNumber;

export const canvasWidth = (width: number) => width;
export const canvasHeight = (height: number) => height * 0.9;
export const numberOfParticles = (width: number) => Math.min(3000, width * 4);

export const centerRadius = (width: number) => Math.min(Math.max(80, width * 0.1), 100);
export const islandRadius = (width: number, height: number) => Math.min(Math.max(width * 0.04, 30), 60);

export const islandPositionRadius = (width: number, height: number, islandRadius: number) =>
  Math.min(width * 0.45 - islandRadius, height * 0.45 - islandRadius);

export const fontSize = (width: number) => Math.min(15, 0.01 * width);
