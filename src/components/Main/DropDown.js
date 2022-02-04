import React from 'react';
import { DropDownStyle } from './Button.styles';

const DropDown = ({ handleChange, data }) => {
  return (
    <DropDownStyle onChange={handleChange}>
        { Object.keys(data).map((e,i) => <option key={i} value={e}>{e}</option>) }
    </DropDownStyle>
  );
};

export default DropDown;
