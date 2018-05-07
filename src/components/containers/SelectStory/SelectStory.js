import React , { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import BigButton from '../../views/BigButton/BigButton';

class SelectStory extends Component {

    constructor() {
      super();

      this.stories = [
        {
          link: '1',
          title: 'Some quiet drinks',
          difficulty: 'Difficulty: 5/5',
        },
        {
          link: '2',
          title: 'Time travel murder',
          difficulty: 'Difficulty: 5/5',
        },
        {
          link: '3',
          title: 'Bad lieutenant',
          difficulty: 'Difficulty: 3/5',
        },
        {
          link: '4',
          title: 'Noisy stranger',
          difficulty: 'Difficulty: 1/5',
        },
        {
          link: '4',
          title: 'Locked one',
          difficulty: 'Difficulty: 1/5',
        },
      ]

    }

    render() {

      let components = [];

      for (let i = 0; i < this.stories.length; i++) {
        let story = this.stories[i];
        components.push(<BigButton text={story.title} locked={i > 3} soustitle={story.difficulty} link={story.link} />);
      }

      return (
        <div> 
          {components}
        </div>
      );
    }
}

export default SelectStory;