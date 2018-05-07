import React , { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Glyphicon from 'react-bootstrap/lib/Glyphicon'

import AccordionSection from '../AccordionSection/AccordionSection';

const TutorialPage = (props) => {

  return (
    <div>
      <AccordionSection title={props.page.title} text={props.page.description} open={true} noOpen={true}/>
      <img klass='image' src={'/tutorial' + props.index + '.jpg'} />
    </div>
  );
   
}

export default TutorialPage;
 