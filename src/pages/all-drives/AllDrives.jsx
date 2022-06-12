import { useState, useEffect } from "react";
import { useAppContext } from "../../context/Contex";
import { getAllDrives } from "../../api/apicalls";
import { DriveCard } from "../../components";
import "./AllDrives.css";
const AllDrives = () => {
  const { appState, appDispatch } = useAppContext();
  const [loading, setLoading] = useState(false);
  const getDrives = async () => {
    const response = await getAllDrives();
    if (response.success) {
      appDispatch({ type: "SET_DRIVES", payload: response.drives });
    } else {
      alert("ERROR, check console");
    }
  };
  useEffect(() => {
    setLoading(true);
    getDrives();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="page-container">
      <p className="typo-title flex-hz-center">All Drives</p>
      <div className="flex-vt-center g-1">
        {loading ? (
          <h1>Loading</h1>
        ) : (
          appState.drives.map((item, index) => {
            return (
              <div key={index}>
                <DriveCard drive={item} cardType="simple_card" />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default AllDrives;
