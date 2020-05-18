import React, { useState, useCallback } from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

import { CarouselWrapper } from "../carousel/carousel";
import { StyledButton } from "../levels.styled";
import { QuizLevel3 } from "../../../quiz/level3";

import { Document } from "./document";
import {
  StyledLevel3,
  StyledComputer,
  StyledGround,
  StyledComputerScreen,
  RoundButton
} from "./level3.styled";
import { instructions, acceptedInstructions } from "./level3.instructions";

export const Level3 = ({
  levelAccepted,
  onLevelAccepted,
  goOutside,
  currentLevel
}) => {
  const { width, height } = useWindowSize();
  const [confetti, setConfetti] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [computerOn, setComputerOn] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isCookingDone, setCookingDone] = useState(false);
  const [isStylingDone, setStylingDone] = useState(false);
  const [isWashingDone, setWashingDone] = useState(false);
  const [isProgrammingDone, setProgrammingDone] = useState(false);

  const onDocumentAccepted = useCallback(() => {
    setAccepted(true);
    setConfetti(120);

    setTimeout(() => setConfetti(0), 10000);

    !levelAccepted && accepted && onLevelAccepted(3);
  }, [accepted, onLevelAccepted, levelAccepted]);

  return (
    <StyledLevel3 isDisplayed={currentLevel === 3}>
      {!computerOn && (
        <StyledButton
          left="calc(50% - 420px)"
          top="20px"
          backgroundColor="#05809b"
          onClick={e => {
            e.stopPropagation();
            goOutside(3);
          }}
        >
          Back
        </StyledButton>
      )}

      {currentLevel === 3 && (
        <CarouselWrapper
          slides={accepted? acceptedInstructions : instructions}
          position={{ top: "20px", left: "50%" }}
          width="680px"
          centered
        />
      )}

      <Confetti
        numberOfPieces={confetti}
        onConfettiComplete={() => {}}
        width={width}
        height={height - 30}
      />

      <StyledGround />

      <button className="open" onClick={() => setComputerOn(true)}>
        CLICK
      </button>

      {computerOn && (
        <StyledComputer>
          <StyledComputerScreen>
            <QuizLevel3
              setName={setName}
              setPhone={setPhone}
              setWashingDone={setWashingDone}
              setStylingDone={setStylingDone}
              setCookingDone={setCookingDone}
              setProgrammingDone={setProgrammingDone}
            />

            <Document
              name={name}
              phone={phone}
              cooking={isCookingDone}
              styling={isStylingDone}
              programming={isProgrammingDone}
              washing={isWashingDone}
              onDocumentAccepted={onDocumentAccepted}
            />
          </StyledComputerScreen>

          <RoundButton
            left="calc(50% - 380px)"
            top="20px"
            backgroundColor="#05809b"
            onClick={() => setComputerOn(false)}
          >
            &#10006;
          </RoundButton>
        </StyledComputer>
      )}
    </StyledLevel3>
  );
};
