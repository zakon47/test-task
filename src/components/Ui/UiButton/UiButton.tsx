import ClassName from "classnames";
import { FC } from "react";

import s from "./index.module.scss";

interface IProps {
  className?: string;
}

const UiButton: FC<IProps> = ({ children, className }) => {
  return <div className={ClassName(s.wrap, className)}>{children}</div>;
};

export { UiButton };
