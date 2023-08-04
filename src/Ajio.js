import { Col, Row } from "reactstrap";

const Gifts = [
  {
    ImageLink:
      "https://assets.ajio.com/medias/sys_master/root/20230602/sXZk/6479a8a9d55b7d0c63456a08/-473Wx593H-462661839-black-MODEL.jpg",
    Name: "ARUS",
    Bio: "Handpainted Iron Ganesha Tea Light Candle Holder",
    Price: "₹629",
  },
  {
    ImageLink:
      "https://assets.ajio.com/medias/sys_master/root/20221023/nq5S/63550d88aeb269659c56d230/home-centre-multicoloured-decorative-pots%2C-plates-%26-jars-souvenir-polyresin-lady-figurine.jpg",
    Name: "HOME CENTRE",
    Bio: "Souvenir Polyresin Lady Figurine",
    Price: "₹2,999",
  },
  {
    ImageLink:
      "https://assets.ajio.com/medias/sys_master/root/20230125/U4j7/63d144f9aeb269c651fa0b8b/arus-multicoloured-decorative-pots%2C-plates-%26-jars-set-of-3-sardar-musicians-decorative-showpieces.jpg",
    Name: "ARUS",
    Bio: "Set of 3 Sardar Musicians Decorative Showpieces",
    Price: "₹2,886",
  },
  {
    ImageLink:
      "https://assets.ajio.com/medias/sys_master/root/20230407/1hqV/64303edb711cf97ba7152933/-473Wx593H-466023743-multi-MODEL.jpg",
    Name: "CHRONIKLE",
    Bio: "Resin 4 Steps Waterfall Fountain with LED",
    Price: "₹2,900",
  },
  {
    ImageLink:
      "https://assets.ajio.com/medias/sys_master/root/20230513/4ckk/645fc91642f9e729d7819fc7/-473Wx593H-462686040-blue-MODEL.jpg",
    Name: "ECRAFTINDIA",
    Bio: "Lord Ram Playing with Bow & Arrow Decorative Figurine",
    Price: "₹1,035",
  },
  {
    ImageLink:
      "https://assets.ajio.com/medias/sys_master/root/20230620/qETb/6491fc0a42f9e729d7568043/-473Wx593H-463229517-multi-MODEL.jpg",
    Name: "ECRAFTINDIA",
    Bio: "Monks Decorative Showpiece",
    Price: "₹549",
  },
];

function Ajio() {
  return (
    <Row>
      <h2>Gifts</h2>
      {Gifts.map((gift, i) => (
        <Col key={i} md="4" lg="3">
          <img
            src={gift.ImageLink}
            alt={gift.ImageLink}
            width={300}
            height={300}
          />
          <strong>
            <p>{gift.Name}</p>
          </strong>
          <p>{gift.Bio}</p>
          <b>{gift.Price}</b>
        </Col>
      ))}
    </Row>
  );
}

export default Ajio;
