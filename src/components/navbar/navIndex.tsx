import React from "react";
import './style.css'
import AddPost from "../addPost/addIndex";



function Navbar() {
    return (

        <div className="navXL">
          
            <nav className="nav">
                
         
                
                
                <div className="add">
                <AddPost/>

                </div>
                
            </nav>
        </div>

    )
}

export default Navbar