import { UiDrawer } from "@components/Ui/UiDrawer";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";

import { RouteNames } from "@/routes";

import s from "./index.module.scss";

const PageEditForm = () => {
  const [state, setState] = useState({
    isOpenDrawer: true,
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
        <div>PageEditForm {params.id}</div>
        <button onClick={toggleDrawer}>TOGGLE</button>
        <UiDrawer isOpen={state.isOpenDrawer} onClose={toggleDrawer}>
          <div>11</div>
          <div>22</div>
        </UiDrawer>
      </>
    </div>
  );
};

export { PageEditForm };
