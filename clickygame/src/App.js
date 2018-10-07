import React, { Component } from 'react';
import PersonCard from "./components/PersonCard";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import people from "./people.json";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import "./App.css";

function randomize(array) {
  for(let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  state = {
    people,
    currentScore: 0,
    topScore: 0,
    correctIncorrect: "",
    clicked: []
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({
        clicked: this.state.clicked.concat(id)
      });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      correctIncorrect: "Nice, keep going!"
    });
    if (newScore >= this.state.topScore) {
      this.setState({
        topScore: newScore
      });
    } else if(newScore === 12) {
      this.setState({
        correctIncorrect: "You win!"
      });
    }
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledDeck = randomize(people);
    this.setState({
      people: shuffledDeck
    });
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      correctIncorrect: "Try again!",
      clicked: []
    });
    this.handleShuffle();
  };


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
        <Container>
          <Row>
            {this.state.people.map(person => (
              <Column size="md-3 sm-6">
                <PersonCard
                  key={person.id}
                  handleClick={this.handleClick}
                  handleIncrement={this.handleIncrement}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={person.id}
                  image={person.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
