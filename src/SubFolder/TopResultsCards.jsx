import React from "react";

export default function TopResultsCards(props) {
  return (
    <>
      <div className="cardscomp">
        <img className="sylimg" src={props.photo} alt="photo of candidate" />
        <h6>{props.name}</h6>
        <h6>{props.percentage}</h6>
        <h6>{props.college}</h6>
      </div>
    </>
  );
}
