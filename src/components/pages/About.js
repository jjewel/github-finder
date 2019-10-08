import React, { Fragment } from 'react';
import { version } from '../../../package.json';

const About = () => {
  return (
    <Fragment>
      <h1>About</h1>
      <p>App to search Github Users</p>
      <p>Version: {version}</p>
    </Fragment>
  );
};

export default About;
