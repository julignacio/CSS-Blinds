# CSS Venetian curtain.

This project uses React to create a component that switches between images with a transition created with CSS. That image also changes between Dark and Light mode because is the main reason to create it.

The repo have a JS in the path src/components/creator named ***BlindsCreator.js*** that can be used to create a new curtain, the file have an IIFE that, by default, is executed with a maxHeight of 1000px, 50 Blinds and an image height of 591px (this last value is used to hide all the overflow and make sure that we are not leaving anything outside the container). You can modify that params in the line 143.

You can also modify what image will be charged, being the first image in the line 126 and the second one in the line 131.

After modify everything you need of that function, you can execute it with Node and it will create two files, one named *StyledHorizontalBlinds.jsx* wich have all the CSS in styled-components format and the second one named *HorizontalBlinds.jsx* that creates a React component also named **HorizontalBlinds** with all the HTML that you can call everywhere you want.
