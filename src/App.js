import { Col, Container, Row, UncontrolledCarousel } from "reactstrap";
import "./App.css";
import { Nav, NavItem, NavLink } from "reactstrap";
import Tourists from "./Tourists";

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

function App() {
  return (
    <Container>
      <Row>
        <UncontrolledCarousel
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
        <Tourists Tourslist={placelist}></Tourists>
      </Row>
      <Row>
        <p className="ben">
          &copy; CoptRight belongs to Fullstack.2023.
          <a href="#">Terms and conditions</a>
          <a href="#">Privacy Policy</a>
        </p>
      </Row>
    </Container>
  );
}

export default App;
