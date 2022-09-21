import React, { useEffect, useState } from "react";
import {
  CardBody,
  CardFooter,
  CardTitle,
  CardWrapper,
  DiceButton,
} from "../styled/Card.styled";
import divider from "../assets/images/pattern-divider-desktop.svg";
import diceButton from "../assets/images/icon-dice.svg";
import useFetch from "../hooks/useFetch";

function Card(props) {
  // const random = Math.floor(Math.round(Math.random() * 10) * 35);
  const [getRandomNum, setRandomNumber] = useState(
    Math.round(Math.round(Math.random() * 500) + 5)
  );
  const { slips, loading } = useFetch({ getRandomNum });

  return (
    <React.Fragment>
      {loading && (
        <CardWrapper>
          <CardBody>Getting Advice</CardBody>
        </CardWrapper>
      )}
      {!!slips && !loading && (
        <CardWrapper>
          <CardTitle>ADVICE # {slips.id}</CardTitle>
          <CardBody>
            <p>{slips.advice}</p>
          </CardBody>
          <CardFooter>
            <img src={divider} alt="divider" />
          </CardFooter>

          <DiceButton
            onClick={() =>
              setRandomNumber(Math.round(Math.round(Math.random() * 500) + 5))
            }
          >
            <img src={diceButton} alt="diceButton" />
          </DiceButton>
        </CardWrapper>
      )}
    </React.Fragment>
  );
}

export default Card;
