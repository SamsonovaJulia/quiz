export const checkBedroom = ({ current: el }) => {
  return getComputedStyle(el)["background-color"] === "rgb(126, 209, 212)";
};

export const checkVase = ({ current: el }) => {
  return getComputedStyle(el).fill === "rgb(198, 148, 149)";
};

export const checkPicture = ({ current: el }) => {
  return getComputedStyle(el).transform === "matrix(0.5, 0, 0, 0.5, 0, 0)";
};

export const checkCactus = ({ current: el }) => {
  return getComputedStyle(el).transform === "matrix(-1, 0, 0, 1, 0, 0)";
};

export const checkClock = ({ current: el }) => {
  return (
    getComputedStyle(el).transform ===
    "matrix(6.12323e-17, -1, 1, 6.12323e-17, 0, 0)"
  );
};

export const checkBooks = ({ current: el }) => {
  return (
    getComputedStyle(el).top === "130px" &&
    getComputedStyle(el).left === "245px"
  );
};
