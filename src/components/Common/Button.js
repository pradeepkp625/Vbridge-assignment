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
       {label} 
      </button>
    </div>
    </>
  );
};

export default Button;
