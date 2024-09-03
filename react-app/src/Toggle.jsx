import React, { useState } from "react";

function Dashboard() {
  const [view, setView] = useState("profile");
  const toggleView = () => {
    view === "profile" ? setView("settings") : setView("profile");
  };
  return (
    <div>
      <h3>Dash Board</h3>
      <button onClick={toggleView}>Change to {view} view</button>
      {view === "profile" ? (
        <div>
          <h1>Settings view</h1>
        </div>
      ) : (
        <div>
          <h1> Profile View</h1>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
