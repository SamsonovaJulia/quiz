import React from "react";

import {
  StyledBooks,
  StyledVase,
  StyledCactus,
  StyledPicture,
  StyledClock
} from "./level2.styled";

import booksUrl from "./images/books.png";
import pictureUrl from "./images/picture.png";
import clockUrl from "./images/clock.png";
import cactusUrl from "./images/cactus.png";
import roomUrl from "./images/room.png";

export const slides = [
  <div>
    <p>.books</p>
    <StyledBooks src={booksUrl} className="books" />
    <p>
      <code>top: [value]px;</code>
    </p>
    <code>left: [value]px;</code>
  </div>,
  <div>
    <p>.vase</p>
    <StyledVase
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="30.000000pt"
      height="59.000000pt"
      viewBox="0 0 30.000000 59.000000"
      preserveAspectRatio="xMidYMid meet"
      className="vase"
    >
      <g
        transform="translate(0.000000,59.000000) scale(0.100000,-0.100000)"
        stroke="none"
      >
        <path
          d="M110 497 c0 -45 -5 -98 -10 -117 -26 -86 -60 -264 -60 -312 l0 -53
110 3 110 3 0 35 c0 19 -16 113 -35 208 -20 101 -35 204 -35 245 l0 71 -40 0
-40 0 0 -83z"
        />
      </g>
    </StyledVase>
    <code>fill: [color];</code>
  </div>,
  <div>
    <p>.clock</p>
    <StyledClock src={clockUrl} className="clock" />
    <code>transform: rotate([value]deg);</code>
  </div>,
  <div>
    <p>.picture</p>
    <StyledPicture src={pictureUrl} className="picture" />
    <code>transform: scale([size]);</code>
  </div>,
  <div>
    <p>.cactus</p>
    <StyledCactus src={cactusUrl} className="cactus" />
    <code>transform: scale([sx], [sy]);</code>
  </div>,
  <div>
    <p>.room</p>
    <img src={roomUrl} width="150px" alt="room" />
    <code>background-color: [color];</code>
  </div>
];
