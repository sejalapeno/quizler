import React from 'react'
import {useState} from 'react'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import './Question.css'
import { useNavigate } from 'react-router-dom';
import {Button} from "@material-ui/core"

const Question = ({
    currQues,
    setcurrQues,
    questions,
    options,
    correct,
    setScore,
    score,
    setQuestions,
}) => {

const[selected,setSelected]=useState();
const[error,setError]=useState(false);
const navigate = useNavigate();

const handleSelect=(i)=>{
    if(selected===i && selected===correct) return "select";
    else if(selected===i &&selected!==correct) return "wrong";
    else if(i===correct) return "select";
    
}

const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };


  const handleNext = () => {
    if (currQues > 8) {
      navigate("/result");
    } else if (selected) {
      setcurrQues(currQues + 1);
      setSelected();
    } else setError("Please select an option first");
  };

  const handleQuit = () => {
    setcurrQues(0);
    setQuestions();
  };


  return (
    <div className="question">
       <h1>Question {currQues + 1} :</h1>

      <div className="singleQuestion">
        <h2>{questions[currQues].question}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                className={`singleOption ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}

<div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            {currQues > 20 ? "Submit" : "Next Question"}
          </Button>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Question
