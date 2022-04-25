const trickNameParagraph = document.getElementById("trickname");

const chosenSport = (<HTMLInputElement>(
  document.getElementById("sport-selector")
)).value as Sport;

type Sport = "skateboard";
type Trick = {
  name: string;
  bodyRotation: (string | number)[];
};

const skateboardStances = ["ollie", "fakie", "switch", "nollie"];
const bodyRotationVariations = ["fs", "bs"];
const baseTricks: Record<Sport, { tricks: Trick[] }> = {
  skateboard: {
    tricks: [
      {
        name: "kickflip",
        bodyRotation: [180, "half cab", "full cab"],
      },
      {
        name: "heelflip",
        bodyRotation: [180, "half cab", "full cab"],
      },
      {
        name: "hardflip",
        bodyRotation: [180, "half cab", "full cab"],
      },
      {
        name: "tre flip",
        bodyRotation: [180, "half cab", "full cab"],
      },
      {
        name: "shuv it",
        bodyRotation: [180, 360],
      },
    ],
  },
};

const rng = <T>(arr: T[]): T => {
  const randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
};

const pickRandomBaseTrick = (): Trick => {
  return rng(baseTricks[chosenSport].tricks);
};

const generateSkateboardTrick = () => {
  // final result examples :
  // - fs 180 kickflip
  // - fakie heelflip

  const shouldHaveRotation = Math.random() > 0.5;
  const randomTrick = pickRandomBaseTrick();
  const stance = rng(skateboardStances);
  if (shouldHaveRotation)
    return `${stance} ${rng(bodyRotationVariations)} ${rng(
      randomTrick.bodyRotation
    )} ${randomTrick.name}`;
  return `${stance} ${randomTrick.name}`;
};

const generateRandomTrick = () => {
  switch (chosenSport) {
    case "skateboard":
      return generateSkateboardTrick();
    default:
      return null;
  }
};

const writeTrickToHml = () => {
  if (trickNameParagraph) {
    trickNameParagraph.innerHTML = generateRandomTrick() || "";
  }
};
