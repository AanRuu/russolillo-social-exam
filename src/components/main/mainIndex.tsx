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
       {jsonData && jsonData.slice().reverse().map((item) => (
        <div className="prova">
        <div>piece of art n.{item.id}<h2>{item.title}</h2>
        <p>#{item.tags}</p>
        wrote by artist n.{item.userId}</div>
        <div>{item.body}</div>
        <div className="reactions"><p className="reac">{item.reactions.dislikes}|づ◡﹏◡|づ✧
        </p><p className="reac">ദ്ദി|˵ •̀ ᴗ - ˵ | ✧{item.reactions.likes}</p></div>
        </div>
       ))}
          </div>

    )
}

export default MainCard