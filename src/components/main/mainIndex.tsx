import React, { useContext } from "react";
import './style.css'
import Card from "../card/cardIndex";
import { IAppContext } from "../../appContext";
import { AppContext } from "../../appContext";
import {TPost } from "../../commonTypes";
import eye from "../../imgs/eye.png"
import Footer from "../footer/footIndex";


function MainCard() {

    const context = useContext(AppContext) as IAppContext
    const { jsonData, setJsonData } = useContext(AppContext) as IAppContext
    return(
    <div className="absolute">
      <div className="mainBox">
       {jsonData && jsonData.slice().reverse().map((item) => (
        <div className="prova">
        <div>piece of art n.{item.id}<h2>{item.title}</h2>
        <p className="tagss">#{item.tags}</p>
        wrote by artist n.{item.userId}</div>
        <div className="testo">{item.body}</div>
        <div className="reactions">
          <p className="reac">{item.reactions.dislikes}ب_ب</p>
          <p className="reac">ദ്ദി|˵ •̀ ᴗ - ˵ | ✧{item.reactions.likes}</p>
          <p><img className="eye" src={eye} alt="views" />{item.views}</p>
        </div>
        </div>
       ))}
          </div>
          <Footer/>
          </div>

    )
}

export default MainCard