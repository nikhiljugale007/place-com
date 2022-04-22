import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addToLikedVideos, getVideoById } from "../../api/apicalls";
import { useAppContext } from "../../context/Contex";
import "./SingleDrive.css";
const SingleDrive = () => {
  const [loading, setLoading] = useState(true);
  const { driveId } = useParams();
  const [driveInfo, setDriveInfo] = useState({});
  const { appState, appDispatch } = useAppContext();
  const navigate = useNavigate();
  const getVideo = async () => {
    setLoading(true);
    const response = await getVideoById(driveId);
    if (response.success) {
      setDriveInfo(response.video);
      setLoading(false);
    } else {
      alert("Error!. Check Console");
    }
  };
  useEffect(() => {
    getVideo();
  }, []);

  const checkLoggedUser = () => {
    if (!appState.userData.isLoggedIn) {
      navigate("/login");
      return false;
    }
    return true;
  };
  const addToAppliedDrives = async () => {
    if (checkLoggedUser()) {
      const response = await addToLikedVideos(driveInfo);
      console.log(response);
      if (response.success) {
        appDispatch({ type: "ADD_TO_APPLIED_DRIVE", payload: response.likes });
      } else {
        console.log("error");
      }
    }
  };
  const checkEligibility = () => {
    const curr_user = appState.userData.data;

    if (!appState.userData.isLoggedIn) {
      return true;
    }
    if (driveInfo.criteria.tenthScore > curr_user.tenthScore) {
      return false;
    }
    if (driveInfo.criteria.twelthScore > curr_user.twelthScore) {
      return false;
    }
    if (driveInfo.criteria.CGPA > curr_user.CGPA) {
      return false;
    }
    if (!driveInfo.criteria.activeBackLog && curr_user.activeBackLog) {
      return false;
    }
    return true;
  };
  return (
    <div>
      <p className="typo-title flex-hz-center">Single Drives Info</p>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="single-drive-card">
          <div className="flex-vt g-1 p-1">
            <h2 className="typo-label ">Role = {driveInfo.role}</h2>
            <h2 className="typo-label ">CTC = {driveInfo.ctc}</h2>
            <h3 className="typo-label">
              Company Name: {driveInfo.companyName}
            </h3>
            <h3 className="typo-label">
              Last date to apply:{driveInfo.lastDateToApply}
            </h3>
            <p className="typo-subtext g-1">
              <p className="text-bold">Role Description:</p>
              {driveInfo.roleDescription}
            </p>
            <div>
              <h2 className="typo-label ">Criteria</h2>
              <ul
                className="list"
                style={{ border: "none", marginLeft: "2rem" }}
              >
                <li className="list-item">
                  Tenth Score: {driveInfo.criteria.tenthScore}
                </li>
                <li className="list-item">
                  Twelth Score: {driveInfo.criteria.twelthScore}
                </li>
                <li className="list-item">CGPA: {driveInfo.criteria.CGPA}</li>
                <li className="list-item">
                  Active Backlogs Allowed:{" "}
                  {driveInfo.criteria.activeBackLog ? "YES" : "NO"}
                </li>
              </ul>
            </div>
            <div>
              <h2 className="typo-label ">Bond Details</h2>
              <ul
                className="list"
                style={{ border: "none", marginLeft: "2rem" }}
              >
                <li className="list-item">
                  Bond: {driveInfo.bond.isBond ? "YES" : "NO"}
                </li>
                <li className="list-item">
                  Bond Amount: {driveInfo.bond.amount}
                </li>
                <li className="list-item">
                  Bond Period: {driveInfo.bond.period}
                </li>
                <li className="list-item">
                  Active Backlogs Allowed:{" "}
                  {driveInfo.activeBackLog ? "YES" : "NO"}
                </li>
              </ul>
            </div>
            <div>
              <h2 className="typo-label ">Test Details</h2>
              <ul
                className="list"
                style={{ border: "none", marginLeft: "2rem" }}
              >
                <li className="list-item">{driveInfo.testDetails}</li>
              </ul>
            </div>
            {checkEligibility() ? (
              <div className="flex-hz">
                <a
                  href={driveInfo.applyLink}
                  target="_blank"
                  className="link-no-style"
                  rel="noreferrer"
                >
                  <button className="btn btn-primary">Apply</button>
                </a>
                <div className="card-footer-btn">
                  <button
                    className="btn btn-primary"
                    onClick={addToAppliedDrives}
                  >
                    Add to applied drives
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex-hz">
                <p className="typo-label">You are not eligible to apply</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleDrive;
