require('../scss/main.scss');
import React from 'react';
import ReactDOM from 'react-dom';
// import myQuestions from './Questions.js';
import questions from './Quiz.js';

class Result extends React.Component{
        constructor(props){
            super(props);
            this.state={
            userAnswers: this.props.userAnswers,
            correctAnswers: this.props.correctAnswers
            };
        }


        

    render(){
        console.log(this.props.correctAnswers);
        console.log(this.state.userAnswers);

        return (
            <div>Twój wynik to </div>
        );
    }
}

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAnswer: '',
            answer: '',
            correctAnswer: this.props.correctAnswer,
            score: 0,


        };
        this.handleChange = this.handleChange.bind(this);

    }




    handleChange(event) {
        this.setState({
            selectedAnswer: event.target.value,
            answer: event.target.value,
        });
        this.props.setAnswer(event.target.value);
        this.props.pushAnswer(event.target.value);
        this.props.correctAnswers(this.state.correctAnswer);
        console.log(event.target.value);
        console.log(this.state.score);

    }



    render() {


        return <div className='question'>
            <h1>Pytanie nr {this.props.id + 1}</h1>
            <h2>{this.props.question}</h2>
            <label>
                <h3><input onChange={this.handleChange} id='radioButton' type="radio" value="a"
                       checked={this.state.selectedAnswer === 'a'}/>
                A: {this.props.a}</h3>
            </label>
            <label>
                <h3><input onChange={this.handleChange} id='radioButton' type="radio" value="b"
                       checked={this.state.selectedAnswer === 'b'}/>
                B: {this.props.b}</h3>
            </label>
            <label>
                <h3><input onChange={this.handleChange} id='radioButton' type="radio" value="c"
                       checked={this.state.selectedAnswer === 'c'}/>
                C: {this.props.c}</h3>
            </label>
            <label>
                <h3><input onChange={this.handleChange} id='radioButton' type="radio" value="d"
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
            id: 0,
            correctAnswer: '',
            answer: '',
            userAnswers: [],
            selectedAnswer: '',
            score: 0,
            correctAnswers: [],



        };
        this.nextQuestion = this.nextQuestion.bind(this);
        this.setAnswer = this.setAnswer.bind(this);
        this.pushAnswer = this.pushAnswer.bind(this);
        this.correctAnswers = this.correctAnswers.bind(this);



    }

    correctAnswers(value){
        this.setState({
            correctAnswer: value
        });
    }

    pushAnswer(value){
        this.setState({
            answer: value
        });
    }

    setAnswer(value){
        this.setState({
            selectedAnswer: value
        });
    }

    nextQuestion(){
        this.setState({
            correctAnswers: [...this.state.correctAnswers, this.state.correctAnswer],
            userAnswers: [...this.state.userAnswers, this.state.answer],
            id: this.state.id + 1,


        });
        this.setState({
            selectedAnswer: ''
        });

    }




    render() {

        const question = this.props.questions.map((element, index) => {
            return (<div>
                <Question key={index} question={element.question} a={element.a} b={element.b}
                              c={element.c} d={element.d} number={element.number} id={index} correctAnswer={element.correctAnswer} setAnswer={this.setAnswer}
                              pushAnswer={this.pushAnswer} correctAnswers={this.correctAnswers}
                              />
                </div>

            );
        });
        if(this.state.id === this.props.questions.length - 1) {
            return (
                <div>
                    <Result userAnswers={this.state.userAnswers} correctAnswers={this.state.correctAnswers}/>
                </div>
            );
        }

            return (
                <div>
                    {question[this.state.id]}
                    <button type="submit" onClick={this.nextQuestion}
                            value='Next'
                            disabled={this.state.selectedAnswer.length === 0}>{this.state.id === this.props.questions.length - 2 ? 'Zakończ i pokaż wyniki' : 'Następne pytanie'}</button>
                </div>

            );
        }


}


export default class Quiz extends React.Component {




    render() {


        return (
            <div>
                <Questions questions={questions}/>

            </div>
        );
    };

};

