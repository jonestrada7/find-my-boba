import React from 'react';
import './App.css';
import Loading from './Loading.js';
import Result from './Result.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: true};
  }

  onBobaFindClick = () => {
    this.setState({
      loading: true,
      data: {}
    });

    console.log("Find Boba!!");

    let oldThis = this;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        fetch(`/findBoba?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`, {
          method: 'get' // *GET, POST, PUT, DELETE, etc.
        }).then(function(response) {
          return response.json();
        }).then(function(data) {
          console.log(data);
          console.log(data.boba_shop_data);
          oldThis.setState({
            loading: false,
            data: data.boba_shop_data
          });
        })
      });
    }
  }


  render(){
    return <React.Fragment>
      <div className="Content">
        {
          this.state.loading && <Loading></Loading>
        }
        {
          !this.state.loading && <Result data = {this.state.data}></Result>
        }
      </div>
      
      <div className="BobaFindDiv">
        <button type="button" className="BobaButton" onClick={this.onBobaFindClick}>
          Find Me Boba!
        </button>
      </div>
    </React.Fragment>
  }
}

export default App;
