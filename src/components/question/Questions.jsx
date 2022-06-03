import React, { useEffect, useContext } from "react";
import { LinearProgress, Typography, Box } from "@mui/material";
import Question from "./Question";
import AppContext from "../../AppContext";
import { ResumePage } from "../../pages/resume-builder/ResumePage";
import "./Questions.css";
import Resume from "./Resume";

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

function Questions() {
  const [progress, setProgress] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  const value = useContext(AppContext);
  let { questionAnswer, questions, answers } = value.state;

  useEffect(() => {
    setProgress(
      (answers.length / questions.length) * 100
        ? (answers.length / questions.length) * 100
        : 0
    );
  }, [answers, questions.length]);

  return (
    <div>
      {questions.length !== answers.length ? (
        <LinearProgressWithLabel value={progress} className="progressBar" />
      ) : null}
      <div className="root">
        {questions.length === answers.length ? (
          <Resume />
        ) : (
          <div className="question">
            {questionAnswer.question !== undefined && (
              <Question question={questionAnswer.question} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
export default Questions;
