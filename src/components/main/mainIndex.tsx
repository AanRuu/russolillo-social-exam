import React, { useContext } from "react";
import './style.css'
import Card from "../card/cardIndex";
import { IAppContext } from "../../appContext";
import { AppContext } from "../../appContext";
import {TPost } from "../../commonTypes";


function MainCard() {

    const context = useContext(AppContext) as IAppContext
    const { jsonData, setJsonData } = useContext(AppContext) as IAppContext
    return(

      <div className="mainBox">
       {jsonData && jsonData.map((item) => (
        <div className="prova">
        <div>{item.id}.{item.title}</div>
        <div>{item.body}</div>
        <div className="reactions"><p className="reac">dislikes{item.reactions.dislikes}
        </p><p className="reac">likes{item.reactions.likes}</p></div>
        </div>
       ))}
          </div>

    )
}

export default MainCard