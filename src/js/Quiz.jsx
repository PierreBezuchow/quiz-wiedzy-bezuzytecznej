require('../scss/main.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import myQuestions from './Questions.js';
import Question from './Question.jsx';


export default class Quiz extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            question: '',
            answers: {
                a: "",
                b: "",
                c: "",
                d: ""
            },
            correctAnswer: ''
        };
    }
    render(){



        return(
            <div>
                <Question/>
                <button type="submit" value="Submit">Submit</button>
            </div>
        );
    };

};

