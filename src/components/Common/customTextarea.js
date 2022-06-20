const CustomTextarea = ({onChange,value,placeholder,label,onError}) => {
  return (
    <>
    <div className="form__lable" style={{color:'rgba(0, 0, 0, 0.6)',lineHeight: '1.4375em',marginLeft:'10px'}}><p>{label}</p>  </div>
      <textarea
        id="filled-hidden-label-small"
        variant="filled"
        size="small"
        onChange={onChange}
        value={value}
        className={'CustomTextarea__style'}
      />
      {onError?<p className="errorMsg">{onError}</p>:null}
    </>
  );
};
export default CustomTextarea