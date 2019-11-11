import React from 'react';
import './Result.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const BobaRate = "https://img6.androidappsapk.co/300/e/4/b/com.DennisaurCo.BobaNow.png";
const BobaPrice = "https://i.pinimg.com/originals/0d/b5/5a/0db55acdba737e16fa13f9ec24ab8d91.png"

class Result extends React.Component {
    render(){
        return <React.Fragment>
            <div class = "container">
                <div class = "card mb-3">
                    <div class = "row no-gutters" className="ShopDetails">
                        <div className="ShopImage">
                            <img src={this.props.data.picture}/>
                        </div>
                        <div class = "col-md-8">
                            <div class = "card-body" className="ShopInfo">
                                <h2 className = "ShopName card-title text-center"> {this.props.data.name} </h2>
                                <p className = "card-text">
                                    <div className = "container">
                                        <div class = "row" className="ShopRating_ShopPrice">
                                            <span className="BobaRates">
                                                { this.props.data.rating ? [...Array(Math.round(this.props.data.rating))].map((e, i) => <img src={BobaRate} className="BobaRate" key={i}></img>) : ""}
                                            </span>
                                            <span className="BobaPrices">
                                                {this.props.data.price ? [...Array(Math.round(this.props.data.price.length))].map((e, i) => <img src={BobaPrice} className="BobaPrice" key={i}></img>) : ""}
                                            </span>
                                        </div>
                                    </div>

                                </p>
                                <div class = "container">
                                    <h4 className = "card-text text-center">
                                        <div className = 'Center'>
                                            {this.props.data.phone}
                                        </div>
                                        <div className = 'Center'>
                                            {this.props.data.address}
                                        </div>
                                    </h4>
                                    <h4 className = "card-text text-center">
                                        <div>
                                            {this.props.data.distance} miles
                                        </div>
                                    </h4>
                                </div>
                                <div class = 'container card-bottom'>
                                    <a href={`https://maps.google.com/?q=${this.props.data.name},${this.props.data.address}`} target="_blank">
                                        <button type="button" className="BobaButton btn btn-light btn-block">Take Me There!</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}

export default Result;