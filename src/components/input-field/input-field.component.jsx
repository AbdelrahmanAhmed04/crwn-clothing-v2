import "./input-filed.styles.scss";

const InputField = ({ label, ...otherProps }) => {
  return (
    <div className="input-container">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};
export default InputField;
