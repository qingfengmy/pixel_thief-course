import { useEffect } from "react";

interface PropsType {
    handleArrowUp: () => void;
    handleArrowDown: () => void;
    handleArrowLeft: () => void;
    handleArrowRight: () => void;
}

export const usePlayerControls = ({
    handleArrowDown,
    handleArrowUp,
    handleArrowLeft,
    handleArrowRight,
}: PropsType) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.code) {
                case "ArrowDown":
                    handleArrowDown();
                    break;

                case "ArrowUp":
                    handleArrowUp();
                    break;

                case "ArrowLeft":
                    handleArrowLeft();
                    break;

                case "ArrowRight":
                    handleArrowRight();
                    break;
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleArrowDown, handleArrowUp, handleArrowLeft, handleArrowRight]);
};
