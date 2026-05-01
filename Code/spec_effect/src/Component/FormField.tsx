import React from "react";

/**have a object that stores all values needed for a field */
interface FormFieldProps {
  id: string;
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

/**create an input field with a label */
const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder = "",
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        style={{ fontWeight: "bold", display: "block", marginBottom: "0.5rem" }}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "0.75rem",
          border: "1px solid #ddd",
          borderRadius: "4px",
          fontSize: "1rem",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
};

export default FormField;
