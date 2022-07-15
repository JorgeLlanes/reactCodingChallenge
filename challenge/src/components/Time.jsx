import React, { Component } from "react";

class TimeClass extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <>
        <h1 className="time">{this.state.date.toLocaleTimeString()}</h1>
      </>
    );
  }

  componentDidMount() {
    const oneSecond = 1000;
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, oneSecond);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
}

export default TimeClass;