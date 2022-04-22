import { Link } from "react-router-dom";
import { useAppContext } from "../../context/Contex";
import "./DriveCard.css";
import { useState } from "react";
const DriveCard = ({ drive, cardType }) => {
  const { _id, companyName, role, roleDescription, ctc, lastDateToApply } =
    drive;
  const { appState } = useAppContext();
  let lastDate = new Date(lastDateToApply);
  var dd = String(lastDate.getDate()).padStart(2, "0");
  var mm = String(lastDate.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = lastDate.getFullYear();
  lastDate = mm + "/" + dd + "/" + yyyy;

  const curr_user = appState.userData.data;
  console.log(appState.userData.data, drive.criteria);
  const checkEligibility = () => {
    if (!appState.userData.isLoggedIn) {
      return true;
    }
    if (drive.criteria.tenthScore > curr_user.tenthScore) {
      return false;
    }
    if (drive.criteria.twelthScore > curr_user.twelthScore) {
      return false;
    }
    if (drive.criteria.CGPA > curr_user.CGPA) {
      return false;
    }
    if (!drive.criteria.activeBackLog && curr_user.activeBackLog) {
      return false;
    }
    return true;
  };
  return (
    <div
      className="card horizontal-card p-1"
      style={{ backgroundColor: checkEligibility() ? "#6bed8d" : "#ff8080" }}
    >
      <div className="card-body">
        {checkEligibility() ? (
          <p>You are eligible</p>
        ) : (
          <p>You are not eligible</p>
        )}
        <h2 className="card-heading flex-hz-space-bw">
          <p>{role}</p>
          <p>{ctc}</p>
        </h2>

        <h3 className="card-subheading flex-hz-space-bw">
          <p>{companyName}</p>
          <p>Last date : {lastDate}</p>
        </h3>
        <p className="typo-subtext line-clamp">{roleDescription}</p>
        <div className="card-footer-container">
          <div className="card-footer-btn">
            <Link to={`/drives/${_id}`} className="link-no-style">
              <button className="btn btn-text">Read More</button>
            </Link>
            {cardType === "simple_card" && (
              <button className="btn btn-text">Apply</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { DriveCard };
