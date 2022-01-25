import { UiButton } from "@components/Ui/UiButton";
import { UiTitle } from "@components/Ui/UiTitle/UiTitle";
import ClassName from "classnames";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

import { CONST } from "@/consts";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { RouteNames } from "@/routes";

import s from "./index.module.scss";

const PageHome = () => {
  const listForm = useTypedSelector((store) => store.forms.listForm);
  const [count, setCount] = useState(10);

  return (
    <>
      <Helmet>
        <title>Главная</title>
      </Helmet>
      <div className={s.wrap}>
        <UiTitle>Формы</UiTitle>
        {!!listForm.length ? (
          <ul>
            {listForm.map((elem) => (
              <NavLink key={elem.url} to={CONST.formPath + "/" + elem.url}>
                <li>{elem.title}</li>
              </NavLink>
            ))}
          </ul>
        ) : (
          <>
            <div className={s.empty}>
              <div>Список пуст </div>
            </div>
          </>
        )}
      </div>
      <div className={s.addElement}>
        <NavLink
          to={RouteNames.createForm.path}
          className={({ isActive }) =>
            ClassName(s.link, { [s.activeLink]: isActive })
          }
        >
          <UiButton>Добавить новую форму</UiButton>
        </NavLink>
      </div>
    </>
  );
};

export { PageHome };
