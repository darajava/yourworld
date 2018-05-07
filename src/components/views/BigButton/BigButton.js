import React from 'react';

import Glyphicon from 'react-bootstrap/lib/Glyphicon'
import { Link } from 'react-router-dom';

const BigButton = (props) => {

  let buttonShadow = props.locked ? 'locked' : '';
  let lockedIcon = props.locked ? (
    <div klass="locked-icon">
      <Glyphicon glyph="lock" />
    </div>
  ) : null;

  return (
    <Link style={{ textDecoration: 'none' }} to={props.link}>
      <div klass={'button ' + buttonShadow}>
        <div klass='text'>
          {props.text}
        </div> 
        <div klass={'soustitle'}>
          {props.soustitle}
        </div>
        {lockedIcon}
      </div>
    </Link>
  );
        
}

export default BigButton;
 