import { UiButton } from "@components/Ui/UiButton";
import ClassName from "classnames";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

import s from "./index.module.scss";

interface IProps {
  to?: string;
  label?: string;
}

const UiTitle: FC<IProps> = ({ children, to, label }) => {
  const navigation = useNavigate();
  return (
    <div className={ClassName(s.wrap)}>
      {to && label && <button onClick={() => navigation(to)}>{label}</button>}
      {children}
    </div>
  );
};

export { UiTitle };
