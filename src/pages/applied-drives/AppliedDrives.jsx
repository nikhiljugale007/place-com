import { DriveCard } from "../../components";
import { useAppContext } from "../../context/Contex";
import "./AppliedDrives.css";
const AppliedDrives = () => {
  const { appState } = useAppContext();
  return (
    <div className="page-container">
      <p className="typo-title flex-hz-center">Applied Drives</p>
      {appState.appliedDrives.length === 0 && (
        <p className="typo-title flex-hz-center">No Applied drives yet</p>
      )}
      <div className="flex-vt-center g-1">
        {appState.appliedDrives.map((item, index) => {
          return (
            <div key={index}>
              <DriveCard drive={item} cardType="applied_drive" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AppliedDrives;
