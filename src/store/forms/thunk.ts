import { AppDispatch } from "@/store";
import { actionCreators } from "@/store/actions";
import { RootState } from "@/store/reducer";

export const app__logout = (username: string) => {
  return async (dispatch: AppDispatch, getState: RootState) => {
    dispatch(actionCreators.app.setUserName(username));
  };
};

export const app__login = (email: string, password: string) => {
  return async (dispatch: AppDispatch, getState: RootState) => {
    console.log("app__login");
  };
};
