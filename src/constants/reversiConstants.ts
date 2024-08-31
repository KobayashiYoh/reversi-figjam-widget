export const BOARD_SIZE = 8;

export const TileStatus = {
  Empty: "Empty",
  Black: "Black",
  White: "White",
} as const;

export type TileStatusType = keyof typeof TileStatus;

export const directions = [
  [-1, 0], // Up
  [1, 0], // Down
  [0, -1], // Left
  [0, 1], // Right
  [-1, -1], // Upper-left
  [-1, 1], // Upper-right
  [1, -1], // Lower-left
  [1, 1], // Lower-right
];
