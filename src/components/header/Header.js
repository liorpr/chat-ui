
import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import logo from '../../assets/spotim-logo.jpg';

const Header = () => (
  <Container className="spotim-header">
    <div className="spotim-title">
      Welcome to the Spot.IM Chat app
    </div>
    <div>
      <div>
        <Image size={'tiny'} src={logo}/>
      </div>
    </div>
  </Container>  
);

export default Header;