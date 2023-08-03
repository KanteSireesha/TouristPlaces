import React from "react";
import { Col } from "reactstrap";
import "./TouristPlace.css";
function TouristPlace(touristplacedata) {
  return (
    <Col sm="12" md="6" lg="4">
      <div className="Tom">
        <h2>{touristplacedata.prodata.Name}</h2>
        <img
          className="jerry"
          src={touristplacedata.prodata.ImagePath}
          alt={touristplacedata.prodata.ImagePath}
        ></img>
        <p>
          <strong>{touristplacedata.prodata.Type}</strong>
        </p>
        <p>
          <a href={touristplacedata.prodata.MoreInfo} target="_blank">
            MoreInfo
          </a>
        </p>
      </div>
    </Col>
  );
}
export default TouristPlace;
