import React, { Component } from 'react';
import Story from '../../views/Story/Story';
import TutorialPage from '../../views/TutorialPage/TutorialPage';
import Navigation from '../../views/Navigation/Navigation';

class Tutorial extends Component {

    constructor() {
      super();

      this.pages = [
        {
          title: 'This is a two player game.',
          description: `To play this game, you will need at least 2 players. One player is the gamemaster and the rest are detectives. The detective(s) have to figure out the story by asking questions.`,
        },
        {
          title: 'Read the solution.',
          description: `The gamemaster should choose a story and read it along with the solution, giving hints to the detectives if they are needed.`,
        },
        {
          title: 'Answer only yes/no/don\'t know.',
          description: `Detectives can ask any questions they like as long as the gamemaster can answer them with "yes", "no", "I don't know", or "It's not important".`,
        },
      ];

      this.state = {
        page: 0,
      }

      this.advancePage = this.advancePage.bind(this);
      this.decreasePage = this.decreasePage.bind(this);
    }

    advancePage() {
      this.setState({page: this.state.page + 1});
    }

    decreasePage() {
      this.setState({page: this.state.page - 1});
    }

    close() {
      document.location="/";
    }

    render() {

      return (
        <div klass="wrapper">
          <h1 klass="centre">How to play this game</h1>
          <TutorialPage page={this.pages[this.state.page]} index={this.state.page} />
          <Navigation
            end={this.pages.length - 1}
            current={this.state.page}
            next={this.advancePage}
            back={this.decreasePage}
            finish={this.close}
            finishLabel={"Play!"}
          />
        </div>
      );
    }

}

export default Tutorial;
