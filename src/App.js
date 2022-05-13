import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Mockman from "mockman-js";

import { Sidebar, MobileNavigation, Header, RequireAuth } from "./components";
import AppliedDrives from "./pages/applied-drives/AppliedDrives";
import { Login } from "./pages/authentication/Login";
import { Signup } from "./pages/authentication/Signup";
import { Profile } from "./pages/authentication/Profile";
import AllDrives from "./pages/all-drives/AllDrives";
import UpcomingDrives from "./pages/upcoming-drives/UpcomingDrives";
import SingleDrive from "./pages/single-drive/SingleDrive";
function App() {
  return (
    <div className="home-page-container">
      <Header />
      <div className="content-section">
        <aside className="aside">
          <Sidebar />
        </aside>
        <div className="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/profile"
              element={
                <RequireAuth from="/profile">
                  <Profile />
                </RequireAuth>
              }
            />
            <Route path="/drives" element={<AllDrives />} />
            <Route path="/drives/:driveId" element={<SingleDrive />} />
            <Route path="/applied-drives" element={<AppliedDrives />} />
            <Route path="/upcoming-drives" element={<UpcomingDrives />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin" element={<Mockman />} />
          </Routes>
        </div>
      </div>
      <div className="mobile-nav">
        <MobileNavigation />
      </div>
    </div>
  );
}

export default App;
