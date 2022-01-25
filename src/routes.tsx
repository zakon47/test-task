import { PageCreateForm } from "@pages/PageCreateForm";
import { PageEditForm } from "@pages/PageEditForm";
import { PageHome } from "@pages/PageHome";

import { CONST } from "@/consts";

type IRoute = {
  name: routesKey;
  path: string;
  element: JSX.Element;
  label: string;
};

//возможные ключи
enum routesKey {
  home = "home",
  createForm = "createForm",
  openForm = "openForm",
}

//возможные роутинги
export const CommonRoutes: IRoute[] = [
  {
    name: routesKey.home,
    path: "/",
    element: <PageHome />,
    label: "Список форм",
  },
  {
    name: routesKey.createForm,
    path: "/create-form",
    element: <PageCreateForm />,
    label: "Создать форму",
  },
  {
    name: routesKey.openForm,
    path: `${CONST.formPath}/:id`,
    element: <PageEditForm />,
    label: "Открыть форму",
  },
];

//именнованный роутер
export const RouteNames = CommonRoutes.reduce((prev, elem) => {
  prev[elem.name] = elem;
  return prev;
}, {} as { [idx in routesKey]: IRoute });

//роутинг для меню навигации
export const MenuRoutes: IRoute[] = [RouteNames.home, RouteNames.createForm];
