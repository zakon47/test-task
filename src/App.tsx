import { Layout } from "@layouts/Layout";
import { PageNotFound } from "@pages/PageNotFound/PageNotFound";
import { FC, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { useActions } from "@/hooks/useAction";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { CommonRoutes } from "@/routes";

import s from "./index.module.scss";

interface IProps {}

const App: FC<IProps> = () => {
  const initialApp = useTypedSelector((state) => state.app.initialApp);
  const actions = useActions();
  useEffect(() => {
    //инициализация приложения + например, авторизация
    setTimeout(() => {
      actions.app.initialApp({ init: true, userName: "3AK" });
    }, 300);
  }, []);
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
