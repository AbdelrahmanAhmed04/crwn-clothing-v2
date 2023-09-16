import {
  InputContainer,
  FormInputLabel,
  FormInput,
} from "./input-field.styles";

const InputField = ({ label, ...otherProps }) => {
  return (
    <InputContainer>
      <FormInput {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </InputContainer>
  );
};
export default InputField;
