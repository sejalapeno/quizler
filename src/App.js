import React from 'react';
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import Result from "./pages/Result/Result";
import {useState} from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';



function App() {

  const [name,setName]=useState("");
  const [questions, setQuestions] = useState();
  const [score,setScore] = useState(0);

  const fetchQuestions=async(category='',difficulty='')=>{
    const {data}=await axios.get(`https://opentdb.com/api.php?amount=10
    ${
      category&&`&category=${category}`
    }${difficulty &&`&difficulty=${difficulty}`}&type=multiple`)

    setQuestions(data.results);
  };

  return (
    <Router>
    <div className="app" style={{ backgroundImage: 'url("/30003111_5.svg")' }}>
      <Header />
      <Routes>
        <Route path="/" element=
        { <Home 
          name={name} 
          setName={setName} 
          fetchQuestions={fetchQuestions}
          />
        } 
        />
        <Route path="/quiz" element={<Quiz
        name={name}
        questions={questions}
        setQuestions={setQuestions}
        score={score}
        setScore={setScore}
        />} />
        <Route path="/result" element={
        <Result
        
       name={name} score={score} />
      } />
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;

