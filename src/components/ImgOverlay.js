import React, { forwardRef, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ImgOverlayExample = forwardRef(({ cbFunc }, ref) => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (cardIndex) => {
    setActiveCard(cardIndex);
    cbFunc(cardIndex);
  };
  return (
    <div>
      <Container ref={ref}>
        <Row className="layout-row mt-3">
          <Col xs={12} md={6} lg={4} xl={3} className="layout-col mt-3">
            <Card
              className={`layout-card ${
                activeCard === "trees" ? "active" : ""
              }`}
              onClick={() => handleCardClick("trees")}
              key={"trees"}
            >
              <Card.Title className="layout-title">Mountain Trees</Card.Title>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} xl={3} className="layout-col mt-3">
            <Card
              className={`layout-card ${
                activeCard === "shrubs" ? "active" : ""
              }`}
              onClick={() => handleCardClick("shrubs")}
              key={"shrubs"}
            >
              <Card.Title className="layout-title">Mountain Shrubs</Card.Title>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} xl={3} className="layout-col mt-3">
            <Card
              className={`layout-card ${
                activeCard === "herbs" ? "active" : ""
              }`}
              onClick={() => handleCardClick("herbs")}
              key={"herbs"}
            >
              <Card.Title className="layout-title">Medicianl Herbs</Card.Title>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} xl={3} className="layout-col mt-3">
            <Card
              className={`layout-card ${
                activeCard === "ornamentals" ? "active" : ""
              }`}
              onClick={() => handleCardClick("ornamentals")}
              key={"ornamentals"}
            >
              <Card.Title className="layout-title">Wild Ornamentals</Card.Title>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} xl={3} className="layout-col mt-3">
            <Card
              className={`layout-card ${
                activeCard === "grass" ? "active" : ""
              }`}
              onClick={() => handleCardClick("grass")}
              key={"grass"}
            >
              <Card.Title className="layout-title">Mountain Grasses</Card.Title>
            </Card>
          </Col>
        </Row>

        <Row className="layout-row mt-5">
          <Col xs={12} md={6} lg={4} xl={3} className="layout-col mt-3">
            <Card
              className={`layout-card ${
                activeCard === "birds" ? "active" : ""
              }`}
              onClick={() => handleCardClick("birds")}
              key={"birds"}
            >
              <Card.Title className="layout-title">Birds</Card.Title>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} xl={3} className="layout-col mt-3">
            <Card
              className={`layout-card ${
                activeCard === "mammals" ? "active" : ""
              }`}
              onClick={() => handleCardClick("mammals")}
              key={"mammals"}
            >
              <Card.Title className="layout-title">Mammals</Card.Title>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default ImgOverlayExample;
