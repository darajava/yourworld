import React , { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Glyphicon from 'react-bootstrap/lib/Glyphicon'

class AccordionSection extends Component {

    constructor(props) {
      super();

      this.state = {
        answerOpen: typeof props.open === 'undefined' ? false : props.open,
        hash: 'hash' + Math.floor(Math.random() * 10000),
      };

      this.toggleAnswer = this.toggleAnswer.bind(this);
    }

    toggleAnswer() {
      if (this.props.noOpen) return;

      if (!this.state.answerOpen) {
        setTimeout(() => {
          document.getElementById(this.state.hash).scrollIntoView({
            behaviour: "smooth",
          });
        }, 10);
      }

      this.setState({answerOpen: !this.state.answerOpen});
    }

    componentWillReceiveProps() {

      if (this.state.answerOpen) {
      }
    }

    render() {
      let story = this.props.story;
      let noTitle = this.props.noTitle;
      let noOpen = this.props.noOpen;

      let open = this.state.answerOpen;

      return (
        <div klass="wrapper">
          {!noTitle && <p onClick={this.toggleAnswer} klass='title'>
            {!noOpen &&
              <div klass='chevron'>
                <Glyphicon glyph={"chevron-" + (open ? "up" : "down")} />
              </div>
            }
            {this.props.title}
          </p>}
          {open && <p id={this.state.hash} klass='text fadeIn'>{this.props.text}</p>}
        </div>
      );
    }
        
}

export default AccordionSection;
 