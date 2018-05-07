import React, { Component } from 'react';

import MainLayout from './components/containers/MainLayout/MainLayout'
import { BrowserRouter } from 'react-router-dom';

import Cesium from "cesium/Cesium";

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0MGU4YTVkYy0zMGRlLTRmNDEtYjkxNy05YjExZjIxOThkMTYiLCJpZCI6NzM5LCJpYXQiOjE1MjU3MzEzODZ9.WWg4TUtX6CUiapgW4DyO6uRoSE1APtGJkUOK6Fvzcmo';

class App extends Component {
  removeElementByClass(className) {
    // Get the element by their class name
    var elements = document.getElementsByClassName(className);
    
    // Now remove them

    for (var i = 0; i < elements.length; i++) {
      elements[i].parentNode.removeChild(elements[i]);
    }
  }

  componentDidMount() {
    let viewer = new Cesium.Viewer('cesiumContainer', {
        // Show Columbus View map with Web Mercator projection
    });

    let classNames = [
      'cesium-viewer-timelineContainer',
      'cesium-viewer-selectionIndicatorContainer',
      'cesium-viewer-infoBoxContainer',
      'cesium-infoBox',
      'cesium-viewer-toolbar',
      'cesium-viewer-fullscreenContainer',
      'cesium-viewer-animationContainer',
    ];

    for (let i = 0; i < classNames.length; i++) {
      this.removeElementByClass(classNames[i]);      
    }

  }

  render() {
    return (
      <div id='cesiumContainer'>
      </div>
    );
  }
}

export default App;
