import { Helmet } from "react-helmet-async";

import s from "./index.module.scss";

const PageCreateForm = () => {
  return (
    <div className={s.wrap}>
      <Helmet>
        <title>Создать новую форму</title>
      </Helmet>
      <div style={{ padding: 40 }}>PageCreateForm</div>
    </div>
  );
};

export { PageCreateForm };
