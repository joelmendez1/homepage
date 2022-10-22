import { ErrorMessage, Field } from "formik";
import { ReactNode } from "react";

import { CustomErrorMessageComponent } from "../app-components/custom-error-message-component";

import "./form-field.scss";

type FieldType = "text" | "email" | "date";
type FieldAs = "select" | "textarea" | "";

interface FormFieldProps {
  label: string;
  name: string;
  labelClassName?: string;
  fieldClassName?: string;
  className?: string;
  type?: FieldType;
  as?: FieldAs;
  children?: ReactNode;
}

export const FormField = ({
  label,
  name,
  labelClassName = "",
  fieldClassName = "",
  className = "",
  type = "text",
  as = "",
  children = <option>Uncompleted Options</option>,
}: FormFieldProps) => {
  return (
    <div className={`form-field ${className}`}>
      <label className={`form-field__label ${labelClassName}`} htmlFor={name}>
        {label}
      </label>
      <div className="form-field__container">
        <Field
          className={`form-field__container__field ${fieldClassName}`}
          type={type}
          name={name}
          as={as}
        >
          {as === "select" ? children : null}
        </Field>
        <ErrorMessage name={name} component={CustomErrorMessageComponent} />
      </div>
    </div>
  );
};
