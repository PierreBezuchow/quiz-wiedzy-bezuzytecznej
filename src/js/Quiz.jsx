require('../scss/main.scss');
import React from 'react';
import ReactDOM from 'react-dom';
// import myQuestions from './Questions.js';
import questions from './Quiz.js';

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: this.props.questions,
            selectedAnswer: '',
            number: 1

        };
    }

    render() {
        return <div className='question'>
            <h1>Pytanie nr {this.props.number}</h1>
            <h2>{this.props.question}</h2>
            <label>
                <h3><input onChange={this.props.handleChange} type="radio" value="a"
                       checked={this.state.selectedAnswer === 'a'}/>
                A: {this.props.a}</h3>
            </label>
            <label>
                <h3><input onChange={this.props.handleChange} type="radio" value="b"
                       checked={this.state.selectedAnswer === 'b'}/>
                B: {this.props.b}</h3>
            </label>
            <label>
                <h3><input onChange={this.props.handleChange} type="radio" value="c"
                       checked={this.state.selectedAnswer === 'c'}/>
                C: {this.props.c}</h3>
            </label>
            <label>
                <h3><input onChange={this.props.handleChange} type="radio" value="d"
                       checked={this.state.selectedAnswer === 'd'}/>
                    D: {this.props.d}</h3>
            </label>

        </div>;
    }
}

class Questions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: this.props.questions,
            selectedAnswer: '',
            number: 1

        };
        this.handleChange = this.handleChange.bind(this);
    }

    nextQuestion() {
        this.setState({
            number: number + 1
        });
        console.log('clk');



    }

    handleChange(event) {
        this.setState({
            selectedAnswer: event.target.value
        });
        console.log(event.target.value);
    }

    render() {

        const question = this.props.questions.map((element, index) => {
            return (<Question key={index} question={element.question} a={element.a} b={element.b}
                              c={element.c} d={element.d} number={element.number} handleChange={this.handleChange}/>
                // <div className='question'>
                //     <h1>Pytanie nr {element.number}</h1>
                //     <h2>{element.question}</h2>
                //     <h3>a: {element.a}</h3>
                //     <h3>b: {element.b}</h3>
                //     <h3>c: {element.c}</h3>
                //     <h3>d: {element.d}</h3>
                // </div>
            );
        });

        return (
            <div>

                {question[1]}

                        <button type="submit" onClick={this.nextQuestion} value="Next">Następne</button>
                    </div>

        );
    }
}


export default class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: this.props.questions,
            correctAnswer: '',
            userAnswers: []
        };
    }



    render() {


        return (
            <div>
                <Questions questions={questions}/>
            </div>
        );
    };

};

