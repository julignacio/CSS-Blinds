
    import React, {useState} from 'react';
    import { StyledHorizontalBlinds } from './styled/StyledHorizontalBlinds';
    import day from '../img/day.png';
    import night from '../img/night.png';

    export default function HorizontalBlinds({changeMode}) {
        const [change, setChange] = useState(false);
        const [dark, setDark] = useState(true);
        function switcher() {
            setChange(!change);
	    changeMode()
        }
    
        return(
            <StyledHorizontalBlinds onClick={switcher} change={change} dark={dark}>
                <figure id="blinds"> 
<img src={ day } alt="tile0" class="first" /> 
<img src={ day } alt="tile1" class="first" /> 
<img src={ day } alt="tile2" class="first" /> 
<img src={ day } alt="tile3" class="first" /> 
<img src={ day } alt="tile4" class="first" /> 
<img src={ day } alt="tile5" class="first" /> 
<img src={ day } alt="tile6" class="first" /> 
<img src={ day } alt="tile7" class="first" /> 
<img src={ day } alt="tile8" class="first" /> 
<img src={ day } alt="tile9" class="first" /> 
<img src={ day } alt="tile10" class="first" /> 
<img src={ day } alt="tile11" class="first" /> 
<img src={ day } alt="tile12" class="first" /> 
<img src={ day } alt="tile13" class="first" /> 
<img src={ day } alt="tile14" class="first" /> 
<img src={ day } alt="tile15" class="first" /> 
<img src={ day } alt="tile16" class="first" /> 
<img src={ day } alt="tile17" class="first" /> 
<img src={ day } alt="tile18" class="first" /> 
<img src={ day } alt="tile19" class="first" /> 
<img src={ day } alt="tile20" class="first" /> 
<img src={ day } alt="tile21" class="first" /> 
<img src={ day } alt="tile22" class="first" /> 
<img src={ day } alt="tile23" class="first" /> 
<img src={ day } alt="tile24" class="first" /> 
<img src={ day } alt="tile25" class="first" /> 
<img src={ day } alt="tile26" class="first" /> 
<img src={ day } alt="tile27" class="first" /> 
<img src={ day } alt="tile28" class="first" /> 
<img src={ day } alt="tile29" class="first" /> 
<img src={ day } alt="tile30" class="first" /> 
<img src={ day } alt="tile31" class="first" /> 
<img src={ day } alt="tile32" class="first" /> 
<img src={ day } alt="tile33" class="first" /> 
<img src={ day } alt="tile34" class="first" /> 
<img src={ day } alt="tile35" class="first" /> 
<img src={ day } alt="tile36" class="first" /> 
<img src={ day } alt="tile37" class="first" /> 
<img src={ day } alt="tile38" class="first" /> 
<img src={ day } alt="tile39" class="first" /> 
<img src={ day } alt="tile40" class="first" /> 
<img src={ day } alt="tile41" class="first" /> 
<img src={ day } alt="tile42" class="first" /> 
<img src={ day } alt="tile43" class="first" /> 
<img src={ day } alt="tile44" class="first" /> 
<img src={ day } alt="tile45" class="first" /> 
<img src={ day } alt="tile46" class="first" /> 
<img src={ day } alt="tile47" class="first" /> 
<img src={ day } alt="tile48" class="first" /> 
<img src={ day } alt="tile49" class="first" /> 
	 <img src={ night } alt="second0" class="second" /> 
	 <img src={ night } alt="second1" class="second" /> 
	 <img src={ night } alt="second2" class="second" /> 
	 <img src={ night } alt="second3" class="second" /> 
	 <img src={ night } alt="second4" class="second" /> 
	 <img src={ night } alt="second5" class="second" /> 
	 <img src={ night } alt="second6" class="second" /> 
	 <img src={ night } alt="second7" class="second" /> 
	 <img src={ night } alt="second8" class="second" /> 
	 <img src={ night } alt="second9" class="second" /> 
	 <img src={ night } alt="second10" class="second" /> 
	 <img src={ night } alt="second11" class="second" /> 
	 <img src={ night } alt="second12" class="second" /> 
	 <img src={ night } alt="second13" class="second" /> 
	 <img src={ night } alt="second14" class="second" /> 
	 <img src={ night } alt="second15" class="second" /> 
	 <img src={ night } alt="second16" class="second" /> 
	 <img src={ night } alt="second17" class="second" /> 
	 <img src={ night } alt="second18" class="second" /> 
	 <img src={ night } alt="second19" class="second" /> 
	 <img src={ night } alt="second20" class="second" /> 
	 <img src={ night } alt="second21" class="second" /> 
	 <img src={ night } alt="second22" class="second" /> 
	 <img src={ night } alt="second23" class="second" /> 
	 <img src={ night } alt="second24" class="second" /> 
	 <img src={ night } alt="second25" class="second" /> 
	 <img src={ night } alt="second26" class="second" /> 
	 <img src={ night } alt="second27" class="second" /> 
	 <img src={ night } alt="second28" class="second" /> 
	 <img src={ night } alt="second29" class="second" /> 
	 <img src={ night } alt="second30" class="second" /> 
	 <img src={ night } alt="second31" class="second" /> 
	 <img src={ night } alt="second32" class="second" /> 
	 <img src={ night } alt="second33" class="second" /> 
	 <img src={ night } alt="second34" class="second" /> 
	 <img src={ night } alt="second35" class="second" /> 
	 <img src={ night } alt="second36" class="second" /> 
	 <img src={ night } alt="second37" class="second" /> 
	 <img src={ night } alt="second38" class="second" /> 
	 <img src={ night } alt="second39" class="second" /> 
	 <img src={ night } alt="second40" class="second" /> 
	 <img src={ night } alt="second41" class="second" /> 
	 <img src={ night } alt="second42" class="second" /> 
	 <img src={ night } alt="second43" class="second" /> 
	 <img src={ night } alt="second44" class="second" /> 
	 <img src={ night } alt="second45" class="second" /> 
	 <img src={ night } alt="second46" class="second" /> 
	 <img src={ night } alt="second47" class="second" /> 
	 <img src={ night } alt="second48" class="second" /> 
	 <img src={ night } alt="second49" class="second" /> 

        </figure>
      </StyledHorizontalBlinds>
      )
    }
    
