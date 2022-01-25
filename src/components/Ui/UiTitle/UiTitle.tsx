import ClassName from "classnames";
import { FC } from "react";

import s from "./index.module.scss";

interface IProps {}

const UiTitle: FC<IProps> = ({ children }) => {
  return <div className={ClassName(s.wrap)}>{children}</div>;
};

export { UiTitle };
