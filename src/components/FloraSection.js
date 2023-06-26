import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import IMG1 from "../assets/Picture1.jpg";
import IMG2 from "../assets/Picture2.jpg";
import IMG3 from "../assets/Picture3.jpg";
import IMG4 from "../assets/Picture4.jpg";
import IMG5 from "../assets/Picture5.jpg";
import IMG6 from "../assets/Picture6.jpg";
import faunaimg from "../assets/joe-dudeck-PPfIRG6mf1g-unsplash.jpg";
const floraData = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/inextdeve",
    description: "https://inext.dev",
  },
  {
    id: 2,
    image: IMG2,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/inextdeve",
    description: "https://inext.dev",
  },
  {
    id: 3,
    image: IMG3,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/inextdeve",
    description: "https://inext.dev",
  },
  {
    id: 4,
    image: IMG4,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/inextdeve",
    description: "https://inext.dev",
  },
  {
    id: 5,
    image: IMG5,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/inextdeve",
    description: "https://inext.dev",
  },
  {
    id: 6,
    image: IMG6,
    title: "CryptCurrency Dashboard & Financial Visualization",
    github: "https://github.com/inextdeve",
    description: "https://inext.dev",
  },
];

const mountainTrees = [
  {
    id: "0",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/yC-Yzbqy7PY",
    download_url: "https://picsum.photos/id/0/5000/3333",
  },
  {
    id: "1",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/LNRyGwIJr5c",
    download_url: "https://picsum.photos/id/1/5000/3333",
  },
  {
    id: "2",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/N7XodRrbzS0",
    download_url: "https://picsum.photos/id/2/5000/3333",
  },
  {
    id: "3",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/Dl6jeyfihLk",
    download_url: "https://picsum.photos/id/3/5000/3333",
  },
  {
    id: "4",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/y83Je1OC6Wc",
    download_url: "https://picsum.photos/id/4/5000/3333",
  },
  {
    id: "5",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3334,
    url: "https://unsplash.com/photos/LF8gK8-HGSg",
    download_url: "https://picsum.photos/id/5/5000/3334",
  },
  {
    id: "6",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/tAKXap853rY",
    download_url: "https://picsum.photos/id/6/5000/3333",
  },
  {
    id: "7",
    author: "Alejandro Escamilla",
    width: 4728,
    height: 3168,
    url: "https://unsplash.com/photos/BbQLHCpVUqA",
    download_url: "https://picsum.photos/id/7/4728/3168",
  },
  {
    id: "8",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/xII7efH1G6o",
    download_url: "https://picsum.photos/id/8/5000/3333",
  },
];

