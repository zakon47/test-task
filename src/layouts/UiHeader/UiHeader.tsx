import ClassName from "classnames";
import { CSSProperties, FC } from "react";
import { NavLink } from "react-router-dom";

import { MenuRoutes } from "@/routes";

import s from "./index.module.scss";

interface IProps {
  className?: string;
  style?: CSSProperties;
}

const UiHeader: FC<IProps> = ({ className, style }) => {
  return (
    <div className={ClassName(s.wrap, className)} style={style}>
      {MenuRoutes.map((elem) => (
        <NavLink
          key={elem.path}
          to={elem.path}
          className={({ isActive }) =>
            ClassName(s.link, { [s.activeLink]: isActive })
          }
        >
          {elem.label}
        </NavLink>
      ))}
    </div>
  );
};

export { UiHeader };
