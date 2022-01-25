import { FormList } from "@components/FormList";
import { FormListItem } from "@components/FormList/components/FormListItem";
import { UiButton } from "@components/Ui/UiButton";
import { UiTitle } from "@components/Ui/UiTitle/UiTitle";
import ClassName from "classnames";
import { Helmet } from "react-helmet-async";
import { NavLink, useNavigate } from "react-router-dom";

import { CONST } from "@/consts";
import { useActions } from "@/hooks/useAction";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { IForm } from "@/modals/forms";
import { RouteNames } from "@/routes";

import s from "./index.module.scss";

const PageHome = () => {
  const navigation = useNavigate();
  const listForm = useTypedSelector((store) => store.forms.listForm);
  const {
    forms: { removeForm },
  } = useActions();

  //удаляем запись
  const handleDelete = (elem: IForm) => removeForm(elem);
  //перейти на страницу
  const handleGoTo = (url: string) => navigation(url);
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
              <FormListItem
                key={elem.url}
                title={elem.title}
                subTitle={elem.url}
                number={idx + 1}
                onDelete={() => handleDelete(elem)}
                onGoTo={() => handleGoTo(CONST.formPath + "/" + elem.url)}
              />
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
