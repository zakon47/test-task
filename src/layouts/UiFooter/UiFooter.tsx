import "./index.scss";

import ClassName from "classnames";
import { CSSProperties, FC } from "react";

interface IProps {
  className?: string;
  style?: CSSProperties;
}
const UiFooter: FC<IProps> = ({ className, style }) => {
  return (
    <div className={ClassName("Footer", className)} style={style}>
      <b>2022</b> © Тестовое задание
    </div>
  );
};

export { UiFooter };
