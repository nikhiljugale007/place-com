import { useEffect, useState } from "react";
import { DriveCard } from "../../components";
import { useAppContext } from "../../context/Contex";

const UpcomingDrives = () => {
  const { appState } = useAppContext();
  const [filteredDrive, setFilteredDrives] = useState([]);
  useEffect(() => {
    var today = new Date(2022, 4, 21);
    setFilteredDrives([]);
    appState.drives.map((drive) => {
      const drive_date = new Date(drive.lastDateToApply);
      if (today < drive_date) {
        setFilteredDrives((prev) => [...prev, drive]);
      } else {
      }
    });
  }, []);
  return (
    <div className="page-container">
      <p className="typo-title flex-hz-center">Upcoming Drives</p>
      {filteredDrive.length === 0 && (
        <p className="typo-title flex-hz-center">No Upcoming drives yet</p>
      )}
      <div className="flex-vt-center g-1">
        {filteredDrive.map((item, index) => {
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

export default UpcomingDrives;
