import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      ballPosition: 0
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      this.setState((prevState) => ({
        ballPosition: prevState.ballPosition + 5
      }));
    }
  }

  buttonClickHandler = () => {
    this.setState({ renderBall: true });
  }

  render() {
    const { renderBall, ballPosition } = this.state;
    return (
      <div className="App">
        <button className="start" onClick={this.buttonClickHandler} style={{ display: renderBall ? 'none' : 'block' }}>
          Start
        </button>
        {renderBall && (
          <div className="ball" style={{ left: `${ballPosition}px` }}></div>
        )}
      </div>
    );
  }
}

export default App;
