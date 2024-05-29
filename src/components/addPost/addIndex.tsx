import React, { useCallback, useContext, useState } from "react";

import './style.css'
import { AppContext, IAppContext } from "../../appContext";

function AddPost() {
    
    const [isChecked, setIsChecked] = useState(false)

  const checkHandler = () => {
    setIsChecked(!isChecked)
  }

  const { jsonData, setJsonData } = useContext(AppContext) as IAppContext

  const [contPost, setContPost] = useState<string>('');
  const [contTitlePost, setContTitlePost] = useState<string>('');
  const [contTagsPost, setContTagsPost] = useState<string >('');
 // const [contUserId, setUserId] = useState<number | undefined>()

  function addTitle(input:string) {
    setContTitlePost(input);
  }

  function addText(input:string) {
    setContPost(input);
  }

  function addTags(input:string) {
    setContTagsPost(input);
  }

 // function addUserId(input:number) {
 //   setUserId(input);
 // }

  function save() {
    if(jsonData){
        const obj = {
            id: jsonData?.length + 1,
            title: contTitlePost,
            body: contPost,
            tags: [contTagsPost],
            reactions: {
                likes: Math.floor(Math.random() * 30),
                dislikes: Math.floor(Math.random() * 30)
            },
            views: Math.floor(Math.random() * 200),
            userId: Math.floor(Math.random() * 200)
        }
        let post = jsonData
        post.push(obj)
        setJsonData([...post])
    }
}

//  <textarea name="textare" id="texttags"  onChange={(event) => addUserId(event.target.value)} value={contUserId}*/ placeholder="artist id..."></textarea>

  
  if(isChecked == true){
    return(
        <div className="addDiv">
           <p className="banner">
          Post some Art!
          </p>
           <section className="sectBox">
            <input type="checkbox" id="checkbox" checked={isChecked}
                                 onChange={checkHandler}/>
            <label htmlFor="checkbox" className="toggle">
             <div className="bar bar--top"></div>
             <div className="bar bar--middle"></div>
             <div className="bar bar--bottom"></div>
           </label>
           </section>
           <section className="form">
        
            <textarea name="textare" id="texttitolo"onChange={(event) => addTitle(event.target.value)} /*</div>value={contTitlePost}*/ placeholder="titolo..."></textarea>
            <textarea name="textare" id="textarea" onChange={(event) => addText(event.target.value)} /*value={contPost}*/ placeholder="scrivi qui..."></textarea>
            <textarea name="textare" id="texttags" onChange={(event) => addTags(event.target.value)} /*value={contTagsPost}*/ placeholder="tags..."></textarea>
           
  
            <button onClick={() => save()}>pubblica C:</button>
            </section>
            
        </div>
    )
  } else {
    return(
        <div className="addDiv">
          <p className="banner">
          Post some Art!
          </p>
        
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