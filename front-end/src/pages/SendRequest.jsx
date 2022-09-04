import React, { useState } from "react";
import { useUserContext } from "../context/user-context";
import axios from "axios";
import "../styles/sendrequest.css";
import { useLocationContext } from "../context/location-context";

const SendRequest = () => {
  const { user } = useUserContext();
  const [treeCount, setTreeCount] = useState(0);
  const { location } = useLocationContext();

  const handleChange = (e) => {
    setTreeCount(e.target.value);
  };

  const getProjectId = async () => {
    let projectId;

    await axios
      .get("https://api.digitalhumani.com/project", {
        headers: {
          "X-Api-Key": "A0qVPAYd3x9VP72j6iUYnk9TmWpiDiAwjIx4S6BcPx7LmlBp",
        },
      })
      .then((response) => {
        const projects = response.data;
        let nearestProject = response.data[0];
        let distance = Number.MAX_VALUE;
        projects.forEach(async (project) => {
          const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
            project.reforestationProjectCountry_en
          )}.json?access_token=pk.eyJ1IjoibWluaHVjaGloYSIsImEiOiJjbDdlOHhwZGkxcDJjM29qbG5mZ3o4a2ljIn0.w7H9IYX3jLj_sPaXgN-iuA&limit=1`;
          await axios.get(url).then((response) => {
            if (
              Math.abs(
                parseFloat(response.data.features[0].center[1]) -
                  parseFloat(location.latitude)
              ) +
                Math.abs(
                  parseFloat(response.data.features[0].center[0]) -
                    parseFloat(location.longitude)
                ) <
              distance
            ) {
              distance =
                Math.abs(
                  parseFloat(response.data.features[0].center[1]) -
                    parseFloat(location.latitude)
                ) +
                Math.abs(
                  parseFloat(response.data.features[0].center[0]) -
                    parseFloat(location.longitude)
                );
              nearestProject = project;
            }
          });
        });
        projectId = nearestProject.id;
      });
    return projectId;
  };

  const handleSendRequest = async () => {
    const projectId = await getProjectId();
    console.log(projectId);

    await axios
      .post(
        "https://api.digitalhumani.com/tree",
        {
          treeCount: treeCount,
          enterpriseId: "43ab446e",
          projectId: projectId,
          user: user.email,
        },
        {
          headers: {
            "X-Api-Key": "A0qVPAYd3x9VP72j6iUYnk9TmWpiDiAwjIx4S6BcPx7LmlBp",
          },
        }
      )
      .then((response) => console.log(response));
  };

  return (
    <div className="send-request-form-container">
      <div className="send-request-form">
        <h2>Help improve the air quality of the area for just 1 dollars!</h2>
        <div className="explaination">
          <h2>How it works:</h2>
          <ul>
            <li>
              By sending a request to plant trees, you will be connected with a
              reforestation organization
            </li>
            <li>For every tree you grow, you will be charged 1 dollar</li>
            <li>
              At the beginning of each month, we’ll check-in with you via a
              quick email to confirm the tree planting requests you’ve made in
              the last month.
            </li>
            <li>
              You’ll receive an invoice from the reforestation organization and
              be able to remit payment directly to them.
            </li>
            <li>
              Once you pay the reforestation organization, they begin the
              process of planting these trees.
            </li>
          </ul>
        </div>
        <div className="input-field">
          <label htmlFor="treeCount">
            Please enter the number of trees you want to plant
          </label>
          <br />
          <input
            type="text"
            name="treeCount"
            value={treeCount}
            onChange={handleChange}
          />
        </div>
        <div className="submit-field">
          <button onClick={handleSendRequest}>Send Request</button>
        </div>
      </div>
    </div>
  );
};

export default SendRequest;
