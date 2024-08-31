/** @jsx figma.widget.h */

import { TileStatus, TileStatusType } from "../constants/reversiConstants";
import { Stone } from "./Stone";

const { widget } = figma;
const { AutoLayout } = widget;

const Tile = ({
  status,
  rowIndex,
  colIndex,
  isGameOver,
  onClick,
}: {
  status: TileStatusType;
  rowIndex: number;
  colIndex: number;
  isGameOver: boolean;
  onClick: (rowIndex: number, colIndex: number) => void;
}) => {
  const handleClick = () => onClick(rowIndex, colIndex);

  const renderTile = (status: TileStatusType) => {
    switch (status) {
      case TileStatus.Empty:
        return null;
      case TileStatus.Black:
        return <Stone isBlack={true} />;
      case TileStatus.White:
        return <Stone isBlack={false} />;
    }
  };

  return (
    <AutoLayout
      direction="vertical"
      horizontalAlignItems="center"
      verticalAlignItems="center"
      width={40}
      height={40}
      onClick={handleClick}
      fill={{
        type: "solid",
        color: { r: 0.176, g: 0.6, b: 0.349, a: 1 },
      }}
      hoverStyle={{
        fill: isGameOver ? undefined : { r: 0.196, g: 0.65, b: 0.38, a: 1 },
      }}
    >
      {renderTile(status)}
    </AutoLayout>
  );
};

export default Tile;
