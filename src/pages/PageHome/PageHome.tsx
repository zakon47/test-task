import { FormList } from "@components/FormList";
import { FormListItem } from "@components/FormList/components/FormListItem";
import { UiButton } from "@components/Ui/UiButton";
import { UiTitle } from "@components/Ui/UiTitle/UiTitle";
import ClassName from "classnames";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

import { CONST } from "@/consts";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { RouteNames } from "@/routes";

import s from "./index.module.scss";

const PageHome = () => {
  const listForm = useTypedSelector((store) => store.forms.listForm);

  return (
    <>
      <Helmet>
        <title>Главная</title>
      </Helmet>
      <div className={s.wrap}>
        <UiTitle>Формы</UiTitle>
        {!!listForm.length ? (
          <FormList className={s.list}>
            {listForm.map((elem, idx) => (
              <NavLink
                key={elem.url}
                to={CONST.formPath + "/" + elem.url}
                className={s.link}
              >
                <FormListItem
                  title={elem.title}
                  subTitle={elem.url}
                  number={idx + 1}
                />
              </NavLink>
            ))}
          </FormList>
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
