import ClassName from "classnames";
import { FC } from "react";

import s from "./index.module.scss";

interface IProps {
  onClose: () => void;
  isOpen: boolean;
}

const UiDrawer: FC<IProps> = ({ children, isOpen, onClose }) => {
  return (
    <div className={ClassName(s.wrap, { [s.isOpen]: isOpen })}>
      <button className={s.close} onClick={onClose}>
        X
      </button>
      <div className={s.content}>{children}</div>
    </div>
  );
};

export { UiDrawer };
