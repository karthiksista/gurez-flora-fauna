import React from "react";

function Section({}) {
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
                  src={IMG120}
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
            {faunaBirds.map((faunaItem, index) => (
              <Col key={index} className="mb-3">
                <Card>
                  <Card.Img
                    variant="top"
                    src={faunaItem.imageUrl}
                    loading="lazy"
                  />
                  <Card.Body>
                    <Card.Title>{faunaItem.author.toUpperCase()}</Card.Title>
                    <Card.Text>
                      <span>Local Name</span>:{" "}
                      {faunaItem.localName.toUpperCase()}
                    </Card.Text>
                    <Card.Text>
                      <span>Botanical Name: </span>{" "}
                      {faunaItem.botanicalName.toUpperCase()}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section;
