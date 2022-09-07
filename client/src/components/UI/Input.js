import React from "react";
import styled from "styled-components";

const Input = ({
  lableName,
  type,
  placeholder,
  value,
  iconClass,
  id,
  name,
  onChange,
}) => {
  return (
    <>
      <Label htmlFor={lableName}>
        <i className={iconClass}></i> {lableName}
      </Label>
      <InputForm
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </>
  );
};

export default Input;

const Label = styled.label`
  margin-bottom: 10px;
  display: block;
`;
const InputForm = styled.input`
  width: 90%;
  margin-bottom: 20px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;
