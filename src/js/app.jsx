require('../scss/main.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from './Quiz.jsx';


document.addEventListener('DOMContentLoaded', function() {
  class App extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
            <Quiz/>
        </div>
      );
    }
  }
  ReactDOM.render(
    <App/>, document.getElementById('main-app'));

});
