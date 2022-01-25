import { CONST } from "@/consts";
import { IForm } from "@/modals/forms";
import { AppDispatch } from "@/store";
import { actionCreators } from "@/store/actions";
import { RootState } from "@/store/reducer";

//инициализация приложения - самая первая функция в программе
export const initialApp = (initData: { init: boolean; userName: string }) => {
  return async (dispatch: AppDispatch, getState: RootState) => {
    dispatch(actionCreators.app.setUserName(initData.userName));

    //если были сохранённые формы - загружаем их из стора
    const localData = localStorage.getItem(CONST.localStorage.formDataKey);
    console.log(3332, localData);
    if (!!localData) {
      const d: IForm[] = JSON.parse(localData);
      dispatch(actionCreators.forms.setForm(d));
    }
    dispatch(actionCreators.app.setInitialApp(initData.init));
  };
};
