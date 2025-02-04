
import React, { useState } from "react";

import "./Team.css";

const teamMembers = [
  { name: "John Doe", role: "Frontend Developer", description: "John is an expert in React and UI/UX design.", image: "https://via.placeholder.com/150" },
  { name: "Jane Smith", role: "Backend Developer", description: "Jane specializes in Node.js and databases.", image: "https://via.placeholder.com/150" },
  { name: "Jane Smith", role: "Backend Developer", description: "Jane specializes in Node.js and databases.", image: "https://via.placeholder.com/150" },
  { name: "Jane Smith", role: "Backend Developer", description: "Jane specializes in Node.js and databases.", image: "https://via.placeholder.com/150" },
  { name: "Jane Smith", role: "Backend Developer", description: "Jane specializes in Node.js and databases.", image: "https://via.placeholder.com/150" },
  { name: "Mike Johnson", role: "Project Manager", description: "Mike ensures smooth project execution.", image: "https://via.placeholder.com/150" }
];

const Team = () => {
  const [flipped, setFlipped] = useState(Array(teamMembers.length).fill(false));

  const handleFlip = (index) => {
    setFlipped((prevFlipped) => {
      const newFlipped = [...prevFlipped];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  return (
    <div className="container text-center mt-5" id="Team">
      <h2 className="mb-4">Our Team</h2>
      <div className="row row-cols-3 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-4">

        {teamMembers.map((member, index) => (
          <div key={index} className="col-md-4">
            <div
              className={`flip-card ${flipped[index] ? "flipped" : ""}`}
              onClick={() => handleFlip(index)}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={member.image} alt={member.name} className="img-fluid rounded-circle" />
                  <h5 className="mt-3">{member.name}</h5>
                  <p className="role">{member.role}</p>
                </div>
                <div className="flip-card-back">
                  <p>{member.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;