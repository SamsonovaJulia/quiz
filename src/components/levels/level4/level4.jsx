import React, { useState, useRef } from "react";
import Confetti from "react-confetti";

import { CarouselWrapper } from "../carousel/carousel";
import { StyledButton, StyledButtons } from "../levels.styled";
import {
  StyledLevel4,
  StyledGround,
  StyledCarpet,
  StyledWinner
} from "./level4.styled";

import {
  instructions,
  deployInstructions,
  winInstructions
} from "./level4.instructions";

export const Level4 = ({ onLevelAccepted, currentLevel, goOutside }) => {
  const levelRef = useRef();
  const [accepted, setAccepted] = useState(false);
  const [confetti, setConfetti] = useState(0);

  const isDeployed = window.origin.endsWith("now.sh");

  const checkDeploy = () => {
    if (isDeployed) {
      setAccepted(true);
      setConfetti(500);
      setTimeout(() => setConfetti(0), 10000);
      onLevelAccepted(4);
    }
  };

  return (
    <StyledLevel4 isDisplayed={currentLevel === 4} ref={levelRef}>
      <Confetti
        numberOfPieces={confetti}
        onConfettiComplete={() => {}}
        width={levelRef.current && levelRef.current.scrollWidth}
        height={
          levelRef.current &&
          parseInt(levelRef.current.scrollHeight, 10) - 5 + "px"
        }
      />
      <StyledButtons height={accepted ? "80px" : "130px"}>
        <StyledButton
          left="calc(50% - 280px)"
          top="20px"
          backgroundColor="#446bc4"
          onClick={e => {
            e.stopPropagation();
            goOutside(4);
          }}
        >
          Back
        </StyledButton>

        {!accepted && (
          <StyledButton
            backgroundColor="#f04e31"
            left="calc(50% - 335px)"
            top="70px"
            onClick={() => checkDeploy()}
          >
            Deployed!
          </StyledButton>
        )}
      </StyledButtons>

      {currentLevel === 4 && (
        <CarouselWrapper
          slides={
            accepted
              ? winInstructions
              : isDeployed
              ? deployInstructions
              : instructions
          }
          position={{ top: "20px", left: "calc(50% + 90px)" }}
          width="590px"
          centered
        />
      )}

      {accepted && <StyledWinner />}

      <StyledGround />
      <StyledCarpet />
    </StyledLevel4>
  );
};