const mountainShrubs = [
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

const medicinalHerbs = [
  {
    id: "19",
    author: "Paul Jarvis",
    width: 2500,
    height: 1667,
    url: "https://unsplash.com/photos/P7Lh0usGcuk",
    download_url: "https://picsum.photos/id/19/2500/1667",
  },
  {
    id: "20",
    author: "Aleks Dorohovich",
    width: 3670,
    height: 2462,
    url: "https://unsplash.com/photos/nJdwUHmaY8A",
    download_url: "https://picsum.photos/id/20/3670/2462",
  },
  {
    id: "21",
    author: "Alejandro Escamilla",
    width: 3008,
    height: 2008,
    url: "https://unsplash.com/photos/jVb0mSn0LbE",
    download_url: "https://picsum.photos/id/21/3008/2008",
  },
  {
    id: "22",
    author: "Alejandro Escamilla",
    width: 4434,
    height: 3729,
    url: "https://unsplash.com/photos/du_OrQAA4r0",
    download_url: "https://picsum.photos/id/22/4434/3729",
  },
  {
    id: "23",
    author: "Alejandro Escamilla",
    width: 3887,
    height: 4899,
    url: "https://unsplash.com/photos/8yqds_91OLw",
    download_url: "https://picsum.photos/id/23/3887/4899",
  },
  {
    id: "24",
    author: "Alejandro Escamilla",
    width: 4855,
    height: 1803,
    url: "https://unsplash.com/photos/cZhUxIQjILg",
    download_url: "https://picsum.photos/id/24/4855/1803",
  },
  {
    id: "25",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/Iuq0EL4EINY",
    download_url: "https://picsum.photos/id/25/5000/3333",
  },
  {
    id: "26",
    author: "Vadim Sherbakov",
    width: 4209,
    height: 2769,
    url: "https://unsplash.com/photos/tCICLJ5ktBE",
    download_url: "https://picsum.photos/id/26/4209/2769",
  },
  {
    id: "27",
    author: "Yoni Kaplan-Nadel",
    width: 3264,
    height: 1836,
    url: "https://unsplash.com/photos/iJnZwLBOB1I",
    download_url: "https://picsum.photos/id/27/3264/1836",
  },
];

const wildOrnamentals = [
  {
    id: "9",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3269,
    url: "https://unsplash.com/photos/ABDTiLqDhJA",
    download_url: "https://picsum.photos/id/9/5000/3269",
  },
  {
    id: "28",
    author: "Jerry Adney",
    width: 4928,
    height: 3264,
    url: "https://unsplash.com/photos/_WiFMBRT7Aw",
    download_url: "https://picsum.photos/id/28/4928/3264",
  },
  {
    id: "29",
    author: "Go Wild",
    width: 4000,
    height: 2670,
    url: "https://unsplash.com/photos/V0yAek6BgGk",
    download_url: "https://picsum.photos/id/29/4000/2670",
  },
  {
    id: "0",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/yC-Yzbqy7PY",
    download_url: "https://picsum.photos/id/0/5000/3333",
  },
  {
    id: "1",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/LNRyGwIJr5c",
    download_url: "https://picsum.photos/id/1/5000/3333",
  },
  {
    id: "2",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/N7XodRrbzS0",
    download_url: "https://picsum.photos/id/2/5000/3333",
  },
  {
    id: "3",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/Dl6jeyfihLk",
    download_url: "https://picsum.photos/id/3/5000/3333",
  },
  {
    id: "4",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/y83Je1OC6Wc",
    download_url: "https://picsum.photos/id/4/5000/3333",
  },
  {
    id: "5",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3334,
    url: "https://unsplash.com/photos/LF8gK8-HGSg",
    download_url: "https://picsum.photos/id/5/5000/3334",
  },
];
const mountainGrassesAndSedges = [
  {
    id: "19",
    author: "Paul Jarvis",
    width: 2500,
    height: 1667,
    url: "https://unsplash.com/photos/P7Lh0usGcuk",
    download_url: "https://picsum.photos/id/19/2500/1667",
  },
  {
    id: "20",
    author: "Aleks Dorohovich",
    width: 3670,
    height: 2462,
    url: "https://unsplash.com/photos/nJdwUHmaY8A",
    download_url: "https://picsum.photos/id/20/3670/2462",
  },
  {
    id: "21",
    author: "Alejandro Escamilla",
    width: 3008,
    height: 2008,
    url: "https://unsplash.com/photos/jVb0mSn0LbE",
    download_url: "https://picsum.photos/id/21/3008/2008",
  },
];

const FloraSection = () => {
  return (
    <>
      <section id="flora" className="flora-section">
        <Container>
          <Row>
            <Col
              lg={6}
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="flora-content">
                <h2>Mountain Trees</h2>
                <p>Text content goes here...</p>
              </div>
            </Col>
            <Col
              lg={6}
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="flora-image">
                <img src={faunaimg} alt="" height={"580"} width={"375"} />
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="mt-5">
          <Row xs={1} md={2} lg={3}>
            {/* Replace the sample data with your actual card data */}
            {mountainTrees.map((floraItem, index) => (
              <Col key={index} className="mb-3">
                <Card>
                  {floraItem.download_url ? (
                    <Card.Img variant="top" src={floraItem.download_url} />
                  ) : (
                    "loading..."
                  )}
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
      <section id="flora" className="flora-section">
        <Container>
          <Row>
            <Col
              lg={6}
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="flora-content">
                <h2>Mountain Shrubs</h2>
                <p>Text content goes here...</p>
              </div>
            </Col>
            <Col
              lg={6}
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="flora-image">
                <img src={faunaimg} alt="" height={"580"} width={"375"} />
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="mt-5">
          <Row xs={1} md={2} lg={3}>
            {/* Replace the sample data with your actual card data */}
            {mountainShrubs.map((floraItem, index) => (
              <Col key={index} className="mb-3">
                <Card>
                  <Card.Img variant="top" src={floraItem.download_url} />
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
      <section id="flora" className="flora-section">
        <Container>
          <Row>
            <Col
              lg={6}
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="flora-content">
                <h2>Medicinal Herbs</h2>
                <p>Text content goes here...</p>
              </div>
            </Col>
            <Col
              lg={6}
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="flora-image">
                <img src={faunaimg} alt="" height={"580"} width={"375"} />
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="mt-5">
          <Row xs={1} md={2} lg={3}>
            {/* Replace the sample data with your actual card data */}
            {medicinalHerbs.map((floraItem, index) => (
              <Col key={index} className="mb-3">
                <Card>
                  <Card.Img variant="top" src={floraItem.download_url} />
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
      <section id="flora" className="flora-section">
        <Container>
          <Row>
            <Col
              lg={6}
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="flora-content">
                <h2>Wild Ornamentals</h2>
                <p>Text content goes here...</p>
              </div>
            </Col>
            <Col
              lg={6}
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="flora-image">
                <img src={faunaimg} alt="" height={"580"} width={"375"} />
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="mt-5">
          <Row xs={1} md={2} lg={3}>
            {/* Replace the sample data with your actual card data */}
            {wildOrnamentals.map((floraItem, index) => (
              <Col key={index} className="mb-3">
                <Card>
                  <Card.Img variant="top" src={floraItem.download_url} />
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
      <section id="flora" className="flora-section">
        <Container>
          <Row>
            <Col
              lg={6}
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="flora-content">
                <h2>Mountain Grasses and Sedges</h2>
                <p>Text content goes here...</p>
              </div>
            </Col>
            <Col
              lg={6}
              xs={12}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="flora-image">
                <img src={faunaimg} alt="" height={"580"} width={"375"} />
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="mt-5">
          <Row xs={1} md={2} lg={3}>
            {/* Replace the sample data with your actual card data */}
            {mountainGrassesAndSedges.map((floraItem, index) => (
              <Col key={index} className="mb-3">
                <Card>
                  <Card.Img variant="top" src={floraItem.download_url} />
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

export default FloraSection;
