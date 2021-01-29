import React, { useState } from "react";
import { StyledHorizontalBlinds } from "./styled/StyledHorizontalBlinds";
import day from '../img/day.png';
import night from '../img/night.png';

export default function HorizontalBlinds({ changeMode }) {
  const [change, setChange] = useState(false);
  const [dark, setDark] = useState(true);
  function switcher() {
    setChange(!change);
	setDark(!dark);
	changeMode();
  }

  return (
    <StyledHorizontalBlinds onClick={switcher} change={change} dark={dark}>
      <figure id="blinds">
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ day }
          alt
          class="first"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
        <img
          src={ night }
          alt
          class="second"
        />
      </figure>
    </StyledHorizontalBlinds>
  );
}
