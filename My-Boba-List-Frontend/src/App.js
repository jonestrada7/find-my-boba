import React from 'react';
import './App.css';
import Loading from './Loading.js';
import Result from './Result.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loading: true, data: {}};
  }

  onBobaFindClick = () => {
    this.setState({
      loading: true,
      data: {}
    });

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
