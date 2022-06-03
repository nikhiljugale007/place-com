import React, { createRef, useContext } from "react";
import Pdf from "react-to-pdf";
import AppContext from "../../AppContext";
import "./Resume.css";
let refreshPage = () => {
  window.location.reload();
};

function Resume() {
  const ref = createRef();
  const value = useContext(AppContext);

  let { answers } = value.state;
  return (
    <div>
      <div ref={ref} className="resume">
        {answers.map((answer) => {
          return (
            <div>
              {answer.resumeFieldId === "name" ||
              answer.resumeFieldId === "email" ||
              answer.resumeFieldId === "address" ||
              answer.resumeFieldId === "phoneNumber" ? (
                <div
                  style={{
                    textAlign: "right",
                  }}
                >
                  <label>{answer.answer}</label>
                </div>
              ) : (
                <div>
                  <h4>{answer.resumeField}</h4>
                  <p>{answer.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <button className="buttonBuildNew" onClick={refreshPage}>
          Build New
        </button>
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button onClick={toPdf} className="buttonDownload">
              Download Resume
            </button>
          )}
        </Pdf>
      </div>
    </div>
  );
}

export default Resume;
