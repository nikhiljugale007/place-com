import React, { useContext } from "react";
import { Button, TextField } from "@mui/material";
import AppContext from "../../AppContext";
// import { ArrowRight } from "@mui/icons-material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./Question.css";

function Question() {
  const value = useContext(AppContext);
  let { questionAnswer } = value.state;
  let { handleChangeInput, nextQuestion } = value.function;
  console.log(questionAnswer);
  return (
    <div>
      <form noValidate autoComplete="on" onSubmit={nextQuestion}>
        <TextField
          id="standard-basic"
          label={questionAnswer.question}
          name={questionAnswer.resumeFieldId}
          value={questionAnswer.answer ? questionAnswer.answer : ""}
          onChange={handleChangeInput}
          inputProps={{ style: { fontSize: 20, fontWeight: 500 } }}
          InputLabelProps={{ style: { fontWeight: 400 } }}
        />
        <div className="buttonContainer">
          <button
            type="submit"
            variant="contained"
            color="default"
            className="button"
          >
            NEXT
            <ArrowRightAltIcon />
          </button>
        </div>
      </form>
    </div>
  );
}
export default Question;
