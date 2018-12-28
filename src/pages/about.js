import React from 'react';
import { CoreLayout } from '../components';
import spinnerDress  from '../images/spinner.gif'
export default () => (
  <CoreLayout>
    <img src={spinnerDress} alt="Spinning 3D dress" style={{float: 'left', margin: '0px 40px'}}/>
    <h2>Welcome to Digital Couture</h2>
    <p>The Digital Couture® line is an exquisite, one-of-a-kind and limited edition collection of original, signature digital art, printed on couture fashion.</p>
    <p>All aspects of production, from the original artwork and designing to the printing, cutting and sewing, are personally performed in their home studio. They combine art, fashion and the newest technology with the highest attention to detail.</p>
  </CoreLayout>
);
