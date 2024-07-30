import React from "react";
import Portrait from '../../assets/images/photo-moi.webp';
import "./banner.css";

function Banner () {
    return(
        <div className="banner">
            <div className="container-txt-image">
                <div className="box-txt">
                    <p className= "txt-welcome">
                    </p>
                    <p className="txt-visit">Bienvenue à tous les passionnés de généalogie, 
                        aux curieux des origines et aux chercheurs de racines familiales. 
                        Ici, je célébre l'histoire de mes ancêtres, 
                        j'explore les branches de mon arbre familial 
                        et je découvre les histoires qui ont façonné mon existence.
                        Je retrace mes ancêtres. Je découvre des histoires oubliées 
                        et tout simplement je me connecte avec mes proches, 
                        j'espère que vous trouverez cette page enrichissante et inspirante. 
                    </p>
                </div>
                <span className="circle">
                    <img className= "portrait-header" src = {Portrait} alt ="portrait" />
                </span>
            </div>
            <h3 className= "welcome"> Enracinons notre présent dans les profondeurs de notre passé!</h3>
        </div>
    )
}
export default Banner;