import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const generateValue = () => Math.floor(Math.random() * 100);

const isCorrectSum = (val1, val2, val3, sum) => ((val1 + val2 + val3) == sum)

const generateProposedAnswer = (value1, value2, value3) => Math.floor(Math.random() * 3) + value1 + value2 + value3;

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      numQuestions: 0,
      numCorrect: 0,
      value1: generateValue(),
      value2: generateValue(),
      value3:generateValue(),
      proposedAnswer: generateValue()
    }
  }
  
  resetValues () {
     this.setState((prevState)=>{ 
      const value1 = generateValue()
      const value2 = generateValue()
      const value3 = generateValue()
      return {
      numQuestions : prevState.numQuestions + 1,
      value1,
      value2,
      value3,
      proposedAnswer: generateProposedAnswer(value1, value2, value3)
    } })
  }

  onClickTrue() {
    
    const val1 = this.state.value1
    const val2 = this.state.value2
    const val3 = this.state.value3
    const val123sum = this.state.proposedAnswer

	if (isCorrectSum(val1,val2, val3, val123sum )) {
      this.setState((prevState)=>({ 
		numCorrect : prevState.numCorrect + 1
      }))
    }
    this.resetValues()
  }
  
  onClickFalse() {
    const val1 = this.state.value1
    const val2 = this.state.value2
    const val3 = this.state.value3
    const val123sum = this.state.proposedAnswer

	if (!isCorrectSum(val1,val2, val3, val123sum )) {
      this.setState((prevState)=>({ 
		numCorrect : prevState.numCorrect + 1
      }))
    }
	this.resetValues()
  }
  
  render() {
    const {numCorrect, numQuestions, proposedAnswer, value1, value2, value3} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button onClick={()=>{this.onClickTrue()}}>True</button>
          <button onClick={()=>{this.onClickFalse()}}>False</button>
          <p className="text">
            Correct Answer: {numCorrect}/{numQuestions} 


          </p>
          <p className="text">

            Score:  { numQuestions == 0 ? '0%' : "" + Math.floor(1* numCorrect/numQuestions* 100) + '%'}

          </p>
        </div>
      </div>
    );
  }
}

export default App;
