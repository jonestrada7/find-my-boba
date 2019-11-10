import React from 'react';
import './Result.css';

const BobaRate = "https://img6.androidappsapk.co/300/e/4/b/com.DennisaurCo.BobaNow.png";
const BobaPrice = "https://i.pinimg.com/originals/0d/b5/5a/0db55acdba737e16fa13f9ec24ab8d91.png"

class Result extends React.Component {
    onTMTlick = () => {
    }
    
    render(){
        return <React.Fragment>
                <div className='ShopName'>
                    {this.props.data.name}
                </div>
                
             
                
                <div className='ShopDetails'>
                    <div className="ShopImage">
                        <img src={this.props.data.picture}></img>
                    </div>

                    <div className="ShopInfo">
                        <div className='ShopRating_ShopPrice'>
                            <span className="BobaRates">
                                {[...Array(Math.round(this.props.data.rating))].map((e, i) => <img src={BobaRate} className="BobaRate" key={i}></img>)}
                            </span>
                            <span className="BobaPrices">
                                {[...Array(Math.round(this.props.data.price.length))].map((e, i) => <img src={BobaPrice} className="BobaPrice" key={i}></img>)}
                            </span>
                        </div>

                        <div className = 'Center'>
                            {this.props.data.phone}
                        </div>

                        <div className = 'Center'>
                            {this.props.data.address}
                        </div>

                        <div className = "ShopDistance_TMT">
                            <div>
                                {this.props.data.distance}
                            </div>
                            <div className="TakeMeThere">
                                <button type="button" className="BobaButton" onClick={this.onTMTClick}>
                                    Take Me There!
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
        </React.Fragment>
    }
}

export default Result;
