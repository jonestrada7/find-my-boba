import React from 'react';
import './App.css';
import Loading from './Loading.js';
import Result from './Result.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: true, data: {}};
  }

  // Function called when user clicks on "Find Me Boba!"
  onBobaFindClick = () => {
    this.setState({
      loading: true,
      data: {}
    });

    let oldThis = this;

    if (navigator.geolocation) {

      // User must allow their location to be shared 
      // FIXME: App should fetch current location of user automatically
      navigator.geolocation.getCurrentPosition((position) => {
        axios.get(`/findBoba?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`).
          then(function(response) {
            return response;
        }).then(function(res_data) {
          console.log(res_data);
          console.log(res_data.data.boba_shop_data);

          oldThis.setState({
            loading: false,
            data: res_data.data.boba_shop_data
          });
        })
      });
    }
  }


  render(){
    return <React.Fragment>
      <div class = "container">
      <header class="jumbotron">
        <h1 class="display-4">Welcome, BobaAddicts!!</h1>
        <p class="lead">Can't decide on a boba place? Click Below!!</p>
        <div className="BobaFindDiv">
          <button type="button" className="BobaButton btn btn-light btn-lg" onClick={this.onBobaFindClick}>
            Find Me Boba!
          </button>
        </div>
      </header>
      </div>
      <div className="Content">
        {
          this.state.loading && <Loading></Loading>
        }
        {
          !this.state.loading && <Result data = {this.state.data}></Result>
        }
      </div>
    </React.Fragment>
  }
}

export default App;
