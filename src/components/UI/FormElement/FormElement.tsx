// Library
import { ChangeEvent } from "react";
// Styles
import classes from "./FormElement.module.css";

type FormElementProps = {
  valid?: boolean;
  elementType: string;
  label: string;
  value?: string;
  required?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  disabled?: boolean;
  errorMsg?: string;
  name: string;
  defaultValue?: string;
};

const FormElement = ({
  valid,
  elementType,
  label,
  value,
  defaultValue,
  required,
  onChange,
  disabled,
  errorMsg,
  name,
}: FormElementProps) => {
  let inputElement = null;
  const cssClasses = [classes["text-input"]];
  const labelCssClasses = [classes["text-input__label"]];

  if (!valid) {
    cssClasses.push(classes["text-input--invalid"]);
    labelCssClasses.push(classes["text-input__label--invalid"]);
  }
  switch (elementType) {
    case "text":
      inputElement = (
        <>
          <label className={labelCssClasses.join(" ")}>{label}</label>
          <input
            className={cssClasses.join(" ")}
            type="text"
            value={value}
            required={required}
            onChange={onChange}
            disabled={disabled}
            name={name}
            defaultValue={defaultValue}
          />
          {!valid ? (
            <p className={classes["text-input__error-msg"]}>{errorMsg}</p>
          ) : null}
        </>
      );
      break;
    case "password":
      inputElement = (
        <>
          <label className={labelCssClasses.join(" ")}>{label}</label>
          <input
            type="password"
            className={cssClasses.join(" ")}
            value={value}
            required={required}
            onChange={onChange}
            disabled={disabled}
            name={name}
            defaultValue={defaultValue}
          />
          {!valid ? (
            <p className={classes["text-input__error-msg"]}>{errorMsg}</p>
          ) : null}
        </>
      );
      break;
    case "email":
      inputElement = (
        <>
          <label className={labelCssClasses.join(" ")}>{label}</label>
          <input
            className={cssClasses.join(" ")}
            type="email"
            value={value}
            required={required}
            onChange={onChange}
            disabled={disabled}
            name={name}
            defaultValue={defaultValue}
          />
          {!valid ? (
            <p className={classes["text-input__error-msg"]}>{errorMsg}</p>
          ) : null}
        </>
      );
      break;
    case "textarea":
      cssClasses.push(classes["text-area"]);
      inputElement = (
        <>
          <label className={labelCssClasses.join(" ")}>{label}</label>
          <textarea
            className={cssClasses.join(" ")}
            value={value}
            required={required}
            onChange={onChange}
            disabled={disabled}
            name={name}
            defaultValue={defaultValue}
          />
          {!valid ? (
            <p className={classes["text-input__error-msg"]}>{errorMsg}</p>
          ) : null}
        </>
      );
      break;
    default:
      inputElement = (
        <input
          className={cssClasses.join(" ")}
          type="text"
          value={value}
          required={required}
          onChange={onChange}
          disabled={disabled}
          name={name}
          defaultValue={defaultValue}
        />
      );
  }
  return inputElement;
};

export default FormElement;
