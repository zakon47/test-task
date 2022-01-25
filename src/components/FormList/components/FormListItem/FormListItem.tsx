import ClassName from "classnames";
import { FC } from "react";

import s from "./index.module.scss";

interface IProps {
  className?: string;
  number: number | string;
  title: string;
  subTitle: string;
}

const FormListItem: FC<IProps> = ({ number, className, title, subTitle }) => {
  return (
    <div className={ClassName(s.wrap, className)}>
      <div className={s.left}>{number}</div>
      <div className={s.right}>
        <div className={s.title}>{title}</div>
        <div className={s.subTitle}>{subTitle}</div>
      </div>
    </div>
  );
};

export { FormListItem };
