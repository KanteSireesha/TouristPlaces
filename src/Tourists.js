import { Col } from "reactstrap";
import TouristPlace from "./TouristPlace";

function Tourists(touristdata) {
  const prolist = touristdata.Tourslist;
  const ProListEle = prolist.map((Tourist) => {
    return (
      <Col>
        <TouristPlace prodata={Tourist}></TouristPlace>
      </Col>
    );
  });
  return <div>{ProListEle}</div>;
}
export default Tourists;
