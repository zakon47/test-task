import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { actionCreators } from "@/store/actions";

export const useActions = (): typeof actionCreators => {
  const dispatch = useDispatch();
  const keys = Object.keys(actionCreators);
  return keys.reduce((prev, key) => {
    prev[key] = bindActionCreators(actionCreators[key], dispatch);
    return prev;
  }, {} as typeof actionCreators);
};
