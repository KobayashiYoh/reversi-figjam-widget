const { widget } = figma;
const { useSyncedState } = widget;

import {
  initialReversiBoard,
  judgeGameResult,
  findFlippableTilesInAllDirection,
  isPass,
} from "../utils/reversiLogics";
import {
  drawText,
  GameResult,
  GameResultType,
  loserText,
  TileStatus,
  TileStatusType,
  winnerText,
} from "../constants/reversiConstants";

export const useBoard = () => {
  const [board, setBoard] = useSyncedState<TileStatusType[][]>(
    "board",
    initialReversiBoard
  );
  const [isBlackTurn, setBlackTurn] = useSyncedState("isBlackTurn", true);
  const [isGameOver, setGameOver] = useSyncedState("isGameOver", false);
  const [blackResultText, setBlackResultText] = useSyncedState(
    "blackResultText",
    ""
  );
  const [whiteResultText, setWhiteResultText] = useSyncedState(
    "whiteResultText",
    ""
  );

  const currentTurnTile: TileStatusType = isBlackTurn
    ? TileStatus.Black
    : TileStatus.White;
  const nextTurnTile: TileStatusType = !isBlackTurn
    ? TileStatus.Black
    : TileStatus.White;

  const handleReset = () => {
    setBoard(initialReversiBoard);
    setBlackTurn(true);
    setGameOver(false);
    setBlackResultText("");
    setWhiteResultText("");
  };

  const handleTileClick = (row: number, col: number) => {
    if (isGameOver) return;

    const selectedTile: TileStatusType = board[row][col];
    if (selectedTile !== TileStatus.Empty) return;

    const flippableTiles = findFlippableTilesInAllDirection(
      board,
      row,
      col,
      currentTurnTile
    );
    if (flippableTiles.length === 0) return;

    const newBoard: TileStatusType[][] = board.map((r) => r.slice());
    newBoard[row][col] = currentTurnTile;
    flippableTiles.forEach(([x, y]) => {
      newBoard[x][y] = currentTurnTile;
    });
    setBoard(newBoard);

    const nextPlayerMustPass = isPass(newBoard, nextTurnTile);
    const currentPlayerMustPass = isPass(newBoard, currentTurnTile);
    const bothPlayersMustPass = nextPlayerMustPass && currentPlayerMustPass;
    if (bothPlayersMustPass) {
      setGameOver(true);
      const result: GameResultType = judgeGameResult(board);
      if (result === GameResult.Draw) {
        setBlackResultText(drawText);
        setWhiteResultText(drawText);
      } else if (result === GameResult.BlackWin) {
        setBlackResultText(winnerText);
        setWhiteResultText(loserText);
      } else {
        setBlackResultText(loserText);
        setWhiteResultText(winnerText);
      }
    } else if (nextPlayerMustPass) {
      setBlackTurn(isBlackTurn); // continue current turn
    } else {
      setBlackTurn(!isBlackTurn); // switch player
    }
  };

  return {
    board,
    isBlackTurn,
    isGameOver,
    blackResultText,
    whiteResultText,
    handleTileClick,
    handleReset,
  };
};
