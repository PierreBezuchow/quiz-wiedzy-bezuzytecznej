require('../scss/main.scss');
import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {
  class App extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="myApp">
          <header className="myApp__header ">
            <div className="container ">
              <h1>Your Ract App mock!</h1>
            </div>
          </header>

          <main className="myApp__content ">
            <div className="container ">
              <p>
                Do you want some Code?
                Go ahead, make my day!
              </p>
              <hr/>
            </div>
          </main>
          <footer className="myApp__footer ">
            <div className="container ">
              &copy; {(new Date()).getFullYear()}
            </div>
          </footer>
        </div>
      );
    }
  }
  ReactDOM.render(
    <App/>, document.getElementById('main-app'));

});
