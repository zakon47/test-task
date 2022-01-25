import ClassName from "classnames";
import { useField } from "formik";
import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

import s from "./index.module.scss";

interface IProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  label?: string;
  className?: string;
}
const UiInput: FC<IProps> = (props) => {
  const [field, meta] = useField(props);
  const { label, className, ...rest } = props;
  const err = meta.error; // && meta.touched;
  return (
    <label className={ClassName(s.wrap, className)}>
      <div className={ClassName(s.content, { [s.contentError]: err })}>
        {!!label && <div className={s.label}>{label}</div>}
        <input type="text" {...field} autoComplete={"off"} {...rest} />
      </div>
      {err && <div className={s.error}>{meta.error}</div>}
    </label>
  );
};

export { UiInput };
