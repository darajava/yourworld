import React , { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Glyphicon from 'react-bootstrap/lib/Glyphicon'

import AccordionSection from '../AccordionSection/AccordionSection';

const Next = (props) => {

  let start;
  if (!props.start) {
    start = 0;
  } else {
    start = props.start;
  }

  let atStart = false, atEnd = false, isFinished = false;

  if (props.current === start) {
    atStart = true;
  }

  if (props.current === props.end) {
    atEnd = true;
  }

  if (atEnd && typeof props.finishLabel !== 'undefined') {
    isFinished = true;
  }

  return (
    <div klass="navigation">
      <div klass={"left" + (atStart ? " disabled" : "")} onClick={atStart ? null : props.back}>
        Back
      </div>
      <div klass={"right" + (atEnd && !isFinished ? " disabled" : "")} onClick={atEnd ? props.finish : props.next}>
        {isFinished ? <b>{props.finishLabel}</b> : 'Next'}
      </div>
    </div>
  );
}
        

export default Next;
 