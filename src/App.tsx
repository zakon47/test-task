import { Layout } from "@layouts/Layout";
import { PageNotFound } from "@pages/PageNotFound/PageNotFound";
import { FC, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { CONST } from "@/consts";
import { useActions } from "@/hooks/useAction";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { CommonRoutes } from "@/routes";

import s from "./index.module.scss";

interface IProps {}

const App: FC<IProps> = () => {
  const {
    app: { initialApp },
    forms: { listForm },
  } = useTypedSelector((store) => store);
  const actions = useActions();
  useEffect(() => {
    //инициализация приложения + например, авторизация
    setTimeout(() => {
      actions.app.initialApp({ init: true, userName: "3AK" });
    }, 300);
  }, []);

  useEffect(() => {
    if (initialApp) {
      localStorage.setItem(
        CONST.localStorage.formDataKey,
        JSON.stringify(listForm)
      );
    }
  }, [listForm]);
  return (
    <>
      {initialApp ? (
        <Layout>
          <Routes>
            {CommonRoutes.map((elem) => (
              <Route key={elem.path} path={elem.path} element={elem.element} />
            ))}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      ) : (
        <div className={s.loading}>Loading...</div>
      )}
    </>
  );
};

export { App };
