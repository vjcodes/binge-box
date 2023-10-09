import { useState } from "react";
import "./inputField.scss";

const InputField = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, styleId, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <>
      <div className="input-container" id={styleId}>
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
          }
          focused={focused.toString()}
        />
        {props.label && <label>{props.label}</label>}
        <span>{errorMessage}</span>
      </div>
    </>
  );
};

export default InputField;
