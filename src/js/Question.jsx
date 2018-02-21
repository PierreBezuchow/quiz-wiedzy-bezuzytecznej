import React from 'react';
import questions from './Question';




class Question extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number: 0,
            question: '',
                a: "",
                b: "",
                c: "",
                d: "",
            correctAnswer: '',
            selectedAnswer: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

   handleChange (event)  {
        this.setState({
            selectedAnswer: event.target.value
        });
        console.log(event.target.value);
    }







    render(){
        const questions = this.props.questions.map(function(element, index){
            return (
                <div>
                    <h1>{element.question}</h1>
                </div>
            );
        });

        return (
            <div>
                {questions}
                <div className='question'>Pytanie</div>
                <form>
                    <div className='option'>
                        <label>
                            <input onChange={this.handleChange} type="radio" value="a" checked={this.state.selectedAnswer==='a'} />
                            Odpowiedź a
                        </label>
                    </div>
                    <div className="option">
                        <label>
                            <input onChange={this.handleChange} type="radio" value="b" checked={this.state.selectedAnswer==='b'} />
                            Odpowiedź b
                        </label>
                    </div>
                    <div className="option">
                        <label>
                            <input onChange={this.handleChange} type="radio" value="c" checked={this.state.selectedAnswer==='c'} />
                            Odpowiedź c
                        </label>
                    </div>
                    <div className="option">
                        <label>
                            <input onChange={this.handleChange} type="radio" value="d" checked={this.state.selectedAnswer==='d'} />
                            Odpowiedź d
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}