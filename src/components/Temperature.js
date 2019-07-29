import React, { Component } from "react";

class Temperature extends Component {
  constructor() {
    super();
    this.state = {
      temperature: null,
      message: null
    };
  }
  handleChange = e => {
    this.setState({
      temperature: e.target.value
    });
  };

  render() {
    let message = null;
    let divStyle = null;
    let picture = null;
    if (this.state.temperature <= 10) {
      message = <p>It's cold</p>;
      divStyle = { color: "blue" };
      picture = (
        <img
          alt="cold"
          src="https://cdn.pixabay.com/photo/2016/11/17/14/24/bow-1831698_960_720.png"
        />
      );
    } else if (this.state.temperature > 10 && this.state.temperature < 30) {
      message = <p>It's nice</p>;
      divStyle = { color: "black" };
      picture = (
        <img
          alt="nice"
          src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Flower_Hibiscus_rosa-sinensis.gif"
        />
      );
    } else {
      message = <p>It's warm</p>;
      divStyle = { color: "red" };
      picture = (
        <img
          alt="warm"
          src="data:image/png;base64,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"
        />
      );
    }

    return (
      <section className="main-container">
        <div className="temperature-container">
          <h1>Temperature</h1>
          <input
            type="number"
            placeholder="Temperature in C°"
            onChange={this.handleChange}
          />
          <div className="temperature-message" style={divStyle}>
            {message}
            {picture}
          </div>
        </div>
      </section>
    );
  }
}

export default Temperature;
