/** @jsx figma.widget.h */

import { useBoard } from "../hooks/useBoard";
import { Board } from "./Board";
import { PlayerBoard } from "./PlayerBoard";

const { widget } = figma;
const { AutoLayout, Text } = widget;

export const GameScreen = () => {
  const {
    blackResultText,
    whiteResultText,
    isBlackTurn,
    isGameOver,
    handleReset,
  } = useBoard();

  const continueButtonHeight = 48;

  return (
    <AutoLayout
      direction="horizontal"
      horizontalAlignItems="center"
      verticalAlignItems="center"
      spacing={32}
    >
      <PlayerBoard
        resultText={blackResultText}
        playerName="Player1"
        isBlack={true}
        isCurrentTurn={isBlackTurn}
      />
      <AutoLayout
        direction="vertical"
        horizontalAlignItems="center"
        verticalAlignItems="center"
        spacing={16}
      >
        {isGameOver ? (
          <AutoLayout
            onClick={handleReset}
            horizontalAlignItems="center"
            verticalAlignItems="center"
            fill={"#A052FE"}
            cornerRadius={8}
            padding={16}
            height={continueButtonHeight}
          >
            <Text fill={"#FFFFFF"}>Continue</Text>
          </AutoLayout>
        ) : (
          <AutoLayout height={continueButtonHeight} />
        )}
        <Board />
      </AutoLayout>
      <PlayerBoard
        resultText={whiteResultText}
        playerName="Player2"
        isBlack={false}
        isCurrentTurn={!isBlackTurn}
      />
    </AutoLayout>
  );
};
