import React, { Component } from 'react';
import PersonCard from "./components/PersonCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import people from "./people.json";
import "./App.css";

class App extends Component {
  state = {
    people,
    currentScore: 0,
    topScore: 0,
    correctIncorrect: "",
    clicked: []
  };

  //click

  render() {
    return (
      <Wrapper>
        <Nav
          title="React Clicky Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          correctIncorrect={this.state.correctIncorrect}
        />

        <Title>
          Click on an image to earn points, but don't click on an image more than once!
        </Title>
        <PersonCard />
      </Wrapper>
    );
  }
}

export default App;
