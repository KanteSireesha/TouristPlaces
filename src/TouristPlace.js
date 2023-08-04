import React from "react";
import { Col, Row, UncontrolledCarousel } from "reactstrap";
import { Nav, NavItem, NavLink } from "reactstrap";
import "./TouristPlace.css";
const placelist = [
  {
    Name: "Manali",
    ImagePath: "Images/Manali.jpg",
    Type: "Holiday destiny",
    MoreInfo: "https://himachaltourism.gov.in/destination/manali/",
  },
  {
    Name: "Golconda",
    ImagePath: "./Images/Golconda.jpg",
    Type: "Historic Place",
    MoreInfo: "https://hyderabad.telangana.gov.in/tourist-place/golconda-fort/",
  },
  {
    Name: "Kutch",
    ImagePath: "./Images/Kutch.jpg",
    Type: "Holiday destiny",
    MoreInfo: "https://en.wikipedia.org/wiki/Kutch_district",
  },
  {
    Name: "Rishikesh",
    ImagePath: "./Images/Rishikesh.jpg",
    Type: "Temple",
    MoreInfo: "https://en.wikipedia.org/wiki/Rishikesh",
  },
  {
    Name: "Shimla",
    ImagePath: "./Images/Shimla.jpg",
    Type: "Hil Station",
    MoreInfo: "https://en.wikipedia.org/wiki/Shimla",
  },
];

function TouristPlace() {
  return (
    <div>
      <Row>
        <UncontrolledCarousel
          width={300}
          height={300}
          className="slide"
          items={[
            {
              altText: "Manali",
              caption: "Manali",
              key: 1,
              src: "Images/Manali.jpg",
            },
            {
              altText: "Golconda",
              caption: "Golconda",
              key: 2,
              src: "./Images/Golconda.jpg",
            },
            {
              altText: "Kutch",
              caption: "Kutch",
              key: 3,
              src: "./Images/Kutch.jpg",
            },
            {
              altText: "Rishikesh",
              caption: "Rishikesh",
              key: 4,
              src: "./Images/Rishikesh.jpg",
            },
            {
              altText: "Shimla",
              caption: "Shimla",
              key: 5,
              src: "./Images/Shimla.jpg",
            },
          ]}
        />
      </Row>
      <Row>
        <Nav>
          <NavItem>
            <NavLink active href="#">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">OurServices</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">
              ContactUs
            </NavLink>
          </NavItem>
        </Nav>
      </Row>
      <Row>
        {placelist.map((list) => {
          return (
            <Col sm="12" md="4" lg="3">
              <div className="Tom">
                <h2>{list.Name}</h2>
                <img
                  className="jerry"
                  src={list.ImagePath}
                  alt={list.ImagePath}
                  width={300}
                  height={300}
                ></img>
                <p>
                  <strong>{list.Type}</strong>
                </p>
                <p>
                  <a href={list.MoreInfo} target="_blank">
                    MoreInfo
                  </a>
                </p>
              </div>
            </Col>
          );
        })}
      </Row>
      <Row>
        <p className="ben">
          &copy; CoptRight belongs to Fullstack.2023.
          <a href="#">Terms and conditions</a>
          <a href="#">Privacy Policy</a>
        </p>
      </Row>
    </div>
  );
}
export default TouristPlace;
