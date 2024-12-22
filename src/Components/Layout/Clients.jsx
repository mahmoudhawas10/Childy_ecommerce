import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import img1 from "../assets/images/client-1.webp";
import img2 from "../assets/images/client-2.webp";
import img3 from "../assets/images/client-3.webp";
import img4 from "../assets/images/client-4.webp";
import img5 from "../assets/images/client-5.webp";
import img6 from "../assets/images/client-6.webp";

const Clients = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const images = [img1, img2, img3, img4, img5, img6];

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <Container className="my-3 py-5">
      <Row className="g-4">
        {images.map((image, index) => (
          <Col key={index} xs={6} sm={4} md={4} lg={2}>
            <img
              src={image}
              alt={`Client ${index + 1}`}
              className={`client-img w-100 ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleImageClick(index)}     
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Clients;
