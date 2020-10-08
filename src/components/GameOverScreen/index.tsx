import React from "react";
import { Heading } from "../Heading";
import { Image, ImageSizeType } from "../Image";
import { MenuScreen } from "../MenuScreen";
import skullPng from "../../images/skull.png";
import { Button } from "../Button";

interface PropsType {
  onRestartButtonClick: () => void;
}

export const GameOverScreen = ({ onRestartButtonClick }: PropsType) => (
  <MenuScreen>
    <Heading>Game Over</Heading>
    <Image src={skullPng} alt="skull" size={ImageSizeType.Large} />
    <Button onClick={onRestartButtonClick}>Restart</Button>
  </MenuScreen>
);
