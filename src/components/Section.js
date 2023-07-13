import React, { forwardRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Section = forwardRef((props, ref) => {
  const { sectionData, sectionId, sectionClassName } = props;
  return (
    <div ref={ref}>
      {sectionClassName === "fauna-section" ? (
        <section id={sectionId} className={sectionClassName}>
          {/* <Container>
            <Row>
              <Col
                lg={6}
                xs={12}
                className="d-flex align-items-center justify-content-center"
              >
                <div className="fauna-image" data-aos="fade-right">
                  <img
                    src={sectionImage}
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
                  <h2 style={{ color: "#006365ff" }}>{sectionHeading}</h2>
                </div>
              </Col>
            </Row>
          </Container> */}
          <Container className="mt-5">
            <Row xs={1} md={2} lg={3}>
              {/* Replace the sample data with your actual card data */}
              {sectionData.map((faunaItem, index) => (
                <Col key={index} className="mb-3 fauna-col">
                  <div className="check">
                    <Card data-aos="zoom-in">
                      <Card.Img
                        variant="top"
                        src={faunaItem.imageUrl}
                        loading="lazy"
                      />
                      <Card.Body>
                        <Card.Title>
                          {faunaItem.author.toUpperCase()}
                        </Card.Title>
                        <Card.Text>
                          <span>Local Name</span>:{" "}
                          {faunaItem.localName.toUpperCase()}
                        </Card.Text>
                        <Card.Text>
                          <span>Zoological Name: </span>{" "}
                          {faunaItem.botanicalName.toUpperCase()}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      ) : (
        <section id={sectionId} className={sectionClassName}>
          {/* <Container>
            <Row>
              <Col
                lg={6}
                xs={12}
                className="d-flex align-items-center justify-content-center"
              >
                <div className="fauna-content" data-aos="fade-right">
                  <h2 style={{ color: "#006365ff" }}>{sectionHeading}</h2>
                </div>
              </Col>
              <Col
                lg={6}
                xs={12}
                className="d-flex align-items-center justify-content-center"
              >
                <div className="fauna-image" data-aos="fade-left">
                  <img
                    src={sectionImage}
                    alt=""
                    height={"580"}
                    width={"375"}
                    loading="lazy"
                  />
                </div>
              </Col>
            </Row>
          </Container> */}

          <Container className="mt-5">
            <Row xs={1} md={2} lg={3}>
              {/* Replace the sample data with your actual card data */}
              {sectionData.map((floraItem, index) => (
                <Col key={index} className="mb-3 flora-col">
                  <Card data-aos="zoom-in">
                    <Card.Img
                      variant="top"
                      src={floraItem.imageUrl}
                      loading="lazy"
                    />
                    <Card.Body>
                      <Card.Title>{floraItem.author.toUpperCase()}</Card.Title>
                      <Card.Text>
                        <span>Local Name</span>:{" "}
                        {floraItem.localName.toUpperCase()}
                      </Card.Text>
                      <Card.Text>
                        <span>Botanical Name: </span>{" "}
                        {floraItem.botanicalName.toUpperCase()}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      )}
    </div>
  );
});

export default Section;
