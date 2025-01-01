import React, { Component } from "react";
import img from "../assets/images/home-1.png";     

class ColorChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",  
    };
  }

     
  changeColor = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { filter } = this.state;

    return (
      <div className="container mt-5">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={img}
            alt="Example"
            className="card-img-top"
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              filter: filter,   
            }}
          />
          <div className="card-body text-center">
          
            <div className="d-flex justify-content-around">
              <button
                className="btn btn-primary"
                onClick={() => this.changeColor("hue-rotate(180deg)")}
              >
                Blue
              </button>
              <button
                className="btn btn-danger"
                onClick={() => this.changeColor("hue-rotate(0deg) sepia(1)")}
              >
                Red
              </button>
              <button
                className="btn btn-success"
                onClick={() => this.changeColor("hue-rotate(90deg)")}
              >
                Green
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => this.changeColor("")}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ColorChange;
