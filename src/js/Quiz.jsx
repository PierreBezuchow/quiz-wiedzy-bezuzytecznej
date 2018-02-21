require('../scss/main.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import myQuestions from './Questions.jsx';

export default class Quiz extends React.Component{
    render(){
        return(
            <div>
                <div id="quiz"></div>
                <button id="submit">Submit Quiz</button>
                <div id="results"></div>
            </div>
        );
    }

}

