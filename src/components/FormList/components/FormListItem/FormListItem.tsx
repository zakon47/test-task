import { UiButton } from "@components/Ui/UiButton";
import ClassName from "classnames";
import { FC } from "react";

import { IForm } from "@/modals/forms";

import s from "./index.module.scss";

interface IProps {
  className?: string;
  number: number | string;
  title: string;
  subTitle: string;
  onDelete: () => void;
  onGoTo: () => void;
}

const FormListItem: FC<IProps> = ({
  number,
  className,
  title,
  onDelete,
  onGoTo,
  subTitle,
}) => {
  return (
    <div className={ClassName(s.wrap, className)}>
      <div className={s.left}>
        {number}
        <div className={s.delete}>
          <UiButton onClick={onDelete}>DEL</UiButton>
        </div>
      </div>
      <div className={s.right} onClick={onGoTo}>
        <div className={s.title}>{title}</div>
        <div className={s.subTitle}>{subTitle}</div>
      </div>
    </div>
  );
};

export { FormListItem };
