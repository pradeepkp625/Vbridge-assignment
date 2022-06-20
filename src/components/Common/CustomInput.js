const CustomInput = ({onChange,value,placeholder,type,label,onError}) => {
  return (
    <>
    <div className="form__lable" style={{color:'rgba(0, 0, 0, 0.6)',lineHeight: '1.4375em',marginLeft:'10px'}}><p>{label}</p>  </div>
      <input
        id="filled-hidden-label-small"
        variant="filled"
        size="small"
        onChange={onChange}
        value={value}
        className={'customInput__style'}
      />
      {onError?<p className="errorMsg">{onError}</p>:null}
    </>
  );
};
export default CustomInput