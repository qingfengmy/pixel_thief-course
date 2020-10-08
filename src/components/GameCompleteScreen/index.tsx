import React from "react";
import { Heading } from "../Heading";
import { Image, ImageSizeType } from "../Image";
import { MenuScreen } from "../MenuScreen";
import treasurePng from "../../images/treasure.png";
import { Button } from "../Button";

interface PropsType {
  onGoHomeButtonClick: () => void;
}

export const GameCompleteScreen = ({ onGoHomeButtonClick }: PropsType) => (
  <MenuScreen>
    <Heading>Quest Complete!</Heading>
    <Image src={treasurePng} alt="treasure chest" size={ImageSizeType.Large} />
    <Button onClick={onGoHomeButtonClick}>Go Home</Button>
  </MenuScreen>
);
