const fs = require('fs');

(function createBlindsHorizontal(maxHeight, numberOfBlinds, imgHeight) {
  if(typeof maxHeight !== 'number' || typeof numberOfBlinds !== 'number' || typeof imgHeight !== 'number') {
    throw new Error('All params must be numbers');
  }
  try {
      fs.statSync('../styled');
  }
  catch (err) {
    if (err.code === 'ENOENT') {
      fs.mkdirSync('../styled');
    }
  }
  try {
      fs.statSync('../styled/StyledHorizontalBlinds.jsx');
      fs.rmSync('../styled/StyledHorizontalBlinds.jsx');
  }
  catch (err) {
    if (err.code === 'ENOENT') {
      console.log('I will create the file StyledHorizontalBlinds.jsx in the folder ./styled');
    }
  }
  try {
    fs.statSync('../HorizontalBlinds.jsx');
    fs.rmSync('../HorizontalBlinds.jsx');
  }
  catch (err) {
    if (err.code === 'ENOENT') {
      console.log('I will create the file HorizontalBlinds.jsx in the folder components');
    }
  }
    const blinds = [];
    let i = 1;
    let relation = maxHeight / numberOfBlinds
    let clipTop = 0;
    let clipBottom = relation;
    let transformOrigin = 50;
    let delay = 0;
    let secondaryDelay = 450;
    let delayRelation = secondaryDelay / numberOfBlinds;

    while(i <= numberOfBlinds) {
        blinds.push({
            top: `${clipTop}px`,
            bottom: `${clipBottom}px`,
            transformOrigin: `${transformOrigin}px`,
            delay: `${delay}ms`,
            secondaryDelay: `${secondaryDelay}ms`
        })
        i++;
        clipTop += relation;
        clipBottom += relation;
        transformOrigin += relation;
        delay += delayRelation;
        secondaryDelay -= delayRelation;
    }

    const firstLines = `
    import styled from "styled-components";
    export const StyledHorizontalBlinds = styled.div${'`'}\n 

    height: ${imgHeight}px;
    overflow: hidden;\n

    #blinds {
        position: relative;
        padding-bottom: 56.5%;
        perspective: 1800px;
        transform-style: preserve-3d;
        max-height: 1000px;
      }\n
    
      #blinds img {
        top: 0;
        left: 0;
        position: absolute;
        transition: 1s;
      }\n
    
      #blinds img.first {
        transform: rotateX(0deg);
        transform: ${'${(props) => (props.change ? "rotateX(-180deg)" : null)}'};
      }\n
    
      #blinds img.second {
        transform: rotateX(-180deg) translateZ(10px);
        transform: ${'${(props) => props.change ? "rotateX(0deg) translateZ(10px)" : null}'};
      } \n`

    fs.appendFileSync('../styled/StyledHorizontalBlinds.jsx', firstLines, 'utf8');

    blinds.forEach((tile, i) => {
        let prop = `
        #blinds img:nth-child(${i+1}),
        #blinds img:nth-child(${(i+1) + numberOfBlinds}) {
        clip: rect(${tile.top}, ${maxHeight}px, ${tile.bottom}, 0px);
        transform-origin: 0px ${tile.transformOrigin}; 
        transition-delay: ${'$'}{props => props.dark ? '${tile.delay}' : '${tile.secondaryDelay}'};
    }\n`
        fs.appendFileSync('../styled/StyledHorizontalBlinds.jsx', prop, 'utf8');
    })

    const lastLine = '`;';
    fs.appendFileSync('../styled/StyledHorizontalBlinds.jsx', lastLine, 'utf8');

    const reactFirstLines = `
    import React, {useState} from 'react';
    import { StyledHorizontalBlinds } from './styled/StyledHorizontalBlinds';
    
    export default function HorizontalBlinds() {
        const [change, setChange] = useState(false);
        const [dark, setDark] = useState(true);
        function switcher() {
            setChange(!change);
            setDark(!dark);
        }
    
        return(
            <StyledHorizontalBlinds onClick={switcher} change={change} dark={dark}>
                <figure id="blinds"> \n`;

    fs.appendFileSync('../HorizontalBlinds.jsx', reactFirstLines, 'utf8');

    for(let i = 0; i < numberOfBlinds; i++) {
      let line = `<img src="https://imagenes.20minutos.es/files/article_amp/uploads/2020/06/19/rick-astley-en-su-cancion-never-gonna-give-you-up.gif" alt class="first" /> \n`;
      fs.appendFileSync('../HorizontalBlinds.jsx', line, 'utf8');
    }

    for(let i = 0; i < numberOfBlinds; i++) {
      let line = `\t <img src="https://media.revistagq.com/photos/5ca5fb2aeccc6ac985d559a9/16:9/w_1920,c_limit/rickrolling_3543.png" alt class="second" /> \n`;
      fs.appendFileSync('../HorizontalBlinds.jsx', line, 'utf8');
    }

    const reactLastLines = `
        </figure>
      </StyledHorizontalBlinds>
      )
    }
    `
    fs.appendFileSync('../HorizontalBlinds.jsx', reactLastLines, 'utf8');

})(1000, 50, 591);
