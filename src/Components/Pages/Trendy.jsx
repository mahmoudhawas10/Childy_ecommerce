import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { WaveBottom, WaveTop } from "../Animation/Wave";
import trendyimg from "../assets/images/trendy.jpg";
import Button_ui from "../ui/Button_ui";

class Trendy extends Component {
  render() {
    return (
      <>
        <WaveTop color="#D0CCC9" />
        <div
          className="trendy-section"
          style={{
            backgroundImage: `url(${trendyimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Container>
            <div className="trendy-text">
              <p className="subtitle">TRENDY CLOTHING</p>
              <h1 className="main-title">
                Get ready for a stylish autumn at our shop
              </h1>
              <Button_ui text={"View All Collections"} className="fs-5 trendy-btn" />
            </div>
          </Container>
        </div>
        <WaveBottom />
      </>
    );
  }
}

export default Trendy;
