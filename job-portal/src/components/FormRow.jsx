import { useId } from "react";

const FormRow = ({ type, name, placeholder, label }) => {
  const regiserId = useId();

  return (
    <div className="form-row">
      <label htmlFor={`${name}-${regiserId}`} className="form-label">
        {label}
      </label>
      <input
        type={type}
        id={`${name}-${regiserId}`}
        name={name}
        className="form-input"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default FormRow;
