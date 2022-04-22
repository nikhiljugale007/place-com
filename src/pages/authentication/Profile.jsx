import "./authentication.css";
import { useNavigate } from "react-router";
import { useAppContext } from "../../context/Contex";
const Profile = () => {
  const { appState, appDispatch } = useAppContext();
  const navigate = useNavigate();
  const signoutUser = () => {
    localStorage.removeItem("token");
    appDispatch({ type: "RESET_VIDEO_STATE" });
    appDispatch({ type: "LOGOUT_USER" });
    navigate("/");
  };
  const {
    firstName,
    lastName,
    email,
    currentClass,
    CGPA,
    activeBacklog,
    totalBacklog,
    tenthScore,
    twelthScore,
    attendedCollegeTraining,
  } = appState.userData.data;
  return (
    <div className="flex-vt-center g-1">
      <div className="full-width flex-hz-space-bw">
        <p className="typo-title">My Profile</p>
        <p>Edit Profile</p>
        <button className="btn btn-outlined" onClick={signoutUser}>
          Sign Out
        </button>
      </div>
      <div className="card horizontal-card p-1">
        <div className="flex-vt p-1 g-1">
          <p className="typo-title">{firstName + " " + lastName}</p>
          <p className="typo-label ">{"Email : " + email}</p>
          <p className="typo-label">{"Class : " + currentClass}</p>
          <p className="typo-label">{"CGPA : " + CGPA}</p>
          <p className="typo-label">
            Active backlog : {activeBacklog ? "YES" : "NO"}
          </p>
          <p className="typo-label">{"Total Backlogs : " + totalBacklog}</p>
          <p className="typo-label">
            Attended College Training : {attendedCollegeTraining ? "YES" : "NO"}
          </p>
          <p className="typo-label">{"Tenth Marks : " + tenthScore}</p>
          <p className="typo-label">{"Twelth Marks : " + twelthScore}</p>
        </div>
      </div>
      <div className="flex-hz-center"></div>
    </div>
  );
};

export { Profile };
