import React from 'react';
import Aux from '../../hoc/Auxi';
import classes from './Layout.css';

const layout = props => (
  <Aux>
    <div>Toolbar, SideBrawer, Backdrop</div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
);

export default layout;