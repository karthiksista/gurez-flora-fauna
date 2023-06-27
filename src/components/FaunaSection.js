import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import { Container, Row, Col, Card } from "react-bootstrap";

import faunaimg from "../assets/high-tea-with-elephants-nkjtRIMCcTE-unsplash.jpg";
const FaunaSection = () => {
  const birds = [
    {
      id: "10",
      author: "Paul Jarvis",
      width: 2500,
      height: 1667,
      url: "https://unsplash.com/photos/6J--NXulQCs",
      download_url: "https://picsum.photos/id/10/2500/1667",
    },
    {
      id: "11",
      author: "Paul Jarvis",
      width: 2500,
      height: 1667,
      url: "https://unsplash.com/photos/Cm7oKel-X2Q",
      download_url: "https://picsum.photos/id/11/2500/1667",
    },
    {
      id: "12",
      author: "Paul Jarvis",
      width: 2500,
      height: 1667,
      url: "https://unsplash.com/photos/I_9ILwtsl_k",
      download_url: "https://picsum.photos/id/12/2500/1667",
    },
    {
      id: "13",
      author: "Paul Jarvis",
      width: 2500,
      height: 1667,
      url: "https://unsplash.com/photos/3MtiSMdnoCo",
      download_url: "https://picsum.photos/id/13/2500/1667",
    },
    {
      id: "14",
      author: "Paul Jarvis",
      width: 2500,
      height: 1667,
      url: "https://unsplash.com/photos/IQ1kOQTJrOQ",
      download_url: "https://picsum.photos/id/14/2500/1667",
    },
    {
      id: "15",
      author: "Paul Jarvis",
      width: 2500,
      height: 1667,
      url: "https://unsplash.com/photos/NYDo21ssGao",
      download_url: "https://picsum.photos/id/15/2500/1667",
    },
    {
      id: "16",
      author: "Paul Jarvis",
      width: 2500,
      height: 1667,
      url: "https://unsplash.com/photos/gkT4FfgHO5o",
      download_url: "https://picsum.photos/id/16/2500/1667",
    },
    {
      id: "17",
      author: "Paul Jarvis",
      width: 2500,
      height: 1667,
      url: "https://unsplash.com/photos/Ven2CV8IJ5A",
      download_url: "https://picsum.photos/id/17/2500/1667",
    },
    {
      id: "18",
      author: "Paul Jarvis",
      width: 2500,
      height: 1667,
      url: "https://unsplash.com/photos/Ps2n0rShqaM",
      download_url: "https://picsum.photos/id/18/2500/1667",
    },
  ];

  return (
    <>
      <section id="fauna" className="fauna-section">
        <Container>
          <Row>
            <Col
              lg={6}
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="fauna-image" data-aos="fade-right">
                <img
                  src={faunaimg}
                  alt=""
                  height={"580"}
                  width={"375"}
                  loading="lazy"
                />
              </div>
            </Col>
            <Col
              lg={6}
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="fauna-content" data-aos="fade-left">
                <h2>Avi fauna: Birds</h2>
                <p>Text content goes here...</p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="mt-5">
          <Row xs={1} md={2} lg={3}>
            {/* Replace the sample data with your actual card data */}
            {birds.map((floraItem, index) => (
              <Col key={index} className="mb-3">
                <Card>
                  <Card.Img
                    variant="top"
                    src={floraItem.download_url}
                    loading="lazy"
                  />
                  <Card.Body>
                    <Card.Title>{floraItem.author}</Card.Title>
                    <Card.Text>{floraItem.url}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default FaunaSection;
