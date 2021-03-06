import { UiDrawer } from "@components/Ui/UiDrawer";
import { UiTitle } from "@components/Ui/UiTitle";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";

import { RouteNames } from "@/routes";

import s from "./index.module.scss";

const PageEditForm = () => {
  const [state, setState] = useState({
    isOpenDrawer: false,
  });
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  useEffect(() => {
    //если не передан параметр формы - страница не найдена
    if (!params?.id) {
      navigate(RouteNames.home.path);
    }
  }, []);
  const toggleDrawer = () =>
    setState({ ...state, isOpenDrawer: !state.isOpenDrawer });
  return (
    <div className={s.wrap}>
      <Helmet>
        <title>Форма: {params.id}</title>
      </Helmet>
      <>
        <UiTitle to={RouteNames.home.path} label="< К списку">
          Форма: {params.id}
        </UiTitle>
        <div>
          <div>
            <button type="submit">Кнопка</button>
          </div>
          <div>
            <textarea placeholder="Проверка" />
          </div>
          <div>
            <input placeholder="введите имя" />
          </div>
          <div>
            <input type="email" checked />
          </div>
          <div>
            <select value="name1">
              <option value="name">name</option>
              <option value="name1">name1</option>
              <option value="name2">name2</option>
            </select>
          </div>
        </div>
        {/*<button onClick={toggleDrawer}>TOGGLE</button>*/}
        <UiDrawer isOpen={state.isOpenDrawer} onClose={toggleDrawer}>
          <div>11</div>
          <div>22</div>
        </UiDrawer>
      </>
    </div>
  );
};

export { PageEditForm };
