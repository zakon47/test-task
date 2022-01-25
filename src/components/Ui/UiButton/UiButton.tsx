import ClassName from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";

import s from "./index.module.scss";

interface IProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const UiButton: FC<IProps> = ({ children, className, ...rest }) => {
  return (
    <button className={ClassName(s.wrap, className)} {...rest}>
      {children}
    </button>
  );
};

export { UiButton };
