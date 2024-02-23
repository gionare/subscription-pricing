import React from "react";
import Button from "../UI/Button";
import "./card.css";

//destructure {}
const Card = ({ item, index }) => {
  return (
    <div
      key={item.id}
      className={`main-container${index === 1 ? "-active" : ""}`}
    >
      <h3 className={`title${index === 1 ? "-active" : ""}`}>{item.title}</h3>
      <h1 className={`price${index === 1 ? "-active" : ""}`}>
        <span className="currency">$</span> {item.price.monthly}
      </h1>
      <div className={`line${index === 1 ? "-active" : ""}`}></div>
      <h4 className={`detail${index === 1 ? "-active" : ""}`}>
        {item.storage}
      </h4>
      <div className={`line${index === 1 ? "-active" : ""}`}></div>
      <h4 className={`detail${index === 1 ? "-active" : ""}`}>{item.users}</h4>
      <div className={`line${index === 1 ? "-active" : ""}`}></div>
      <h4 className={`detail${index === 1 ? "-active" : ""}`}>{item.send}</h4>
      <div className={`line${index === 1 ? "-active" : ""}`}></div>
      <Button />
    </div>
  );
};

export default Card;
