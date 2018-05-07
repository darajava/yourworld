import React , { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PlayStory from '../PlayStory/PlayStory';
import SelectStory from '../SelectStory/SelectStory';
import Tutorial from '../Tutorial/Tutorial';


class MainLayout extends Component {

    constructor() {
      super();
    }

    render() {

      return (
        <div>
          <Switch>
            <Route exact path='/tutorial' component={Tutorial}/>
            <Route exact path='/' component={SelectStory}/>
            <Route path='/:story' component={PlayStory}/>
          </Switch>
        </div>
      );
    }
}

export default MainLayout;
