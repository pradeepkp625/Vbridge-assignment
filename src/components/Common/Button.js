import { ButtonBase } from '@material-ui/core';
import React from 'react';

const Button = ({ btnType,label,onClick}) => {
  return (
    <>
    <div className="btn__container">
    <button
        onClick={onClick}
        variant="contained"
        className={ 'btn__cancel'}
      >
       <img src='https://www.nicepng.com/png/full/251-2519428_0-add-icon-white-png.png' alt='add-icon'/>
       {label} 
      </button>
    </div>
    </>
  );
};

export default Button;
