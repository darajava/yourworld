import React, { Component } from 'react';

import MainLayout from './components/containers/MainLayout/MainLayout'
import { BrowserRouter } from 'react-router-dom';

import Cesium from "cesium/Cesium";

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0MGU4YTVkYy0zMGRlLTRmNDEtYjkxNy05YjExZjIxOThkMTYiLCJpZCI6NzM5LCJpYXQiOjE1MjU3MzEzODZ9.WWg4TUtX6CUiapgW4DyO6uRoSE1APtGJkUOK6Fvzcmo';

class App extends Component {

  constructor() {
    super();

    this.createWhiteGlobe = this.createWhiteGlobe.bind(this);
    
    this.createWhiteGlobe();
  }

  createWhiteGlobe() {
        let instances = [];

    // for (let lon = -180.0; lon < 180.0; lon += 5.0) {
    //   for (let lat = -89.9; lat < 89.0; lat += 5.0) {
        instances.push(new Cesium.GeometryInstance({
          geometry : new Cesium.RectangleGeometry({
            rectangle : Cesium.Rectangle.fromDegrees(-180, -90, 180, 90),
            vertexFormat: Cesium.PerInstanceColorAppearance.VERTEX_FORMAT
          }),
          attributes : {
            color : Cesium.ColorGeometryInstanceAttribute.fromColor(new Cesium.Color(1, 1, 1, 1))
          }
        }));

    this.whiteGlobe = new Cesium.Primitive({
      geometryInstances : instances,
      appearance : new Cesium.PerInstanceColorAppearance()
    });
  }

  addWhiteSphere() {
    let scene = this.viewer.scene;


    //   }
    // }

    scene.primitives.add(this.whiteGlobe);
  }

  removeElementByClass(className) {
    let elements = document.getElementsByClassName(className);
    
    for (let i = 0; i < elements.length; i++) {
      elements[i].parentNode.removeChild(elements[i]);
    }
  }

  addZoomListener() {
    let scene = this.viewer.scene;

    let lastHeight;
    scene.preRender.addEventListener(() => {
        let camera = scene.camera;
        let height = camera.positionCartographic.height;
        if (lastHeight !== parseInt(height)) {
            //Camera height has changed
            console.log(height);
            console.log(lastHeight);
            lastHeight = parseInt(height);
            console.log(lastHeight);
            if (lastHeight < 600000) {
              scene.primitives.remove(this.whiteGlobe);
              this.createWhiteGlobe();
            } else {
              if (!scene.primitives.contains(this.whiteGlobe)) {
                scene.primitives.add(this.whiteGlobe);
              }
            }
        }
    });
  }

  componentDidMount() {
    this.viewer = new Cesium.Viewer('cesiumContainer', {
        // Show Columbus View map with Web Mercator projection
    });

    this.addWhiteSphere();

    this.addZoomListener();

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
      <div id='cesiumContainer' >
      </div>
    );
  }
}

export default App;
