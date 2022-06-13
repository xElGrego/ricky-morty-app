import React from "react";

const Personajes = ({ characters = [] }) => {
  return (
    <div className="row">
      {characters.map((item, index) => (
        <div key={index} className="col mb-5">
          <div className="card" style={{ minWidth: "150px" }}>
            <img src={item.image} alt="" />
            <div className="card-body">
              <h5 className="card-title"> {item.name} </h5>
              <hr />
              <p> Especies : {item.species} </p>
              <p> Location : {item.location.name} </p>
            </div>
          </div>
        </div>
      ))}
      <div className="col"></div>
    </div>
  );
};

export default Personajes;
