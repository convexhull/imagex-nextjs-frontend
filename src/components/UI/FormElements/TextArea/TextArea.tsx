import { UseFormRegisterReturn } from "react-hook-form";
import classes from "./TextArea.module.css";

type TextAreaProps = UseFormRegisterReturn & {
  fieldLabel: string;
  fieldErrorMsg?: string;
};

const TextArea = ({ fieldLabel, fieldErrorMsg, ...props }: TextAreaProps) => {
  const cssClasses = [classes["text-input"]];
  const labelCssClasses = [classes["text-input__label"]];

  if (fieldErrorMsg) {
    cssClasses.push(classes["text-input--invalid"]);
    labelCssClasses.push(classes["text-input__label--invalid"]);
  }
  return (
    <div className={classes.container}>
      <label className={labelCssClasses.join(" ")}>{fieldLabel}</label>
      <textarea
        {...props}
        className={[classes["text-area"], classes["text-input"]].join(" ")}
      />
      {fieldErrorMsg ? (
        <p className={classes["text-input__error-msg"]}>{fieldErrorMsg}</p>
      ) : null}
    </div>
  );
};

export default TextArea;
