import React from "react";
import { Heading } from "../Heading";
import { Image, ImageSizeType } from "../Image";
import { MenuScreen } from "../MenuScreen";
import thiefGif from "../../images/thief.gif";
import { Button } from "../Button";

interface PropsType {
    onStartButtonClick: () => void;
}

export const HomeScreen = ({ onStartButtonClick }: PropsType) => (
    <MenuScreen>
        <Heading>Pixel Thief</Heading>
        <Image src={thiefGif} alt="Thief" size={ImageSizeType.Large} />
        <Button onClick={onStartButtonClick}>Start Game</Button>
    </MenuScreen>
);
