import React, { useEffect, useState } from "react";
import questionsArray from "../../assets/questionsArray";
import { Typography } from "@mui/material";
import AppContext from "../../AppContext";
import Questions from "../../components/question/Questions";

const ResumePage = () => {
  let [questions, setQuestions] = useState([]);
  let [answers, setAnswers] = useState([]);
  let [questionAnswer, setQuestionAnswer] = useState({});
  let [questionCompleted, setQuestionCompleted] = useState(false);
  useEffect(() => {
    setQuestions(questionsArray);
    setQuestionAnswer(questionsArray[0]);
  }, []);

  let handleChangeInput = (e) => {
    setQuestionAnswer({
      ...questionAnswer,
      answer: e.target.value,
    });
  };

  let nextQuestion = (e) => {
    e.preventDefault();
    questions.map((question) => {
      if (question.resumeFieldId == questionAnswer.resumeFieldId) {
        setAnswers([
          ...answers,
          { ...question, answer: questionAnswer.answer },
        ]);
      }
    });

    questions.map((qa, index) => {
      if (index <= questions.length) {
        if (qa.resumeFieldId === questionAnswer.resumeFieldId) {
          setQuestionAnswer(questions[index + 1]);
        }
      } else {
        setQuestionCompleted(true);
      }
    });
  };

  return (
    <AppContext.Provider
      value={{
        state: {
          questionAnswer,
          questionCompleted,
          questions,
          answers,
        },
        function: {
          handleChangeInput: handleChangeInput,
          nextQuestion: nextQuestion,
        },
      }}
    >
      <div className="App">
        <Typography
          variant="h6"
          style={{
            textAlign: "center",
            margin: "2rem",
          }}
        >
          Resume Builder
        </Typography>
        <Questions />
      </div>
    </AppContext.Provider>
  );
};

export { ResumePage };
