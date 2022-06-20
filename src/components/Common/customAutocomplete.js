import { TextField } from '@material-ui/core';
import { Autocomplete } from '@mui/material';
const top100Films = [
    { title: 'HTML' },
    { title: 'CSS', },
    { title: 'Javascript' },
    { title: 'React Js' },
    { title: 'Redux', },
    { title: "Node Js" },
    { title: 'Material Ui'},
    { title: 'Styled-component'},
    { title: 'Angular'},

  ]; 
const CustomAutoComplete = ({onChange,value,placeholder,label,onError}) => {
  return (
    <>
    <div className="form__lable" style={{color:'rgba(0, 0, 0, 0.6)',lineHeight: '1.4375em',marginLeft:'10px'}}><p>{label}</p>  </div>
    <Autocomplete
       onChange={onChange}
      multiple
      limitTags={2}
      id="multiple-limit-tags"
      options={top100Films}
    //   className={'customAutocomplete__style'}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField   InputProps={{ disableUnderline: true }}
        {...params} onInputChange={onChange} variant="outlined" className='customAutocomplete__style'  placeholder="Add skills" style={{border:'none'}}  />
      )}
    />
      {onError?<p className="errorMsg">{onError}</p>:null}
    </>
  );
};
export default CustomAutoComplete