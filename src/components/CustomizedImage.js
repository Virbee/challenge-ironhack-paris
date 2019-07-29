import React, { Component } from "react";

class CustomizedImage extends Component {
  constructor() {
    super();
    this.state = {
      url: null,
      size: 10
    };
  }

  changeUrl = e => {
    this.setState({ url: e.target.value });
  };

  changeSize = e => {
    this.setState({ size: Number(e.target.value) });
  };

  render() {
    let picSize = { width: this.state.size, height: this.state.size };
    let pic = <img alt="pic" src={this.state.url} style={picSize} />;
    let pictext = (
      <p>
        {this.state.size}x{this.state.size}px
      </p>
    );
    let picDiv = null;
    if (this.state.url) {
      picDiv = (
        <div className="pic-div">
          {pictext}
          {pic}
        </div>
      );
    }
    return (
      <section className="main-container">
        <div className="picture-container">
          <h1>Customize image</h1>
          <input
            type="text"
            placeholder="put the URL of your pic her"
            onChange={this.changeUrl}
          />
          <input type="range" min="0" max="200" onChange={this.changeSize} />
          {picDiv}
        </div>
      </section>
    );
  }
}

export default CustomizedImage;
