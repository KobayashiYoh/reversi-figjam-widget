/** @jsx figma.widget.h */

import { BOARD_SIZE } from "../constants/reversiConstants";
import { useBoard } from "../hooks/useBoard";

import Tile from "./Tile";

const { widget } = figma;
const { AutoLayout } = widget;

export const Board = () => {
  const { board, isBlackTurn, isGameOver, handleTileClick } = useBoard();

  const tileSize = 36;
  const boardSize = BOARD_SIZE * tileSize;

  const rows = [];
  for (let row = 0; row < BOARD_SIZE; row++) {
    const rowTiles = [];
    for (let col = 0; col < BOARD_SIZE; col++) {
      const key = `${row}-${col}`;
      rowTiles.push(
        <Tile
          key={key}
          status={board[row][col]}
          rowIndex={row}
          colIndex={col}
          isGameOver={isGameOver}
          onClick={handleTileClick}
        />
      );
    }
    rows.push(
      <AutoLayout
        key={row}
        direction="horizontal"
        horizontalAlignItems="center"
        verticalAlignItems="center"
        spacing={1}
        padding={1}
        width={boardSize}
        height={tileSize}
      >
        {rowTiles}
      </AutoLayout>
    );
  }

  return (
    <AutoLayout
      direction="vertical"
      horizontalAlignItems="center"
      verticalAlignItems="center"
      spacing={1}
      padding={4}
      fill="#000000"
    >
      {rows}
    </AutoLayout>
  );
};
