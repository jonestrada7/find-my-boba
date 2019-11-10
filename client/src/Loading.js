import React from 'react';
import './Loading.css';

const bobaImage = "https://cdn.dribbble.com/users/228053/screenshots/3086637/boba.png"

class Loading extends React.Component {
    
    render (){
        return(
        <div className = "BobaContainer">
            <img src={bobaImage}></img>
        </div>)
    }
}

export default Loading;
