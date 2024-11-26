import React from "react";
const { getExhibits } = require("../api/exhibit");
const AdminPage = () => {
  const [startDate, setStartDate] = React.useState("20241122");
  const [endDate, setEndDate] = React.useState("20241122");
  const [exhibits, setExhibits] = React.useState([]);
  const handleGetExhibits = () => {
    getExhibits({
      startDate: startDate.split("-").join(""),
      endDate: endDate.split("-").join(""),
    }).then((data) => {
      setExhibits(data);
    });
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <p>Welcome to the admin page. Here you can manage your application.</p>
      <div>
        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            name="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleGetExhibits}>Get Exhibits</button>
      <ul>
        {exhibits.map((exhibit) => (
          <li key={exhibit.id}>{exhibit.title + " - " + exhibit.place}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
