import { UiButton } from "@components/Ui/UiButton";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

import s from "./index.module.scss";
const PageNotFound = () => {
  return (
    <>
      <Helmet>
        <title>Sorry, page not found!</title>
      </Helmet>
      <div className={s.wrap}>
        <h1>404</h1>
        <h2>Страница не найдена</h2>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <UiButton>Go to Home</UiButton>
        </NavLink>
      </div>
    </>
  );
};

export { PageNotFound };
