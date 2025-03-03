import { UseFormRegisterReturn } from "react-hook-form";
import classes from "./Input.module.css";

type InputProps = UseFormRegisterReturn & {
  fieldLabel: string;
  type: string;
  fieldErrorMsg?: string;
};

const Input = ({ fieldLabel, fieldErrorMsg, ...props }: InputProps) => {
  const cssClasses = [classes["text-input"]];
  const labelCssClasses = [classes["text-input__label"]];

  if (fieldErrorMsg) {
    cssClasses.push(classes["text-input--invalid"]);
    labelCssClasses.push(classes["text-input__label--invalid"]);
  }
  return (
    <div className={classes.container}>
      <label className={labelCssClasses.join(" ")}>{fieldLabel}</label>
      <input {...props} className={classes["text-input"]} />
      {fieldErrorMsg ? (
        <p className={classes["text-input__error-msg"]}>{fieldErrorMsg}</p>
      ) : null}
    </div>
  );
};

export default Input;
