import React, {Component} from "react";
import BabyImageCard from "./components/BabyImageCard";
// import Navpills from "./components/Navpills";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import babies from "./babies.json";
import Jumbotron from "./components/Jumbotron";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    babies,
    currentScore: 0,
    topScore: 0
  };

  gameOver = () => {
    if (this.state.currentScore > this.state.topScore) {
      this.setState({
        topScore: this.state.currentScore
      }, function() {
        console.log(this.state.topScore);
      });
    }
    this.state.babies.forEach(baby => {
      baby.count = 0;
    });
    alert(`Game Over! Score: ${this.state.currentScore}`);
    this.setState({currentScore: 0});
    return true;
  }

  selectImageCount = id => {
    this.state.babies.find((o, i) => {
      if (o.id === id) {
        if (babies[i].count === 0) {
          babies[i].count = babies[i].count + 1;
          this.setState({
            currentScore: this.state.currentScore + 1
          }, function() {
            console.log(this.state.currentScore);
          });
          this.state.babies.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (<Wrapper>
      <Title currentScore={this.state.currentScore} topScore={this.state.topScore}></Title>
      <Jumbotron />

      {this.state.babies.map(baby => (<BabyImageCard selectImageCount={this.selectImageCount} id={baby.id} key={baby.id} name={baby.name} image={baby.image}/>))}

    </Wrapper>);
  }
}

export default App;
