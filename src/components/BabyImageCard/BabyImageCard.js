import React from "react";
import "./BabyImageCard.css";

const BabyImageCard = props => (
  <div className="card click-item" onClick={() => props.selectImageCount(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default BabyImageCard;
