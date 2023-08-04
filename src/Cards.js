import React from "react";

import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";

const Mirrorslist = [
  {
    ImagePath: "Images/Apartment.jpeg",
    Name: "Apartment",
    Bio: "Round mirror with Golden Border",
    Price: "₹5,600 (25%off)",
    ActualPrice: "₹7000",
    Discount: "offer price ₹5,040",
  },
  {
    ImagePath: "Images/BedBath.jpeg",
    Name: "BedBath",
    Bio: "Round mirror with Golden Border",
    Price: "₹5,400 (25%off)",
    ActualPrice: "₹7000",
    Discount: "offer price ₹5,040",
  },
  {
    ImagePath: "Images/Woodenstreet.jpeg",
    Name: "Woodenstreet",
    Bio: "Round mirror with Golden Border",
    Price: "₹5,400 (25%off)",
    ActualPrice: "₹7000",
    Discount: "offer price ₹5,040",
  },
  {
    ImagePath: "Images/Ceraindia.jpeg",
    Name: "Ceraindia",
    Bio: "Round mirror with Golden Border",
    Price: "₹5,400 (25%off)",
    ActualPrice: "₹7000",
    Discount: "offer price ₹5,040",
  },
  {
    ImagePath: "Images/Cosmoplitan.jpeg",
    Name: "Cosmoplitan",
    Bio: "Round mirror with Golden Border",
    Price: "₹5,400 (25%off)",
    ActualPrice: "₹7000",
    Discount: "offer price ₹5,040",
  },
  {
    ImagePath: "Images/Custom.jpeg",
    Name: "Custom",
    Bio: "Round mirror with Golden Border",
    Price: "₹5,400 (25%off)",
    ActualPrice: "₹7000",
    Discount: "offer price ₹5,040",
  },
  {
    ImagePath: "Images/daals.jpeg",
    Name: "daals",
    Bio: "Round mirror with Golden Border",
    Price: "₹5,400 (25%off)",
    ActualPrice: "₹7000",
    Discount: "offer price ₹5,040",
  },
  {
    ImagePath: "Images/Flairglass.jpeg",
    Name: "Flairglass",
    Bio: "Round mirror with Golden Border",
    Price: "₹5,400 (25%off)",
    ActualPrice: "₹7000",
    Discount: "offer price ₹5,040",
  },
  {
    ImagePath: "Images/Flipkart.jpeg",
    Name: "Flipkart",
    Bio: "Round mirror with Golden Border",
    Price: "₹5,400 (25%off)",
    ActualPrice: "₹7000",
    Discount: "offer price ₹5,040",
  },
  {
    ImagePath: "Images/Furnish.jpeg",
    Name: "Furnish",
    Bio: "Round mirror with Golden Border",
    Price: "₹5,400 (25%off)",
    ActualPrice: "₹7000",
    Discount: "offer price ₹5,040",
  },
  {
    ImagePath: "Images/Glazonoida.jpeg",
    Name: "Glazonoida",
    Bio: "Round mirror with Golden Border",
    Price: "₹5,400 (25%off)",
    ActualPrice: "₹7000",
    Discount: "offer price ₹5,040",
  },
  {
    ImagePath: "Images/Hometown.jpeg",
    Name: "Hometown",
    Bio: "Round mirror with Golden Border",
    Price: "₹5,400 (25%off)",
    ActualPrice: "₹7000",
    Discount: "offer price ₹5,040",
  },
  {
    ImagePath: "Images/Mirrorwalla.jpeg",
    Name: "Mirrorwalla",
    Bio: "Round mirror with Golden Border",
    Price: "₹5,400 (25%off)",
    ActualPrice: "₹7000",
    Discount: "offer price ₹5,040",
  },
  {
    ImagePath: "Images/Myntra.jpeg",
    Name: "Myntra",
    Bio: "Round mirror with Golden Border",
    Price: "₹5,400 (25%off)",
    ActualPrice: "₹7000",
    Discount: "offer price ₹5,040",
  },
  {
    ImagePath: "Images/Pepperfry.jpeg",
    Name: "Pepperfry",
    Bio: "Round mirror with Golden Border",
    Price: "₹5,400 (25%off)",
    ActualPrice: "₹7000",
    Discount: "offer price ₹5,040",
  },
  {
    ImagePath: "Images/Stylesat.jpeg",
    Name: "Stylesat",
    Bio: "Round mirror with Golden Border",
    Price: "₹5,400 (25%off)",
    ActualPrice: "₹7000",
    Discount: "offer price ₹5,040",
  },
  {
    ImagePath: "Images/Wallmantra.jpeg",
    Name: "Wallmantra",
    Bio: "Round mirror with Golden Border",
    Price: "₹5,400 (25%off)",
    ActualPrice: "₹7000",
    Discount: "offer price ₹5,040",
  },
  {
    ImagePath: "Images/Wayfair.jpeg",
    Name: "Wayfair",
    Bio: "Round mirror with Golden Border",
    Price: "₹5,400  (25%off)",
    ActualPrice: "₹7000",
    Discount: "offer price ₹5,040",
  },
  {
    ImagePath: "Images/WestElm.jpeg",
    Name: "BedBath",
    Bio: "Round mirror with Golden Border",
    Price: "₹5,400 (25%off)",
    ActualPrice: "₹7000",
    Discount: "offer price ₹5,040",
  },
  {
    ImagePath: "Images/williamwood.jpeg",
    Name: "williamwood",
    Bio: "Round mirror with Golden Border",
    Price: "₹5,400  (25%off)",
    ActualPrice: "₹7000",
    Discount: "offer price ₹5,040",
  },
];

function Cards() {
  return (
    <Row>
      <h3>Mirrors</h3>
      {Mirrorslist.map((gift) => (
        <Col className="col-3">
          <Card>
            <CardImg
              alt={gift.ImagePath}
              src={gift.ImagePath}
              top
              width={400}
              height={400}
            />
            <CardBody>
              <CardTitle tag="h5">{gift.Name}</CardTitle>
              <CardText style={{ textAlign: "left" }}>{gift.Bio}</CardText>
              <strong>{gift.Price}</strong> <br></br>
              <p
                style={{
                  textDecorationLine: "line-through",
                  textAlign: "left",
                }}
              >
                {gift.ActualPrice}
              </p>
              <p style={{ color: "green", textAlign: "left" }}>
                {gift.Discount}
              </p>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
export default Cards;
