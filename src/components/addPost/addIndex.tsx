import React, { useState } from "react";

import './style.css'

function AddPost() {
    
    const [isChecked, setIsChecked] = useState(false)

  const checkHandler = () => {
    setIsChecked(!isChecked)
  }
  
  if(isChecked == true){
    return(
        <div className="addDiv">
           Pubblica un post :D
           <section className="sectBox">
            <input type="checkbox" id="checkbox" checked={isChecked}
                                 onChange={checkHandler}/>
            <label htmlFor="checkbox" className="toggle">
             <div className="bar bar--top"></div>
             <div className="bar bar--middle"></div>
             <div className="bar bar--bottom"></div>
           </label>
           </section>
            <br />
            <textarea name="textare" id="texttitolo" placeholder="titolo..."></textarea>
            <textarea name="textare" id="textarea" placeholder="scrivi qui..."></textarea>
            <textarea name="textare" id="texttags" placeholder="tags..."></textarea>
            <br />
            <button>pubblica C:</button>
            
        </div>
    )
  } else {
    return(
        <div className="addDiv">
        falso
        <section className="sectBox">
         <input type="checkbox" id="checkbox" checked={isChecked}
                              onChange={checkHandler}/>
         <label htmlFor="checkbox" className="toggle">
          <div className="bar bar--top"></div>
          <div className="bar bar--middle"></div>
          <div className="bar bar--bottom"></div>
        </label>
        </section>
    
     </div>
    )
  }
   
}


export default AddPost