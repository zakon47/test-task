import { UiContainer } from "@layouts/UiContainer";
import { UiFooter } from "@layouts/UiFooter";
import { UiHeader } from "@layouts/UiHeader";
import { FC } from "react";

import s from "./index.module.scss";
interface IProps {}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <div className={s.wrap}>
      <UiHeader />
      <div className={s.content}>
        <UiContainer>{children}</UiContainer>
      </div>
      <UiFooter />
    </div>
  );
};

export { Layout };
