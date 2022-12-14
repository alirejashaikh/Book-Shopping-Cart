import { useState } from "react";
import style from './CompanyformInput.module.css'

const CompanyFormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };









  

  return (
     <div className={style.grid}>
    <div className={style.formInput}>
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
     
      <span>{errorMessage}</span>
    </div>
    </div>
  );
};

export default CompanyFormInput;