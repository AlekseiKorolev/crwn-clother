import React from "react";

import { GroupContainer, Input, Label } from "./form-input.styles";

const FormInput = ({ handleChange, label, ...rest }) => (
  <GroupContainer>
    <Input onChange={handleChange} {...rest} />
    {label ? <Label {...rest}>{label}</Label> : null}
  </GroupContainer>
);

export default FormInput;
