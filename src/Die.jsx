import { nanoid } from "nanoid";

/* eslint-disable react/prop-types */
export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  function createDiceFace(num) {
    const dotPositionMatrix = {
      1: ["middle center"],
      2: [["top left"], ["bottom right"]],
      3: [["top left"], ["middle center"], ["bottom right"]],
      4: [["top left"], ["top right"], ["bottom left"], ["bottom right"]],
      5: [
        ["top left"],
        ["top right"],
        ["middle center"],
        ["bottom left"],
        ["bottom right"],
      ],
      6: [
        ["top left"],
        ["top center"],
        ["top right"],
        ["bottom left"],
        ["bottom center"],
        ["bottom right"],
      ],
    };

    const dieFace = [];

    for (const dotPosition of dotPositionMatrix[num]) {
      let dot = (
        <div key={nanoid()} className={`die-num ${dotPosition}`}>
          {" "}
        </div>
      );

      dieFace.push(dot);
    }
    return dieFace;
  }

  return (
    <div className="die-face" style={styles} onClick={props.holdDice}>
      {createDiceFace(props.value)}
    </div>
  );
}
